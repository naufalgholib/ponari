# Build stage
FROM node:22.10.0-alpine3.20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:22.10.0-alpine3.20
RUN apk add --no-cache nginx
WORKDIR /app

# Copy aplikasi Node.js
COPY --from=build /app/next.config.ts ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Copy konfigurasi Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copy sertifikat SSL
COPY certs/fullchain.pem /etc/nginx/certs/fullchain.pem
COPY certs/privkey.pem /etc/nginx/certs/privkey.pem

# Expose port 443 untuk HTTPS
EXPOSE 443

# Jalankan Nginx dan aplikasi Node.js secara bersamaan menggunakan shell script
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
