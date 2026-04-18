// Tab switching
const links = document.querySelectorAll(".nav-link");
const tabs = document.querySelectorAll(".tab-content");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const tab = link.getAttribute("data-tab");
    tabs.forEach(t => t.classList.remove("active"));
    document.getElementById(`tab-${tab}`).classList.add("active");
  });
});

// Contact form
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent! I’ll get back to you shortly.");
    form.reset();
  });
}