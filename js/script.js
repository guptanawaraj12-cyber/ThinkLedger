// js/main.js
// Scrollspy / active nav highlight
const navLinks=document.querySelectorAll('.nav-link');
navLinks.forEach(link=>{
  link.addEventListener('click',()=>document.querySelector('.nav-link.active')?.classList.remove('active'));
});