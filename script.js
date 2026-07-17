const modal = document.getElementById("imageModal");
const year = document.getElementById("year");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

window.scrollTo(0, 0);
window.history.scrollRestoration = "manual";

if (year) {
  year.textContent = new Date().getFullYear();
}

const setActiveLink = () => {
  let current = "home";
  const offset = window.scrollY + 160;
  const atBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

  if (atBottom) {
    current = sections[sections.length - 1].id;
  } else {
    sections.forEach((section) => {
      if (section.offsetTop <= offset) {
        current = section.id;
      }
    });
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === `#${current}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

window.openImage = function () {
  if (modal) {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
};

window.closeImage = function () {
  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
};

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeImage();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeImage();
    }
  });
}

/* Fix: email menu (<details class="email-menu">) now opens/closes
   only via click. Clicking anywhere outside the open menu closes it. */
const emailMenu = document.querySelector(".email-menu");

if (emailMenu) {
  document.addEventListener("click", (event) => {
    if (emailMenu.open && !emailMenu.contains(event.target)) {
      emailMenu.removeAttribute("open");
    }
  });
}

console.log("Portfolio de Khalid Barradah chargé avec succès 🚀");