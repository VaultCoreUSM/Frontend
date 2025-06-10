# Etapa 1: build del frontend
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY . .

RUN npm install
RUN npm run build

# Etapa 2: servir contenido estático con Nginx
FROM nginx:stable-alpine

# Copia archivos de la build al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuración básica de Nginx (opcional, si quieres personalizarla)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
