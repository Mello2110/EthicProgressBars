# Ethnic Progress Bar

**Significant contributions to humanity – visualized by impact & origin.**

A single-page interactive data visualization that maps humanity's most impactful inventions and Nobel Prize laureates across culture groups, scored by societal impact and revolutionary potential.

> **[Live Demo →](https://mello2110.github.io/EthicProgressBars/)**

---

## Overview

Ethnic Progress Bar visualizes ~60 hand-curated inventions and ~1,000 Nobel Prize laureates on an interactive chart. Each item is assigned to a geographical culture group (Europe, East Asia, Americas, etc.) and scored across multiple dimensions. Users can switch between datasets, filter by category or score, and explore detailed breakdowns for each entry.

### Views

| View | Description |
|------|-------------|
| **Groups** | Stacked bar chart — one bar per culture group, height = cumulative score |
| **Timeline** | Chronological view — each item is one bar, sorted by year |
| **Revolution** | Alternative scoring axis focusing on paradigm-breaking impact |

---

## Features

### 🔀 Dual Dataset Switching
Switch between **Inventions** (curated list of ~60 milestones from 10,000 BC to 2022) and **Nobel Prizes** (~1,000 laureates from 1901–2023) with a single click. Categories, scoring methodology, and the legend adapt dynamically.

### 📊 Dual Scoring System
Every item is evaluated on two independent axes:
- **Score A (Societal Impact):** Reach · Durability · Multiplier · Quality of Life (max 100)
- **Score B (Revolutionary):** Concept Break · Instant Impact · Societal Shock (max 100)

### 🎯 Advanced Filtering
- **Category Filter:** Toggle individual categories (Medicine, Physics, Communication, etc.)
- **Score Range Filter:** Set min/max score thresholds to isolate high- or low-impact items — works across all views including Timeline

### 📈 Dynamic Legend
The culture group legend re-sorts itself by total score whenever filters change, giving an immediate sense of which groups dominate under the current criteria.

### 🔍 Rich Detail Modals
Click any bar segment to open a detail view with:
- Full description and historical context
- Score breakdown per dimension with visual progress bars
- Inventor/laureate attribution and origin

### 💡 Responsive Tooltips
Hover over any bar for a quick-view tooltip showing year, name, group, category, and score.

---

## Technical Implementation

### Architecture
The entire application is contained in a **single `index.html` file** (~2,000 lines) — no build tools, no frameworks, no dependencies. Pure HTML + CSS + vanilla JavaScript.

### Data Collection

| Dataset | Source | Method |
|---------|--------|--------|
| **Inventions** | Manual research | ~60 entries hand-curated from historical sources. Each invention scored across 7 dimensions by evaluating historical consensus on reach, durability, and disruption. |
| **Nobel Prizes** | [Nobel Prize API](https://api.nobelprize.org/2.1/laureates) | Fetched via `generate_nobel_data.py`. Birth countries mapped to culture groups using a 100+ country lookup table. Scores generated algorithmically based on category, year, and shared/solo prize status. |

### Scoring Methodology
Each item has 7 raw score values that feed into two composite scores:

```
Score A = reach (0–25) + durability (0–25) + multiplier (0–30) + quality (0–20) = max 100
Score B = concept_break (0–40) + immediate_impact (0–30) + societal_shock (0–30) = max 100
```

Invention scores are manually assigned. Nobel scores are algorithmically derived — solo prizes and older achievements score higher on durability, physics/medicine score higher on multiplier, peace prizes score higher on societal shock.

### Key Implementation Details

- **Zero dependencies** — no React, no D3, no chart libraries. All bars, axes, and grids are hand-built with `createElement` and absolute positioning
- **Dynamic chip generation** — category buttons are generated from the active dataset config, updating automatically on dataset switch
- **Responsive layout** — ResizeObserver triggers re-render on window changes; sidebar + chart flex layout adapts
- **Country-to-group mapping** — Python script maps 100+ countries to 8 culture groups for accurate geographical attribution of Nobel laureates
- **Glassmorphism UI** — dark theme with gold accents, backdrop blur, and layered transparency for a premium visualization aesthetic

### File Structure

```
├── index.html              # Complete application (HTML + CSS + JS + data)
├── nobel_data.js            # Generated Nobel Prize dataset (~1,000 entries)
├── generate_nobel_data.py   # API fetcher + country mapper + score generator
├── laureate.json            # Raw API response cache
└── README.md
```

---

## Usage

Simply open `index.html` in any modern browser. No server required.

```bash
# Clone and open
git clone https://github.com/Mello2110/EthicProgressBars.git
cd EthicProgressBars
start index.html    # Windows
open index.html     # macOS
```

To regenerate Nobel data:
```bash
python generate_nobel_data.py
```

---

## License

MIT
