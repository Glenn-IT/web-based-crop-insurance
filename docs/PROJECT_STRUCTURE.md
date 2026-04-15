# 📁 Project Structure

**Web-Based Crop Insurance System — LGU Sto. Niño**
A fully interactive frontend prototype with no backend or database. All data is simulated using JavaScript and `localStorage`.

---

## 🗂️ Directory Tree

```
web-based-crop-insurance/
│
├── index.html                          # 🔑 User Login (Entry Point)
│
├── assets/
│   ├── css/
│   │   └── style.css                   # 🎨 Global stylesheet (design system, layout, components)
│   ├── js/
│   │   └── app.js                      # ⚙️ Shared JS utilities (toast, modal, auth guards, navigation)
│   └── images/                         # 🖼️ Static images / placeholders
│
├── data/
│   └── mockData.js                     # 🗃️ Mock data store + localStorage CRUD helpers
│
├── components/
│   ├── user-sidebar.html               # 📌 User sidebar HTML snippet (reference)
│   └── admin-sidebar.html              # 📌 Admin sidebar HTML snippet (reference)
│
├── views/
│   ├── user/
│   │   ├── signup.html                 # 📝 Farmer registration
│   │   ├── forgot-password.html        # 🔓 Password reset (UI only)
│   │   ├── dashboard.html              # 🏠 Farmer dashboard (stats + charts)
│   │   ├── new-application.html        # 📋 New application form (4-step stepper)
│   │   ├── my-applications.html        # 📂 View & edit submitted applications
│   │   ├── application-status.html     # 🔍 Track application verification progress
│   │   ├── file-claim.html             # 📩 Submit insurance claims
│   │   └── profile.html               # 👤 Farmer profile & password management
│   │
│   └── admin/
│       ├── login.html                  # 🔑 Admin login
│       ├── dashboard.html              # 📊 Admin overview (analytics + charts)
│       ├── view-applications.html      # 👁️ Read-only view of all applications
│       ├── manage-applications.html    # ⚙️ Full CRUD — approve / reject / edit applications
│       ├── claim-verification.html     # ✅ Review and process insurance claims
│       ├── reports.html                # 📈 System reports, charts, CSV export, print
│       └── admin-profile.html          # 👤 Admin profile & password management
│
└── docs/
    └── PROJECT_STRUCTURE.md            # 📖 This file
```

---

## 📄 File Descriptions

### Root

| File         | Description                                                                      |
| ------------ | -------------------------------------------------------------------------------- |
| `index.html` | User-facing login page. Entry point for farmers. Contains demo credential hints. |
| `README.md`  | Repository overview.                                                             |

---

### `assets/css/`

| File        | Description                                                                                                                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `style.css` | Full design system. Includes CSS custom properties (variables), layout (sidebar + topbar + main), stat cards, buttons, badges, tables, modals, stepper, toast notifications, loading spinner, file upload area, and print styles. |

---

### `assets/js/`

| File     | Description                                                                                                                                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app.js` | Shared JS utilities loaded on every page. Key functions: `showToast()`, `openModal()`, `closeModal()`, `requireAuth()`, `requireAdmin()`, `logout()`, `adminLogout()`, `navigateTo()`, `simulateLoading()`, `togglePassword()`, `animateCounter()`. |

---

### `data/`

| File          | Description                                                                                                                                                                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mockData.js` | Central mock data store. Seeds `localStorage` on first load. Exports helper functions: `getApplications()`, `getClaims()`, `getUsers()`, `saveApplications()`, `saveClaims()`, `saveUsers()`, `formatCurrency()`, `formatDate()`, `getStatusBadge()`, `generateId()`. |

---

### `components/`

| File                 | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| `user-sidebar.html`  | Reference HTML snippet for the farmer-side sidebar navigation. |
| `admin-sidebar.html` | Reference HTML snippet for the admin-side sidebar navigation.  |

> **Note:** Sidebars are embedded **inline** in each page for reliability. These component files serve as reference templates only.

---

### `views/user/`

