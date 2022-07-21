const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
});

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});