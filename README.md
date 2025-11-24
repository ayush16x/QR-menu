# 🍽️ QR MENU — Smart Digital Menu & Table Ordering System

## 🚀 Overview  
**QR MENU** is a powerful **Next.js-based digital restaurant menu & ordering system** designed to modernize dining experiences.  
It allows restaurant owners to **generate QR codes**, manage **dynamic menus**, handle **live table orders**, and view **real-time analytics**—all from an intuitive dashboard.

✨ Perfect for restaurants looking to adopt modern ordering without expensive SaaS tools.

---

## 🌟 Key Features  

🔹 **Dynamic Digital Menu** – Add, edit, or remove dishes anytime.  
🔹 **QR Code Table Ordering** – Each table gets its own QR for direct ordering.  
🔹 **🤖 AI-Powered Food Assistant** – Personalized food suggestions using Gemini AI.  
🔹 **Live Order Management** – Track orders in real-time & mark them as completed.  
🔹 **Order History + Analytics** – View revenue trends, table activity, and customer stats.  
🔹 **Secure Authentication** – NextAuth.js-powered owner login.  
🔹 **Clean & Mobile-First UI** – Modern UX built with Tailwind CSS.  

---

## 🏗️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** Next.js App Router APIs  
- **Database:** MongoDB  
- **Authentication:** NextAuth.js  
- **AI Integration:** Google Gemini API  
- **QR Code Generation:** QRCode.js / custom generation  
- **Deployment:** Vercel / Node server  

---

## 📦 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/ayush16x/QR-menu.git
cd QR-menu
```

### **2️⃣ Install Dependencies**
```sh
# Install dependencies
npm install
```

### **3️⃣ Environment Variables**
Create a `.env` file and add the following:
```sh
NEXTAUTH_URL=your-site-url
MONGODB_URL=your-mongodb-url
NEXTAUTH_SECRET=your-secret-key
GITHUB_ID=key
GITHUB_SECRET=key
GEMINI_URL=key 
```

### **4️⃣ Start the Development Server**
```sh
npm run dev
```

---

## 🎨 UI & User Experience
✅ **Modern, responsive design** with **Tailwind CSS**.  
✅ **Smooth animations & intuitive navigation** for a better experience.  
✅ **Mobile-first approach** ensures seamless use across devices.

## 🔒 Access the Dashboard without authentication for **testing purposes**.
`Remove This File from 👉 'QR-menu/app/dashboard/page.js'`
```sh
if (status === "unauthenticated") {
        router.push('/');
      }
```


## 📜 License
If you wish to use it for commercial or other purposes, please request **permission**

---

## 🤝 Contributing
Contributions are welcome! Submit issues or pull requests to improve the project.

---

## 📬 Contact
📧 Email: ayushkumargupta6341@gmail.com

