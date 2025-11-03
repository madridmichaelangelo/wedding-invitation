document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("menu-overlay");
  const menu = document.getElementById("mobile-menu");
  const toggle = document.getElementById("menu-toggle");

  const openMenu = () => {
    overlay.classList.remove("hidden");
    // Allow transition to start after overlay is visible
    requestAnimationFrame(() => {
      menu.classList.remove("translate-x-full");
      menu.classList.add("translate-x-0");
    });
  };

  const closeMenu = () => {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
    // Match this with your CSS transition duration (500ms in your HTML)
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 500);
  };

  const toggleMenu = () => {
    const isOpen = !overlay.classList.contains("hidden");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Toggle menu on button click
  toggle.addEventListener("click", toggleMenu);

  // Close menu when clicking outside it
  overlay.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
      closeMenu();
    }
  });

  // Optional: Close menu with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
});
