<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=ForecastIQ&fontSize=80&fontColor=fff&animation=twinkling&fontAlignY=35&desc=AI%20Predictive%20Forecasting%20Platform&descAlignY=60&descSize=20" width="100%"/>

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=22&pause=1000&color=6366F1&center=true&vCenter=true&multiline=true&repeat=true&width=800&height=80&lines=Upload+CSV+%E2%86%92+Get+AI+Forecasts+in+seconds+%F0%9F%9A%80;No+data+science+needed.+Just+results.+%F0%9F%8E%AF;Predict+%7C+Detect+%7C+Scenario+Plan+%E2%9C%A8" alt="Typing SVG" /></a>

<br/>

[![Python](https://img.shields.io/badge/Python_3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Flask](https://img.shields.io/badge/Flask_3.0-FF6B6B?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![Prophet](https://img.shields.io/badge/Prophet-0052CC?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.github.io/prophet)
[![Gemini](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)

<br/>

[![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-green?style=flat-square)](LICENSE)
[![NatWest Hackathon](https://img.shields.io/badge/NatWest-Code_for_Purpose_2026-purple?style=flat-square)](https://github.com/HimaniMahajan27/ForecastIQ)
[![Status](https://img.shields.io/badge/Status-Live_&_Working-brightgreen?style=flat-square)]()

</div>

---

<div align="center">

### 💀 Tired of staring at spreadsheets and *hoping* for the best?

**ForecastIQ doesn't do hope. It does data.**

Drop any CSV. Get instant AI forecasts, anomaly alerts, and scenario simulations — explained in plain English. Zero ML knowledge needed. Zero excuses for bad decisions.

> *"Stop guessing. Start forecasting."*

</div>

---

## 🧠 What Even Is This?

<table>
<tr>
<td width="33%" align="center">

### 🎯 What It Does
Accepts any time-series CSV → runs Facebook Prophet → returns 4-week forecasts with full confidence bands, anomaly flags, and Gemini AI explanations. All in one click.

</td>
<td width="33%" align="center">

### 🔥 The Problem It Solves
Most teams are making million-dollar decisions by eyeballing last month's chart. That's insane. ForecastIQ gives you honest, uncertainty-aware predictions — not vibes.

</td>
<td width="33%" align="center">

### 👥 Who It's For
Business analysts, ops teams, PMs, founders — anyone who needs real forecasting power without a data science PhD or a $50k tool license.

</td>
</tr>
</table>

---

## ✨ Features That Actually Work

> 🟢 Everything below is **live and functional** in the current codebase. No fake features. No cope.

<table>
<tr>
<th>🚀 Feature</th>
<th>💡 What It Does</th>
</tr>
<tr>
<td>📈 <b>4-Week Prophet Forecast</b></td>
<td>Facebook Prophet generates weekly predictions with p10 / p50 / p90 confidence bands</td>
</tr>
<tr>
<td>🎯 <b>Uncertainty Ranges</b></td>
<td>Low / Likely / High bounds on every forecast — because single numbers are a lie</td>
</tr>
<tr>
<td>📊 <b>Baseline Comparison</b></td>
<td>Moving average runs alongside Prophet to catch overfitting before it embarrasses you</td>
</tr>
<tr>
<td>🚨 <b>Anomaly Detection</b></td>
<td>Rolling z-score algorithm flags spikes and dips with HIGH / MEDIUM severity + root cause</td>
</tr>
<tr>
<td>🤖 <b>Gemini AI Insights</b></td>
<td>Every forecast explained in plain English by Google Gemini 1.5 Flash — no jargon</td>
</tr>
<tr>
<td>💬 <b>Scenario Chat</b></td>
<td>Ask "What if demand drops 15%?" and get a fully modelled response with numbers</td>
</tr>
<tr>
<td>📂 <b>Smart CSV Upload</b></td>
<td>Drag-and-drop with auto column detection — it figures out your date/value columns itself</td>
</tr>
<tr>
<td>🧪 <b>Instant Demo Mode</b></td>
<td>52-week synthetic dataset pre-loaded — zero setup, works immediately</td>
</tr>
<tr>
<td>🔁 <b>Graceful AI Fallback</b></td>
<td>No Gemini key? No problem. Rule-based insights kick in automatically</td>
</tr>
<tr>
<td>🔒 <b>Runs 100% Locally</b></td>
<td>Prophet + anomaly detection = zero API calls, zero data leaves your machine</td>
</tr>
</table>

---

## 🏗️ Architecture

```
╔═══════════════════════════════════════════════════════════════╗
║                      🖥️  USER BROWSER                        ║
║           Next.js 15 + React 19 + TypeScript                  ║
║                                                               ║
║    [ 📂 Upload CSV ] ──▶ [ 📈 Forecast ] ──▶ [ 🚨 Anomalies ] ║
║                              ↕                                ║
║                     [ 💬 Scenario Chat ]                      ║
╚═══════════════════════════╦═══════════════════════════════════╝
                            ║  HTTP / REST
                            ▼
╔═══════════════════════════════════════════════════════════════╗
║                  ⚙️  FLASK BACKEND  (Port 5000)               ║
║                                                               ║
║  ┌──────────────┐   ┌───────────────┐   ┌────────────────┐   ║
║  │ /api/forecast│   │/api/anomalies │   │ /api/scenario  │   ║
║  └──────┬───────┘   └───────┬───────┘   └───────┬────────┘   ║
║         │                   │                    │            ║
║  ┌──────▼───────┐   ┌───────▼───────┐   ┌───────▼────────┐  ║
║  │  🔮 Prophet  │   │  📉 Z-Score   │   │  🤖 Gemini AI  │  ║
║  │   Service    │   │   Detection   │   │   Integration  │  ║
║  └──────────────┘   └───────────────┘   └────────────────┘  ║
║                              │                               ║
║  ╔═══════════════════════════▼═══════════════════════════╗   ║
║  ║       📋 CSV Parser + Data Validation                 ║   ║
║  ║           (Marshmallow + pandas + numpy)              ║   ║
║  ╚═══════════════════════════════════════════════════════╝   ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 🛠️ Tech Stack

<table>
<tr>
<th>🏷️ Layer</th>
<th>⚡ Technology</th>
<th>🎯 Why We Chose It</th>
</tr>
<tr>
<td>🖥️ <b>Frontend</b></td>
<td>Next.js 15, React 19, TypeScript, Tailwind CSS v4</td>
<td>Server components + type safety = fewer bugs at 2am</td>
</tr>
<tr>
<td>🧩 <b>UI Components</b></td>
<td>shadcn/ui, Radix UI, Recharts</td>
<td>Accessible, composable, looks clean without fighting CSS</td>
</tr>
<tr>
<td>⚙️ <b>Backend</b></td>
<td>Python 3.11+, Flask 3, Flask-CORS</td>
<td>Lightweight API layer — no overhead, just endpoints</td>
</tr>
<tr>
<td>🔮 <b>Forecasting</b></td>
<td>Facebook Prophet (runs locally)</td>
<td>Handles seasonality and trend out of the box, no tuning needed</td>
</tr>
<tr>
<td>🚨 <b>Anomaly Detection</b></td>
<td>Rolling z-score via pandas/numpy</td>
<td>Fast, interpretable, explainable to non-technical users</td>
</tr>
<tr>
<td>🤖 <b>AI Insights</b></td>
<td>Google Gemini 1.5 Flash + Groq fallback</td>
<td>Free tier, fast responses, plain English output</td>
</tr>
<tr>
<td>✅ <b>Validation</b></td>
<td>Marshmallow (backend), TypeScript (frontend)</td>
<td>Catch bad CSV data before it breaks the model</td>
</tr>
</table>

---

## 📁 Project Structure

```
📦 ForeCastIQ/
│
├── 🖥️ frontend/                   # Next.js 15 application
│   ├── 📂 app/
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Landing page
│   │   └── 📂 app/
│   │       ├── page.tsx           # 📈 Forecast tab
│   │       ├── anomalies/         # 🚨 Anomaly detection tab
│   │       ├── scenario/          # 💬 Scenario chat tab
│   │       └── upload/            # 📂 CSV upload page
│   ├── 📂 components/
│   │   ├── forecastiq/
│   │   │   ├── charts/            # ForecastChart, AnomalyChart, ScenarioChart
│   │   │   ├── anomaly-card       # Per-anomaly explanation cards
│   │   │   ├── csv-upload         # Drag-and-drop CSV parser
│   │   │   ├── insight-card       # Gemini AI insight display
│   │   │   ├── stat-card          # KPI metric cards
│   │   │   └── scenario-chat      # Multi-turn chat interface
│   │   └── ui/                    # shadcn/ui primitives
│   ├── 📂 context/
│   │   └── DataContext.tsx        # Global state manager
│   ├── 📂 lib/
│   │   ├── api.ts                 # Flask API calls
│   │   ├── demo-data.ts           # Fallback demo dataset
│   │   └── utils.ts               # Tailwind helpers
│   └── package.json
│
├── ⚙️ backend/                    # Flask Python application
│   ├── app.py                     # App factory + blueprints
│   ├── config.py                  # Env var loader
│   ├── requirements.txt           # Python deps
│   ├── 📂 routes/
│   │   ├── forecast.py            # POST /api/forecast
│   │   ├── anomalies.py           # POST /api/anomalies
│   │   └── scenario.py            # POST /api/scenario
│   ├── 📂 services/
│   │   ├── prophet_service.py     # 🔮 Prophet wrapper
│   │   ├── anomaly_service.py     # 📉 Z-score detection
│   │   ├── baseline_service.py    # 📊 Moving average
│   │   └── gemini_service.py      # 🤖 Gemini integration
│   ├── 📂 utils/
│   │   └── csv_parser.py          # CSV validator
│   ├── 📂 tests/                  # Pytest suite
│   └── .env.example               # Env template (safe to commit)
│
└── 📄 README.md
```

---

## 🚀 Get It Running

### 📋 Before You Start

<table>
<tr>
<th>✅ Requirement</th>
<th>📌 Version</th>
<th>📝 Note</th>
</tr>
<tr>
<td>🟢 Node.js</td>
<td>18+</td>
<td>With npm or pnpm</td>
</tr>
<tr>
<td>🐍 Python</td>
<td>3.11+</td>
<td>Required for backend</td>
</tr>
<tr>
<td>🔑 Gemini API Key</td>
<td>Optional</td>
<td>Free at <a href="https://aistudio.google.com/app/apikey">aistudio.google.com</a> — app works without it</td>
</tr>
</table>

> 💡 **No Gemini key?** Prophet forecasting and anomaly detection run **100% locally**. AI insights gracefully fall back to rule-based text.

---

### 1️⃣ Backend Setup

```bash
cd backend

# Virtual environment setup
python -m venv venv
source venv/bin/activate        # macOS/Linux
venv\Scripts\activate           # Windows

# Install dependencies
pip install -r requirements.txt

# Set up environment
cp .env.example .env
# Add your GEMINI_API_KEY inside .env

# Fire it up 🔥
python app.py
# ✅ Running on http://localhost:5000
```

**Verify it's alive:**
```bash
curl http://localhost:5000/health
# → {"status": "ok", "version": "1.0.0"}
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Set up environment
cp .env.local.example .env.local
# Default works if backend is on port 5000

# Launch 🚀
npm run dev
# ✅ Running on http://localhost:3000
```

Open **[http://localhost:3000](http://localhost:3000)** and you're in. 🎉

---

### 3️⃣ Using The App

<table>
<tr>
<th>📍 Where</th>
<th>⚡ What To Do</th>
</tr>
<tr>
<td>🏠 Landing Page</td>
<td>Hit <b>"Get Started"</b> or go straight to <code>/app</code></td>
</tr>
<tr>
<td>🧪 Demo Mode</td>
<td>App loads <code>demo_sales.csv</code> automatically — click <b>Run Analysis</b> on any tab</td>
</tr>
<tr>
<td>📂 Your Data</td>
<td>Go to <code>/app/upload</code> → drag CSV → select columns → click <b>Use this data</b></td>
</tr>
<tr>
<td>💬 Scenarios</td>
<td>Ask <em>"What if I run a 20% marketing push for 2 weeks?"</em> on the Scenario tab</td>
</tr>
</table>

---

## 📡 API Reference

> All endpoints at `http://localhost:5000`

<details>
<summary><b>🟢 GET /health — Health Check</b></summary>

```json
{ "status": "ok", "version": "1.0.0" }
```
</details>

<details>
<summary><b>🔮 POST /api/forecast — Run Prophet Forecast</b></summary>

**Request:**
```json
{
  "data": [{"date": "2024-01-01", "value": "3500"}],
  "date_column": "date",
  "value_column": "value",
  "periods": 4,
  "use_demo": false
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "historical": [{ "date": "2024-01-01", "value": 3500, "baseline": 3450 }],
    "forecast": [{ "date": "2024-02-05", "yhat": 4100, "yhat_lower": 3800, "yhat_upper": 4400 }],
    "summary": { "trend_pct": 8.5, "peak_week": "Week 3", "confidence_range": 600, "vs_baseline_pct": 5.2 },
    "insight": "Your sales are forecast to grow 8.5% over the next 4 weeks..."
  }
}
```
</details>

<details>
<summary><b>🚨 POST /api/anomalies — Detect Anomalies</b></summary>

**Request:**
```json
{
  "data": ["..."],
  "date_column": "date",
  "value_column": "value",
  "use_demo": false
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "chart_data": [{ "date": "...", "value": 3500, "rollingMean": 3400, "isAnomaly": false }],
    "anomalies": [{ "date": "2024-04-15", "value": 6200, "severity": "HIGH", "deviation": 3.8 }],
    "stats": { "total": 3, "high": 1, "medium": 2 }
  }
}
```
</details>

<details>
<summary><b>💬 POST /api/scenario — Model a Scenario</b></summary>

**Request:**
```json
{
  "question": "What if I run a 20% discount for 2 weeks?",
  "baseline_forecast": [{ "date": "...", "yhat": 4100 }],
  "history": [{ "role": "user", "content": "..." }],
  "use_demo": false
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "scenario_data": [{ "week": "Week 1", "baseline": 4100, "scenario": 4920 }],
    "summary": "The 20% discount is projected to increase units by 2,800 over 4 weeks...",
    "delta": 2800
  }
}
```
</details>

---

## 📄 CSV Format

<table>
<tr>
<th>📌 Requirement</th>
<th>✅ Details</th>
</tr>
<tr>
<td>📁 Format</td>
<td><code>.csv</code> with headers in row 1</td>
</tr>
<tr>
<td>🔢 Minimum rows</td>
<td>8 valid data points after cleaning</td>
</tr>
<tr>
<td>📅 Date column</td>
<td>Any parseable format — <code>YYYY-MM-DD</code> recommended</td>
</tr>
<tr>
<td>💯 Value column</td>
<td>Integers or decimals — no text, no nulls</td>
</tr>
<tr>
<td>📆 Frequency</td>
<td>Weekly works best — daily also supported</td>
</tr>
</table>

```csv
date,sales
2023-01-02,3421
2023-01-09,3689
2023-01-16,3512
2023-01-23,3780
```

---

## 🔐 Environment Variables

> ⚠️ **Never commit `.env`** — only `.env.example` goes to GitHub.

**Backend (`backend/.env`)**

<table>
<tr>
<th>🔑 Variable</th>
<th>📌 Required</th>
<th>📝 Description</th>
</tr>
<tr>
<td><code>GEMINI_API_KEY</code></td>
<td>⭐ Recommended</td>
<td>Google Gemini key for AI insights</td>
</tr>
<tr>
<td><code>GEMINI_MODEL</code></td>
<td>No</td>
<td>Default: <code>gemini-2.0-flash</code></td>
</tr>
<tr>
<td><code>GROQ_API_KEY</code></td>
<td>No</td>
<td>Auto-fallback if Gemini fails</td>
</tr>
<tr>
<td><code>FLASK_ENV</code></td>
<td>No</td>
<td><code>development</code> or <code>production</code></td>
</tr>
<tr>
<td><code>FLASK_SECRET_KEY</code></td>
<td>✅ Yes (prod)</td>
<td>Strong random string for Flask sessions</td>
</tr>
<tr>
<td><code>FRONTEND_URL</code></td>
<td>No</td>
<td>CORS origin (default: <code>http://localhost:3000</code>)</td>
</tr>
</table>

**Frontend (`frontend/.env.local`)**

<table>
<tr>
<th>🔑 Variable</th>
<th>📌 Required</th>
<th>📝 Description</th>
</tr>
<tr>
<td><code>NEXT_PUBLIC_API_URL</code></td>
<td>No</td>
<td>Flask URL (default: <code>http://localhost:5000</code>)</td>
</tr>
</table>

---

## ⚠️ Known Limitations

> Honest about what's not done — because integrity > hype.

- 📊 **Scenario chart** — returns text analysis only; visual side-by-side chart not yet implemented
- 📏 **Min data** — fewer than 8 valid rows will be rejected
- ⏱️ **Frequency** — hourly / sub-daily data not supported yet
- 🪟 **Windows Prophet** — may need [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) to install
- 🌐 **No persistence** — session-based only, no user accounts or saved history

---

## 🐛 Troubleshooting

<details>
<summary><b>🔴 Backend won't start</b></summary>

| ❌ Error | ✅ Fix |
|---|---|
| `ModuleNotFoundError: prophet` | `pip install prophet` — on Apple Silicon: `brew install cmake` first |
| `ModuleNotFoundError: google.generativeai` | `pip install google-generativeai==0.7.2` |
| Port 5000 in use | Change `port=5000` in `app.py` and update `NEXT_PUBLIC_API_URL` |

</details>

<details>
<summary><b>🟡 Frontend errors</b></summary>

| ❌ Error | ✅ Fix |
|---|---|
| `Cannot find module '@/context/DataContext'` | Ensure `frontend/context/DataContext.tsx` exists |
| `Network Error` / CORS in console | Check `FRONTEND_URL` in `backend/.env` exactly matches Next.js URL + port |

</details>

<details>
<summary><b>🟠 API returns success: false</b></summary>

| ❌ Message | ✅ Fix |
|---|---|
| `"Only N valid rows found"` | CSV has fewer than 8 clean rows — check blanks, bad dates |
| `"Date column 'X' not found"` | Use the Upload column selector to pick the right columns |
| Gemini errors | Falls back to rule-based text automatically — set `GEMINI_API_KEY` for full AI |

</details>

---

## 🚢 Production Deploy

```bash
# 🐍 Backend — swap Flask dev server for gunicorn
pip install gunicorn
gunicorn -w 2 -b 0.0.0.0:5000 app:app

# 🖥️ Frontend — static build
npm run build
npm start
```

> 🔒 Set `FRONTEND_URL` to your prod domain. Generate a strong `FLASK_SECRET_KEY`. Never ship `.env`.

---

## 🔭 What's Next

> If we had more time, here's what's coming:

- 📊 Visual side-by-side scenario comparison charts
- 📅 Monthly + hourly data frequency support
- 👤 User accounts with saved forecast history
- 📧 Real-time anomaly email/Slack alerts
- 🌍 Multi-dataset comparison across regions

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&animation=twinkling" width="100%"/>

**Built with 🔥 for NatWest Code for Purpose — India Hackathon 2026**

[![Made with Love](https://img.shields.io/badge/Made_with-❤️_in_India-FF6B6B?style=for-the-badge)](https://github.com/HimaniMahajan27/ForecastIQ)
[![NatWest](https://img.shields.io/badge/NatWest-Code_for_Purpose-6366f1?style=for-the-badge)](https://github.com/HimaniMahajan27/ForecastIQ)

*Stop looking backwards. Start forecasting forward.* 🚀

</div>
