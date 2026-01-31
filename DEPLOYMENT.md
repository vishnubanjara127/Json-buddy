# Deployment Guide for JSON Editor

This guide will help you deploy your Angular JSON validator application for free.

## Prerequisites

1. Build your Angular app for production
2. Choose a hosting platform
3. Deploy!

---

## Step 1: Build Your App for Production

First, build your Angular app:

```bash
npm run build
```

This creates a `dist/` folder with production-ready files.

**Note:** If you get an error, you might need to update your `angular.json` to set the output path. The build output will be in `dist/json-editor/browser/` (or similar).

---

## Option A: Deploy to Vercel (Recommended - Easiest)

### Method 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   npm run build
   vercel --prod
   ```
   When prompted:
   - Set output directory: `dist/json-editor` (check if there's a `browser` subfolder inside)
   - Follow the prompts

### Method 2: Deploy via GitHub (Automatic)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Angular
   - Build Command: `npm run build`
   - Output Directory: `dist/json-editor` (or `dist/json-editor/browser` if that folder exists)
6. Click "Deploy"

**Result:** Your app will be live at `your-project-name.vercel.app` (free custom domain)

---

## Option B: Deploy to Netlify

### Method 1: Drag & Drop (Quickest)

1. Build your app:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com) and sign up/login

3. Drag and drop the `dist/json-editor` folder onto Netlify's dashboard (check if there's a `browser` subfolder - if so, use that)

4. Your app is live! You'll get a URL like `random-name-123.netlify.app`

### Method 2: GitHub Integration (Automatic)

1. Push your code to GitHub

2. Go to [netlify.com](https://netlify.com) and sign up/login

3. Click "Add new site" → "Import an existing project"

4. Connect to GitHub and select your repository

5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/json-editor` (or `dist/json-editor/browser` if that folder exists)

6. Click "Deploy site"

**Result:** Your app will be live and auto-deploy on every git push!

---

## Option C: Deploy to GitHub Pages

1. Install Angular GitHub Pages package:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build your app:
   ```bash
   npm run build -- --base-href="/json-editor/"
   ```

3. Deploy:
   ```bash
   npx angular-cli-ghpages --dir=dist/json-editor
   ```
   (If there's a `browser` subfolder, use `dist/json-editor/browser` instead)

4. Go to your GitHub repository → Settings → Pages
   - Select the `gh-pages` branch
   - Your site will be at: `https://yourusername.github.io/json-editor/`

---

## Option D: Deploy to Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project (or create one)
   - Public directory: `dist/json-editor` (or `dist/json-editor/browser` if that folder exists)
   - Configure as single-page app: Yes
   - Set up automatic builds: No (or Yes if you want)

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

**Result:** Your app will be at `your-project.firebaseapp.com`

---

## Option E: Deploy to Cloudflare Pages

1. Push your code to GitHub

2. Go to [cloudflare.com](https://cloudflare.com) → Sign up/login

3. Go to Workers & Pages → Create a project → Connect to Git

4. Select your repository

5. Configure:
   - Framework preset: Angular
   - Build command: `npm run build`
   - Build output directory: `dist/json-editor` (or `dist/json-editor/browser` if that folder exists)

6. Click "Save and Deploy"

**Result:** Your app will be live with unlimited bandwidth!

---

## Cost Comparison

| Platform | Free Tier | Paid Plans Start At |
|----------|-----------|---------------------|
| **Vercel** | ✅ Unlimited (personal) | $20/month (Pro) |
| **Netlify** | ✅ 100GB bandwidth/month | $19/month (Pro) |
| **GitHub Pages** | ✅ Unlimited | Free (public repos) |
| **Firebase** | ✅ 10GB storage, 360MB/day | $25/month (Blaze) |
| **Cloudflare Pages** | ✅ Unlimited | Free forever |

**Recommendation:** Start with **Vercel** or **Netlify** - they're the easiest and most developer-friendly.

---

## Custom Domain (Optional)

All platforms allow you to add a custom domain for free:
- Vercel: Free SSL, easy setup
- Netlify: Free SSL, easy setup
- GitHub Pages: Free SSL, requires DNS configuration
- Firebase: Free SSL, easy setup
- Cloudflare: Free SSL, easy setup

You only need to pay for the domain name itself (e.g., $10-15/year from Namecheap, Google Domains, etc.)

---

## Troubleshooting

### Build Output Directory

Based on your `angular.json`, the output should be in `dist/json-editor/`. However, newer Angular versions might create a `browser` subfolder.

To check:
1. Run `npm run build`
2. Check the `dist/` folder
3. Look for `dist/json-editor/` - if there's a `browser` folder inside, use `dist/json-editor/browser/`
4. Otherwise, use `dist/json-editor/`

### Base Href Issues

If your app doesn't load correctly, you might need to set the base href:
```bash
npm run build -- --base-href="/"
```

Or for GitHub Pages:
```bash
npm run build -- --base-href="/json-editor/"
```

---

## Quick Start (Recommended)

**Fastest way to deploy:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "Add New Project" → Import your repo
5. Deploy!

**Time:** ~5 minutes | **Cost:** $0 | **Result:** Live website!
