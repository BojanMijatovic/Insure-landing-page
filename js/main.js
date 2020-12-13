const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

//  toggle nav function
function toggleNav() {
  menuBars.classList.toggle('change');

  //  toggle menu
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.remove('overlay-slide-left');
    overlay.classList.add('overlay-slide-right');
  } else {
    overlay.classList.remove('overlay-slide-right');
    overlay.classList.add('overlay-slide-left');
  }
}

//  add event listener 
menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav => nav.addEventListener('click', toggleNav));
