// to implement smooth scroll effect
const allLink = document.querySelectorAll("a:link");

allLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll to # link
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      console.log(document.querySelector("#project"));
      const selector = document.querySelector(href);
      // console.log(selector);
      selector.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// hover effect in nav bar when respective selection

const homeel = document.querySelector(".hero");
const projectel = document.querySelector(".featured-project");
const aboutel = document.querySelector(".about-me");

const obser = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === true) {
      document
        .querySelector(`.nav-list-item[href="#${ent.target.id}"]`)
        .classList.add("current-indi");
    } else
      document
        .querySelector(`.nav-list-item[href="#${ent.target.id}"]`) // href="#${ent.target.id} == this to figure
        .classList.remove("current-indi"); // exact nav button using href.
  },
  {
    root: null,
    threshold: 0.5, // to monitor section view ratio in screen - 0.5 means half.
    rootMargin: "0px",
  }
);

// obser.observe(homeel);
// obser.observe(projectel);
// obser.observe(aboutel);

// const cur = document.getElementById(".hero");
// console.log(location.classList);