| File                      | Description                                                                                                                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `signup.html`             | Farmer registration form. Validates input, checks for duplicate email, saves new user to `lgu_users` in localStorage.                                                                   |
| `forgot-password.html`    | Two-step password reset UI (enter email → success message). Prototype only — no actual email sent.                                                                                      |
| `dashboard.html`          | Main farmer dashboard. Displays stats (applications, approved, pending, claims), animated counters, Chart.js charts (doughnut + bar), recent applications list, and quick action tiles. |
| `new-application.html`    | Core feature. 4-step stepper form: ① Basic Info → ② Farm Info → ③ Damage Report → ④ Coverage & Consent. Saves to localStorage on submit with generated App ID.                          |
| `my-applications.html`    | Lists all applications for the logged-in farmer. Supports search/filter, view detail modal, and edit modal (for Pending applications).                                                  |
| `application-status.html` | Visual timeline tracker per application showing 5 verification stages: Submitted → Farm Info → Damage Review → Coverage → Final Decision.                                               |
| `file-claim.html`         | Claim submission form. Lets farmers select an approved application, fill damage details, upload photo (UI). Shows list of existing claims.                                              |
| `profile.html`            | Farmer profile page. Displays account info, allows editing all fields, and supports password change with current password validation.                                                   |

---

### `views/admin/`

| File                       | Description                                                                                                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `login.html`               | Admin login page. Validates against hardcoded admin credentials. Sets `lgu_admin_logged_in` session flag.                                                                          |
| `dashboard.html`           | Admin overview. Displays 5 stat cards and 4 Chart.js charts (monthly line, status doughnut, damage polar area, indemnity bar). Includes recent applications and claims tables.     |
| `view-applications.html`   | Read-only table of all applications with verification status columns (Farm Info, Damage Report, Coverage). Detail modal shows full application data.                               |
| `manage-applications.html` | Full management panel. Approve / Reject / set Pending per application. Edit farmer name, location, area, damage %, coverage, and admin notes. Auto-verifies all steps on approval. |
| `claim-verification.html`  | Claims review and processing. Filter by status, quick approve/reject buttons per row, full review modal with indemnity amount input and admin remarks.                             |
| `reports.html`             | System-wide reports. Summary stat cards, Chart.js visualizations, full applications table, full claims table (with totals), CSV export, and browser print support.                 |
| `admin-profile.html`       | Admin account page. Edit profile fields, change password with strength meter, activity summary (apps managed, claims verified, total indemnity), and security info panel.          |

---

## 🔐 Authentication

| Role            | Email                      | Password      |
| --------------- | -------------------------- | ------------- |
| Farmer (Demo 1) | `juan@example.com`         | `password123` |
| Farmer (Demo 2) | `maria@example.com`        | `password123` |
| Administrator   | `admin@lgu-stonino.gov.ph` | `admin2024`   |

---

## 🗃️ LocalStorage Keys

| Key                   | Description                                      |
| --------------------- | ------------------------------------------------ |
| `lgu_initialized`     | Flag — set to `"true"` after mock data is seeded |
| `lgu_users`           | JSON array of registered farmer accounts         |
| `lgu_applications`    | JSON array of all crop insurance applications    |
| `lgu_claims`          | JSON array of all submitted claims               |
| `lgu_current_user`    | JSON object of the currently logged-in farmer    |
| `lgu_admin_logged_in` | String `"true"` when admin is authenticated      |

---

## 🛠️ Tech Stack

| Technology             | Usage                                                                             |
| ---------------------- | --------------------------------------------------------------------------------- |
| **HTML5**              | Page structure — each page is a self-contained `.html` file                       |
| **CSS3**               | Custom design system (`style.css`) using CSS custom properties, flexbox, and grid |
| **Vanilla JavaScript** | All interactivity — no frameworks used                                            |
| **Chart.js 4.4.0**     | Charts via CDN (`cdn.jsdelivr.net`)                                               |
| **localStorage**       | Client-side data persistence (replaces backend/database)                          |

---

## 🚀 How to Run

1. Place the project folder inside your XAMPP `htdocs` directory:
   ```
   C:\xampp\htdocs\web-based-crop-insurance\
   ```
2. Start **Apache** in the XAMPP Control Panel.
3. Open your browser and navigate to:
   ```
   http://localhost/web-based-crop-insurance/
   ```
4. Log in as a farmer or admin using the credentials above.

---

## 📌 Navigation Flow

```
index.html (User Login)
    ├── views/user/signup.html
    ├── views/user/forgot-password.html
    └── views/user/dashboard.html
            ├── new-application.html
            ├── my-applications.html
            ├── application-status.html
            ├── file-claim.html
            └── profile.html

views/admin/login.html (Admin Login)
    └── views/admin/dashboard.html
            ├── view-applications.html
            ├── manage-applications.html
            ├── claim-verification.html
            ├── reports.html
            └── admin-profile.html
```

---

_Generated for LGU Sto. Niño — Crop Insurance System Prototype_
_Stack: HTML · CSS · Vanilla JS · Chart.js · localStorage_
