// to implement smooth scroll effect
const allLink = document.querySelectorAll("a");

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
      console.log(selector);
      selector.scrollIntoView({ behavior: "smooth" });
    }
    // close the nav bar after clicking the link in it.
  });
});
