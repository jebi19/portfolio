const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const container = document.querySelector('.project-container');
const leftArrow = document.querySelector('.scroll-btn.left');
const rightArrow = document.querySelector('.scroll-btn.right');

function updateArrows() {
    leftArrow.style.display = container.scrollLeft > 0 ? "block" : "none";
    rightArrow.style.display = container.scrollLeft + container.clientWidth < container.scrollWidth ? "block" : "none";
}

function scrollLeft() {
    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' }); // Fix: Dynamically scroll one full view left
}

function scrollRight() {
    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' }); // Fix: Dynamically scroll one full view right
}

leftArrow.addEventListener("click", scrollLeft);
rightArrow.addEventListener("click", scrollRight);

container.addEventListener("scroll", updateArrows);

window.addEventListener("load", updateArrows);

