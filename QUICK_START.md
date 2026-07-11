# Quick Start Guide - Easy Version

## ✨ What You Have

You have a complete Bloxd game codes website with:
- User login/signup system
- Code display page
- Admin panel to manage codes
- Database to store codes

## 🚀 Getting Started (3 Steps)

### Step 1: Get Your API Keys (10 minutes)

**Firebase (for login system):**
1. Go to https://console.firebase.google.com
2. Click "Add project" → name it "Bloxd"
3. Copy these 6 things from Project Settings:
   - API Key
   - Auth Domain
   - Project ID
   - Storage Bucket
   - Messaging Sender ID
   - App ID

**MongoDB (for storing codes):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a project named "Bloxd"
4. Copy the connection string (looks like: `mongodb+srv://username:password@...`)

### Step 2: Put Keys in Your Project

**In `frontend/.env.local`:**
```
NEXT_PUBLIC_FIREBASE_API_KEY=paste_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=paste_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=paste_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=paste_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=paste_here
NEXT_PUBLIC_FIREBASE_APP_ID=paste_here
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**In `backend/.env`:**
```
MONGODB_URI=paste_your_mongodb_connection_string_here
PORT=5000
FIREBASE_PROJECT_ID=paste_here
NODE_ENV=development
```

### Step 3: Run It!

**Open Terminal 1:**
```bash
cd Bloxd-Useful-Codes/frontend
npm install
npm run dev
```

**Open Terminal 2:**
```bash
cd Bloxd-Useful-Codes/backend
npm install
npm run dev
```

**Open browser:** http://localhost:3000

## 🎮 Using Your Website

1. **Sign up** with email/password
2. **See codes** on home page (starts empty)
3. **Go to Admin** → add codes
4. **Codes appear** on home page
5. **Users can copy** codes

## ⚡ That's It!

You now have a working Bloxd codes website! 🎉

### Need Help?

- Firebase not working? Check your API keys
- MongoDB error? Check connection string
- Website not loading? Check if both terminals are running

---

**Next Steps (Optional):**
- Deploy to the internet (Vercel, Heroku)
- Add more admin features
- Customize the design
- Add code statistics

Happy coding! 🚀
