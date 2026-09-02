#!/bin/bash

set -u

BASE_URL="http://localhost:3000"
OUTPUT_DIR="./lighthouse_reports"
CHROME_PORT=9222

mkdir -p "$OUTPUT_DIR"

echo "======================================"
echo "   LIGHTHOUSE - AUDIT DU SITE"
echo "======================================"
echo ""

# Vérifier que Chrome répond
if ! curl -sf "http://127.0.0.1:$CHROME_PORT/json/version" > /dev/null; then
    echo "❌ Chrome n'est pas lancé sur le port $CHROME_PORT."
    echo ""
    echo "Lance d'abord :"
    echo ""
    echo "google-chrome --headless=new --no-sandbox --disable-dev-shm-usage --disable-gpu --remote-debugging-port=$CHROME_PORT about:blank"
    exit 1
fi

echo "✅ Chrome détecté"
echo ""

# Vérifier que le site répond
if ! curl -sf "$BASE_URL" > /dev/null; then
    echo "❌ Le site ne répond pas sur $BASE_URL"
    echo "Lance ton serveur avec npm run dev"
    exit 1
fi

echo "✅ Site détecté : $BASE_URL"
echo ""

# --------------------------------------
# Découverte des URLs
# --------------------------------------

echo "🔎 Recherche des pages..."

HTML=$(curl -s "$BASE_URL")

# Extraire les liens internes
URLS=$(echo "$HTML" |
    grep -oE 'href="[^"]+"' |
    sed 's/href="//;s/"$//' |
    grep -E '^/' |
    grep -vE '^/(api|_next|favicon|images|assets)' |
    sort -u)

# Ajouter la page d'accueil
URLS=$(printf "/\n%s\n" "$URLS" | sort -u)

echo ""
echo "Pages trouvées :"

echo "$URLS"
echo ""

# --------------------------------------
# Lighthouse
# --------------------------------------

COUNT=0

while IFS= read -r path; do

    [ -z "$path" ] && continue

    COUNT=$((COUNT + 1))

    if [ "$path" = "/" ]; then
        NAME="home"
    else
        NAME=$(echo "$path" |
            sed 's|^/||' |
            sed 's|/|_|g' |
            sed 's/[^a-zA-Z0-9_-]/_/g')
    fi

    URL="${BASE_URL}${path}"
    REPORT="$OUTPUT_DIR/${NAME}.json"

    echo "--------------------------------------"
    echo "🔎 [$COUNT] $URL"
    echo "--------------------------------------"

    lighthouse "$URL" \
        --port="$CHROME_PORT" \
        --output=json \
        --output-path="$REPORT" \
        --quiet

    if [ $? -eq 0 ]; then
        echo "✅ Rapport : $REPORT"
    else
        echo "❌ Lighthouse a échoué pour $URL"
    fi

    echo ""

done <<< "$URLS"

# --------------------------------------
# Résumé pour l'IA
# --------------------------------------

echo "======================================"
echo "   GÉNÉRATION DU RÉSUMÉ"
echo "======================================"

python3 - "$OUTPUT_DIR" <<'PY'
import json
import glob
import os
import sys

output_dir = sys.argv[1]

summary = {
    "project": "maryse-bien-etre",
    "pages": []
}

for filename in sorted(glob.glob(os.path.join(output_dir, "*.json"))):

    try:
        with open(filename, encoding="utf-8") as f:
            data = json.load(f)

        page = {
            "url": data.get("finalUrl"),
            "scores": {},
            "failedAudits": []
        }

        categories = data.get("categories", {})

        for name, category in categories.items():
            score = category.get("score")

            if score is not None:
                page["scores"][name] = round(score * 100)

        audits = data.get("audits", {})

        for audit_id, audit in audits.items():

            score = audit.get("score")

            if score is not None and score < 1:
                page["failedAudits"].append({
                    "id": audit_id,
                    "title": audit.get("title"),
                    "description": audit.get("description"),
                    "score": score,
                    "displayValue": audit.get("displayValue")
                })

        summary["pages"].append(page)

    except Exception as e:
        print(f"Erreur lecture {filename}: {e}")

with open(
    os.path.join(output_dir, "audit-summary.json"),
    "w",
    encoding="utf-8"
) as f:
    json.dump(summary, f, indent=2, ensure_ascii=False)

print(f"Résumé créé : {output_dir}/audit-summary.json")
PY

echo ""
echo "======================================"
echo "   AUDIT TERMINÉ"
echo "======================================"
echo ""
echo "📁 Rapports complets : $OUTPUT_DIR"
echo "🤖 Résumé IA : $OUTPUT_DIR/audit-summary.json"
echo ""
echo "Pages analysées : $COUNT"