//Set the greeting message depending on the current time
let date = new Date(),
  hours = date.getHours();
const greeting = document.getElementById("greeting"),
  setGreeting = (hours) => {
    if (hours > 4 && hours < 12) {
      greeting.textContent = "Good morning!";
    } else if (hours > 11 && hours < 17) {
      greeting.textContent = "Good afternoon!";
    } else if (hours > 16 && hours < 22) {
      greeting.textContent = "Good evening!";
    }
  };
setGreeting(hours);

// Open and close the nav menu when the hamburger icon is clicked
const nav = document.getElementById("nav-bar"),
  body = document.querySelector("body"),
  menuCheckBox = document.getElementById("menu"),
  toggleNavDisplay = () => {
    if (menuCheckBox.checked == false) {
      closeNav();
    } else {
      openNav();
    }
  };
menuCheckBox.addEventListener("click", toggleNavDisplay);

// Function that opens the nav menu
const openNav = () => {
  nav.style.width = "100%";
  body.style.overflow = "hidden";
  sections.forEach((e) => {
    e.style.filter = "blur(8px)";
  });
  // body.style.filter = "blur(8px)";
  // nav.style.filter = "blur(0px)";
};
// Function that closes the nav menu
const closeNav = () => {
  nav.style.width = "0";
  body.style.overflow = "";
  menuCheckBox.checked = false;
  sections.forEach((e) => {
    e.style.filter = "none";
  });
};

// Closes the nav menu and scrolls to section when one of the nav links is clicked
const links = document.querySelectorAll(".nav-link");

const scrollToTarget = (target) => {
  const headerOffset = 30;
  const bodyRect = document.body.getBoundingClientRect().top;
  let elementRect = eval(target).getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  let offSetPosition = elementPosition - headerOffset;
  if (window.innerWidth >= 1000 && target === "homeSection") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: offSetPosition, behavior: "smooth" });
  }
};

links.forEach((e) =>
  e.addEventListener("click", () => {
    let destination = `${e.id.replace("-link", "")}Section`;
    scrollToTarget(destination);
    if (window.innerWidth < 1000) {
      closeNav();
    }
  })
);

// Stops the nav bar remaining open when the window size is decreased, and prevents the profile photo from transitioning around.
const profilePhoto = document.getElementById("profile-photo");
let screenToggle;
if (window.innerWidth >= 1000) {
  screenToggle = false;
} else {
  screenToggle = true;
}
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000 && !screenToggle) {
    screenToggle = true;
    nav.style.width = "";
    nav.style.transition = "none";
    profilePhoto.style.transition = "none";
    body.style.overflow = "";
  } else if (window.innerWidth < 1000 && screenToggle) {
    screenToggle = false;
    nav.style.transition = "all 0.3s ease-out";
    closeNav();
  }
});

// Causes different sections to fade in when the user has scrolled a certain distance down the page
let prevScroll;
const header = document.querySelector("header"),
  headerHeight = 80,
  homeSection = document.getElementById("intro"),
  aboutSection = document.getElementById("about-content"),
  servicesSection = document.getElementById("services"),
  serviceCards = document.querySelectorAll(".services-card"),
  projectsSection = document.getElementById("projects"),
  projectTitle = document.getElementById("project-title"),
  projectTiles = document.querySelectorAll(".project-tile"),
  contactSection = document.getElementById("contact"),
  sections = [
    homeSection,
    contactSection,
    projectsSection,
    servicesSection,
    aboutSection,
  ];

window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  let time = 300;
  sections.forEach((item) => {
    if (scroll > item.offsetTop - 400) {
      if (item === servicesSection) {
        //   // Causes services cards to fade in one after the other by *time* milliseconds.
        serviceCards.forEach((e) => {
          setTimeout(function () {
            e.style.opacity = 1;
          }, time);
          time += 300;
        });
      } else if (item === projectsSection) {
        projectTitle.style.opacity = 1;
        // Causes project tiles to fade in one after the other by *time* milliseconds.
        projectTiles.forEach((e) => {
          setTimeout(function () {
            e.style.opacity = 1;
          }, time);
          time += 300;
        });
      }
      item.style.opacity = 1;
    }
  });

  // Displays the header when the user scrolls up
  if (scroll > prevScroll) {
    if (scroll > headerHeight) {
      header.classList.add("header-up");
    }
  } else {
    header.classList.remove("header-up");
  }
  prevScroll = scroll;
});

// If large screen size, fade in about section on page load to avoid visible blank section
if (window.screen.width > 767) {
  setTimeout(function () {
    aboutSection.style.opacity = 1;
  }, 1700);
}
setTimeout(function () {
  greeting.classList.toggle("inactive");
}, 500);

const mainTitle = document.getElementById("main-title");
setTimeout(function () {
  mainTitle.classList.toggle("inactive");
}, 800);

setTimeout(function () {
  profilePhoto.classList.toggle("inactive");
}, 1500);

const hireButton = document.getElementById("hire-button");
setTimeout(function () {
  hireButton.classList.toggle("inactive");
}, 1100);

hireButton.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

const projectsButton = document.getElementById("projects-button");
projectsButton.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});
// Displays information over project tiles when they are clicked
const projectText = document.querySelectorAll(".project-text");
projectTiles.forEach((item) => {
  if (window.innerWidth < 1000) {
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
  }
});
