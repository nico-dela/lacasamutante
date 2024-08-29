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
        category: "Proyecto",
      },
      { name: "Nubila", url: "https://linktr.ee/nubila", category: "Proyecto" },
      {
        name: "Lara Fernandez",
        url: "https://open.spotify.com/artist/691Dk9GKS8rAgDUpfkMwPS",
        category: "Artista",
      },
      {
        name: "Mateo Genca",
        url: "https://open.spotify.com/artist/52zNpUR2AAV4ER89riTHt0",
        category: "Artista",
      },
      {
        name: "Psieledas",
        url: "https://psieledas.bandcamp.com/",
        category: "Artista",
      },
      {
        name: "Irmanas",
        url: "https://www.youtube.com/@Irmanas-wi9zg",
        category: "Proyecto",
      },
      {
        name: "Mott",
        url: "https://open.spotify.com/artist/5PvNVYs8antCfkOMeESvJu",
        category: "Proyecto",
      },
      {
        name: "Yen-ji",
        url: "https://open.spotify.com/artist/1b007dZ0opo4WIJK54RYLz",
        category: "Artista",
      },
      {
        name: "Hechizo Animal",
        url: "https://open.spotify.com/artist/2VMcktUnSTqXIBUIUtrW2M",
        category: "Proyecto",
      },
      {
        name: "Lava Andina",
        url: "https://open.spotify.com/artist/6mIYlnubsoAHVnThMC7CyY",
        category: "Proyecto",
      },
      {
        name: "Araceli Bonfigli",
        url: "https://open.spotify.com/artist/6bj6JfRNNwpb3gpYDXEm2F",
        category: "Artista",
      },
      {
        name: "Candela Gencarelli",
        url: "https://linktr.ee/candelagencarelli",
        category: "Artista",
      },
      {
        name: "Luz Peña",
        url: "https://www.instagram.com/luz.penia/",
        category: "Artista",
      },
      {
        name: "Lil Lise",
        url: "https://www.behance.net/ulisesgencare",
        category: "Artista",
      },
      {
        name: "La Casa Mutante - Temporada 1",
        url: "https://www.youtube.com/watch?v=xXGEXSVwzXk&list=PLCeJy5MptJ4QHl4z13LUp8Lmk3Hvl-6Io",
        category: "Produccion",
      },
      {
        name: "La Casa Mutante - Temporada 2",
        url: "https://www.youtube.com/watch?v=CvDeJE-kOhc&list=PLCeJy5MptJ4TM1SpukK3oht5s58FxZJCV",
        category: "Produccion",
      },
      {
        name: "Canciones en Cuarentena",
        url: "https://www.youtube.com/watch?v=ORsTN_cmG0w&list=PLCeJy5MptJ4RHEjXogCtEE9hxEpZSMeSr",
        category: "Produccion",
      },
      {
        name: "Origamy Sessions",
        url: "https://www.youtube.com/watch?v=_PjW0kjIeWQ&list=PLESwDoZ83GEbK4N9g2EetGp5KIN-HuE2k",
        category: "Produccion",
      },
      {
        name: "Arte Vago",
        url: "https://www.instagram.com/artevago/",
        category: "Artista",
      },
    ];

    const categoryColors = {
      "Artista": "#D95E5B",    // Color rojo
      "Produccion": "#3A54A1", // Color azul
      "Proyecto": "black"      // Color negro
    };

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
      btn.style.color = categoryColors[button.category] || "black";

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
