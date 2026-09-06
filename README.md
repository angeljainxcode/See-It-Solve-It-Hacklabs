# 🚦 See It. Solve It.

### AI-powered civic grievance platform that turns a photo into action.

> **See the problem. Report it instantly. Route it intelligently. Verify the solution.**

**IEEE Hack Synapse 2026** · 🏆 Best Use of n8n · ⏱️ 36-Hour Hackathon

**Team:** Hacklabs  

**Team Lead**: Angel Jain 

**MVP LINK:** https://dollar-referring-controller-jewelry.trycloudflare.com

**VIDEO LINK**- https://drive.google.com/file/d/1227Y9-Akra5BK6KhH_0Auirc4NoBg8ti/view

**LINKEDIN URL:** https://www.linkedin.com/in/angel-jain-419225386

**HackIndia Team Repository:** https://github.com/angeljainxcode/See-It-Solve-It-Hacklabs


![Hackathon](https://img.shields.io/badge/IEEE%20Hack%20Synapse-2026-blue)
![n8n](https://img.shields.io/badge/Best%20Use%20of-n8n-orange)
![Supabase](https://img.shields.io/badge/Database-Supabase-green)
![AI](https://img.shields.io/badge/AI-Gemini%20%2B%20Claude-purple)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow)

---

## 🚀 The Idea

📸 **Capture** → 🤖 **Understand** → 🧠 **Route** → 🏛️ **Act** → 📊 **Track** → ✅ **Verify**

Citizens photograph civic issues such as potholes, garbage, water leaks and broken
streetlights.

**See It. Solve It.** transforms that photograph into an intelligent, trackable
and verifiable civic complaint — from initial reporting to verified resolution.

---

## 🎯 The Problem

Citizens often don't know whom to contact for civic issues.

Complaints can get lost or ignored, duplicate complaints create unnecessary work,
and there is often no transparency or verification once something is marked as
"resolved."

The result is a broken feedback loop between **citizens and authorities**.

---

## 💡 Our Solution

**See It. Solve It.** uses AI, n8n automation and Supabase to manage the complete
civic grievance lifecycle.

- 📸 Citizen photographs a civic issue
- 🤖 AI identifies and analyzes the issue
- 📝 AI generates a formal complaint
- 📍 Location is processed and mapped
- 🏛️ Complaint is routed to the correct department
- 🔍 Duplicate complaints are detected
- 📊 Citizen can track complaint status
- 👮 Authority manages the complaint
- 📸 Authority uploads an after-resolution photo
- 🤖 AI verifies whether the issue was actually fixed
- ✅ Complaint is closed only after successful verification

---

## 🧠 How It Works

```mermaid
flowchart TD
    A[📸 Citizen captures civic issue] --> B[⚡ Report Intake]
    B --> C[🤖 AI analyzes image]
    C --> D[Identify issue type]
    D --> E[Estimate severity & priority]
    E --> F[Generate complaint]
    F --> G[🗄️ Save to Supabase]

    G --> H[📍 Location Processing]
    H --> I[Determine Ward & Department]

    I --> J[🔍 Duplicate Detection]
    J --> K{Duplicate Found?}

    K -->|Yes| L[Link to Existing Complaint]
    K -->|No| M[Create New Complaint]

    L --> N[🧭 Routing Logic]
    M --> N

    N --> O[Assign Department / Officer]
    O --> P[🏛️ Authority Dashboard]

    P --> Q[Authority Updates Status]
    Q --> R[📊 Status Update]

    R --> S{Resolved?}
    S -->|No| P
    S -->|Yes| T[📸 Upload After Photo]

    T --> U[🔬 Resolution Verification]
    U --> V[🤖 AI Before / After Comparison]

    V --> W{Fix Verified?}
    W -->|No| X[Reopen / Request Rework]
    X --> P

    W -->|Yes| Y[✅ Mark as Resolved]
    Y --> Z[🔔 Notify Citizen]
    Z --> AA[Close Complaint]
