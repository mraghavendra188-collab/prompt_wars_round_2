FROM node:22-alpine

WORKDIR /usr/src/app

# Only copy package files first for caching
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build Vite frontend
RUN npm run build

# Production Environment
EXPOSE 8080
ENV PORT=8080

CMD ["node", "server/index.js"]
