# Телемед-Питомец — frontend (Vite SPA)
# Multi-stage: build → nginx

# --- Stage 1: build ---
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем манифесты (peer deps react/react-dom подтянутся при install)
COPY package.json package-lock.json* pnpm-lock.yaml* ./

RUN if [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; elif [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .

# Явно ставим peer deps для сборки, если не в lockfile
RUN (npm list react 2>/dev/null | grep -q react) || npm install react@18.3.1 react-dom@18.3.1

RUN npm run build

# --- Stage 2: serve ---
FROM nginx:alpine

RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
