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



## Running it on your laptop

You need [Node.js](https://nodejs.org) installed 

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



Project Structure
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

