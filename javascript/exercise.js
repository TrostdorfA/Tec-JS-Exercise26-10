console.log("Ejercicio número 1");

const userData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

console.log("userData", userData);

for (let i = 0; i < userData.length; i++) {
  console.log(`ID: ${userData[i].id}
   Nombre: ${userData[i].name}`);
  console.log(
    `El nombre de usuario es: ${userData[i].username}, su correo es: ${userData[i].email} y su telefono es: ${userData[i].phone}`
  );
  console.log(
    `El nombre de su compañia es: ${userData[i].company.name} y su frase clave es: ${userData[i].company.catchPhrase}`
  );
  if (userData[i].id < 5) {
    console.log(`Localidad: ${userData[i].address.city}
    Latitud: ${userData[i].address.geo.lat} y Longitud: ${userData[i].address.geo.lng}`);
  }
}

// Un modo

function showData(i) {
  console.log(`El usuario con el ID ${userData[i].id} es: ${userData[i].name}, su usuario es: ${userData[i].username}, su correo es: ${userData[i].email}, su telefono es: ${userData[i].phone} y su pagina web es: ${userData[i].website}
      Su compañia es: ${userData[i].company.name}, su frase clave es: ${userData[i].company.catchPhrase} y su slogan es: ${userData[i].company.bs}
      Su direccion es: ${userData[i].address.street}, ${userData[i].address.suite}, ${userData[i].address.city}, ${userData[i].address.zipcode}`);
}

switch (prompt("Ingrese el ID del usuario que desea ver: ")) {
  case "1":
    showData(0);
    break;
  case "2":
    showData(1);
    break;
  case "3":
    showData(2);
    break;
  case "4":
    showData(3);
    break;
  case "5":
    showData(4);
    break;
  case "6":
    showData(5);
    break;
  case "7":
    showData(6);
    break;
  case "8":
    showData(7);
    break;
  case "9":
    showData(8);
    break;
  case "10":
    showData(9);
    break;
  default:
    console.log("No existe el usuario");
    break;
}

