const nav = document.getElementById("nav-bar");
const header = document.querySelector("header");
const menuCheckBox = document.getElementById("menu");
const body = document.querySelector("body");
const links = document.querySelectorAll(".nav-link");
let date = new Date();
let hours = date.getHours();
const greeting = document.getElementById("greeting");
const mainTitle = document.getElementById("main-title");
const hireButton = document.getElementById("hire-button");
const profilePhoto = document.getElementById("profile-photo");
const aboutSection = document.getElementById("about-content");
const servicesSection = document.getElementById("services");
const serviceCards = document.querySelectorAll(".services-card");
const projectTitle = document.getElementById("project-title");
const projectTiles = document.querySelectorAll(".project-tile");
const contactSection = document.getElementById("contact");
let prevScroll;
let headerHeight = 80;

console.log(header);

if (hours > 4 && hours < 12) {
  greeting.textContent = "Good morning!";
} else if (hours > 11 && hours < 17) {
  greeting.textContent = "Good afternoon!";
} else if (hours > 16 && hours < 22) {
  greeting.textContent = "Good evening!";
}

const toggleNavDisplay = () => {
  if (menuCheckBox.checked == true) {
    nav.style.width = "100%";
    body.style.overflow = "hidden";
  } else {
    nav.style.width = "0";
    body.style.overflow = "";
  }
};
menuCheckBox.addEventListener("click", toggleNavDisplay);

const closeNav = () => {
  nav.style.width = "0";
  body.style.overflow = "";
  menuCheckBox.checked = false;
};
links.forEach((e) => e.addEventListener("click", closeNav));

window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  if (scroll)
    if (scroll > 450) {
      aboutSection.style.opacity = 1;
    }
  if (scroll > 1050) {
    servicesSection.style.opacity = 1;
    let time = 300;
    for (let i = 0; i < serviceCards.length; i++) {
      setTimeout(function () {
        serviceCards[i].style.opacity = 1;
      }, time);
      time += 300;
    }
  }
  if (scroll > 1700) {
    projectTitle.style.opacity = 1;
    time = 300;
    for (let i = 0; i < projectTiles.length; i++) {
      setTimeout(function () {
        projectTiles[i].style.opacity = 1;
      }, time);
      time += 300;
    }
  }

  if (scroll > 3700) {
    contactSection.style.opacity = 1;
  }

  if (scroll > prevScroll) {
    if (scroll > headerHeight) {
      header.classList.add("header-up");
    }
  } else {
    header.classList.remove("header-up");
  }
  prevScroll = scroll;
});

setTimeout(function () {
  greeting.classList.toggle("inactive");
}, 500);

setTimeout(function () {
  mainTitle.classList.toggle("inactive");
}, 800);

setTimeout(function () {
  profilePhoto.classList.toggle("inactive");
}, 1500);

setTimeout(function () {
  hireButton.classList.toggle("inactive");
}, 1100);

console.log(serviceCards);
