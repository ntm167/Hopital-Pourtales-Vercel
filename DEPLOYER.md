# 🚀 GUIDE RAPIDE - DÉPLOYER EN 3 ÉTAPES

## ÉTAPE 1️⃣: GitHub
1. Aller sur https://github.com/new
2. Nommer le repo: `Hopital-Pourtales-Vercel`
3. Sélectionner "Public"
4. Cliquer "Create repository"
5. **Copier le lien HTTPS** qui s'affiche

## ÉTAPE 2️⃣: Pousser les fichiers (PowerShell)

```powershell
# Remplacer LE_LIEN_QUE_TU_AS_COPIÉ par ton lien GitHub
git clone LE_LIEN_QUE_TU_AS_COPIÉ
cd Hopital-Pourtales-Vercel

# Copier tous les fichiers ici

git add .
git commit -m "Initial"
git push
```

## ÉTAPE 3️⃣: Vercel
1. Aller sur https://vercel.com
2. Cliquer "New Project"
3. Sélectionner ton repo `Hopital-Pourtales-Vercel`
4. Cliquer "Deploy"
5. ✅ C'EST BON! Le site est en ligne!

---

**Vérifier:** Aller sur https://hopital-pourtales-vercel.vercel.app

Ça doit afficher: **"🏥 Hôpital Pourtalès"** ✅
