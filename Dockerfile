# Build stage
FROM node:22.10.0-alpine3.20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:22.10.0-alpine3.20
RUN apk add --no-cache nginx openssl

# Buat direktori yang diperlukan
WORKDIR /app
RUN mkdir -p /etc/nginx/certs

# Copy aplikasi Node.js
COPY --from=build /app/next.config.ts ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Copy konfigurasi Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copy sertifikat SSL
COPY certs/fullchain.pem /etc/nginx/certs/
COPY certs/privkey.pem /etc/nginx/certs/

# Set permissions
RUN chmod 600 /etc/nginx/certs/*

# Expose ports
EXPOSE 80 443

# Copy dan set executable permission untuk start script
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
