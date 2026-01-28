---
title: "API Specification (OpenAPI): Телемед-Питомец"
created_by: "Architect Agent"
created_at: "2026-01-28"
---

# Спецификация API (Draft)

Данный документ содержит описание ключевых эндпоинтов для взаимодействия Telegram WebApp с бэкендом.

## Базовый URL
`https://api.telemed-pitomec.ru/v1/`

## Ключевые эндпоинты

### 1. Профили
- `GET /users/me/` — получение данных текущего пользователя.
- `POST /pets/` — регистрация нового питомца.

### 2. ИИ-Диагностика
- `POST /ai/triage/` — отправка фото и симптомов на анализ.
- `GET /ai/triage/{id}/` — получение результата анализа.

### 3. Консультации
- `GET /vets/list/` — список доступных врачей.
- `POST /consultations/book/` — бронирование времени.
- `GET /consultations/{id}/video-link/` — получение ссылки на Daily.co сессию.

## Безопасность
Все запросы должны содержать заголовок `X-Telegram-Init-Data` для валидации сессии.

---
*Документ создан: Architect Agent | Дата: 2026-01-28*
