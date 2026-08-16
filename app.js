document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(button.dataset.copy || "");
    const original = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => { button.textContent = original; }, 1400);
  });
});

document.documentElement.classList.add("js");
const revealTargets = document.querySelectorAll(
  ".hero-content, .hero-stage, .proof-strip, .proof-grid > div, .section, .feature-card, .workflow-card, .catalog-shell, .video-shell, .cta-box"
);
revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
});
const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);
revealTargets.forEach((element) => observer.observe(element));

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navigation.classList.toggle("is-open", !open);
});
