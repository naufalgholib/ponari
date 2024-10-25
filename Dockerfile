##FROM node:22.10.0-alpine3.20
##ENV NODE_ENV=dev
##WORKDIR /app
##COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
##RUN npm install --dev --silent && mv node_modules ../
##COPY . .
##EXPOSE 3000
##RUN chown -R node /app
##USER node
##CMD ["npm", "start"]

# Gunakan image Node.js versi LTS
FROM node:22.10.0-alpine3.20

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode sumber aplikasi
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Expose port yang digunakan oleh aplikasi (biasanya 3000 untuk Next.js)
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]