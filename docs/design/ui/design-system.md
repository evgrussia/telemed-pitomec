---
title: "Design System: Телемед-Питомец"
created_by: "UI Agent"
created_at: "2026-01-28"
---

# Design System: Телемед-Питомец

## Visual Direction

Современный, чистый и дружелюбный интерфейс, полностью интегрированный в экосистему Telegram. Стиль ориентирован на снижение тревожности владельцев животных через использование мягких цветов, скругленных углов и понятной типографики.

## Color System (Telegram Themes)

Система цветов адаптируется под тему пользователя в Telegram (Light/Dark).

### Light Theme (Default)

| Token | Value | Telegram Constant | Usage |
|-------|-------|-------------------|-------|
| --color-bg | #FFFFFF | bg_color | Основной фон |
| --color-secondary-bg | #F4F4F5 | secondary_bg_color | Фон секций, карточек |
| --color-text | #000000 | text_color | Основной текст |
| --color-hint | #707579 | hint_color | Подписи, плейсхолдеры |
| --color-link | #2481CC | link_color | Ссылки |
| --color-button | #2481CC | button_color | Кнопки (основные) |
| --color-button-text | #FFFFFF | button_text_color | Текст в кнопках |

### Brand & Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| --color-primary | #3390EC | Основной акцент (Telegram Blue) |
| --color-success | #31B545 | Здоровый статус, подтверждение |
| --color-warning | #F1A302 | Требует внимания, средний риск |
| --color-error | #E53935 | Критический симптом, ошибка |
| --color-accent-pet | #FF9F43 | Акцент для элементов питомцев (оранжевый) |

## Typography

Используется системный шрифт Telegram (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`).

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | 24px | 700 | 32px | Заголовки экранов |
| Title | 20px | 600 | 28px | Заголовки блоков |
| Body L | 17px | 400 | 24px | Основной текст (iOS style) |
| Body M | 16px | 400 | 22px | Основной текст (Android style) |
| Subhead | 14px | 400 | 18px | Пояснительный текст |
| Caption | 12px | 400 | 16px | Мелкие подписи |

## Icons

Используется набор **Lucide Icons** или системные иконки Telegram.

- **Основные**: `Home`, `Stethoscope` (ИИ), `User` (Профиль), `History`.
- **Питомцы**: `Cat`, `Dog`, `Bird`, `Rat`.
- **Действия**: `Plus`, `ChevronRight`, `Camera`, `Video`.

## Component Library

### 1. Atoms

#### Buttons

- **Primary**: Скругление 10px, фон `--color-button`. Для главных действий (Записаться, Анализировать).
- **Secondary**: Фон `--color-secondary-bg`, текст `--color-link`. Для второстепенных действий.
- **Ghost**: Без фона, только иконка/текст.

#### Badges

- **Status Green**: "Всё хорошо"
- **Status Yellow**: "Понаблюдайте"
- **Status Red**: "К ветеринару!"

### 2. Molecules

#### Pet Card (Карточка питомца)

```text
┌─────────────────────────┐
│ [Аватар]  [Имя питомца] │
│           [Вид, Возраст]│
├─────────────────────────┤
│ Последняя активность:   │
│ Прививка 12.01.2026     │
└─────────────────────────┘
```

#### Chat Bubble (Чат-бабблы)

- **User**: Синий фон (правая сторона), белый текст.
- **AI/Doctor**: Серый/белый фон (левая сторона), черный текст.
- **System**: Центрированный серый текст.

#### AI Diagnosis Result (Результат ИИ)

- Контейнер с цветной рамкой (Success/Warning/Error).
- Краткий заголовок.
- Иконка уровня риска.
- Кнопка "Связаться с врачом".

## Spacing & Grid

- **Side Margins**: 16px (стандарт Telegram WebApp).
- **Vertical Spacing**: 8px (между элементами), 16px (между блоками), 32px (между секциями).
- **Border Radius**: 10px для кнопок, 12px для карточек.

---

**UI Agent** | *Дата: 2026-01-28*
