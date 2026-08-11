const PROJECT_ID = "k5nedqn6";
const DATASET = "production";

async function loadMainLine() {
  const query = '*[_type == "mainLine"][0]';

  const url =
    `https://${PROJECT_ID}.api.sanity.io/v2025-05-08/data/query/${DATASET}` +
    `?query=${encodeURIComponent(query)}`;

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("main-line").textContent = data.result.text;
}

loadMainLine();

async function loadFeatures() {
  const query = `*[_type == "feature"] {
            title,
            description,
            url,
            skills,
            image {
                asset-> {
                url
                }
            }
            }`;

  const url =
    `https://${PROJECT_ID}.api.sanity.io/v2025-05-08/data/query/${DATASET}` +
    `?query=${encodeURIComponent(query)}`;

  const response = await fetch(url);
  const data = await response.json();

  //   console.log(data.result);
  //   -----------------
  const featuredSection = document.querySelector(".featured-project-scroll");

  data.result.forEach((feature) => {
    const card = document.createElement("div");
    card.className = "featured-project-carosol";

    card.innerHTML = `
      <a
        class="a-links"
        href="${feature.url}"
        target="_blank"
        rel="noopener"
      >
        <img
          class="featured-project-carosol-fig"
          src="${feature.image.asset.url}"
          alt="${feature.title}"
          loading="lazy"
        />
      </a>

      <div class="carosol-text">
        <h3 class="featured-project-h3">${feature.title}</h3>

        <p class="featured-project-carosol-p">
          ${feature.description}
        </p>

        <div class="featured-tags">

          ${feature.skills
            .map(
              (skill) => `
            <span>${skill}</span>
          `,
            )
            .join("")}

          <a
            class="featured-project-carosol-btn"
            href="${feature.url}"
            target="_blank"
            rel="noopener"
          >
            <ion-icon name="arrow-forward-circle"></ion-icon>
          </a>

        </div>
      </div>
    `;
    // featuredSection.appendChild(card);
    // featuredSection.prepend(card);
    featuredSection.insertAdjacentElement("afterbegin", card);
  });

  //   --------- button functions
  const leftbtn = document.querySelector(".featured-project-left-icon");
  const rightbtn = document.querySelector(".featured-project-right-icon");
  const carousel = document.querySelector(".featured-project-scroll");
  const itemWidth = document.querySelector(
    ".featured-project-carosol",
  ).offsetWidth;

  // Scroll to the right when the right button is clicked
  rightbtn.addEventListener("click", function () {
    carousel.scrollBy({
      left: itemWidth, // Adjust the value (300) as needed to scroll the desired amount
      behavior: "smooth",
    });
  });

  // Scroll to the left when the left button is clicked
  leftbtn.addEventListener("click", function () {
    carousel.scrollBy({
      left: -itemWidth, // Adjust the value (-300) as needed to scroll the desired amount
      behavior: "smooth",
    });
  });
}

loadFeatures();

async function loadAboutme() {
  const query = `*[_type == "aboutMe"] {firstpara,secondpara}`;

  const url =
    `https://${PROJECT_ID}.api.sanity.io/v2025-05-08/data/query/${DATASET}` +
    `?query=${encodeURIComponent(query)}`;

  const response = await fetch(url);
  const data = await response.json();

  //   console.log(data.result[0]);

  const first = document.getElementById("about-me-1");
  const second = document.getElementById("about-me-2");

  first.innerHTML = data.result[0]["firstpara"];
  second.innerHTML = data.result[0]["secondpara"];
}

loadAboutme();