// Otro modo de hacerlo
let userId = prompt("Ingrese el ID del usuario que desea buscar entre 1 y 10");
userId = Number(userId);
switch (userId) {
  case (userId = userData[0].id):
    console.log(`El usuario con el ID ${userId} es: ${userData[0].name}, su usuario es: ${userData[0].username}, su correo es: ${userData[0].email}, su telefono es: ${userData[0].phone} y su pagina web es: ${userData[0].website}
    Su compañia es: ${userData[0].company.name}, su frase clave es: ${userData[0].company.catchPhrase} y su slogan es: ${userData[0].company.bs}
    Su direccion es: ${userData[0].address.street}, ${userData[0].address.suite}, ${userData[0].address.city}, ${userData[0].address.zipcode}`);
    break;
  case (userId = userData[1].id):
    console.log(`El usuario con el ID ${userId} es: ${userData[1].name}, su usuario es: ${userData[1].username}, su correo es: ${userData[1].email}, su telefono es: ${userData[1].phone} y su pagina web es: ${userData[1].website}
    Su compañia es: ${userData[1].company.name}, su frase clave es: ${userData[1].company.catchPhrase} y su slogan es: ${userData[1].company.bs}
    Su direccion es: ${userData[1].address.street}, ${userData[1].address.suite}, ${userData[1].address.city}, ${userData[1].address.zipcode}`);
    break;
  case (userId = userData[2].id):
    console.log(`El usuario con el ID ${userId} es: ${userData[2].name}, su usuario es: ${userData[2].username}, su correo es: ${userData[2].email}, su telefono es: ${userData[2].phone} y su pagina web es: ${userData[2].website}
    Su compañia es: ${userData[2].company.name}, su frase clave es: ${userData[2].company.catchPhrase} y su slogan es: ${userData[2].company.bs}
    Su direccion es: ${userData[2].address.street}, ${userData[2].address.suite}, ${userData[2].address.city}, ${userData[2].address.zipcode}`);
    break;
  case (userId = userData[3].id):
    console.log(`El usuario con el ID ${userId} es: ${userData[3].name}, su usuario es: ${userData[3].username}, su correo es: ${userData[3].email}, su telefono es: ${userData[3].phone} y su pagina web es: ${userData[3].website}
    Su compañia es: ${userData[3].company.name}, su frase clave es: ${userData[3].company.catchPhrase} y su slogan es: ${userData[3].company.bs}
    Su direccion es: ${userData[3].address.street}, ${userData[3].address.suite}, ${userData[3].address.city}, ${userData[3].address.zipcode}`);
    break;
  case (userId = userData[4].id):
    console.log(`El usuario con el ID ${userId} es: ${userData[4].name}, su usuario es: ${userData[4].username}, su correo es: ${userData[4].email}, su telefono es: ${userData[4].phone} y su pagina web es: ${userData[4].website}
    Su compañia es: ${userData[4].company.name}, su frase clave es: ${userData[4].company.catchPhrase} y su slogan es: ${userData[4].company.bs}
    Su direccion es: ${userData[4].address.street}, ${userData[4].address.suite}, ${userData[4].address.city}, ${userData[4].address.zipcode}`);
    break;
  case (userId = userData[5].id):
    console.log(`El usuario con el ID ${userId} es: ${userData[5].name}, su usuario es: ${userData[5].username}, su correo es: ${userData[5].email}, su telefono es: ${userData[5].phone} y su pagina web es: ${userData[5].website}
    Su compañia es: ${userData[5].company.name}, su frase clave es: ${userData[5].company.catchPhrase} y su slogan es: ${userData[5].company.bs}
    Su direccion es: ${userData[5].address.street}, ${userData[5].address.suite}, ${userData[5].address.city}, ${userData[5].address.zipcode}`);
    break;
  case (userId = userData[6].id):
    console.log(`El usuario con el ID ${userId} es: ${userData[6].name}, su usuario es: ${userData[6].username}, su correo es: ${userData[6].email}, su telefono es: ${userData[6].phone} y su pagina web es: ${userData[6].website}
    Su compañia es: ${userData[6].company.name}, su frase clave es: ${userData[6].company.catchPhrase} y su slogan es: ${userData[6].company.bs}
    Su direccion es: ${userData[6].address.street}, ${userData[6].address.suite}, ${userData[6].address.city}, ${userData[6].address.zipcode}`);
    break;
  case (userId = userData[7].id):
    console.log(`El usuario con el ID ${userId} es: ${userData[7].name}, su usuario es: ${userData[7].username}, su correo es: ${userData[7].email}, su telefono es: ${userData[7].phone} y su pagina web es: ${userData[7].website}
    Su compañia es: ${userData[7].company.name}, su frase clave es: ${userData[7].company.catchPhrase} y su slogan es: ${userData[7].company.bs}
    Su direccion es: ${userData[7].address.street}, ${userData[7].address.suite}, ${userData[7].address.city}, ${userData[7].address.zipcode}`);
    break;
  case (userId = userData[8].id):
    console.log(`El usuario con el ID ${userId} es: ${userData[8].name}, su usuario es: ${userData[8].username}, su correo es: ${userData[8].email}, su telefono es: ${userData[8].phone} y su pagina web es: ${userData[8].website}
    Su compañia es: ${userData[8].company.name}, su frase clave es: ${userData[8].company.catchPhrase} y su slogan es: ${userData[8].company.bs}
    Su direccion es: ${userData[8].address.street}, ${userData[8].address.suite}, ${userData[8].address.city}, ${userData[8].address.zipcode}`);
    break;
  case (userId = userData[9].id):
    console.log(`El usuario con el ID ${userId} es: ${userData[9].name}, su usuario es: ${userData[9].username}, su correo es: ${userData[9].email}, su telefono es: ${userData[9].phone} y su pagina web es: ${userData[9].website}
    Su compañia es: ${userData[9].company.name}, su frase clave es: ${userData[9].company.catchPhrase} y su slogan es: ${userData[9].company.bs}
    Su direccion es: ${userData[9].address.street}, ${userData[9].address.suite}, ${userData[9].address.city}, ${userData[9].address.zipcode}`);
    break;
  default:
    console.log("El usuario no existe");
}

const fakeStoreApi = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https: /fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https: /fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https: /fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https: /fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https: /fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    "id ": 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https: /fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day .",
    category: "jewelery",
    image: "https: /fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https: /fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https: /fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https: /fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https: /fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https: /fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https: /fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https: /fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https: /fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https: /fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear -Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https: /fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https: /fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https: /fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https: /fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 3.6, count: 145 },
  },
];
console.log(fakeStoreApi);

