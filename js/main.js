// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const brand = document.querySelector(".nav-brand");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

brand.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

// Nav background on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Reveal-on-scroll
const revealEls = document.querySelectorAll(".section, .proj-card, .exp-card, .skill-block, .tl-item, .contact-card, .contact-aside");
revealEls.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => io.observe(el));

// Language bars animate when visible
const langSection = document.querySelector(".languages");
const langIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        document.querySelectorAll(".bar i").forEach((bar) => {
          bar.style.width = bar.dataset.w + "%";
        });
        langIO.unobserve(e.target);
      }
    });
  },
  { threshold: 0.4 }
);
if (langSection) langIO.observe(langSection);

// Toggle section reveal immediately (details don't animate well otherwise)
document.querySelectorAll("summary").forEach((s) => s.setAttribute("aria-expanded", "false"));