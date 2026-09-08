This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.














# 🛠️ Environnement de développement

## 1. Lancer le serveur Next.js

Depuis la racine du projet :

```bash
npm run dev
```

Le site est disponible sur :

```text
http://localhost:3000
```

---

## 2. Vérifier qu'Ollama fonctionne

Dans **PowerShell Windows** :

```powershell
curl.exe http://127.0.0.1:11434/api/tags
```

Vérifier que `qwen3:14b` apparaît dans la liste des modèles.

Si Ollama n'est pas lancé :

```powershell
ollama serve
```

> Si `ollama serve` indique que le port `11434` est déjà utilisé, Ollama est probablement déjà lancé. Ne pas relancer la commande.

---

## 3. Rendre Ollama accessible depuis WSL

Dans **PowerShell Windows** :

```powershell
$env:OLLAMA_HOST="0.0.0.0:11434"
ollama serve
```

Pour vérifier l'adresse IP Windows accessible depuis WSL :

```bash
ip route | grep default
```

Puis tester depuis WSL :

```bash
curl http://172.20.128.1:11434/api/tags
```

> L'adresse `172.20.128.1` peut changer. Utiliser l'adresse de la passerelle Windows indiquée par `ip route`.

---

## 4. Configurer Cline

Dans VS Code → **Cline → Settings → API Configuration** :

* API Provider : **Ollama**
* Base URL : `http://172.20.128.1:11434`
* Model : `qwen3:14b`

Si Cline ne détecte pas automatiquement le modèle, entrer manuellement :

```text
qwen3:14b
```

Vérifier que Cline peut communiquer avec Ollama avant de lancer une tâche.

---

## 5. Lancer Chrome pour Lighthouse

Dans un **premier terminal WSL**, lancer Chrome headless avec le port DevTools :

```bash
/usr/bin/google-chrome \
  --headless=new \
  --no-sandbox \
  --disable-dev-shm-usage \
  --disable-gpu \
  --remote-debugging-address=0.0.0.0 \
  --remote-debugging-port=9222 \
  about:blank
```

Laisser ce terminal ouvert.

Chrome doit afficher :

```text
DevTools listening on ws://...
```

---

## 6. Vérifier Chrome

Dans un **deuxième terminal WSL** :

```bash
curl http://127.0.0.1:9222/json/version
```

Si Chrome fonctionne, une réponse JSON contenant :

```text
"Browser": "Chrome/..."
```

doit apparaître.

---

## 7. Lancer un audit Lighthouse

Toujours depuis WSL :

```bash
npx lighthouse http://localhost:3000/ \
  --port=9222 \
  --output=json \
  --output-path=./src/app/lighthouse_reports/home_new.json
```

Pour une autre page, modifier l'URL et le nom du rapport :

```bash
npx lighthouse http://localhost:3000/about \
  --port=9222 \
  --output=json \
  --output-path=./src/app/lighthouse_reports/about_new.json
```

Exemples :

```text
/
/about
/contact
/magnetisme
/numerologie
/tarifs
```

---

## 8. Vérifier les rapports

Les rapports sont stockés dans :

```text
src/app/lighthouse_reports/
```

Pour lister les rapports :

```bash
ls -lh src/app/lighthouse_reports/
```

---

## 9. Travail avec Cline + Qwen

Une fois le rapport Lighthouse généré :

1. Ouvrir le projet dans VS Code.
2. Vérifier que Cline utilise `qwen3:14b`.
3. Donner à Cline le rapport Lighthouse à analyser.
4. Lui demander d'identifier les causes réelles dans le code.
5. Lui demander de modifier directement les fichiers concernés.
6. Relancer Lighthouse.
7. Comparer les nouveaux résultats.
8. Répéter jusqu'à correction des problèmes pertinents.

### Prompt recommandé

```text
Analyse le rapport Lighthouse situé dans :

src/app/lighthouse_reports/home_new.json

Ne te contente pas de donner des recommandations générales.

Pour chaque problème pertinent :
1. Identifie précisément le fichier source responsable.
2. Lis le code concerné.
3. Détermine la cause réelle du problème.
4. Modifie directement le code pour le corriger.
5. Préserve le design et le comportement fonctionnel existants.
6. Relance Lighthouse après les corrections.
7. Vérifie que les métriques se sont améliorées.
8. Continue avec le problème suivant.

Travaille de manière autonome et utilise les outils du workspace pour rechercher et modifier les fichiers.

Ne demande pas de confirmation entre chaque étape, sauf si une modification risque de changer significativement le design ou le comportement du site.

Ne corrige pas un problème Lighthouse uniquement à partir de son nom : vérifie d'abord le rapport et le code source afin d'identifier sa véritable cause.
```

---

## 🛑 Arrêter l'environnement

### Arrêter Cline

Utiliser **Cancel/Stop** dans Cline.

### Arrêter Chrome Lighthouse

Dans le terminal où Chrome tourne :

```text
Ctrl+C
```

### Arrêter un modèle Ollama

Pour libérer immédiatement la RAM/VRAM :

```powershell
ollama stop qwen3:14b
```

### Arrêter le serveur Next.js

Dans son terminal :

```text
Ctrl+C
```

---

## 🚀 Reprise d'une session

Pour reprendre le travail :

1. Lancer `npm run dev`.
2. Vérifier Ollama.
3. Configurer/démarrer Ollama si nécessaire.
4. Lancer Chrome avec le port `9222`.
5. Vérifier `curl http://127.0.0.1:9222/json/version`.
6. Ouvrir VS Code et Cline.
7. Vérifier `qwen3:14b`.
8. Relancer les audits Lighthouse nécessaires.
9. Continuer le travail avec Cline.
