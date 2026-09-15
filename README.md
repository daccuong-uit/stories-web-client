# stories-web-client — Reals Stories

> Angular 21 · Nx 22 · Port **4203** (dev & Docker)

Không gian **Đọc & Viết** trong hệ sinh thái Reals Platform. Chuyên trách long-form stories, tạp chí số, bộ sưu tập chuyên đề và trải nghiệm đọc tập trung (focus mode).

## Workspace → [daccuong-uit/social-platform-workspace](https://github.com/daccuong-uit/social-platform-workspace)

---

## Chức năng

| Route | Mô tả |
|---|---|
| `/stories` | Stories Shell — Editorial chính |
| `/media` | Quản lý media bài viết |
| `/profile` | Hồ sơ cá nhân |
| `/settings` | Cài đặt tài khoản |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 21 (Standalone, Signals-first) |
| Monorepo | Nx 22 |
| State | Angular Signals + RxJS |
| Styling | CSS custom properties (OKLCH tokens) |

## Cấu trúc thư mục

```
.
├── apps/web/
│   └── src/
│       ├── app/routes/        # app.routes.ts — gốc → /stories
│       └── environments/      # environment.ts
│
└── libs/
    ├── core/                  # AuthService, guards, interceptors
    ├── ui/                    # Shared UI components
    ├── entities/              # Domain models: profile, media, social
    └── features/
        ├── stories/           # StoriesShellComponent + StoriesComponent
        ├── media/             # Media management
        ├── profile/           # User profile
        └── settings/          # Settings
```

## Chạy local

```bash
npm install
npm start          # → http://localhost:4203
npm run build
```

## Docker

```bash
# Từ workspace root:
docker compose build fe-stories
docker compose up -d fe-stories

# → http://localhost:4203
```

Nginx phục vụ Angular bundle và proxy `/api/*` → `gateway:3000`.
