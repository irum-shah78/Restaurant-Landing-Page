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
   menuIcon.setAttribute("class", "fa-solid fa-bars")
})