# Стратегия деплоя: Телемед-Питомец (telemed-pitomec.ru)

**Домен:** telemed-pitomec.ru, www.telemed-pitomec.ru  
**Сервер:** VPS 213.159.67.199 (nginx на 80/443, Docker). Порт приложения: **8095** (выбран свободным).

---

## Статус деплоя (2026-02-05)

| Шаг | Статус |
|-----|--------|
| Разведка портов и nginx на VPS | Выполнено |
| Docker-образ frontend (Vite SPA + nginx) | Собран и запущен (`telemed-pitomec-frontend` на 127.0.0.1:8095) |
| Конфиг nginx для telemed-pitomec.ru | Подключён, релоад nginx выполнен |
| Проверка по HTTP (Host: telemed-pitomec.ru) | 200 OK |
| SSL (certbot) | **Ожидает**: DNS должен указывать на 213.159.67.199 (сейчас в проверке участвовал 95.163.244.138 → 404). После смены DNS выполнить команду из п. 3.5. |

---

## 1. Разведка сервера (выполнено)

- **Занятые порты:** 80, 443 (nginx), 22 (SSH), 5432, 6379, 3000, 8000–8010, 8082–8092, 18080 и др.
- **Свободный порт для frontend:** **8095**
- **Паттерн:** фронты в Docker (nginx в контейнере), хост-nginx проксирует по server_name на `127.0.0.1:PORT`. SSL через certbot на хосте.

---

## 2. Артефакты для деплоя

| Артефакт | Назначение |
|----------|------------|
| `frontend/Dockerfile` | Сборка SPA (Vite) + nginx для раздачи статики |
| `frontend/nginx.conf` | Конфиг nginx внутри контейнера (SPA fallback) |
| `frontend/.dockerignore` | Исключения при сборке образа |
| `frontend/docker-compose.yml` | Запуск контейнера `telemed-pitomec-frontend` на 127.0.0.1:8095 |
| `deploy/nginx-telemed-pitomec.ru.conf` | Конфиг хостового nginx для домена |

---

## 3. Чеклист деплоя

### 3.1 Предусловия

- [ ] DNS: запись A для **telemed-pitomec.ru** и **www.telemed-pitomec.ru** указывает на IP VPS.
- [ ] Доступ по SSH (MCP user-deploy-vps или вручную).

### 3.2 Загрузка кода и конфигов на VPS

- [ ] Загрузить репозиторий (или папки `frontend/` и `deploy/`) в каталог на сервере, например: `/root/telemed-pitomec/` или `/var/www/telemed-pitomec/`.

### 3.3 Сборка и запуск контейнера

На сервере в каталоге с проектом (где лежит `frontend/docker-compose.yml`):

```bash
cd /root/telemed-pitomec/frontend   # или путь, куда загружен frontend
docker compose build --no-cache
docker compose up -d
docker ps | grep telemed-pitomec
```

Проверка: `curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8095` → 200.

### 3.4 Настройка nginx на хосте

```bash
sudo cp /root/telemed-pitomec/deploy/nginx-telemed-pitomec.ru.conf /etc/nginx/sites-available/telemed-pitomec.ru
sudo ln -sf /etc/nginx/sites-available/telemed-pitomec.ru /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 3.5 SSL (Let's Encrypt)

**Важно:** DNS для telemed-pitomec.ru и www.telemed-pitomec.ru должен указывать на **IP этого VPS** (213.159.67.199). Иначе certbot получит 404 при проверке.

После того как DNS указывает на сервер:

```bash
# При необходимости создать каталог для ACME challenge
sudo mkdir -p /var/www/certbot
sudo certbot --nginx -d telemed-pitomec.ru -d www.telemed-pitomec.ru
```

Certbot сам добавит `listen 443 ssl` и пути к сертификатам в конфиг. Проверка:

```bash
curl -sI https://telemed-pitomec.ru | head -5
```

### 3.6 Автозапуск контейнера

В `docker-compose.yml` уже указано `restart: unless-stopped` — контейнер поднимется после перезагрузки сервера.

---

## 4. Деплой через MCP (user-deploy-vps)

1. **list-servers** — проверить подключение (default).
2. **upload** — загрузить папку `frontend/` (или архив) и `deploy/` на сервер.
3. **execute-command** — выполнить команды из п. 3.3–3.5 (сборка, nginx, certbot).

Примечание: загрузку всего репо удобнее делать через `git clone` на сервере, если репозиторий доступен, либо упаковать `frontend` и `deploy` в tar и загрузить через **upload**, затем распаковать.

---

## 5. Обновление приложения

```bash
cd /root/telemed-pitomec/frontend
git pull   # или загрузить обновлённые файлы
docker compose build --no-cache && docker compose up -d
```

---

*Документ создан: Orchestrator Agent | Дата: 2026-02-05*
