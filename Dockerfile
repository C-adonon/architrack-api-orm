# # Utilisation de l'image Node.js Alpine avec la version spécifiée
# FROM node:20.10.0

# # Définition du répertoire de travail dans le conteneur
# WORKDIR /usr/src/app

# # Install dependencies
# COPY pnpm-lock.yaml package.json ./

# RUN npm install -g pnpm

# RUN pnpm install

# # Copie des fichiers de configuration dans le conteneur
# COPY prisma ./prisma

# # Copie des autres fichiers source dans le conteneur
# COPY . .

# # Exécution de la génération des artefacts Prisma
# RUN npx prisma generate

# # Exécution des migrations pour initialiser la base de données
# RUN npx prisma migrate deploy

# # Exposition du port utilisé par l'application
# EXPOSE 3000

# # Commande pour démarrer l'application en dev
# CMD ["pnpm", "start"]


FROM node:20.10.0


WORKDIR /app


COPY package.json pnpm-lock.yaml ./


RUN npm install -g pnpm
RUN pnpm install


COPY . .


RUN npx prisma generate


EXPOSE 3000


CMD ["node", "server.js"]
