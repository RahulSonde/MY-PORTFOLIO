# 🚀 Rahul Sonde - Portfolio 2026

![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css&style=flat-square)
![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?style=flat-square)

> **"Data, Data, Everywhere"**

An immersive, futuristic portfolio website built for a **Data Analyst & QA Engineer**. This project features a high-performance UI with glassmorphism aesthetics, complex GSAP animations, a magnetic interaction system, and a responsive Bento Grid layout.

## ✨ Key Features

* **Futuristic UI/UX**: Dark-themed "Midnight" aesthetic with "Cyber Lime" and "Electric Violet" accents.
* **Advanced Animations**: 
    * **GSAP & ScrollTrigger**: Smooth scroll-based reveals for the timeline and projects.
    * **Magnetic Buttons**: Interactive buttons that gravitate towards the cursor.
    * **Custom Cursor**: A trailing cursor implementation for a polished feel.
* **Bento Grid Layout**: A modern, responsive grid to showcase education and certifications.
* **Interactive Galleries**: 3D tilt effects on project cards and certificate modal popups.
* **Working Contact Form**: Integrated with **EmailJS** for direct enquiries and auto-replies.
* **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

* **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animation**: [GSAP (GreenSock Animation Platform)](https://gsap.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📂 Project Structure

```bash
├── src/
│   ├── components/       # UI Components (Hero, BentoGrid, etc.)
│   ├── public/           # Static assets (Certificates, images)
│   ├── App.tsx           # Main application entry
│   ├── constants.ts      # Centralized content (Texts, Links, Data)
│   ├── types.ts          # TypeScript interfaces
│   └── index.css         # Global styles & Tailwind directives
├── .env                  # Environment variables (not committed)
├── tailwind.config.js    # Tailwind theme configuration
└── vite.config.ts        # Vite configuration

