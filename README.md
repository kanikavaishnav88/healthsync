# HealthSync

An elderly-friendly personal health management app - built as a demo prototype for a
college pitch. It uses realistic sample data (no real backend, no real patient data).

## What this is

- Simple, large-text dashboard for elderly patients
- Medical record upload/storage (demo only - files are not actually stored)
- Medical history timeline
- Medicine and appointment reminders
- Printable emergency health card
- Caregiver/family access with an invite flow
- Secure doctor sharing via expiring links
- Nearby doctors/labs/pharmacies list
- Accessibility toolbar: larger text and high-contrast mode

Everything runs on mock data defined in `lib/mockData.js`. There is a working demo
login (no real password, no real accounts) so the app feels real during a presentation.

## Running it on your laptop

You need [Node.js](https://nodejs.org) installed first (version 18 or newer - the
installer from nodejs.org is the easiest way).

1. Open a terminal in this folder.
2. Install the dependencies (only needed once):
   ```
   npm install
   ```
3. Start the app:
   ```
   npm run dev
   ```
4. Open your browser to **http://localhost:3000**

That's it - the whole app runs on your laptop, nothing is uploaded anywhere.

## Putting it on GitHub

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Create a new repository (button in the top right, "New repository"). Name it
   `healthsync`. Leave it empty (don't add a README there).
3. Back in your terminal, inside this folder, run:
   ```
   git init
   git add .
   git commit -m "Initial HealthSync prototype"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/healthsync.git
   git push -u origin main
   ```
   (Replace `YOUR-USERNAME` with your actual GitHub username - GitHub shows you this
   exact command on the empty repository page too.)

Now anyone can see your code at `github.com/YOUR-USERNAME/healthsync`.

## Putting it online with a live link (Vercel)

Vercel is made by the creators of Next.js and has a free tier that's perfect for this.

1. Go to [vercel.com](https://vercel.com) and sign up using your GitHub account.
2. Click "Add New Project."
3. Select your `healthsync` repository from the list.
4. Leave all settings as default and click "Deploy."
5. In about a minute, Vercel gives you a live link like `healthsync-yourname.vercel.app`
   that anyone can open - no installation needed.

Any time you push new changes to GitHub, Vercel automatically updates the live link.

## Project structure (for your reference)

```
app/                 Each folder here is one page (Next.js "App Router")
  page.js            Landing page
  login/page.js      Demo login
  dashboard/page.js  Main elderly dashboard
  records/           Medical records list + upload
  timeline/page.js   Health history timeline
  reminders/page.js  Medicines and appointments
  emergency-card/    Printable emergency card
  family/page.js     Caregiver access
  share/page.js      Doctor sharing with consent
  find-care/page.js  Nearby doctors/labs
components/          Reusable pieces (buttons, cards, navigation)
lib/                 Mock data and shared logic (auth, accessibility, records)
```

## Turning this into a real product later

Right now all data lives in `lib/mockData.js` and in your browser's local storage.
To make it real, the next step is connecting a database (Supabase is a good free
option) - each page already reads data in a shape that maps directly onto simple
database tables, so the page code won't need to change much, only where the data
comes from.
