# GitHub Pages Deployment Guide

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

## Setup Instructions

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Configure Base Path (if needed):**
   - If your repo is **NOT** named `username.github.io` (i.e., it's a project page):
     - Edit `.github/workflows/deploy.yml`
     - Uncomment the `VITE_BASE_PATH` line and set your repo name:
       ```yaml
       VITE_BASE_PATH: '/your-repo-name/'
       ```
   - If your repo **IS** named `username.github.io`, leave it as `/`

4. **Deploy:**
   - Push any changes to the `main` or `master` branch
   - GitHub Actions will automatically build and deploy
   - Check the **Actions** tab to see the deployment progress
   - Your site will be available at:
     - `https://YOUR_USERNAME.github.io` (if repo is `username.github.io`)
     - `https://YOUR_USERNAME.github.io/REPO_NAME` (if it's a project page)

### Option 2: Manual Deployment

1. **Install gh-pages:**
   ```bash
   npm install
   ```

2. **Build and deploy:**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose branch: `gh-pages`
   - Folder: `/ (root)`
   - Click **Save**

## Important Notes

- The `.nojekyll` file is included to prevent Jekyll processing
- For project pages (not `username.github.io`), make sure to set the correct `VITE_BASE_PATH` in the workflow file
- The site will automatically rebuild on every push to the main branch

## Troubleshooting

- **404 errors:** Make sure `VITE_BASE_PATH` matches your repository name
- **Assets not loading:** Check that the base path in `vite.config.ts` is correct
- **Build fails:** Check the Actions tab for error details

