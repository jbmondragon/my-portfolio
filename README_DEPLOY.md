# GitHub Pages Deployment Guide

This project is configured for GitHub Pages deployment with GitHub Actions.

## 1. Push the repository to GitHub

The Next.js config detects the repository name automatically during the GitHub Actions build.

- `https://<username>.github.io/<repo-name>/` works for a normal project repository
- `https://<username>.github.io/` works when the repository itself is named `<username>.github.io`

If the repository does not exist on GitHub yet, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main
```

If the repository already exists, run:

```bash
git add .
git commit -m "Prepare portfolio for GitHub Pages deployment"
git push origin main
```

## 2. Enable GitHub Pages

In the GitHub repository:

1. Go to **Settings**
2. Open **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**

## 3. Workflow used for deployment

The workflow file is:

- `.github/workflows/deploy.yml`

It will:

1. Install dependencies with `npm ci`
2. Build the app with `npm run build`
3. Upload the generated `out/` folder
4. Deploy to GitHub Pages

## 4. Deployment URL

After the workflow finishes, your site will be available at:

- `https://<username>.github.io/<repo-name>/`

If the repository name is `<username>.github.io`, the URL is:

- `https://<username>.github.io/`

## 5. Future updates

For every update, run:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Actions will redeploy the site automatically.
