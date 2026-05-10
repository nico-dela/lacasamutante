document.addEventListener("DOMContentLoaded", function () {
  let buttonsGenerated = false;

  const fonts = [
    // "'Yenji', sans-serif",
    "'Candela', sans-serif",
    // "'Clari', sans-serif",
    // "'Juli', sans-serif",
    // "'Mateo', sans-serif",
    // "'Tobeco', sans-serif",
  ];

  // Obtiene el número de día del año
  function getDayNumber() {
    const hoy = new Date();
    const inicioDelAño = new Date(hoy.getFullYear(), 0, 1);
    const diferenciaEnMilisegundos = hoy - inicioDelAño;
    const milisegundosPorDia = 1000 * 60 * 60 * 24;
    return Math.floor(diferenciaEnMilisegundos / milisegundosPorDia) + 1;
  }

  const currentDay = getDayNumber();
  const fontIndex = currentDay % fonts.length;

  document.body.style.fontFamily = fonts[fontIndex];
  const currentFontName = fonts[fontIndex].split("'")[1];
  window.currentFontName = currentFontName;


  function generateProductionButtons() {
    const productionsButtonsContainer = document.getElementById(
      "productions-buttons-container"
    );

    const buttonData = [
      {
        name: "Maizena Á",
        url: "https://open.spotify.com/artist/42HFQJwZtGRwxoVlDwgdgK",
        category: "Proyecto",
      },
      {
        name: "Á Nubila",
        url: "https://linktr.ee/nubila",
        category: "Proyecto",
      },
      {
        name: "Lara Fernandez Ú",
        url: "https://open.spotify.com/artist/691Dk9GKS8rAgDUpfkMwPS",
        category: "Artista",
      },
      {
        name: "É Mateo Genca",
        url: "https://open.spotify.com/artist/52zNpUR2AAV4ER89riTHt0",
        category: "Artista",
      },
      {
        name: "Psieledas Ó",
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
        name: "É Yen - ji",
        url: "https://open.spotify.com/artist/1b007dZ0opo4WIJK54RYLz",
        category: "Artista",
      },
      {
        name: "Hechizo Animal",
        url: "https://open.spotify.com/artist/2VMcktUnSTqXIBUIUtrW2M",
        category: "Proyecto",
      },
      {
        name: "Lava Andina Á",
        url: "https://open.spotify.com/artist/6mIYlnubsoAHVnThMC7CyY",
        category: "Proyecto",
      },
      {
        name: "Araceli Bonfigli",
        url: "https://open.spotify.com/artist/6bj6JfRNNwpb3gpYDXEm2F",
        category: "Artista",
      },
      {
        name: "Í Candela Gencarelli",
        url: "https://linktr.ee/candelagencarelli",
        category: "Artista",
      },
      {
        name: "Luz Peña",
        url: "https://www.instagram.com/luz.penia/",
        category: "Artista",
      },
      {
        name: "Lil Lise Ó",
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
        name: "É Origamy Sessions",
        url: "https://www.youtube.com/watch?v=_PjW0kjIeWQ&list=PLESwDoZ83GEbK4N9g2EetGp5KIN-HuE2k",
        category: "Produccion",
      },
      {
        name: "Arte Vago",
        url: "https://www.instagram.com/artevago/",
        category: "Artista",
      },
      {
        name: "Llanos Art",
        url: "https://linktr.ee/llanosart",
        category: "Artista",
      },
      {
        name: "Andy Genca",
        url: "https://open.spotify.com/artist/3nC0XPIkpWnYU49fCvk3r0",
        category: "Artista",
      },
      {
        name: "En la lista - Podcast",
        url: "https://www.instagram.com/enlalista/",
        category: "Proyecto",
      },
      {
        name: "Facundo Caceres",
        url: "https://www.youtube.com/watch?v=Wk3Vi8BAsEs",
        category: "Artista",
      },
      {
        name: "Facundo Rodriguez",
        url: "https://linktr.ee/facurodriguezalochis",
        category: "Artista",
      },
      {
        name: "Ariana Rios + Loli Rodriguez",
        url: "https://estilismo.myportfolio.com/",
        category: "Proyecto",
      },
      {
        name: "Las Cascara",
        url: "https://www.instagram.com/lascascara/",
        category: "Proyecto",
      },
      {
        name: "Agui Guillen",
        url: "https://www.instagram.com/agui_guillen/",
        category: "Artista",
      },
      {
        name: "Nico de la Cruz",
        url: "https://github.com/nico-dela",
        category: "Artista",
      },
    ];

    const categoryColors = {
      Artista: "#000",
      Produccion: "#1e75c5",
      Proyecto: "#ef332e",
    };

    const categoryPresentation = {
      Artista: { fontStyle: "italic", textTransform: "none" },
      Produccion: { fontStyle: "normal", textTransform: "lowercase" },
      Proyecto: { fontStyle: "normal", textTransform: "uppercase" },
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
      btn.rel = "noopener noreferrer";
      btn.style.color = categoryColors[button.category] || "black";
      const presentation = categoryPresentation[button.category] || {
        fontStyle: "normal",
        textTransform: "none",
      };
      btn.style.fontStyle = presentation.fontStyle;
      btn.style.textTransform = presentation.textTransform;

      productionsButtonsContainer.appendChild(btn);
    });
  }

  const LANG_STORAGE_KEY = "lacasa-mutante-lang";

  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    const section = header.closest("section");
    const content = header.nextElementSibling;
    const panelId =
      content && content.id
        ? content.id
        : section && section.id
          ? `${section.id}-panel`
          : null;

    header.setAttribute("role", "button");
    header.setAttribute("tabindex", "0");
    header.setAttribute("aria-expanded", "false");
    if (panelId && content) {
      content.id = panelId;
      header.setAttribute("aria-controls", panelId);
    }

    function accordionPanelHeightCapPx() {
      if (!window.matchMedia("(orientation: landscape)").matches) {
        return null;
      }
      const h = window.innerHeight;
      if (h <= 420) {
        return Math.round(h * 0.78);
      }
      if (h <= 520) {
        return Math.round(h * 0.72);
      }
      if (h <= 720) {
        return Math.round(h * 0.74);
      }
      return null;
    }

    function applyPanelOpenHeight(contentEl) {
      const cap = accordionPanelHeightCapPx();
      const natural = contentEl.scrollHeight;
      const useCap = cap != null && natural > cap;
      contentEl.style.maxHeight = (useCap ? cap : natural) + "px";
      contentEl.style.overflowY = useCap ? "auto" : "";
      if (useCap) {
        contentEl.setAttribute("data-scroll-panel", "true");
      } else {
        contentEl.removeAttribute("data-scroll-panel");
      }
    }

    function toggleSection() {
      const contentEl = header.nextElementSibling;

      if (header.parentElement.id === "producciones" && !buttonsGenerated) {
        generateProductionButtons();
        buttonsGenerated = true;
      }

      const isActive = header.classList.contains("active");

      document
        .querySelectorAll(".accordion-header.active")
        .forEach((activeHeader) => {
          if (activeHeader !== header) {
            activeHeader.classList.remove("active");
            activeHeader.setAttribute("aria-expanded", "false");
            const sibling = activeHeader.nextElementSibling;
            sibling.style.maxHeight = "0";
            sibling.style.padding = "0 10px";
            sibling.style.overflowY = "";
            sibling.removeAttribute("data-scroll-panel");
          }
        });

      header.classList.toggle("active", !isActive);
      header.setAttribute("aria-expanded", String(!isActive));

      if (!isActive) {
        applyPanelOpenHeight(contentEl);
        contentEl.style.padding = "10px";
      } else {
        contentEl.style.maxHeight = "0";
        contentEl.style.padding = "0 10px";
        contentEl.style.overflowY = "";
        contentEl.removeAttribute("data-scroll-panel");
      }
    }

    header.addEventListener("click", toggleSection);
    header.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        toggleSection();
      }
    });
  });

  const languageSelector = document.getElementById("languageSelector");

  if (languageSelector) {
    languageSelector.addEventListener("change", function () {
      const selectedLanguage = this.value;
      try {
        localStorage.setItem(LANG_STORAGE_KEY, selectedLanguage);
      } catch (_) {
        /* ignore quota / private mode */
      }
      translatePage(selectedLanguage);
    });
  }

  function resolveTranslation(language, translationKey) {
    const keys = translationKey.split(".");
    let node = translations[language];
    for (let i = 0; i < keys.length; i++) {
      if (node == null || typeof node !== "object") {
        return null;
      }
      node = node[keys[i]];
    }
    return typeof node === "string" ? node : null;
  }

  function translatePage(language) {
    document.documentElement.lang = language === "en" ? "en" : "es";

    if (languageSelector) {
      const aria = resolveTranslation(language, "languageSelectorAria");
      if (aria) {
        languageSelector.setAttribute("aria-label", aria);
      }
    }

    const elementsToTranslate = document.querySelectorAll("i18n-key");
    elementsToTranslate.forEach((element) => {
      const translationKey = element.getAttribute("key");
      let translation = resolveTranslation(language, translationKey);

      if (translation) {
        // If this is the footer text, replace the placeholder with the font name
        // if (translationKey === "footer") {
        //   translation = translation.replace(
        //     "{fontName}",
        //     window.currentFontName
        //   );
        // }
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
      const altTranslation = resolveTranslation(language, altKey);

      if (altTranslation) {
        element.setAttribute("alt", altTranslation);
      } else {
        console.warn(`Missing alt translation for ${altKey} in ${language}`);
      }
    });

    const titleElement = document.querySelector('title[data-i18n="title"]');
    if (titleElement && translations[language] && translations[language].title) {
      titleElement.textContent = translations[language].title;
    }
  }

  let initialLanguage = languageSelector ? languageSelector.value : "es";
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      initialLanguage = stored;
      if (languageSelector) {
        languageSelector.value = stored;
      }
    }
  } catch (_) {
    /* ignore */
  }
  translatePage(initialLanguage);
});
