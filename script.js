let score = 0;
let scoreElement = document.querySelector(".discovered-button");

let cards = document.querySelectorAll(".species-card");

cards.forEach(function (card) {
  card.onclick = function () {
    score = score + 1;
    scoreElement.innerHTML = score + " discovered species";

    cards.forEach(function (item) {
      item.classList.remove("a");
      item.style.border = "1px solid #c7e2f1";
      item.style.backgroundColor = "#ffffff";
    });

    card.classList.add("a");
    card.style.border = "3px solid #00ced1";
    card.style.backgroundColor = "#e0f7fa";

    console.log("Discovered species: " + score);
  };
});

let tabSurface = document.getElementById("tab-surface");
let tabTwilight = document.getElementById("tab-twilight");
let tabAbyss = document.getElementById("tab-abyss");
let tabTrench = document.getElementById("tab-trench");

let zoneTemp = document.getElementById("zt");
let zoneDepth = document.getElementById("zd");
let zoneTitle = document.getElementById("zh");
let zoneText = document.getElementById("zx");
let zoneImage = document.getElementById("zi");

function clearTabs() {
  tabSurface.classList.remove("on");
  tabTwilight.classList.remove("on");
  tabAbyss.classList.remove("on");
  tabTrench.classList.remove("on");
}

tabSurface.onclick = function () {
  clearTabs();
  tabSurface.classList.add("on");
  zoneTemp.innerHTML = "Temp: 24C";
  zoneTitle.innerHTML = "The Sunlit Surface";
  zoneText.innerHTML = "The epipelagic zone receives ample sunlight, fueling photosynthesis and supporting the majority of ocean life, including playful dolphins and coastal crabs.";
  zoneImage.src = "images/sunlit.png";
  zoneImage.alt = "The Sunlit Surface";
};

tabTwilight.onclick = function () {
  clearTabs();
  tabTwilight.classList.add("on");
  zoneTemp.innerHTML = "Temp: 10C";
  zoneTitle.innerHTML = "The Twilight Zone";
  zoneText.innerHTML = "Sunlight rapidly fades in the mesopelagic zone. Bioluminescence begins to appear as glowing jellyfish and squid navigate the dim, cool waters.";
  zoneImage.src = "images/twilight.png";
  zoneImage.alt = "The Twilight Zone";
};

tabAbyss.onclick = function () {
  clearTabs();
  tabAbyss.classList.add("on");
  zoneTemp.innerHTML = "Temp: 4C";
  zoneTitle.innerHTML = "The Abyss";
  zoneText.innerHTML = "Complete darkness and immense pressure characterize the bathypelagic zone. Strange creatures like the Anglerfish use bioluminescent lures to survive.";
  zoneImage.src = "images/deep-ocean.png";
  zoneImage.alt = "The Abyss";
};

tabTrench.onclick = function () {
  clearTabs();
  tabTrench.classList.add("on");
  zoneTemp.innerHTML = "Temp: 2C";
  zoneTitle.innerHTML = "The Mariana Trench";
  zoneText.innerHTML = "The hadalpelagic zone, the deepest trenches on Earth. Pitch black and near-freezing, home to highly specialized life forms like pale snailfish.";
  zoneImage.src = "images/Mariana-trench.png";
  zoneImage.alt = "The Mariana Trench";
};

let homePage = document.getElementById("home");
let showcasePage = document.getElementById("show");
let openButton = document.getElementById("go");
let backButton = document.getElementById("back");

openButton.onclick = function () {
  homePage.classList.add("hide");
  showcasePage.classList.remove("hide");
  window.scrollTo(0, 0);
};
