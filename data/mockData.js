// ============================================================
// MOCK DATA - Web-Based Crop Insurance System
// LGU Sto. Niño
// ============================================================

const MOCK_DATA = {
  // ── Users ────────────────────────────────────────────────
  users: [
    {
      id: "USR-001",
      firstName: "Juan",
      lastName: "dela Cruz",
      email: "juan@example.com",
      password: "password123",
      phone: "09171234567",
      address: "Brgy. San Isidro, Sto. Niño",
      farmerType: "Small Farmer",
      avatar: null,
      createdAt: "2025-01-10",
    },
    {
      id: "USR-002",
      firstName: "Maria",
      lastName: "Santos",
      email: "maria@example.com",
      password: "password123",
      phone: "09281234567",
      address: "Brgy. Mabini, Sto. Niño",
      farmerType: "Agrarian Reform Beneficiary",
      avatar: null,
      createdAt: "2025-02-15",
    },
  ],

  // ── Admin ─────────────────────────────────────────────────
  admin: {
    id: "ADM-001",
    firstName: "Admin",
    lastName: "LGU",
    email: "admin@lgu-stonino.gov.ph",
    password: "admin2024",
    role: "Administrator",
    department: "Agricultural Office",
  },

  // ── Applications ──────────────────────────────────────────
  applications: [
    {
      id: "APP-2025-001",
      userId: "USR-001",
      farmerName: "Juan dela Cruz",
      applicationType: "New",
      cornType: "Yellow Corn",
      dateOfApplication: "2025-03-01",
      totalArea: "2.5",
      farmerCategory: "Small Farmer",
      farmLocation: "Brgy. San Isidro, Sto. Niño, South Cotabato",
      plantingDate: "2025-01-15",
      harvestDate: "2025-04-15",
      landCategory: "Irrigated",
      tenuralStatus: "Owner",
      plantingMethod: "Direct Seeding",
      dateOfLoss: "2025-02-20",
      causeOfDamage: "Flood",
      percentDamage: "75",
      financialDamage: "45000",
      desiredCoverage: "50000",
      status: "Approved",
      verificationStatus: {
        farmInfo: "Verified",
        damageReport: "Verified",
        coverage: "Verified",
      },
      submittedAt: "2025-03-01T08:30:00",
      updatedAt: "2025-03-10T14:00:00",
    },
    {
      id: "APP-2025-002",
      userId: "USR-002",
      farmerName: "Maria Santos",
      applicationType: "Renewal",
      cornType: "White Corn",
      dateOfApplication: "2025-03-05",
      totalArea: "1.8",
      farmerCategory: "Agrarian Reform Beneficiary",
      farmLocation: "Brgy. Mabini, Sto. Niño, South Cotabato",
      plantingDate: "2025-01-20",
      harvestDate: "2025-04-20",
      landCategory: "Rain-fed",
      tenuralStatus: "Lessee",
      plantingMethod: "Transplanting",
      dateOfLoss: "2025-02-25",
      causeOfDamage: "Drought",
      percentDamage: "60",
      financialDamage: "32000",
      desiredCoverage: "35000",
      status: "Pending",
      verificationStatus: {
        farmInfo: "Verified",
        damageReport: "Pending",
        coverage: "Pending",
      },
      submittedAt: "2025-03-05T09:15:00",
      updatedAt: "2025-03-05T09:15:00",
    },
    {
      id: "APP-2025-003",
      userId: "USR-001",
      farmerName: "Juan dela Cruz",
      applicationType: "New",
      cornType: "Yellow Corn",
      dateOfApplication: "2025-03-15",
      totalArea: "3.0",
      farmerCategory: "Small Farmer",
      farmLocation: "Brgy. Santo Niño, Sto. Niño, South Cotabato",
      plantingDate: "2025-02-01",
      harvestDate: "2025-05-01",
      landCategory: "Irrigated",
      tenuralStatus: "Owner",
      plantingMethod: "Direct Seeding",
      dateOfLoss: "2025-03-10",
      causeOfDamage: "Pest/Disease",
      percentDamage: "40",
      financialDamage: "28000",
      desiredCoverage: "30000",
      status: "Rejected",
      verificationStatus: {
        farmInfo: "Verified",
        damageReport: "Rejected",
        coverage: "Pending",
      },
      submittedAt: "2025-03-15T10:00:00",
      updatedAt: "2025-03-20T11:30:00",
    },
    {
      id: "APP-2025-004",
      userId: "USR-002",
      farmerName: "Maria Santos",
      applicationType: "New",
      cornType: "White Corn",
      dateOfApplication: "2025-04-01",
      totalArea: "2.2",
      farmerCategory: "Agrarian Reform Beneficiary",
      farmLocation: "Brgy. Mabini, Sto. Niño, South Cotabato",
      plantingDate: "2025-02-15",
      harvestDate: "2025-05-15",
      landCategory: "Rain-fed",
      tenuralStatus: "Owner",
      plantingMethod: "Direct Seeding",
      dateOfLoss: "2025-03-28",
      causeOfDamage: "Flood",
      percentDamage: "85",
      financialDamage: "52000",
      desiredCoverage: "55000",
      status: "Pending",
      verificationStatus: {
        farmInfo: "Pending",
        damageReport: "Pending",
        coverage: "Pending",
      },
      submittedAt: "2025-04-01T07:45:00",
      updatedAt: "2025-04-01T07:45:00",
    },
    {
      id: "APP-2025-005",
      userId: "USR-001",
      farmerName: "Pedro Reyes",
      applicationType: "Renewal",
      cornType: "Yellow Corn",
      dateOfApplication: "2025-04-05",
      totalArea: "4.0",
      farmerCategory: "Commercial Farmer",
      farmLocation: "Brgy. Poblacion, Sto. Niño, South Cotabato",
      plantingDate: "2025-02-20",
      harvestDate: "2025-05-20",
      landCategory: "Irrigated",
      tenuralStatus: "Owner",
      plantingMethod: "Direct Seeding",
      dateOfLoss: "2025-04-01",
      causeOfDamage: "Typhoon",
      percentDamage: "90",
      financialDamage: "78000",
      desiredCoverage: "80000",
      status: "Approved",
      verificationStatus: {
        farmInfo: "Verified",
        damageReport: "Verified",
        coverage: "Verified",
      },
      submittedAt: "2025-04-05T08:00:00",
      updatedAt: "2025-04-10T09:00:00",
    },
  ],

  // ── Claims ────────────────────────────────────────────────
  claims: [
    {
      id: "CLM-2025-001",
      applicationId: "APP-2025-001",
      userId: "USR-001",
      farmerName: "Juan dela Cruz",
      date: "2025-03-12",
      dateOfLoss: "2025-02-20",
      causeOfDamage: "Flood",
      percentDamage: "75",
      description:
        "Heavy flooding caused by continuous rain submerged the entire farm for 3 days resulting in significant crop loss.",
      photoUploaded: true,
      status: "Approved",
      indemnity: "37500",
      submittedAt: "2025-03-12T10:30:00",
      updatedAt: "2025-03-18T14:00:00",
    },
    {
      id: "CLM-2025-002",
      applicationId: "APP-2025-002",
      userId: "USR-002",
      farmerName: "Maria Santos",
      date: "2025-03-20",
      dateOfLoss: "2025-02-25",
      causeOfDamage: "Drought",
      percentDamage: "60",
      description:
        "Prolonged dry spell lasting 6 weeks severely affected crop growth and development.",
      photoUploaded: true,
      status: "Pending",
      indemnity: null,
      submittedAt: "2025-03-20T11:00:00",
      updatedAt: "2025-03-20T11:00:00",
    },
    {
      id: "CLM-2025-003",
      applicationId: "APP-2025-005",
      userId: "USR-001",
      farmerName: "Pedro Reyes",
      date: "2025-04-08",
      dateOfLoss: "2025-04-01",
      causeOfDamage: "Typhoon",
      percentDamage: "90",
      description:
        "Typhoon Carina caused massive destruction to the farm including uprooted corn plants.",
      photoUploaded: true,
      status: "Pending",
      indemnity: null,
      submittedAt: "2025-04-08T09:00:00",
      updatedAt: "2025-04-08T09:00:00",
    },
  ],

  // ── Dashboard Stats ───────────────────────────────────────
  dashboardStats: {
    totalFarmersAffected: 248,
    totalAreaDamaged: 512.5,
    estimatedLoss: 3750000,
    claimsFiled: 186,
    totalApplications: 312,
    approved: 145,
    pending: 98,
    rejected: 69,
    totalIndemnity: 8250000,
    monthlyData: {
      labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      applications: [28, 42, 35, 55, 68, 72, 45],
      claims: [15, 28, 22, 40, 52, 58, 35],
      indemnity: [450000, 680000, 520000, 890000, 1100000, 1250000, 780000],
    },
    damageByType: {
      labels: ["Flood", "Drought", "Pest/Disease", "Typhoon", "Others"],
      data: [35, 25, 20, 15, 5],
    },
    statusDistribution: {
      labels: ["Approved", "Pending", "Rejected"],
      data: [145, 98, 69],
    },
  },
};

