// const navToggle = document.querySelector(".mobile-nav-toggle");
// const nav = document.querySelector(".primary-navigation");
// const closeIcon = document.querySelector(".close-icon");

// function toggleMenu() {
//   if (nav.classList.contains("show-nav")) {
//     console.log("don't display");
//     nav.classList.remove("show-nav");
//     navToggle.style.display = "block";
//     closeIcon.style.display = "none";
//   } else {
//     console.log("display");
//     nav.classList.add("show-nav");
//     navToggle.style.display = "none";
//     closeIcon.style.display = "block";
//   }
// }

// navToggle.addEventListener("click", toggleMenu);
// closeIcon.addEventListener("click", toggleMenu);

// Kevins solution

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

  console.log(visibility);
});
