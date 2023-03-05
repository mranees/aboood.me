// menu icon click toggle to show / hide
let menuIcon = document.getElementById('menu-icon');
let navBar = document.querySelector('.navbar');
menuIcon.onclick = function (){
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
};

// setting up sticky header and to top icon
let header = document.querySelector('header');
let iconTop = document.querySelector('.footer-icontop');
function iconTopToggle(){
  iconTop.classList.toggle('hide');
}

// setting up light dark theme calculation with hours
let mainroot = document.querySelector(':root');
let toggleThemeBtn = document.getElementById('toggle-theme');
let themeNow = "";
let d = new Date();
let hours = d.getHours();

function lightTheme(){
  mainroot.style.setProperty('--bg-color', '#eeeeee');
  mainroot.style.setProperty('--second-bg-color', '#99e6ec');
  mainroot.style.setProperty('--text-color', '#1f242d');
  mainroot.style.setProperty('--main-color', '#00b9d3');
  toggleThemeBtn.classList.add('bxs-moon');
  toggleThemeBtn.classList.remove('bxs-sun');
  themeNow = true;
}
function darkTheme(){
  mainroot.style.setProperty('--bg-color', '#1f242d');
  mainroot.style.setProperty('--second-bg-color', '#323946');
  mainroot.style.setProperty('--text-color', '#ffffff');
  mainroot.style.setProperty('--main-color', '#00eeff');
  toggleThemeBtn.classList.add('bxs-sun');
  toggleThemeBtn.classList.remove('bxs-moon');
  themeNow = false;
}

function autoLightDark(){
  if(hours >= 16){
    darkTheme();
  }else{
    lightTheme();
  };
}
toggleThemeBtn.onclick = function(){
  themeNow ?  darkTheme() : lightTheme();
};

// onload actions
window.onload = function (){
  iconTopToggle();
  autoLightDark();
}

// navbar class active added
let sections = document.querySelectorAll('section'),
    navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top>= offset && top< offset+height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

// fixed navbar show when scroll down
  header.classList.toggle('sticky', window.scrollY > 150);
  iconTop.classList.toggle('hide', window.scrollY < 150);

// skill animatin action when get to scroll offset
let mySkill = [
  document.getElementById("html-bar"),
  document.getElementById("js-bar"),
  document.getElementById("react-bar"),
  document.getElementById("bs-bar"),
  document.getElementById("sass-bar"),
  document.getElementById("php-bar"),
  document.getElementById("mysql-bar"),
  document.getElementById("lara-bar"),
  document.getElementById("api-bar"),
  document.getElementById("git-bar"),
  document.getElementById("cms-bar"),
  document.getElementById("word-bar"),
  document.getElementById("ui-bar"),
  document.getElementById("ds-bar"),
  document.getElementById("fig-bar"),
];
if(window.scrollY > 1054){
  for(let i=0;i<mySkill.length;i++){
    mySkill[i].style.animationPlayState = 'running';
  };
};

// remove toggle active class
menuIcon.classList.remove('bx-x');
navBar.classList.remove('active');

};

//scroll reveal divs imgs animation
ScrollReveal({ 
  reset: true,
  distance:'100px',
  duration:2000,
  delay: 200
});
ScrollReveal().reveal('.heading', {origin: 'top'});
ScrollReveal().reveal('.skills-container,.home-content, .about-img', {scale: 0.1, origin: 'left'});
ScrollReveal().reveal('.about-content h3, .contact h3, .contact form, .portfolio-container', {origin: 'right', opacity: 0});
ScrollReveal().reveal('.home-img, .about-content p, .about-content a', {opacity: 0, origin: 'bottom'});

// animated text
const typed = new Typed('.multiple-text', {
  strings: ['Fullstack Developer','Frontend Developer','Backend Developer',],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
})

