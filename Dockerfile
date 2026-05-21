FROM node:20-alpine

WORKDIR /app

# Copier les fichiers
COPY package*.json ./
COPY api/ ./api/
COPY .env .env

# Installer les dépendances
RUN npm install --production

# Exposer le port
EXPOSE 3000

# Démarrer l'application
CMD ["node", "api/index.js"]
