# GitHub Pages Deployment Guide

This project is already configured for GitHub Pages deployment using GitHub Actions.

## 1. Verify Repository Name

Open [next.config.mjs](next.config.mjs) and confirm:

- `repoName = 'my-portfolio'` for project pages (`https://jbmondragon.github.io/my-portfolio/`)
- Use `repoName = ''` only if your repo is `jbmondragon.github.io`

## 2. Commit and Push

Run these commands from the project root:

```bash
git add .
git commit -m "Prepare portfolio for GitHub Pages deployment"
git push origin main
```

If this is your first push for this repo, use:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/jbmondragon/my-portfolio.git
git push -u origin main
```

## 3. Enable GitHub Pages Source

In your repository on GitHub:

1. Go to **Settings**
2. Open **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**

## 4. Confirm Workflow

The workflow file is already included at:

- [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

It automatically:

1. Installs dependencies (`npm ci`)
2. Builds static export (`npm run build`)
3. Uploads `out/`
4. Deploys to GitHub Pages

## 5. Check Deployment URL

After workflow finishes, your site will be available at:

- `https://jbmondragon.github.io/my-portfolio/`

## 6. Future Updates

For every change:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Actions will redeploy automatically.
