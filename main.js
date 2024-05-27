// Toogle icon

let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
  menuicon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

//Scroll section

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a{href'-' + id + '}`)
          .classList.add("active");
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar
  menuicon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// Scroll reveal

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, 'portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

// Typed js
const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Website Designer",
    "Content creator",
    "Physiotherapist",
    "Go-to Virtual Assistance",
  ],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  // Array of CV URLs
  const cvUrls = [
    "CV/Frontend  CV.pdf",
    "CV/Virtual Assistant.pdf",
    "CV/Physiotherapy Curriculum vitae.pdf",
    "CV/Writing CV.pdf",
  ];

  // Corresponding filenames for the CVs
  const filenames = [
    "Frontend  CV.pdf",
    "Virtual Assistant.pdf",
    "Physiotherapy Curriculum vitae.pdf",
    "Writing CV.pdf",
  ];

  // Function to download a single CV
  function downloadCV(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // Download each CV with the specified filename
  for (let i = 0; i < cvUrls.length; i++) {
    downloadCV(cvUrls[i], filenames[i]);
  }
});
