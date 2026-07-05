# Zero Theorys — Elite Systems Agency

> **Zero Fluff. Zero Theories. Just Production-Ready Code.**

Zero Theorys designs and deploys next-gen AI pipelines, scalable clouds, and cross-platform systems for international enterprises. This repository houses the codebase for the official high-performance Zero Theorys landing portal.

---

## 🛠️ Architecture & Technology Stack

The portal showcases our engineering capabilities through interactive, high-fidelity widgets representing the enterprise tech stacks we implement for our clients:

*   **AI & Data Core**: LangChain, LlamaIndex, Pinecone, Vector DBs, and CrewAI Multi-Agent orchestrations.
*   **Web Ecosystems**: Next.js 14 (App Router), React 18, TypeScript, TailwindCSS, and Framer Motion.
*   **DevOps & Cloud**: Google Cloud Platform (GCP), Kubernetes (GKE), Terraform, Docker (Multi-stage), and AWS CDK.
*   **Mobile Engineering**: Flutter, React Native, Swift (iOS), Kotlin (Android), and Offline-First SQLite syncs.
*   **Backend Ecosystems**: Spring Boot, Node.js (TypeScript), NestJS, Fastify, gRPC, and Apache Kafka.

---

## ✨ Key Interactive Features

### 1. Interactive Technology Constellation Node Map
An interactive, responsive SVG constellation canvas rendering technology nodes and connection lines:
*   **Aesthetics**: Glassmorphism cards with active canvas drift animations and brand-specific glow hover states.
*   **Connection Spine**: Glowing vector lines featuring dash-array pulse flow animations connecting dependent nodes together.

### 2. Strict SDLC & Agile Engineering Stepper
A dynamic timeline stepper detailing real-world enterprise delivery stages:
*   **Progress Tracking**: A continuous, vertical spine indicator that fills height dynamically based on the active step ratio.
*   **Transitions**: Fluid slide-reveal card animation transitions triggered on step toggle.
*   **Operational SLA Dashboard**: Dynamic gauge and alert widgets rendering live uptime availability targets (99.99%), test coverages (90%+), and check confirmations.

### 3. Live Booking Scheduler & SMTP Notification Engine
A scheduling calendar widget allowing leads to book introductory syncs directly:
*   **Double-Email Alerts**: Automated Nodemailer dispatches connecting via secure Gmail SMTP. Sends stylized confirmations to the client (with custom Google Meet links) and system alerts to the team (`ganeshsingha995@gmail.com`).
*   **Project Notes**: Lead capture form integrating optional technical spec notes.

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install the Node dependencies:
```bash
npm install
```

### 2. Environment Configuration
Create a `.env.local` file at the root of the project to enable the booking email engine. You can copy the template:
```bash
cp .env.local.template .env.local
```

Configure the following variables in `.env.local`:
```env
# Gmail SMTP credentials (your sending address)
SMTP_EMAIL=your-email@gmail.com

# Google App Password (16 characters, no spaces)
SMTP_PASSWORD=xxxxxxxxxxxxxxxx

# Your permanent team Google Meet link (optional - defaults to current link)
MEET_LINK=https://meet.google.com/asw-xuty-yhe
```

### 3. Running Locally
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
Validate compile integrity by creating an optimized production build:
```bash
npm run build
```

---

## ☁️ Deployment (Netlify)

This project is optimized for deployment on Netlify using GitHub continuous delivery:

1.  **Build Settings**: Netlify automatically detects Next.js configurations:
    *   **Base Directory**: (Leave blank / Root)
    *   **Build Command**: `npm run build`
    *   **Publish Directory**: `.next`
2.  **Environment Variables**: Go to **Site Settings > Environment Variables** on your Netlify dashboard and add:
    *   `SMTP_EMAIL`
    *   `SMTP_PASSWORD`
    *   `MEET_LINK` (Optional)
3.  **Deploy**: Trigger a new deploy with **Clear cache and deploy site** to inject the environment secrets into the serverless functions runtime.
