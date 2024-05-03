let menus = [
    {
      type: "special",
      name: "Pizza Green Popeye",
      description:
        "mit Broccoli, Spinat, marinierter Hähnchenbrust, Gorgonzola, Creme fraiche und Knoblauch",
      price: 11.9,
      amount: 1,
      size: "Normal, Ø 32cm",
      note: ""
    },
    {
      type: "special",
      name: "Pizza Cherrentina",
      description:
        "mit Cherrytomaten, Hinterschinken, Pinienkerne, Rucola, Grana Padano",
      price: 11.9,
      amount: 1,
      size: "Normal, Ø 32cm",
      note: ""
    },
    {
      type: "special",
      name: "Pizza Serra-Mico",
      description:
        "mit Rucola, Grana Pandano, Serrano Schinken und Balsamicocreme",
      price: 12.9,
      amount: 1,
      size: "Normal, Ø 32cm",
      note: ""
    },
    {
      type: "special",
      name: "Pizza Sea Mondo",
      description:
        "mit Meeresfrüchten, Tiger Garnelen, roten Zwiebeln, scharfer Peperoni, Knoblauch und Zuckerschoten",
      price: 12.9,
      amount: 1,
      size: "Normal, Ø 32cm",
      note: ""
    },
    {
      type: "classic",
      name: "Pizza Margherita",
      description: "mit Tomate, Mozzarella und Basilikum",
      price: 8.9,
      amount: 1,
      size: "Normal, Ø 32cm",
      note: ""
    },
    {
      type: "classic",
      name: "Pizza Salami",
      description: "mit Salami",
      price: 9.9,
      amount: 1,
      size: "Normal, Ø 32cm",
      note: ""
    },
    {
      type: "classic",
      name: "Pizza Prosciutto Funghi",
      description: "mit Hinterschinken und Champignons",
      price: 10.9,
      amount: 1,
      size: "Normal, Ø 32cm",
      note: ""
    },
    {
      type: "classic",
      name: "Pizza Tonno",
      description: "mit Thunfisch und roten Zwiebeln",
      price: 10.9,
      amount: 1,
      size: "Normal, Ø 32cm",
      note: ""
    },
    {
      type: "salads",
      name: "Chef Salat",
      description: "mit Hinterschinken, Gurken, Tomaten, Ei und Gouda",
      price: 9.9,
      amount: 1,
      size: "mit American Dressing",
      note: ""
    },
    {
      type: "salads",
      name: "Bunter Gartensalat",
      description: "mit Gurken, Tomaten, Paprika, Rucola, Mais, Ei und Gouda",
      price: 9.9,
      amount: 1,
      size: "mit American Dressing",
      note: ""
    },
    {
      type: "salads",
      name: "Italien-Salat",
      description:
        "mit Tomaten, Mozzarella, Basilium, Pinienkernen und Grana Padano",
      price: 10.5,
      amount: 1,
      size: "mit American Dressing",
      note: ""
    },
    {
      type: "salads",
      name: "Avocado Salat",
      description:
        "mit Avocado, Romana Salat, Radieschen, Mandarinen und Kürbiskernen",
      price: 10.5,
      amount: 1,
      size: "mit American Dressing",
      note: ""
    },
    {
      type: "drinks",
      name: "Coca-Cola 0,33l (MEHRWEG)",
      description:
        "Die 0,33l Coca-Cola-Glasflasche ist die Ikone für perfekten Trinkgenuss seit 1886.",
      price: 2.45,
      amount: 1,
      size: "",
      note: ""
    },
    {
      type: "drinks",
      name: "Coca-Cola Zero 0,33l (MEHRWEG)",
      description:
        "Keine Kalorien. Null Zucker. Für alle Coke Liebhaber, die beim Geschmack keinen Kompromiss eingehen wollen.",
      price: 2.45,
      amount: 1,
      size: "",
      note: ""
    },
    {
      type: "drinks",
      name: "Fanta Orange 0,33l (MEHRWEG)",
      description:
        "Trinke Fanta. Lebe bunter. Spritzig erfrischend begleitet die originale Fanta Orange jede Lebenssituation",
      price: 2.45,
      amount: 1,
      size: "",
      note: ""
    },
    {
      type: "drinks",
      name: "Sprite 0,33l (MEHRWEG)",
      description:
        "Bist du bereit für Sprite? Die einzigartige Formel aus grünen Limetten und sonnengelben Zitronen.",
      price: 2.45,
      amount: 1,
      size: "",
      note: ""
    },
  ];
  
  let basketItems = [];

  load();