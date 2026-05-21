const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 📦 Stockage temporaire (en mémoire)
let actualites = [
  {
    id: 1,
    titre: "Bienvenue",
    contenu: "Bienvenue sur l'intranet de l'Hôpital Pourtalès!",
    auteur: "Admin",
    date: new Date().toLocaleDateString('fr-FR')
  }
];

let visites = [
  {
    id: 1,
    titre: "Visite médicale",
    date: "2024-05-25",
    couleur: "event-blue"
  }
];

// ✅ HOME
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hôpital Pourtalès - Intranet</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
      <style>
        body { padding: 2rem; max-width: 1200px; margin: 0 auto; }
        .success { background: #d4edda; padding: 1rem; border-radius: 8px; margin: 1rem 0; }
      </style>
    </head>
    <body>
      <h1>🏥 Hôpital Pourtalès</h1>
      <p>Intranet professionnel avec API REST</p>
      
      <div class="success">
        <h2>✅ Serveur en ligne!</h2>
        <p>L'API est fonctionnelle et prête à l'utilisation.</p>
      </div>

      <section>
        <h2>📚 Endpoints API</h2>
        
        <h3>Actualités</h3>
        <ul>
          <li><code>GET /api/actualites</code> - Récupérer toutes les actualités</li>
          <li><code>POST /api/actualites</code> - Créer une actualité</li>
          <li><code>DELETE /api/actualites/:id</code> - Supprimer une actualité</li>
        </ul>

        <h3>Visites</h3>
        <ul>
          <li><code>GET /api/visites</code> - Récupérer toutes les visites</li>
          <li><code>POST /api/visites</code> - Créer une visite</li>
          <li><code>DELETE /api/visites/:id</code> - Supprimer une visite</li>
        </ul>

        <h3>Utilitaires</h3>
        <ul>
          <li><code>GET /api/health</code> - État du serveur</li>
          <li><code>GET /api/stats</code> - Statistiques</li>
        </ul>
      </section>

      <section>
        <h2>🔗 Tester l'API</h2>
        <ul>
          <li><a href="/api/health">✅ Santé du serveur</a></li>
          <li><a href="/api/actualites">📰 Voir les actualités</a></li>
          <li><a href="/api/visites">🗓️ Voir les visites</a></li>
          <li><a href="/api/stats">📊 Statistiques</a></li>
        </ul>
      </section>

      <hr>
      <footer>
        <p><strong>Hôpital Pourtalès</strong> - Intranet v2.1.0</p>
        <p>Déployé sur <strong>Vercel</strong> ✨</p>
      </footer>
    </body>
    </html>
  `);
});

// ✅ HEALTH CHECK
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '2.1.0',
    uptime: process.uptime()
  });
});

// ✅ STATS
app.get('/api/stats', (req, res) => {
  res.json({
    success: true,
    stats: {
      actualites: actualites.length,
      visites: visites.length,
      timestamp: new Date().toISOString()
    }
  });
});

// ✅ ACTUALITÉS - GET ALL
app.get('/api/actualites', (req, res) => {
  res.json({
    success: true,
    data: actualites,
    count: actualites.length
  });
});

// ✅ ACTUALITÉS - POST (CREATE)
app.post('/api/actualites', (req, res) => {
  try {
    const { titre, contenu, auteur } = req.body;

    if (!titre || !contenu) {
      return res.status(400).json({
        success: false,
        error: 'Titre et contenu requis'
      });
    }

    const actu = {
      id: Date.now(),
      titre,
      contenu,
      auteur: auteur || 'Admin',
      date: new Date().toLocaleDateString('fr-FR'),
      created_at: new Date().toISOString()
    };

    actualites.push(actu);

    res.status(201).json({
      success: true,
      message: 'Actualité créée avec succès',
      data: actu
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ✅ ACTUALITÉS - DELETE
app.delete('/api/actualites/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = actualites.findIndex(a => a.id === id);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: 'Actualité non trouvée'
      });
    }

    const deleted = actualites.splice(index, 1);

    res.json({
      success: true,
      message: 'Actualité supprimée avec succès',
      data: deleted[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ✅ VISITES - GET ALL
app.get('/api/visites', (req, res) => {
  res.json({
    success: true,
    data: visites,
    count: visites.length
  });
});

// ✅ VISITES - POST (CREATE)
app.post('/api/visites', (req, res) => {
  try {
    const { titre, date, couleur, description } = req.body;

    if (!titre || !date) {
      return res.status(400).json({
        success: false,
        error: 'Titre et date requis'
      });
    }

    const visite = {
      id: Date.now(),
      titre,
      date,
      couleur: couleur || 'event-blue',
      description: description || '',
      created_at: new Date().toISOString()
    };

    visites.push(visite);

    res.status(201).json({
      success: true,
      message: 'Visite créée avec succès',
      data: visite
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ✅ VISITES - DELETE
app.delete('/api/visites/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = visites.findIndex(v => v.id === id);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: 'Visite non trouvée'
      });
    }

    const deleted = visites.splice(index, 1);

    res.json({
      success: true,
      message: 'Visite supprimée avec succès',
      data: deleted[0]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ❌ 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route non trouvée',
    path: req.path
  });
});

// ❌ ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    error: 'Erreur serveur',
    message: err.message
  });
});

module.exports = app;
