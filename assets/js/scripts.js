document.addEventListener("DOMContentLoaded", function () {
  let buttonsGenerated = false;

  function generateProductionButtons() {
    const productionsButtonsContainer = document.getElementById(
      "productions-buttons-container"
    );

    const buttonData = [
      {
        name: "Maizena",
        url: "https://open.spotify.com/artist/42HFQJwZtGRwxoVlDwgdgK",
      },
      { name: "Nubila", url: "https://linktr.ee/nubila" },
      {
        name: "Lara Fernandez",
        url: "https://open.spotify.com/artist/691Dk9GKS8rAgDUpfkMwPS",
      },
      {
        name: "Mateo Genca",
        url: "https://open.spotify.com/artist/52zNpUR2AAV4ER89riTHt0",
      },
      { name: "Psieledas", url: "https://psieledas.bandcamp.com/" },
      { name: "Irmanas", url: "https://www.youtube.com/@Irmanas-wi9zg" },
      {
        name: "Mott",
        url: "https://open.spotify.com/artist/5PvNVYs8antCfkOMeESvJu",
      },
      {
        name: "Yen-ji",
        url: "https://open.spotify.com/artist/1b007dZ0opo4WIJK54RYLz",
      },
      {
        name: "Hechizo Animal",
        url: "https://open.spotify.com/artist/2VMcktUnSTqXIBUIUtrW2M",
      },
      {
        name: "Lava Andina",
        url: "https://open.spotify.com/artist/6mIYlnubsoAHVnThMC7CyY",
      },
      {
        name: "Araceli Bonfigli",
        url: "https://open.spotify.com/artist/6bj6JfRNNwpb3gpYDXEm2F",
      },
      {
        name: "Candela Gencarelli",
        url: "https://linktr.ee/candelagencarelli",
      },
      {
        name: "Luz Peña",
        url: "https://www.instagram.com/luz.penia/",
      },
      {
        name: "Lil Lise",
        url: "https://www.behance.net/ulisesgencare",
      }
    ];

    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    }

    const shuffledButtons = shuffle(buttonData);

    shuffledButtons.forEach((button) => {
      const btn = document.createElement("a");
      btn.href = button.url;
      btn.className = "btn-production";
      btn.textContent = button.name;
      btn.target = "_blank";

      productionsButtonsContainer.appendChild(btn);
    });
  }

  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const isVisible = content.style.display === "block";

      content.style.display = isVisible ? "none" : "block";

      if (
        this.parentElement.id === "producciones" &&
        !isVisible &&
        !buttonsGenerated
      ) {
        generateProductionButtons();
        buttonsGenerated = true;
      }
    });
  });

  const languageSelector = document.getElementById("languageSelector");

  if (languageSelector) {
    languageSelector.addEventListener("change", function () {
      const selectedLanguage = this.value;
      translatePage(selectedLanguage);
    });
  }

  function translatePage(language) {
    const elementsToTranslate = document.querySelectorAll("i18n-key");
    elementsToTranslate.forEach((element) => {
      const translationKey = element.getAttribute("key");
      const keys = translationKey.split(".");
      let translation = translations[language];

      keys.forEach((key) => {
        translation = translation[key];
      });

      if (translation) {
        element.innerHTML = translation;
      } else {
        console.warn(
          `Missing translation for ${translationKey} in ${language}`
        );
      }
    });

    const elementsWithAlt = document.querySelectorAll("[data-i18n-alt]");
    elementsWithAlt.forEach((element) => {
      const altKey = element.getAttribute("data-i18n-alt");
      const keys = altKey.split(".");
      let translation = translations[language];

      keys.forEach((key) => {
        translation = translation[key];
      });

      if (translation) {
        element.setAttribute("alt", translation);
      } else {
        console.warn(`Missing alt translation for ${altKey} in ${language}`);
      }
    });

    const titleElement = document.querySelector('title[data-i18n="title"]');
    if (titleElement) {
      titleElement.innerText = translations[language].title;
    }
  }

  const initialLanguage = languageSelector ? languageSelector.value : "es";
  translatePage(initialLanguage);
});
