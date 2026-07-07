# Portfolio (Next.js + GitHub Pages)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before deploying

1. Open `next.config.mjs` and set `repoName` to your actual GitHub repo name
   (e.g. if your repo is `github.com/yourname/my-portfolio`, set it to `'my-portfolio'`).
   - If your repo is named `yourname.github.io`, set `repoName` to `''` instead.
2. Edit `app/page.tsx` and `app/layout.tsx` with your real name, projects, and links.

## Deploy to GitHub Pages

1. Push this project to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` (or re-run the workflow from the **Actions** tab) — the included
   workflow at `.github/workflows/deploy.yml` will build and publish automatically.
5. Your site will be live at:
   - `https://<your-username>.github.io/<your-repo>/` (project repo), or
   - `https://<your-username>.github.io/` (if the repo is named `<your-username>.github.io`)

## Notes

- This project uses `output: 'export'` in `next.config.mjs`, so it builds to a fully
  static `out/` folder — no Node.js server needed on GitHub Pages.
- Because of static export, API routes, Server Actions, and `next/image` optimization
  are not available. Images use `unoptimized: true` instead.