for (let i = 0; i < fakeStoreApi.length; i++) {
  console.log(`ID: ${fakeStoreApi[i].id}
  Nombre: ${fakeStoreApi[i].title}`);
  console.log(
    `El nombre del producto es: ${fakeStoreApi[i].title}, la categoria es: ${fakeStoreApi[i].category}, el precio es: ${fakeStoreApi[i].price}y la calificacion es: ${fakeStoreApi[i].rating.rate}`
  );
  // Mostrar el nombre y precio de los productos que tengan una calificacion entre 1.8 y 3.2
  if (
    fakeStoreApi[i].rating.rate >= 1.8 &&
    fakeStoreApi[i].rating.rate <= 3.2
  ) {
    console.log(
      `El nombre del producto es: ${fakeStoreApi[i].title}y el precio es: ${fakeStoreApi[i].price}`
    );
  }
  // Mostrar el nombre y precio de los productos que tienen un precio mayor a 150
  if (fakeStoreApi[i].price > 150) {
    console.log(
      `El nombre del producto es: ${fakeStoreApi[i].title}y el precio es: ${fakeStoreApi[i].price}`
    );
  }
}

const rickAndMortyApi = {
  info: {
    count: 826,
    pages: 42,
    next: "https: /rickandmortyapi.com/api/character?page=2",
    prev: null,
  },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https: /rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https: /rickandmortyapi.com/api/location/3",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https: /rickandmortyapi.com/api/episode/1",
        "https: /rickandmortyapi.com/api/episode/2",
        "https: /rickandmortyapi.com/api/episode/3",
        "https: /rickandmortyapi.com/api/episode/4",
        "https: /rickandmortyapi.com/api/episode/5",
        "https: /rickandmortyapi.com/api/episode/6",
        "https: /rickandmortyapi.com/api/episode/7",
        "https: /rickandmortyapi.com/api/episode/8",
        "https: /rickandmortyapi.com/api/episode/9",
        "https: /rickandmortyapi.com/api/episode/10",
        "https: /rickandmortyapi.com/api/episode/11",
        "https: /rickandmortyapi.com/api/episode/12",
        "https: /rickandmortyapi.com/api/episode/13",
        "https: /rickandmortyapi.com/api/episode/14",
        "https: /rickandmortyapi.com/api/episode/15",
        "https: /rickandmortyapi.com/api/episode/16",
        "https: /rickandmortyapi.com/api/episode/17",
        "https: /rickandmortyapi.com/api/episode/18",
        "https: /rickandmortyapi.com/api/episode/19",
        "https: /rickandmortyapi.com/api/episode/20",
        "https: /rickandmortyapi.com/api/episode/21",
        "https: /rickandmortyapi.com/api/episode/22",
        "https: /rickandmortyapi.com/api/episode/23",
        "https: /rickandmortyapi.com/api/episode/24",
        "https: /rickandmortyapi.com/api/episode/25",
        "https: /rickandmortyapi.com/api/episode/26",
        "https: /rickandmortyapi.com/api/episode/27",
        "https: /rickandmortyapi.com/api/episode/28",
        "https: /rickandmortyapi.com/api/episode/29",
        "https: /rickandmortyapi.com/api/episode/30",
        "https: /rickandmortyapi.com/api/episode/31",
        "https: /rickandmortyapi.com/api/episode/32",
        "https: /rickandmortyapi.com/api/episode/33",
        "https: /rickandmortyapi.com/api/episode/34",
        "https: /rickandmortyapi.com/api/episode/35",
        "https: /rickandmortyapi.com/api/episode/36",
        "https: /rickandmortyapi.com/api/episode/37",
        "https: /rickandmortyapi.com/api/episode/38",
        "https: /rickandmortyapi.com/api/episode/39",
        "https: /rickandmortyapi.com/api/episode/40",
        "https: /rickandmortyapi.com/api/episode/41",
        "https: /rickandmortyapi.com/api/episode/42",
        "https: /rickandmortyapi.com/api/episode/43",
        "https: /rickandmortyapi.com/api/episode/44",
        "https: /rickandmortyapi.com/api/episode/45",
        "https: /rickandmortyapi.com/api/episode/46",
        "https: /rickandmortyapi.com/api/episode/47",
        "https: /rickandmortyapi.com/api/episode/48",
        "https: /rickandmortyapi.com/api/episode/49",
        "https: /rickandmortyapi.com/api/episode/50",
        "https:/rickandmortyapi.com/api/episode/51",
      ],
      url: "https: /rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https: /rickandmortyapi.com/api/location/3",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/2.jpeg",
      episode: [
        "https: /rickandmortyapi.com/api/episode/1",
        "https: /rickandmortyapi.com/api/episode/2",
        "https: /rickandmortyapi.com/api/episode/3",
        "https: /rickandmortyapi.com/api/episode/4",
        "https: /rickandmortyapi.com/apiepisode/5",
        "https: /rickandmortyapi.com/api/episode/6",
        "https: /rickandmortyapi.com/api/episode/7",
        "https: /rickandmortyapi.com/api/episode/8",
        "https: /rickandmortyapi.com/api/episode/9",
        "https: /rickandmortyapi.com/api/episode/10",
        "https: /rickandmortyapi.com/api/episode/11",
        "https: /rickandmortyapi.com/api/episode/12",
        "https: /rickandmortyapi.com/api/episode/13",
        "https: /rickandmortyapi.com/api/episode/14",
        "https: /rickandmortyapi.com/api/episode/15",
        "https: /rickandmortyapi.com/api/episode/16",
        "https: /rickandmortyapi.com/api/episode/17",
        "https: /rickandmortyapi.com/api/episode/18",
        "https: /rickandmortyapi.com/api/episode/19",
        "https: /rickandmortyapi.com/api/episode/20",
        "https: /rickandmortyapi.com/api/episode/21",
        "https: /rickandmortyapi.com/api/episode/22",
        "https: /rickandmortyapi.com/api/episode/23",
        "https: /rickandmortyapi.com/api/episode/24",
        "https: /rickandmortyapi.com/api/episode/25",
        "https: /rickandmortyapi.com/api/episode/26",
        "https: /rickandmortyapi.com/api/episode/27",
        "https: /rickandmortyapi.com/api/episode/28",
        "https: /rickandmortyapi.com/api/episode/29",
        "https: /rickandmortyapi.com/api/episode/30",
        "https: /rickandmortyapi.com/api/episode/31",
        "https: /rickandmortyapi.com/api/episode/32",
        "https: /rickandmortyapi.com/api/episode/33",
        "https: /rickandmortyapi.com/api/episode/34",
        "https: /rickandmortyapi.com/api/episode/35",
        "https: /rickandmortyapi.com/api/episode/36",
        "https: /rickandmortyapi.com/api/episode/37",
        "https: /rickandmortyapi.com/api/episode/38",
        "https: /rickandmortyapi.com/api/episode/39",
        "https: /rickandmortyapi.com/api/episode/40",
        "https: /rickandmortyapi.com/api/episode/41",
        "https: /rickandmortyapi.com/api/episode/42",
        "https: /rickandmortyapi.com/api/episode/43",
        "https: /rickandmortyapi.com/api/episode/44",
        "https: /rickandmortyapi.com/api/episode/45",
        "https: /rickandmortyapi.com/api/episode/46",
        "https: /rickandmortyapi.com/api/episode/47",
        "https: /rickandmortyapi.com/api/episode/48",
        "https: /rickandmortyapi.com/api/episode/49",
        "https: /rickandmortyapi.com/api/episode/50",
        "https:/rickandmortyapi.com/api/episode/51",
      ],
      url: "https: /rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z",
    },
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/3.jpeg",
      episode: [
        "https:/rickandmortyapi.com/api/episode/6",
        "https: /rickandmortyapi.com/api/episode/7",
        "https: /rickandmortyapi.com/api/episode/8",
        "https: /rickandmortyapi.com/api/episode/9",
        "https: /rickandmortyapi.com/api/episode/10",
        "https: /rickandmortyapi.com/api/episode/11",
        "https: /rickandmortyapi.com/api/episode/12",
        "https: /rickandmortyapi.com/api/episode/14",
        "https: /rickandmortyapi.com/api/episode/15",
        "https: /rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https: /rickandmortyapi.com/api/episode/18",
        "https: /rickandmortyapi.com/api/episode/19",
        "https: /rickandmortyapi.com/api/episode/20",
        "https: /rickandmortyapi.com/api/episode/21",
        "https: /rickandmortyapi.com/api/episode/22",
        "https: /rickandmortyapi.com/api/episode/23",
        "https: /rickandmortyapi.com/api/episode/24",
        "https: /rickandmortyapi.com/api/episode/25",
        "https: /rickandmortyapi.com/api/episode/26",
        "https: /rickandmortyapi.com/api/episode/27",
        "https: /rickandmortyapi.com/api/episode/29",
        "https: /rickandmortyapi.com/api/episode/30",
        "https: /rickandmortyapi.com/api/episode/31",
        "https: /rickandmortyapi.com/api/episode/32",
        "https: /rickandmortyapi.com/api/episode/33",
        "https: /rickandmortyapi.com/api/episode/34",
        "https: /rickandmortyapi.com/api/episode/35",
        "https: /rickandmortyapi.com/api/episode/36",
        "https: /rickandmortyapi.com/api/episode/38",
        "https: /rickandmortyapi.com/api/episode/39",
        "https: /rickandmortyapi.com/api/episode/40",
        "https: /rickandmortyapi.com/api/episode/41",
        "https: /rickandmortyapi.com/api/episode/42",
        "https: /rickandmortyapi.com/api/episode/43",
        "https: /rickandmortyapi.com/api/episode/44",
        "https: /rickandmortyapi.com/api/episode/45",
        "https: /rickandmortyapi.com/api/episode/46",
        "https: /rickandmortyapi.com/api/episode/47",
        "https: /rickandmortyapi.com/api/episode/48",
        "https: /rickandmortyapi.com/api/episode/49",
        "https: /rickandmortyapi.com/api/episode/51",
      ],
      url: "https: /rickandmortyapi.com/api/character/3",
      created: "2017-11-04T19:09:56.428Z",
    },
    {
      id: 4,
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/4.jpeg",
      episode: [
        "https:/rickandmortyapi.com/api/episode/6",
        "https: /rickandmortyapi.com/api/episode/7",
        "https: /rickandmortyapi.com/api/episode/8",
        "https: /rickandmortyapi.com/api/episode/9",
        "https: /rickandmortyapi.com/api/episode/10",
        "https: /rickandmortyapi.com/api/episode/11",
        "https: /rickandmortyapi.com/api/episode/12",
        "https: /rickandmortyapi.com/api/episode/14",
        "https: /rickandmortyapi.com/api/episode/15",
        "https: /rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/18",
        "https: /rickandmortyapi.com/api/episode/19",
        "https: /rickandmortyapi.com/api/episode/20",
        "https: /rickandmortyapi.com/api/episode 21",
        "https: /rickandmortyapi.com/api/episode/22",
        "https: /rickandmortyapi.com/api/episode/23",
        "https: /rickandmortyapi.com/api/episode/24",
        "https: /rickandmortyapi.com/api/episode/25",
        "https: /rickandmortyapi.com/api/episode/26",
        "https: /rickandmortyapi.com/api/episode/27",
        "https: /rickandmortyapi.com/api/episode/28",
        "https: /rickandmortyapi.com/api/episode/29",
        "https: /rickandmortyapi.com/api/episode/30",
        "https: /rickandmortyapi.com/api/episode/31",
        "https: /rickandmortyapi.com/api/episode/32",
        "https: /rickandmortyapi.com/api/episode/33",
        "https: /rickandmortyapi.com/api/episode/34",
        "https: /rickandmortyapi.com/api/episode/35",
        "https: /rickandmortyapi.com/api/episode/36",
        "https: /rickandmortyapi.com/api/episode/38",
        "https: /rickandmortyapi.com/api/episode/39",
        "https: /rickandmortyapi.com/api/episode/40",
        "https: /rickandmortyapi.com/api/episode/41",
        "https: /rickandmortyapi.com/api/episode/42",
        "https: /rickandmortyapi.com/api/episode/43",
        "https: /rickandmortyapi.com/api/episode/44",
        "https: /rickandmortyapi.com/api/episode/45",
        "https: /rickandmortyapi.com/api/episode/46",
        "https: /rickandmortyapi.com/api/episode/47",
        "https: /rickandmortyapi.com/api/episode/48",
        "https: /rickandmortyapi.com/api/episode/49",
        "https: /rickandmortyapi.com/api/episode/51",
      ],
      url: "https: /rickandmortyapi.com/api/character/4",
      created: "2017-11-04T19:22:43.665Z",
    },
    {
      id: 5,
      name: "Jerry Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/5.jpeg",
      episode: [
        "https:/rickandmortyapi.com/api/episode/6",
        "https: /rickandmortyapi.com/api/episode/7",
        "https: /rickandmortyapi.com/api/episode/8",
        "https: /rickandmortyapi.com/api/episode/9",
        "https: /rickandmortyapi.com/api/episode/10",
        "https: /rickandmortyapi.com/api/episode/11",
        "https: /rickandmortyapi.com/api/episode/12",
        "https: /rickandmortyapi.com/api/episode/13",
        "https: /rickandmortyapi.com/api/episode/14",
        "https: /rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https: /rickandmortyapi.com/api/episode/18",
        "https: /rickandmortyapi.com/api/episode/19",
        "https: /rickandmortyapi.com/api/episode/20",
        "https: /rickandmortyapi.com/api/episode/21",
        "https: /rickandmortyapi.com/api/episode/22",
        "https: /rickandmortyapi.com/api/episode/23",
        "https: /rickandmortyapi.com/api/episode/26",
        "https: /rickandmortyapi.com/api/episode/29",
        "https: /rickandmortyapi.com/api/episode/30",
        "https: /rickandmortyapi.com/api/episode/31",
        "https: /rickandmortyapi.com/api/episode/32",
        "https: /rickandmortyapi.com/api/episode/33",
        "https: /rickandmortyapi.com/api/episode/35",
        "https: /rickandmortyapi.com/api/episode/36",
        "https: /rickandmortyapi.com/api/episode/38",
        "https: /rickandmortyapi.com/api/episode/39",
        "https: /rickandmortyapi.com/api/episode/40",
        "https: /rickandmortyapi.com/api/episode/41",
        "https: /rickandmortyapi.com/api/episode/42",
        "https: /rickandmortyapi.com/api/episode/43",
        "https: /rickandmortyapi.com/api/episode/44",
        "https: /rickandmortyapi.com/api/episode/45",
        "https: /rickandmortyapi.com/api/episode/46",
        "https: /rickandmortyapi.com/api/episode/47",
        "https: /rickandmortyapi.com/api/episode/48",
        "https: /rickandmortyapi.com/api/episode/49",
        "https: /rickandmortyapi.com/api/episode/50",
        "https: /rickandmortyapi.com/api/episode/51",
      ],
      url: "https: /rickandmortyapi.com/api/character/5",
      created: "2017-11-04T19:26:56.301Z",
    },
    {
      id: 6,
      name: "Abadango Cluster Princess",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Female",
      origin: {
        name: "Abadango",
        url: "https: /rickandmortyapi.com/api/location/2",
      },
      location: {
        name: "Abadango",
        url: "https: /rickandmortyapi.com/api/location/2",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/6.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/27"],
      url: "https: /rickandmortyapi.com/api/character/6",
      created: "2017-11-04T19:50:28.250Z",
    },
    {
      id: 7,
      name: "Abradolf Lincler",
      status: "unknown",
      species: "Human",
      type: "Genetic experiment",
      gender: "Male",
      origin: {
        name: "Earth(Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Testicle MonsterDimension",
        url: "https: /rickandmortyapi.com/api/location/21",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/7.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/10",
        "https: /rickandmortyapi.com/api/episode/11",
      ],
      url: "https: /rickandmortyapi.com/api/character/7",
      created: "2017-11-04T19:59:20.523Z",
    },
    {
      id: 8,
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Citadel of Ricks",
        url: "https: /rickandmortyapi.com/api/location/3",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/8.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/28"],
      url: "https: /rickandmortyapi.com/api/character/8",
      created: "2017-11-04T20:03:34.737Z",
    },
    {
      id: 9,
      name: "Agency Director",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/9.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/24"],
      url: "https: /rickandmortyapi.com/api/character/9",
      created: "2017-11-04T20:06:54.976Z",
    },
    {
      id: 10,
      name: "Alan Rails",
      status: "Dead",
      species: "Human",
      type: "Superhuman (Ghost trains summoner)",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Worldender'slair",
        url: "https: /rickandmortyapi.com/api/location/4",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/10.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/25"],
      url: "https: /rickandmortyapi.com/api/character/10",
      created: "2017-11-04T20:19:09.017Z",
    },
    {
      id: 11,
      name: "Albert Einstein",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https: /rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/11.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/12"],
      url: "https: /rickandmortyapi.com/api/character/11",
      created: "2017-11-04T20:20:20.965Z",
    },
    {
      id: 12,
      name: "Alexander",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https: /rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Anatomy Park",
        url: "https: /rickandmortyapi.com/api/location/5",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/12.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/3"],
      url: "https: /rickandmortyapi.com/api/character/12",
      created: "2017-11-04T20:32:33.144Z",
    },
    {
      id: 13,
      name: "Alien Googah",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "unknown",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/13.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/31"],
      url: "https: /rickandmortyapi.com/api/character/13",
      created: "2017-11-04T20:33:30.779Z",
    },
    {
      id: 14,
      name: "Alien Morty",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Citadel of Ricks",
        url: "https: /rickandmortyapi.com/api/location/3",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/14.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/10"],
      url: "https: /rickandmortyapi.com/api/character/14",
      created: "2017-11-04T20:51:31.373Z",
    },
    {
      id: 15,
      name: "Alien Rick",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Citadel of Ricks",
        url: "https: /rickandmortyapi.com/api/location/3",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/15.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/10"],
      url: "https: /rickandmortyapi.com/api/character/15",
      created: "2017-11-04T20:56:13.215Z",
    },
    {
      id: 16,
      name: "Amish Cyborg",
      status: "Dead",
      species: "Alien",
      type: "Parasite",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https: /rickandmortyapi.com/api/location/20",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/16.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/15"],
      url: "https: /rickandmortyapi.com/api/character/16",
      created: "2017-11-04T21:12:45.235Z",
    },
    {
      id: 17,
      name: "Annie",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth(C-137)",
        url: "https: /rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "AnatomyPark",
        url: "https: /rickandmortyapi.com/api/location/5",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/17.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/3"],
      url: "https: /rickandmortyapi.com/api/character/17",
      created: "2017-11-04T22:21:24.481Z",
    },
    {
      id: 18,
      name: "Antenna Morty",
      status: "Alive",
      species: "Human",
      type: "Human with antennae",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Citadel of Ricks",
        url: "https: /rickandmortyapi.com/api/location/3",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/18.jpeg",
      episode: [
        "https: /rickandmortyapi.com/api/episode/10",
        "https: /rickandmortyapi.com/api/episode/28",
      ],
      url: "https: /rickandmortyapi.com/api/character/18",
      created: "2017-11-04T22:25:29.008Z",
    },
    {
      id: 19,
      name: "Antenna Rick",
      status: "unknown",
      species: "Human",
      type: "Human withantennae",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: { name: "unknown", url: "" },
      image: "https: /rickandmortyapi.com/api/character/avatar/19.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/10"],
      url: "https: /rickandmortyapi.com/api/character/19",
      created: "2017-11-04T22:28:13.756Z",
    },
    {
      id: 20,
      name: "Ants in my Eyes Johnson",
      status: "unknown",
      species: "Human",
      type: "Human with ants in his eyes",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "InterdimensionalCable",
        url: "https: /rickandmortyapi.com/api/location/6",
      },
      image: "https: /rickandmortyapi.com/api/character/avatar/20.jpeg",
      episode: ["https: /rickandmortyapi.com/api/episode/8"],
      url: "https: /rickandmortyapi.com/api/character/20",
      created: "2017-11-04T22:34:53.659Z",
    },
  ],
};

// Mostrar el nombre del personaje, su especie, el nombre de su lugar de origen y la cantidad episodios en los que aparece
for (let i = 0; i < rickAndMortyApi.results.length; i++) {
  console.log(
    `Nombre: ${rickAndMortyApi.results[i].name}, Especie: ${rickAndMortyApi.results[i].species}, Origen: ${rickAndMortyApi.results[i].origin.name}, Episodios: ${rickAndMortyApi.results[i].episode.length}`
  );
}

// ¿Cuáles son las claves que figuran dentro de la clave “info”? Buscar el método aplicable a objetos que permite mostrar esta info
console.log(Object.keys(rickAndMortyApi.info));

// ¿Cuáles son los valores de las claves mostradas en el ítem anterior?
console.log(Object.values(rickAndMortyApi.info));
