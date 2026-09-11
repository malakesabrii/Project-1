# KidsMeals Deployment Guide

This guide walks you through deploying the KidsMeals landing page from scratch.

## Prerequisites

- ✅ Node.js 18+ installed
- ✅ Git installed
- ✅ GitHub account
- ✅ Supabase account ([supabase.com](https://supabase.com))
- ✅ Vercel account ([vercel.com](https://vercel.com))

---

## Step 1: Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including Next.js, React, Supabase, and Tailwind CSS.

---

## Step 2: Set Up Supabase

### 2.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click **New Project**
4. Choose your organization
5. Fill in:
   - **Name**: `kidsmeals` (or your choice)
   - **Database Password**: Create a strong password (save it)
   - **Region**: Choose closest to your users
6. Click **Create new project** (takes ~2 minutes)

### 2.2 Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Copy the entire contents of `supabase-setup.sql` from this project
4. Paste into the SQL editor
5. Click **Run** or press `Ctrl+Enter`
6. Verify success message appears

### 2.3 Verify the Table

1. Go to **Table Editor** in the left sidebar
2. You should see `contact_leads` table
3. Click on it to see the schema:
   - `id` (uuid, primary key)
   - `created_at` (timestamp)
   - `full_name` (text)
   - `phone` (text)
   - `email` (text, nullable)
   - `collaboration_types` (text array)
   - `message` (text, nullable)
   - `status` (text, default: 'new')
   - `source` (text, default: 'landing_page')

### 2.4 Get Your API Credentials

1. Go to **Settings** → **API** in Supabase
2. Copy these two values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

---

## Step 3: Configure Environment Variables

### 3.1 Create Local Environment File

In the project root, create `.env.local`:

```bash
# On Windows Command Prompt:
copy .env.example .env.local

# On PowerShell:
Copy-Item .env.example .env.local

# On Mac/Linux:
cp .env.example .env.local
```

### 3.2 Add Your Credentials

Open `.env.local` in a text editor and replace with your actual values:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**⚠️ Important**: Never commit `.env.local` to Git (it's already in `.gitignore`)

---

## Step 4: Test Locally

### 4.1 Start the Development Server

```bash
npm run dev
```

You should see:

```
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000
```

### 4.2 Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000)

### 4.3 Test the Contact Form

1. Scroll down or click "ارتباط با ما" in the header
2. Fill out Step 1:
   - Name: `تست محمدی`
   - Phone: `09123456789`
   - Email: (optional) `test@example.com`
3. Click "مرحله بعد"
4. Fill out Step 2: Select at least one collaboration type
5. Click "مرحله بعد"
6. Fill out Step 3: Add optional message
7. Click "ارسال درخواست"
8. You should see: "درخواست شما با موفقیت ثبت شد 🌱"

### 4.4 Verify in Supabase

1. Go to Supabase dashboard → **Table Editor** → **contact_leads**
2. You should see your test submission
3. Click to view the full record

### 4.5 Test Row Level Security

Open browser console and try:

```javascript
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient('YOUR_URL', 'YOUR_ANON_KEY')
const { data } = await supabase.from('contact_leads').select('*')
console.log(data) // Should return empty or null - RLS is working!
```

---

## Step 5: Set Up Git and GitHub

### 5.1 Initialize Git

If not already initialized:

```bash
git init
git add .
git commit -m "feat: initial KidsMeals landing page with Supabase integration"
```

### 5.2 Create GitHub Repository

**Option A: Via GitHub Web Interface**
1. Go to [github.com/new](https://github.com/new)
2. Name: `kidsmeals-landing` (or your choice)
3. Visibility: Public or Private
4. **Do NOT** initialize with README (we already have one)
5. Click **Create repository**

**Option B: Via GitHub CLI** (if installed)
```bash
gh repo create kidsmeals-landing --public --source=. --remote=origin
```

### 5.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/kidsmeals-landing.git
git branch -M main
git push -u origin main
```

Verify your code is on GitHub by visiting the repository URL.

---

## Step 6: Deploy to Vercel

### 6.1 Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com)
2. Sign in (use GitHub account for easier integration)
3. Click **Add New** → **Project**
4. Find your `kidsmeals-landing` repository
5. Click **Import**

### 6.2 Configure Project Settings

**Framework Preset**: Next.js (should auto-detect)

**Root Directory**: `./` (leave as is)

**Build Command**: `npm run build` (default)

**Output Directory**: `.next` (default)

**Install Command**: `npm install` (default)

### 6.3 Add Environment Variables

In the Vercel import screen, expand **Environment Variables** section:

Add these two variables:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGci...` |

**Environment**: All (Production, Preview, Development)

### 6.4 Deploy

1. Click **Deploy**
2. Wait 1-3 minutes for the build
3. You'll see a success screen with your production URL

Example: `https://kidsmeals-landing-abc123.vercel.app`

---

## Step 7: Verify Production Deployment

### 7.1 Open Production URL

Click **Visit** on the Vercel dashboard or open the URL directly.

### 7.2 Full Production Test

1. ✅ Page loads correctly
2. ✅ RTL layout is correct
3. ✅ Navigation works (header links)
4. ✅ All sections visible
5. ✅ Scroll to contact form
6. ✅ Submit a real test lead
7. ✅ Success message appears
8. ✅ Check Supabase for the new record

### 7.3 Mobile Test

Test on actual mobile device or use browser DevTools:

- iPhone SE (375px)
- iPhone 14 Pro (390px)
- iPhone 14 Pro Max (430px)
- iPad (768px)
- Desktop (1440px)

Verify:
- ✅ Layout adapts correctly
- ✅ Mobile menu works
- ✅ Form is usable
- ✅ Text is readable
- ✅ Buttons are tappable

---

## Step 8: Custom Domain (Optional)

### 8.1 In Vercel Dashboard

1. Go to your project
2. Click **Settings** → **Domains**
3. Enter your domain (e.g., `kidsmeals.ir`)
4. Click **Add**

### 8.2 Configure DNS

Vercel will show you DNS records to add:

**For apex domain (kidsmeals.ir)**:
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain**:
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

Add these in your domain registrar's DNS settings.

### 8.3 Wait for SSL

SSL certificate is automatically provisioned (5-15 minutes).

---

## Step 9: Future Updates

### 9.1 Make Changes Locally

1. Edit files as needed
2. Test with `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "fix: improve mobile header layout"
   git push
   ```

### 9.2 Automatic Deployment

Vercel automatically rebuilds when you push to `main` branch.

Check deployment status at [vercel.com/dashboard](https://vercel.com/dashboard)

---

## Troubleshooting

### Build fails on Vercel

**Check**:
- Environment variables are set correctly
- No syntax errors (`npm run build` works locally)
- Dependencies are in `package.json`

**Solution**: Check the build logs in Vercel dashboard

### Form doesn't submit

**Check**:
- Environment variables set in Vercel
- Supabase URL and key are correct
- RLS policies are enabled
- Browser console for errors

**Solution**: Test API connection:
```bash
curl https://YOUR_PROJECT.supabase.co/rest/v1/contact_leads \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Content-Type: application/json"
```

### Fonts not loading

**Check**:
- Font files are in `public/fonts/`
- File names match those in `globals.css`

**Solution**: Use system fonts as fallback (already configured)

---

## Security Checklist

- ✅ `.env.local` in `.gitignore` (never commit secrets)
- ✅ Only `NEXT_PUBLIC_` vars exposed to client
- ✅ Supabase RLS enabled
- ✅ Public users can only INSERT, not SELECT
- ✅ No service role key in client code
- ✅ HTTPS enabled (automatic with Vercel)

---

## Success Criteria

Your deployment is successful when:

✅ Production URL is live
✅ Landing page loads correctly
✅ Form submissions reach Supabase
✅ Mobile layout works properly
✅ No console errors
✅ Build completes without warnings
✅ SSL certificate is active
✅ All environment variables set correctly

---

## Next Steps

After successful deployment:

1. **Monitor leads**: Check Supabase regularly for new submissions
2. **Set up notifications**: Configure email alerts for new leads (future enhancement)
3. **Add analytics**: Integrate Google Analytics or Vercel Analytics
4. **Add fonts**: Upload Dana and Vazirmatn font files to `public/fonts/`
5. **Add logo**: Replace placeholder logo with actual KidsMeals logo
6. **Add images**: Add real food photography to Hero and other sections
7. **Custom domain**: Point your domain to Vercel

---

**Deployment Complete! 🎉**

Your KidsMeals landing page is now live and ready to collect partnership leads.
