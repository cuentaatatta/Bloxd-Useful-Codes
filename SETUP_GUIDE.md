# 🎮 Bloxd Useful Codes - Complete Setup Guide

## Table of Contents
1. [Firebase Setup](#firebase-setup)
2. [MongoDB Setup](#mongodb-setup)
3. [Frontend Setup](#frontend-setup)
4. [Backend Setup](#backend-setup)
5. [Running the Project](#running-the-project)

---

## Firebase Setup

Firebase handles user login/registration. Follow these steps:

### Step 1: Create Firebase Project
1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Enter project name: `Bloxd-Useful-Codes`
4. Click "Continue"
5. Enable Google Analytics (optional)
6. Click "Create project"

### Step 2: Get Firebase Keys (Frontend)
1. In Firebase Console, click the gear icon ⚙️ (top left)
2. Select "Project settings"
3. Go to "General" tab
4. Scroll down to "Your apps" section
5. Click "Web" icon (</> symbol)
6. Enter app name: `bloxd-hub`
7. Click "Register app"
8. Copy the entire code block under `const firebaseConfig = {...}`

### Step 3: Add Firebase Keys to Frontend
1. Open your project folder: `Bloxd-Useful-Codes/frontend/`
2. Find the file `.env.local` (create if it doesn't exist)
3. Paste this and fill in values from Firebase:

```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID

NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Step 4: Enable Email/Password Auth in Firebase
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Click "Email/Password"
4. Toggle "Enable"
5. Click "Save"

### Step 5: Get Firebase Admin Keys (Backend)
1. Go to Firebase Console → Project settings ⚙️
2. Click "Service accounts" tab
3. Click "Generate new private key"
4. A JSON file will download - **keep it safe!**

### Step 6: Add Firebase Keys to Backend
1. Open `Bloxd-Useful-Codes/backend/.env`
2. Copy values from the downloaded JSON file:

```
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_PRIVATE_KEY_ID=YOUR_PRIVATE_KEY_ID
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=YOUR_CLIENT_EMAIL
FIREBASE_CLIENT_ID=YOUR_CLIENT_ID
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
```

---

## MongoDB Setup

MongoDB stores all your game codes. Choose ONE option:

### Option A: MongoDB Atlas (Cloud - Easier)

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign Up"
3. Create account with email
4. Click "Create a deployment"
5. Choose "Free" tier
6. Name it: `bloxd-useful-codes`
7. Click "Create deployment"
8. Click "Database" in left menu
9. Click "Connect" button
10. Choose "Drivers" option
11. Select "Node.js" driver
12. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/...`)
13. Replace `<password>` with your actual password
14. Open `backend/.env` and add:

```
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/bloxd-useful-codes?retryWrites=true&w=majority
```

### Option B: MongoDB Local (Your Computer)

1. Download MongoDB Community: https://www.mongodb.com/try/download/community
2. Install it (follow the installer)
3. Open `backend/.env` and add:

```
MONGODB_URI=mongodb://localhost:27017/bloxd-useful-codes
```

---

## Frontend Setup

### Step 1: Navigate to Frontend Folder
```bash
cd Bloxd-Useful-Codes/frontend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Create `.env.local` File
Create a file named `.env.local` in the `frontend/` folder and add your Firebase keys (from Firebase Setup above)

### Step 4: Test Frontend
```bash
npm run dev
```

Open http://localhost:3000 in your browser
You should see the Bloxd Useful Codes homepage!

---

## Backend Setup

### Step 1: Navigate to Backend Folder (Open NEW Terminal)
```bash
cd Bloxd-Useful-Codes/backend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Create `.env` File
Create a file named `.env` in the `backend/` folder and add:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
NODE_ENV=development
```

### Step 4: Initialize Firebase Admin
In `backend/server.js`, add this at the top:

```javascript
const admin = require('firebase-admin');

const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
```

### Step 5: Test Backend
```bash
npm run dev
```

You should see: `Server running on port 5000`

---

## Running the Project

Once everything is configured:

### Terminal 1 (Frontend):
```bash
cd Bloxd-Useful-Codes/frontend
npm run dev
```

### Terminal 2 (Backend):
```bash
cd Bloxd-Useful-Codes/backend
npm run dev
```

### Open in Browser:
Visit: http://localhost:3000

---

## Troubleshooting

**Frontend won't start?**
- Make sure you're in the `frontend/` folder
- Check `.env.local` has all Firebase keys
- Run `npm install` again

**Backend won't start?**
- Make sure you're in the `backend/` folder
- Check `.env` has MongoDB URI and Firebase keys
- Check MongoDB is running (if using local)

**Getting "Cannot find module" errors?**
- Run `npm install` in that folder

**Can't connect to MongoDB?**
- If using Atlas: check your IP is whitelisted
- If using local: make sure MongoDB service is running

---

## Need Help?

Ask me for:
- Firebase setup help
- MongoDB setup help
- Environment variable configuration
- Troubleshooting any errors

I'm here to help! 🚀
