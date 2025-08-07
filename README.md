# Ethiopia CMSP Directory Dashboard

A responsive and informative web dashboard designed to explore and showcase **Ethiopia's Capital Market Service Providers (CMSPs)**. Users can filter CMSPs by category (broker, dealer, advisor, custodian), view summary cards in a responsive grid layout, and access detailed information via modals.

Built using **Next.js**, **Zustand**, **Shadcn/UI**, and **Tailwind CSS**, this dashboard offers a clean and performant interface for interacting with static CMSP data.

---

## 🚀 Features

* **Category Filtering**
  Visually engaging button-based filters with icons to explore CMSPs by type (Broker, Dealer, Advisor, Custodian).

* **Search Functionality**
  Search CMSPs by name, services, type, or overview with a dynamic search bar.

* **Responsive Card Grid**
  Displays CMSPs in a mobile-friendly grid view with essential information:

  * Name
  * Type(s)
  * Licensed Date
  * Short overview
  * Key contact details (address, phone, website)

* **Detail Modal**
  Click on any card to view detailed info in a modal:

  * Overview & mission
  * Licensing info (date, number, regulator)
  * Services offered
  * Company stats (capital, branches)
  * Full contact details (phone, email, social, etc.)

* **Statistics Section**
  Displays aggregate metrics such as total CMSPs, and active providers.

* **Responsive Design**
  Fully optimized for desktop, tablet, and mobile devices.

* **Static Data (Mock API)**
  CMSP data is stored in `cmsp-data.json` for demonstration purposes, simulating future API integration.

* **Visual Enhancements**
  Includes **Lucide React** icons for improved UX and clarity.

---

## 🛠 Tech Stack

| Technology       | Description                                        |
| ---------------- | -------------------------------------------------- |
| **Next.js**      | React framework for SSR and static site generation |
| **Zustand**      | Lightweight state management                       |
| **Shadcn/UI**    | Reusable, modern UI components                     |
| **Tailwind CSS** | Utility-first CSS framework                        |
| **TypeScript**   | Type-safe development                              |
| **Zod**          | Schema validation for CMSP data and filters        |
| **Lucide React** | Icon library for clean and intuitive visuals       |

---

## 📁 Project Structure

```
cmps_dashboard/
├── src/
│   ├── components/
│   │   └── dashboard/
│   │       ├── Header.tsx
│   │       ├── SearchBar.tsx
│   │       ├── CategoryFilter.tsx
│   │       ├── CardGrid.tsx
│   │       ├── CMSPCard.tsx
│   │       ├── Statistics.tsx
│   │       └── DetailModal.tsx
│   ├── data/
│   │   └── cmsp-data.json
│   ├── lib/
│   │   └── constants.ts
│   ├── stores/
│   │   └── cmsp-store.ts
│   ├── types/
│   │   └── cmsp.ts
│   └── app/
│       └── page.tsx
├── public/
├── package.json
└── README.md
```

### Key Files

* `src/components/dashboard/`: UI components for filtering, cards, modals, etc.
* `src/data/cmsp-data.json`: Mock CMSP data (static).
* `src/lib/constants.ts`: CMSP types and status color mappings.
* `src/stores/cmsp-store.ts`: Zustand store for app state.
* `src/types/cmsp.ts`: Type definitions and Zod schemas.
* `src/app/page.tsx`: Main page layout and composition.

---

## 📊 Data Sources

The data in `cmsp-data.json` is mock content based on publicly available sources:

* **Ethiopian Capital Markets Authority (ECMA)**: Regulatory and licensing data.
* **Ethiopian Securities Exchange (ESX)**: Market participant information.
* **Public Filings & Press Releases**: General company info.

> **Note:** Data is for demonstration purposes only. Verify all licensing information with [ECMA](https://ecma.gov.et) for accuracy.

---

## ⚙️ Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd cmps_dashboard
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` to view the dashboard.

4. **Build for Production**

   ```bash
   npm run build
   npm start
   ```

5. **Lint the Codebase**

   ```bash
   npm run lint
   ```

---

## 🖼 Screenshots

<img width="1752" height="899" alt="image" src="https://github.com/user-attachments/assets/7b1434a0-6e62-4cfb-9991-9fc31d4a85a6" />
<img width="1752" height="899" alt="image" src="https://github.com/user-attachments/assets/b0fb1b7e-8f1c-4b7a-bacb-03917af6d4fd" />

---

## 🧑‍💻 Usage

* **Filter by Category**
  Click the category buttons (with icons) to filter CMSPs by type.

* **Search**
  Use the search bar to filter CMSPs by name, description, or service.

* **View More Details**
  Click on any CMSP card to open a modal with full information.

* **View Statistics**
  See the top of the page for key metrics on CMSPs and their operations.

* **Reset Filters**
  Use the "Clear All" button to remove filters and return to the full CMSP list.

---

## ✅ Acceptance Criteria Met

* Category filters work as intended.
* CMSP cards open detailed modals with extended information.
* Fully responsive UI with icon-enhanced readability.
* Data sources documented in this README.
* Includes static/mock dataset (`cmsp-data.json`) in the repository.

---

## 🔮 Future Improvements

* **API Integration**: Connect to a backend or CMS for dynamic data.
* **Advanced Filtering**: Add sort options (e.g., by date, number of branches).
* **Data Export**: CSV or PDF export of filtered CMSP data.
* **Accessibility Enhancements**: ARIA roles and screen reader support.
* **Dark Mode & Themes**: Via `next-themes` for theme switching.

