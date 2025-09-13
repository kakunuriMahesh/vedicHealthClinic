function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 0) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

const TmodalViews = document.querySelectorAll(".timings__modal"),
  TmodalBtns = document.querySelectorAll(".timings__button"),
  TmodalClose = document.querySelectorAll(".services__modal-close");

let Tmodal = function (TmodalClick) {
  TmodalViews[TmodalClick].classList.add("active-modal");
};

TmodalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    Tmodal(i);
  });
});

TmodalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    TmodalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

const sections = document.querySelectorAll(
  "#home, #about, #experience, #articles, #contact"
);

function scrollActive() {
  const scrollY = window.pageYOffset;
  console.log(scrollY);

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Retrieve the previously selected theme and icon from localStorage
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Function to get the current theme
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";

// Function to get the current icon
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// Apply the previously selected theme and icon if available, else set light theme as default
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
} else {
  // Set light theme as default if no preference is stored
  document.body.classList.add(lightTheme);
  themeButton.classList.add(iconTheme);
}

// Add event listener to toggle the theme
themeButton.addEventListener("click", () => {
  // Toggle between light and dark theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  // Save the selected theme and icon in localStorage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });

let firstArticleEle = document.getElementById("firstArticle");
let secondArticleEle = document.getElementById("secondArticle");

let sectionsEle = document.querySelectorAll(
  "#home, #about, #quote, #experience, #services, #contact"
);

let navEle = document.querySelectorAll(".nav__item");
let firstListEle = document.getElementById("firstList");
let secondListEle = document.getElementById("secondList");

let articleSubContainers = document.querySelectorAll(".article_sub");
articleSubContainers.forEach((article, index) => {
  if (index > 1) {
    article.classList.add("class_add");
  }

  firstListEle.classList.add("class_add");

  secondListEle.classList.add("class_add");
});

firstArticleEle.onclick = function () {
  firstListEle.classList.remove("class_add");
  secondListEle.classList.add("class_add");

  sectionsEle.forEach((sectionArt) => {
    sectionArt.classList.add("class_add");
  });
  firstArticleEle.classList.add("class_add");
  secondArticleEle.classList.add("class_add");
};

secondArticleEle.onclick = function () {
  firstListEle.classList.add("class_add");
  secondListEle.classList.remove("class_add");

  sectionsEle.forEach((sectionArt) => {
    sectionArt.classList.add("class_add");
  });
  firstArticleEle.classList.add("class_add");
  secondArticleEle.classList.add("class_add");
};

navEle.forEach((navItem) => {
  navItem.addEventListener("click", function () {
    sectionsEle.forEach((sectionArt) => {
      sectionArt.classList.remove("class_add");
      firstArticleEle.classList.remove("class_add");
      secondArticleEle.classList.remove("class_add");
      firstListEle.classList.add("class_add");
      secondListEle.classList.add("class_add");
    });

    articleSubContainers.forEach((article, index) => {
      if (index > 1) {
        article.classList.add("class_add");
      }
    });
    document.getElementById("articles").style.height = "100%";
  });
});
