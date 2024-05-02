const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark": "fa-solid fa-bars");
});

navLinks.addEventListener("click", (e) =>{
   navLinks.classList.remove("open");
   menuIcon.setAttribute("class", "fa-solid fa-bars");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000
};

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_content .section_description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header_content .header_btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore_image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".explore_content .section_header", {
  ...scrollRevealOption,
  dealy: 500,
});

ScrollReveal().reveal(".explore_content .section_description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".explore_content .explore_btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner_card", {
  ...scrollRevealOption,
  interval: 500,
});