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
const projectText = document.querySelectorAll(".project-text");
const contactSection = document.getElementById("contact");
let prevScroll;
const headerHeight = 80;
const mqMobile = window.matchMedia("(max-width 1024px");

if (hours > 4 && hours < 12) {
  greeting.textContent = "Good morning!";
} else if (hours > 11 && hours < 17) {
  greeting.textContent = "Good afternoon!";
} else if (hours > 16 && hours < 22) {
  greeting.textContent = "Good evening!";
}

if (window.screen.width > 767) {
  setTimeout(function () {
    aboutSection.style.opacity = 1;
  }, 1700);
}

const toggleNavDisplay = () => {
  if (menuCheckBox.checked == false) {
    nav.style.width = "0";
    body.style.overflow = "";
    console.log("hello");
  } else {
    nav.style.width = "100%";
    body.style.overflow = "hidden";
    console.log("hello");
  }
};
menuCheckBox.addEventListener("click", toggleNavDisplay);

const closeNav = () => {
  if (window.innerWidth < 1000) {
    nav.style.width = "0";
    body.style.overflow = "";
    menuCheckBox.checked = false;
  }
};
links.forEach((e) => e.addEventListener("click", closeNav));

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000) {
    nav.style.width = "";
    nav.style.transition = "none";
    profilePhoto.style.transition = "none";
    body.style.overflow = "";
  } else {
    nav.style.transition = "all 0.3s ease-out";
    closeNav();
  }
});

window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  if (window.screen.width < 767) {
    setFadeInPosition(scroll, 450, 1050, 1700, 3700);
  } else if (window.screen.width > 767) {
    setFadeInPosition(scroll, 0, 500, 1000, 2100);
    aboutSection.style.opacity = 1;
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

const setFadeInPosition = (
  scroll,
  aboutPos,
  servicesPos,
  projectsPos,
  contactPos
) => {
  if (scroll > aboutPos) {
    aboutSection.style.opacity = 1;
  }
  if (scroll > servicesPos) {
    servicesSection.style.opacity = 1;
    let time = 300;
    for (let i = 0; i < serviceCards.length; i++) {
      setTimeout(function () {
        serviceCards[i].style.opacity = 1;
      }, time);
      time += 300;
    }
  }
  if (scroll > projectsPos) {
    projectTitle.style.opacity = 1;
    time = 300;
    for (let i = 0; i < projectTiles.length; i++) {
      setTimeout(function () {
        projectTiles[i].style.opacity = 1;
      }, time);
      time += 300;
    }
  }
  if (scroll > contactPos) {
    contactSection.style.opacity = 1;
  }
};

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

projectTiles.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.childNodes[3].style.opacity == 0) {
      for (let i = 0; i < projectTiles.length; i++) {
        projectText[i].style.opacity = 0;
      }
      item.childNodes[3].style.opacity = 1;
    } else {
      item.childNodes[3].style.opacity = 0;
    }
  });
});
