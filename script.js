// MOBILE NAVIGATION

function toggleMenu() {
  document.getElementById("nav").classList.toggle("menu-open");
}


// APPOINTMENT MODAL

function openModal() {
  document.getElementById("appointmentModal").classList.add("open");
}

function closeModal() {
  document.getElementById("appointmentModal").classList.remove("open");
}

document.getElementById("appointmentModal").addEventListener("click", function(event) {
  if (event.target === this) {
    closeModal();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});


// APPOINTMENT FORM

function submitForm(event) {
  event.preventDefault();

  document.getElementById("formNotice").style.display = "block";

  event.target.reset();
}

function submitModal(event) {
  event.preventDefault();

  document.getElementById("modalNotice").style.display = "block";

  event.target.reset();
}


// DOCTOR PROFILE DISPLAY

function showDoctor(button) {
  const panel = document.getElementById("doctor-details");

  const name = button.dataset.name;
  const specialty = button.dataset.specialty;
  const about = button.dataset.about;
  const quote = button.dataset.quote;

  document.getElementById("doctor-detail-name").textContent = name;

  document.getElementById("doctor-detail-specialty").textContent = specialty;

  document.getElementById("doctor-detail-about").textContent = about;

  document.getElementById("doctor-detail-quote").textContent = "“" + quote + "”";

  panel.classList.add("open");

  panel.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start"
  });
}


// CLOSE DOCTOR DETAILS

function closeDoctorDetails() {
  document.getElementById("doctor-details").classList.remove("open");
}


// SCROLL REVEAL ANIMATIONS

document.body.classList.add("motion-ready");

const revealGroups = [
  [".section-head", "reveal-rise"],
  [".service", "reveal-zoom"],
  [".about-visual", "reveal-left"],
  [".about-copy", "reveal-right"],
  [".doctor-card", "reveal-rise"],
  [".cta-inner", "reveal-zoom"],
  [".contact-grid > *", "reveal-rise"],
  [".footer-grid > *", "reveal-rise"]
];

revealGroups.forEach(function(group) {

  document.querySelectorAll(group[0]).forEach(function(element, index) {

    element.classList.add("reveal", group[1]);

    element.style.transitionDelay = (index % 4) * 90 + "ms";

  });

});


// INTERSECTION OBSERVER

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

  const revealObserver = new IntersectionObserver(function(entries, observer) {

    entries.forEach(function(entry) {

      if (entry.isIntersecting) {

        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -35px 0px"
  });

  document.querySelectorAll(".reveal").forEach(function(element) {

    revealObserver.observe(element);

  });

} else {

  document.querySelectorAll(".reveal").forEach(function(element) {

    element.classList.add("is-visible");

  });

}
