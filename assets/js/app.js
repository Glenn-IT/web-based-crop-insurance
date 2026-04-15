// ============================================================
// app.js — Global utilities, toast, auth guards, sidebar
// ============================================================

// ── Toast Notification System ─────────────────────────────
function showToast(title, message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const colors = {
    success: "#28a745",
    error: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
  };

  const icons = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
  };

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.style.setProperty("--toast-color", colors[type]);
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <div class="toast-content">
      <h6>${title}</h6>
      <p>${message}</p>
    </div>
    <button class="toast-close" onclick="removeToast(this.parentElement)">×</button>
    <div class="toast-progress"></div>
  `;

  container.appendChild(toast);

  setTimeout(() => removeToast(toast), 3200);
}

function removeToast(toast) {
  if (!toast || toast.classList.contains("removing")) return;
  toast.classList.add("removing");
  setTimeout(() => toast.remove(), 300);
}

// ── Loading Spinner ────────────────────────────────────────
function showLoading() {
  const overlay = document.createElement("div");
  overlay.className = "loading-overlay";
  overlay.id = "loading-overlay";
  overlay.innerHTML = `<div class="spinner"></div>`;
  document.body.appendChild(overlay);
}

function hideLoading() {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.remove();
}

function simulateLoading(callback, ms = 800) {
  showLoading();
  setTimeout(() => {
    hideLoading();
    if (callback) callback();
  }, ms);
}

// ── Modal Helpers ──────────────────────────────────────────
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Close modal on overlay click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.active").forEach((m) => {
      m.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
});

// ── Auth Guard ────────────────────────────────────────────
function requireAuth() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = "../../index.html";
  }
  return user;
}

function requireAdmin() {
  if (!isAdminLoggedIn()) {
    window.location.href = "../../views/admin/login.html";
  }
}

function logout() {
  localStorage.removeItem("lgu_current_user");
  showToast("Logged out", "You have been logged out successfully.", "info");
  setTimeout(() => (window.location.href = "../../index.html"), 1000);
}

function adminLogout() {
  localStorage.removeItem("lgu_admin_logged_in");
  showToast("Logged out", "Admin session ended.", "info");
  setTimeout(
    () => (window.location.href = "../../views/admin/login.html"),
    1000,
  );
}

// ── Sidebar Navigation ────────────────────────────────────
function setActiveNav(href) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.href && item.dataset.href.includes(href)) {
      item.classList.add("active");
    }
  });
}

function navigateTo(path) {
  simulateLoading(() => {
    window.location.href = path;
  }, 400);
}

// ── Password Toggle ────────────────────────────────────────
function togglePassword(inputId, iconEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === "password") {
    input.type = "text";
    iconEl.textContent = "🙈";
  } else {
    input.type = "password";
    iconEl.textContent = "👁️";
  }
}

// ── Debounce ──────────────────────────────────────────────
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ── Format Helpers (re-exported for pages that load app.js) ──
if (typeof formatCurrency === "undefined") {
  window.formatCurrency = function (amount) {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(amount);
  };
}

if (typeof formatDate === "undefined") {
  window.formatDate = function (dateString) {
    if (!dateString) return "—";
    const d = new Date(dateString);
    return d.toLocaleDateString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
}

// ── Number Counter Animation ──────────────────────────────
function animateCounter(el, target, duration = 1200) {
  const start = 0;
  const startTime = performance.now();
  const isFloat = target % 1 !== 0;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * eased;
    el.textContent = isFloat
      ? current.toFixed(1)
      : Math.round(current).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// ── Initialize Topbar User Info ───────────────────────────
function initTopbarUser() {
  const user = getCurrentUser();
  const el = document.getElementById("topbar-user-name");
  const avatarEl = document.getElementById("topbar-avatar");
  if (user && el) {
    el.textContent = `${user.firstName} ${user.lastName}`;
  }
  if (user && avatarEl) {
    avatarEl.textContent = user.firstName.charAt(0) + user.lastName.charAt(0);
  }
}

function initAdminTopbar() {
  const el = document.getElementById("topbar-user-name");
  const avatarEl = document.getElementById("topbar-avatar");
  if (el) el.textContent = "Admin LGU";
  if (avatarEl) avatarEl.textContent = "AL";
}

document.addEventListener("DOMContentLoaded", () => {
  // Auto-init counters
  document.querySelectorAll("[data-counter]").forEach((el) => {
    const val = parseFloat(el.dataset.counter);
    animateCounter(el, val);
  });
});
