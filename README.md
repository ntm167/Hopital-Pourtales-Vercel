# 🏥 Hôpital Pourtalès - Vercel Edition

**Intranet avec API REST - Déployé sur Vercel en 2 clics!**

---

## ✅ QU'EST-CE QUI A ÉTÉ CRÉÉ?

Un **projet prêt à déployer** avec:
- ✅ API Express complète
- ✅ Endpoints pour actualités & visites
- ✅ Fichiers de configuration Vercel
- ✅ Prêt pour domainnm.org

---

## 🚀 DÉPLOYER EN 3 ÉTAPES (5 MINUTES)

### **ÉTAPE 1: Créer un compte GitHub** (Si pas déjà)
1. Aller sur: https://github.com/signup
2. Créer un compte gratuit
3. Confirmer l'email

### **ÉTAPE 2: Créer un repo GitHub**
1. Aller sur: https://github.com/new
2. Nommer le repo: `Hopital-Pourtales-Vercel`
3. Cocher "Public"
4. Cliquer **"Create repository"**

### **ÉTAPE 3: Pousser les fichiers**

**Sur Windows (PowerShell):**

```powershell
# 1. Aller dans le dossier du projet
cd C:\chemin\vers\Hopital-Vercel

# 2. Initialiser git
git init
git add .
git commit -m "Initial commit"

# 3. Ajouter le remote (remplacer TONUSERNAME)
git branch -M main
git remote add origin https://github.com/TONUSERNAME/Hopital-Pourtales-Vercel.git

# 4. Pousser
git push -u origin main
```

---

## 🔗 DÉPLOYER SUR VERCEL

1. Aller sur: https://vercel.com
2. Cliquer **"Sign up"** (ou login si tu as un compte)
3. Sélectionner **"GitHub"**
4. Autoriser Vercel à accéder à GitHub
5. Cliquer **"New Project"**
6. Sélectionner le repo: `Hopital-Pourtales-Vercel`
7. Cliquer **"Deploy"** 

**C'est fini! ✅** Le site est en ligne! 🎉

---

## 📍 AJOUTER TON DOMAINE

1. Aller sur Vercel → **Project Settings → Domains**
2. Ajouter domaine: `domainnm.org`
3. Vercel affiche les DNS à ajouter
4. Aller sur Cloudflare → **DNS**
5. Ajouter les enregistrements DNS de Vercel
6. **C'est bon!** ✅

---

## 🧪 TESTER L'API

Après le déploiement, tester:

```
GET https://hopital-pourtales-vercel.vercel.app/api/health
GET https://hopital-pourtales-vercel.vercel.app/api/actualites
POST https://hopital-pourtales-vercel.vercel.app/api/actualites
```

(Remplacer le domaine par ton URL Vercel)

---

## 📚 ENDPOINTS DISPONIBLES

### Actualités
- `GET /api/actualites` - Toutes les actualités
- `POST /api/actualites` - Créer une actualité
- `DELETE /api/actualites/:id` - Supprimer

### Visites
- `GET /api/visites` - Toutes les visites
- `POST /api/visites` - Créer une visite
- `DELETE /api/visites/:id` - Supprimer

### Utilitaires
- `GET /api/health` - Santé du serveur
- `GET /api/stats` - Statistiques

---

## 💡 NOTER

- Les données sont **stockées en mémoire** (c'est pour commencer)
- Pour une **vraie base de données**, ajouter MongoDB ou PostgreSQL
- Le projet peut être mis à jour à tout moment

---

## 🎯 PROCHAINES ÉTAPES

1. ✅ Déployer (FAIT)
2. ✅ Tester l'API
3. 🔄 Ajouter une vraie base de données (MongoDB)
4. 🔄 Ajouter l'authentification JWT
5. 🔄 Intégrer le frontend

---

**Besoin d'aide?** Consulte la documentation Vercel: https://vercel.com/docs

---

**Créé avec ❤️ par Claude**
