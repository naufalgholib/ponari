FROM node:22.10.0-alpine3.20
ENV NODE_ENV=dev
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --dev --silent && mv node_modules ../
COPY . .
EXPOSE 80
RUN chown -R node /app
USER node
CMD ["npm", "start"]
