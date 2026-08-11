// to implement smooth scroll effect

const allLink = document.querySelectorAll("a");

allLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Allow external links to function normally
    if (!href.startsWith("#")) {
      return;
    }

    // Prevent default action for internal links
    e.preventDefault();

    // scroll to # link
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const selector = document.querySelector(href);
      selector.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ========= this code prevented from opening external links in a tag
// const allLink = document.querySelectorAll("a");

// allLink.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // scroll to # link
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     // scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       console.log(document.querySelector("#project"));
//       const selector = document.querySelector(href);
//       // console.log(selector);
//       selector.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });

// hover effect in nav bar when respective selection

const homeel = document.querySelector(".hero");
const projectel = document.querySelector(".featured-project");
const aboutel = document.querySelector(".about-me");

const highLightNav = function (entries) {
  const ent = entries[0];
  // console.log(ent);
  const allNavElements = document.querySelectorAll(".nav-list-item");
  if (ent.isIntersecting === true) {
    const currentEl = document.querySelector(
      `.nav-list-item[href="#${ent.target.id}"]`,
    );
    currentEl.classList.add("current-indi");
    allNavElements.forEach((lis) => {
      if (lis !== currentEl) {
        lis.classList.remove("current-indi");
      }
    });
  }
};

const obser = new IntersectionObserver(highLightNav, {
  root: null,
  threshold: 0.5, // to monitor section view ratio in screen - 0.5 means half.
  rootMargin: "0px",
});

obser.observe(homeel);
obser.observe(projectel);
obser.observe(aboutel);

// const cur = document.getElementById(".hero");
// console.log(location.classList);

// --------- featured projest carosol btn ----------

// const leftbtn = document.querySelector(".featured-project-left-icon");
// const rightbtn = document.querySelector(".featured-project-right-icon");

// rightbtn.addEventListener("click", function (c) {
//   document.querySelector(".featured-project-carosol").scrollTo({
//     left: 100,
//     behavior: "smooth",
//   });
// });

// const leftbtn = document.querySelector(".featured-project-left-icon");
// const rightbtn = document.querySelector(".featured-project-right-icon");
// const carousel = document.querySelector(".featured-project-scroll");
// const itemWidth = document.querySelector(
//   ".featured-project-carosol"
// ).offsetWidth;

// // Scroll to the right when the right button is clicked
// rightbtn.addEventListener("click", function () {
//   carousel.scrollBy({
//     left: itemWidth, // Adjust the value (300) as needed to scroll the desired amount
//     behavior: "smooth",
//   });
// });

// // Scroll to the left when the left button is clicked
// leftbtn.addEventListener("click", function () {
//   carousel.scrollBy({
//     left: -itemWidth, // Adjust the value (-300) as needed to scroll the desired amount
//     behavior: "smooth",
//   });
// });
