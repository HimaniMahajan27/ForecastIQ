# 🔮 ForecastIQ — AI Predictive Forecasting Platform

<div align="center">

![ForecastIQ Banner](https://img.shields.io/badge/ForecastIQ-AI%20Forecasting%20Platform-6366f1?style=for-the-badge&logo=chart-line&logoColor=white)

**Upload any time-series CSV and instantly get Prophet-powered forecasts, rolling z-score anomaly detection, and Gemini-driven scenario analysis — all explained in plain English. No data science required.**

[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![Flask](https://img.shields.io/badge/Flask-3.0-000000?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![Prophet](https://img.shields.io/badge/Prophet-1.1.5-0052CC?style=flat-square&logo=facebook&logoColor=white)](https://facebook.github.io/prophet)
[![Gemini](https://img.shields.io/badge/Gemini-1.5%20Flash-4285F4?style=flat-square&logo=google&logoColor=white)](https://aistudio.google.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![License](https://img.shields.io/badge/License-Apache%202.0-green?style=flat-square)](LICENSE)

</div>

---

## 📖 Overview

**ForecastIQ** transforms raw historical data into actionable forecasts — without requiring any data science expertise.

> 🎯 **What it does:** Accepts any time-series CSV and generates 4-week forecasts, detects anomalies, and models business scenarios using AI.
>
> 🧩 **What problem it solves:** Most teams rely only on past data and lack accessible, transparent forecasting tools. ForecastIQ bridges that gap with honest, uncertainty-aware predictions explained in plain English.
>
> 👥 **Who it's for:** Business analysts, operations teams, product managers, and non-technical decision-makers who need reliable forecasting without writing a single line of code.

---

## ✨ Features

> All features listed below are **implemented and working** in the current codebase.

- 📈 **4-Week Prophet Forecast** — Facebook Prophet model generates weekly predictions with full confidence bands (p10/p50/p90)
- 🎯 **Uncertainty Ranges** — Every forecast includes Low / Likely / High bounds so users understand risk, not just a single number
- 📊 **Baseline Comparison** — Moving average baseline runs alongside Prophet to prevent overfitting and validate results
- 🚨 **Anomaly Detection** — Rolling z-score algorithm flags unexpected spikes and dips with HIGH / MEDIUM severity labels
- 🤖 **AI Plain-English Insights** — Google Gemini 1.5 Flash explains every forecast and anomaly in non-technical language
- 💬 **Scenario Chat Interface** — Multi-turn conversational AI lets users ask "What if demand drops 15%?" and get modelled responses
- 📂 **CSV Upload with Auto-Detection** — Drag-and-drop upload with automatic date/value column detection and validation
- 🧪 **Demo Mode** — Pre-loaded 52-week synthetic sales dataset so the app works instantly with no setup
- 🔁 **Graceful AI Fallback** — If Gemini API is unavailable, the app falls back to rule-based text — forecasting always works
- 🔒 **No API Keys Required to Run** — Prophet and anomaly detection run fully locally; Gemini is optional

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    USER BROWSER                          │
│              Next.js 15 + React 19 + TypeScript          │
│         [ Upload CSV ] → [ Forecast ] → [ Anomalies ]    │
│                      ↕ Scenario Chat                     │
└──────────────────────────┬──────────────────────────────┘
                           │ HTTP / REST
                           ▼
┌─────────────────────────────────────────────────────────┐
│                  FLASK BACKEND (Port 5000)               │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │ /api/forecast│  │/api/anomalies│  │ /api/scenario │  │
│  └──────┬──────┘  └──────┬───────┘  └───────┬───────┘  │
│         │                │                   │           │
│  ┌──────▼──────┐  ┌──────▼───────┐  ┌───────▼───────┐  │
│  │   Prophet   │  │  Rolling     │  │    Gemini     │  │
│  │   Service   │  │  Z-Score     │  │    AI API     │  │
│  └─────────────┘  └──────────────┘  └───────────────┘  │
│         │                                               │
│  ┌──────▼──────────────────────────────────────────┐   │
│  │         CSV Parser + Data Validation             │   │
│  │              (Marshmallow + pandas)              │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| 🖥️ Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS v4 |
| 🧩 UI Components | shadcn/ui, Radix UI, Recharts |
| ⚙️ Backend | Python 3.11+, Flask 3, Flask-CORS |
| 🔮 Forecasting | Facebook Prophet (local, no API needed) |
| 🚨 Anomaly Detection | Rolling z-score via pandas/numpy |
| 🤖 AI Insights | Google Gemini 1.5 Flash |
| ✅ Data Validation | Marshmallow (backend), TypeScript (frontend) |

---

## 📁 Project Structure

```
ForeCastIQ/
├── 🖥️ frontend/                  # Next.js 15 application
│   ├── app/
│   │   ├── layout.tsx            # Root layout with fonts
│   │   ├── page.tsx              # Landing page
│   │   └── app/
│   │       ├── layout.tsx        # App shell: DataProvider + Sidebar + MobileNav
│   │       ├── page.tsx          # Forecast tab (Prophet results)
│   │       ├── anomalies/        # Anomaly detection tab
│   │       ├── scenario/         # Scenario chat tab
│   │       └── upload/           # CSV upload page
│   ├── components/
│   │   ├── forecastiq/           # App-specific components
│   │   │   ├── charts/           # ForecastChart, AnomalyChart, ScenarioChart
│   │   │   ├── anomaly-card      # Per-anomaly explanation card
│   │   │   ├── csv-upload        # Drag-and-drop CSV parser
│   │   │   ├── data-summary      # Forecast data table
│   │   │   ├── insight-card      # Gemini AI insight display
│   │   │   ├── stat-card         # KPI metric cards
│   │   │   └── scenario-chat     # Multi-turn chat interface
│   │   ├── landing/              # Landing page sections
│   │   └── ui/                   # shadcn/ui primitives
│   ├── context/
│   │   └── DataContext.tsx       # Global state: CSV data + all API results
│   ├── lib/
│   │   ├── api.ts                # All fetch calls to Flask backend
│   │   ├── demo-data.ts          # Fallback demo data for UI previews
│   │   └── utils.ts              # Tailwind class merger
│   └── package.json
│
├── ⚙️ backend/                   # Flask Python application
│   ├── app.py                    # Application factory + blueprint registration
│   ├── config.py                 # Centralised env var loading
│   ├── requirements.txt          # Python dependencies
│   ├── routes/
│   │   ├── forecast.py           # POST /api/forecast
│   │   ├── anomalies.py          # POST /api/anomalies
│   │   └── scenario.py           # POST /api/scenario
│   ├── services/
│   │   ├── prophet_service.py    # Facebook Prophet wrapper
│   │   ├── anomaly_service.py    # Rolling z-score detection
│   │   ├── baseline_service.py   # Moving average baseline
│   │   └── gemini_service.py     # Google Gemini AI integration
│   ├── utils/
│   │   └── csv_parser.py         # CSV validation + pandas DataFrame builder
│   ├── tests/                    # Pytest test suite
│   └── .env.example              # Environment variable template
│
└── 📄 README.md
```

---

## 🚀 Setup Instructions

### 📋 Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| 🟢 Node.js | 18+ | With npm or pnpm |
| 🐍 Python | 3.11+ | Required for backend |
| 🔑 Gemini API Key | Optional | Free at [aistudio.google.com](https://aistudio.google.com/app/apikey) |

> 💡 **Note:** The app works without a Gemini key — AI insights fall back to rule-based text. Prophet forecasting and anomaly detection are **fully local**.

---

### 1️⃣ Backend Setup

```bash
cd backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate        # macOS/Linux
# venv\Scripts\activate         # Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env and set your GEMINI_API_KEY

# Start the Flask backend
python app.py
# → Running on http://localhost:5000
```

**✅ Verify backend is running:**
```bash
curl http://localhost:5000/health
# {"status": "ok", "version": "1.0.0"}
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.local.example .env.local
# Default value works if backend runs on port 5000

# Start the Next.js development server
npm run dev
# → Running on http://localhost:3000
```

Open **http://localhost:3000** in your browser. 🎉

---

### 3️⃣ Using the App

| Step | Action |
|---|---|
| 🏠 Landing Page | Click **"Get Started"** or navigate to `/app` |
| 🧪 Demo Mode | App auto-loads `demo_sales.csv` — click **Run Analysis** on any tab |
| 📂 Your Data | Go to `/app/upload`, drag a CSV, select columns, click **Use this data** |
| 💬 Scenario Chat | Ask *"What if I run a 20% marketing push for 2 weeks?"* |

---

## 📡 API Endpoints

All endpoints live under `http://localhost:5000`

### `GET /health`
```json
{ "status": "ok", "version": "1.0.0" }
```

---

### `POST /api/forecast`
> 🔮 Run a 4-week Prophet forecast with confidence bands

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

---

### `POST /api/anomalies`
> 🚨 Detect anomalies using rolling z-score (±2σ threshold)

**Request:**
```json
{
  "data": [...],
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

---

### `POST /api/scenario`
> 💬 Model a business scenario with Gemini AI

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

---

## 📄 CSV Format Requirements

| Requirement | Details |
|---|---|
| 📁 Format | `.csv` with headers in first row |
| 🔢 Minimum rows | 8 valid data points (after cleaning) |
| 📅 Date column | Any parseable format (YYYY-MM-DD recommended) |
| 💯 Value column | Numeric values (integers or decimals) |
| 📆 Frequency | Weekly recommended; daily also works |

**Example CSV:**
```csv
date,sales
2023-01-02,3421
2023-01-09,3689
2023-01-16,3512
2023-01-23,3780
```

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | ⭐ Recommended | Google Gemini API key for AI insights |
| `GEMINI_MODEL` | No | Model name (default: `gemini-2.0-flash`) |
| `GROQ_API_KEY` | No | Groq fallback if Gemini fails |
| `FLASK_ENV` | No | `development` or `production` |
| `FLASK_SECRET_KEY` | ✅ Yes (prod) | Random secret string for Flask sessions |
| `FRONTEND_URL` | No | Next.js URL for CORS (default: `http://localhost:3000`) |

### Frontend (`frontend/.env.local`)

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | No | Flask backend URL (default: `http://localhost:5000`) |

> ⚠️ **Never commit your `.env` file.** Copy `.env.example` → `.env` and fill in your own keys locally.

---

## ⚠️ Limitations

> Honest description of current state — features below are **not yet fully implemented:**

- 📊 **Scenario comparison chart** — scenario analysis currently returns text output; side-by-side visual chart comparison is not yet implemented
- 📏 **Minimum data requirement** — datasets with fewer than 8 valid rows are not supported
- ⏱️ **Data frequency** — hourly and sub-daily data are not currently supported; weekly and daily work best
- 🪟 **Windows Prophet install** — `pip install prophet` may fail on Windows without Microsoft C++ Build Tools installed
- 🌐 **No user accounts** — all data is session-based; there is no persistent storage or login system

---

## 🐛 Troubleshooting

### 🔴 Backend won't start
| Error | Fix |
|---|---|
| `ModuleNotFoundError: prophet` | Run `pip install prophet`. On Apple Silicon: `brew install cmake` first |
| `ModuleNotFoundError: google.generativeai` | Run `pip install google-generativeai==0.7.2` |
| Port 5000 in use | Change `port=5000` in `app.py` and update `NEXT_PUBLIC_API_URL` |

### 🟡 Frontend errors
| Error | Fix |
|---|---|
| `Cannot find module '@/context/DataContext'` | Ensure `frontend/context/DataContext.tsx` exists |
| `Network Error` / CORS error | Check `FRONTEND_URL` in `backend/.env` matches your Next.js URL exactly |

### 🟠 API returns `{ success: false }`
| Message | Fix |
|---|---|
| `"Only N valid rows found"` | CSV has fewer than 8 clean rows — check for blanks or bad dates |
| `"Date column 'X' not found"` | Use the Upload page column selector to pick correct columns |
| Gemini errors | App falls back to rule-based text — set `GEMINI_API_KEY` for full AI |

---

## 🚢 Production Deployment

```bash
# Backend — use gunicorn
pip install gunicorn
gunicorn -w 2 -b 0.0.0.0:5000 app:app

# Frontend — build and serve
npm run build
npm start
```

> 🔒 Update `FRONTEND_URL` in `backend/.env` to your production domain and generate a strong `FLASK_SECRET_KEY`.

---

## 🔭 Future Improvements

> Features we would add with more time:

- 📊 Visual side-by-side scenario comparison charts
- 📅 Support for monthly and hourly data frequencies
- 👤 User accounts with saved forecast history
- 📧 Email alerts for detected anomalies
- 🌍 Multi-dataset comparison across regions or products

---

<div align="center">

**Built for NatWest Code for Purpose — India Hackathon 2026**

![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square)
![Hackathon](https://img.shields.io/badge/NatWest-Code%20for%20Purpose-6366f1?style=flat-square)

</div>