// ── Initialize localStorage with mock data ────────────────
function initializeMockData() {
  if (!localStorage.getItem("lgu_initialized")) {
    localStorage.setItem("lgu_users", JSON.stringify(MOCK_DATA.users));
    localStorage.setItem(
      "lgu_applications",
      JSON.stringify(MOCK_DATA.applications),
    );
    localStorage.setItem("lgu_claims", JSON.stringify(MOCK_DATA.claims));
    localStorage.setItem("lgu_initialized", "true");
    console.log("✅ Mock data initialized in localStorage");
  }
}

// ── Utility helpers ───────────────────────────────────────
function generateId(prefix) {
  const year = new Date().getFullYear();
  const num = Math.floor(Math.random() * 900) + 100;
  return `${prefix}-${year}-${num}`;
}

function getUsers() {
  return JSON.parse(localStorage.getItem("lgu_users") || "[]");
}

function getApplications() {
  return JSON.parse(localStorage.getItem("lgu_applications") || "[]");
}

function getClaims() {
  return JSON.parse(localStorage.getItem("lgu_claims") || "[]");
}

function saveApplications(apps) {
  localStorage.setItem("lgu_applications", JSON.stringify(apps));
}

function saveClaims(claims) {
  localStorage.setItem("lgu_claims", JSON.stringify(claims));
}

function saveUsers(users) {
  localStorage.setItem("lgu_users", JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("lgu_current_user") || "null");
}

function isAdminLoggedIn() {
  return localStorage.getItem("lgu_admin_logged_in") === "true";
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(amount);
}

function formatDate(dateString) {
  if (!dateString) return "—";
  const d = new Date(dateString);
  return d.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getStatusBadge(status) {
  const classes = {
    Approved: "badge-success",
    Pending: "badge-warning",
    Rejected: "badge-danger",
    Verified: "badge-success",
  };
  return `<span class="badge ${classes[status] || "badge-secondary"}">${status}</span>`;
}

// Initialize on load
initializeMockData();
