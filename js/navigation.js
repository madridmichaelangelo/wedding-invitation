
document.addEventListener("DOMContentLoaded", () => {
const overlay = document.getElementById("menu-overlay");
  const menu = document.getElementById("mobile-menu");
  const toggle = document.getElementById("menu-toggle");

  toggle.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.remove("translate-x-full");
      menu.classList.add("translate-x-0");
    }, 10);
  });

  const closeMenu = () => {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 300);
  };

  overlay.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
      closeMenu();
    }
  });

    });