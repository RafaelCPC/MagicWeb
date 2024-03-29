const initNotifications = [
  {
    id: "notif1",
    isRead: false,
    toggle: false,
    titleAndText: ["Doctor Who edition! Now available", "MTG Masters team"],
    content: [
      "Explore the magic of the Doctor Who edition! Unleash the power of iconic characters. Limited stock. Dive into the enchantment now!",
    ],
  },
  {
    id: "notif2",
    isRead: false,
    toggle: false,
    titleAndText: ["I'd like to buy some of your singles", "Yawgmoth"],
    content: [
      "Your collection caught my eye! I'm interested in buying singles. Let's discuss a deal. Turn your cards into cash effortlessly!",
    ],
  },
  {
    id: "notif3",
    isRead: false,
    toggle: false,
    titleAndText: [
      "Scars of Mirrodin Booster Box has been sent!",
      "MTG Masters shipping team",
    ],
    content: [
      "Exciting news! Your Scars of Mirrodin Booster Box is on its way. Get ready for a thrilling unboxing experience. Happy gaming!",
    ],
  },
  {
    id: "notif4",
    isRead: false,
    toggle: false,
    titleAndText: [
      "Boost your earnings! Sell us your cards",
      "MTG Masters team",
    ],
    content: [
      "Ready to upgrade your deck? Sell your cards to us and boost your earnings. Turn your collection into profit today!",
    ],
  },
  {
    id: "notif5",
    isRead: false,
    toggle: false,
    titleAndText: [
      "New arrivals! Strixhaven Mystical Archive now in stock",
      "MTG Masters team",
    ],
    content: [
      "Dive into the magical world of Strixhaven Mystical Archive. Fresh arrivals just landed – explore the enchantment and upgrade your deck!",
    ],
  },
  {
    id: "notif6",
    isRead: false,
    toggle: false,
    titleAndText: [
      "Special Offer: Trade with us and get a bonus booster!",
      "MTG Masters team",
    ],
    content: [
      "Unlock extra value! Trade with us today and receive a bonus booster pack with your transaction. Elevate your collection now!",
    ],
  },
  {
    id: "notif7",
    isRead: true,
    toggle: false,
    titleAndText: [
      "Order Shipped: Modern Horizons 2 Set Booster Box en route!",
      "MTG Masters team",
    ],
    content: [
      "Exciting news! Your Modern Horizons 2 Set Booster Box is on its way. Get ready for a powerful addition to your card collection.",
    ],
  },
  {
    id: "notif8",
    isRead: true,
    toggle: false,
    titleAndText: [
      "Exclusive Flash Sale! Limited-time discounts on select foils",
      "MTG Masters team",
    ],
    content: [
      "Don't miss out! Exclusive flash sale on select foils. Limited-time discounts to enhance your deck. Upgrade your strategy with premium cards now!",
    ],
  },
];




const initContentCart = [
  {
    id: "cart1",
    img: "https://cdn.cardsrealm.com/images/cartas/mh2-modern-horizons-2/es/med/laguna-ardiente-254.png?3282?&width=250",
    content: ["Volcanic Island", "Usuario: Alice (SPA)", "Language: SPA"],
    price: 2.90,
    total: 1,
  },
  {
    id: "cart2",
    img: "https://cdn.cardsrealm.com/images/cartas/tsr-time-spiral-remastered/es/med/tarmogoyf-235.png?2965?&width=250",
    content: ["Tarmogoyf", "Usuario: Bob (FRA)", "Language: FRA"],
    price: 3.50,
    total: 1,
  },
  {
    id: "cart3",
    img: "https://cdn.cardsrealm.com/images/cartas/dmr-dominaria-remastered/es/med/fuerza-de-voluntad-418.png?6077?&width=250",
    content: ["Force of Will", "Usuario: Charlie (GER)", "Language: GER"],
    price: 4.20,
    total: 1,
  },
  {
    id: "cart4",
    img: "https://cdn.cardsrealm.com/images/cartas/rvr-ravnica-remastered/EN/med/dark-confidant-323z.png?3223?&width=250",
    content: ["Dark Confidant", "Usuario: David (ITA)", "Language: ITA"],
    price: 2.75,
    total: 1,
  },
  {
    id: "cart5",
    img: "https://cdn.cardsrealm.com/images/cartas/pmh2-modern-horizons-2-promos/en/med/scalding-tarn-254s.png?1972?&width=250",
    content: ["Scalding Tarn", "Usuario: Eve (JPN)", "Language: JPN"],
    price: 5.00,
    total: 1,
  }
];

export{initNotifications,initContentCart}