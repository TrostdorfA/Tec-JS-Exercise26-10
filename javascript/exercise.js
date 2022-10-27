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
switch (prompt("Ingrese el ID del usuario que desea ver: ")) {
  case "1":
    console.log(`El usuario con el ID ${userData[0].id} es: ${userData[0].name}, su usuario es: ${userData[0].username}, su correo es: ${userData[0].email}, su telefono es: ${userData[0].phone} y su pagina web es: ${userData[0].website}
      Su compañia es: ${userData[0].company.name}, su frase clave es: ${userData[0].company.catchPhrase} y su slogan es: ${userData[0].company.bs}
      Su direccion es: ${userData[0].address.street}, ${userData[0].address.suite}, ${userData[0].address.city}, ${userData[0].address.zipcode}`);
    break;
  case "2":
    console.log(`El usuario con el ID ${userData[1].id} es: ${userData[1].name}, su usuario es: ${userData[1].username}, su correo es: ${userData[1].email}, su telefono es: ${userData[1].phone} y su pagina web es: ${userData[1].website}
      Su compañia es: ${userData[1].company.name}, su frase clave es: ${userData[1].company.catchPhrase} y su slogan es: ${userData[1].company.bs}
      Su direccion es: ${userData[1].address.street}, ${userData[1].address.suite}, ${userData[1].address.city}, ${userData[1].address.zipcode}`);
    break;
  case "3":
    console.log(`El usuario con el ID ${userData[2].id} es: ${userData[2].name}, su usuario es: ${userData[2].username}, su correo es: ${userData[2].email}, su telefono es: ${userData[2].phone} y su pagina web es: ${userData[2].website}
      Su compañia es: ${userData[2].company.name}, su frase clave es: ${userData[2].company.catchPhrase} y su slogan es: ${userData[2].company.bs}
      Su direccion es: ${userData[2].address.street}, ${userData[2].address.suite}, ${userData[2].address.city}, ${userData[2].address.zipcode}`);
    break;
  case "4":
    console.log(`El usuario con el ID ${userData[3].id} es: ${userData[3].name}, su usuario es: ${userData[3].username}, su correo es: ${userData[3].email}, su telefono es: ${userData[3].phone} y su pagina web es: ${userData[3].website}
      Su compañia es: ${userData[3].company.name}, su frase clave es: ${userData[3].company.catchPhrase} y su slogan es: ${userData[3].company.bs}
      Su direccion es: ${userData[3].address.street}, ${userData[3].address.suite}, ${userData[3].address.city}, ${userData[3].address.zipcode}`);
    break;
  case "5":
    console.log(`El usuario con el ID ${userData[4].id} es: ${userData[4].name}, su usuario es: ${userData[4].username}, su correo es: ${userData[4].email}, su telefono es: ${userData[4].phone} y su pagina web es: ${userData[4].website}
      Su compañia es: ${userData[4].company.name}, su frase clave es: ${userData[4].company.catchPhrase} y su slogan es: ${userData[4].company.bs}
      Su direccion es: ${userData[4].address.street}, ${userData[4].address.suite}, ${userData[4].address.city}, ${userData[4].address.zipcode}`);
    break;
  case "6":
    console.log(`El usuario con el ID ${userData[5].id} es: ${userData[5].name}, su usuario es: ${userData[5].username}, su correo es: ${userData[5].email}, su telefono es: ${userData[5].phone} y su pagina web es: ${userData[5].website}
      Su compañia es: ${userData[5].company.name}, su frase clave es: ${userData[5].company.catchPhrase} y su slogan es: ${userData[5].company.bs}
      Su direccion es: ${userData[5].address.street}, ${userData[5].address.suite}, ${userData[5].address.city}, ${userData[5].address.zipcode}`);
    break;
  case "7":
    console.log(`El usuario con el ID ${userData[6].id} es: ${userData[6].name}, su usuario es: ${userData[6].username}, su correo es: ${userData[6].email}, su telefono es: ${userData[6].phone} y su pagina web es: ${userData[6].website}
      Su compañia es: ${userData[6].company.name}, su frase clave es: ${userData[6].company.catchPhrase} y su slogan es: ${userData[6].company.bs}
      Su direccion es: ${userData[6].address.street}, ${userData[6].address.suite}, ${userData[6].address.city}, ${userData[6].address.zipcode}`);
    break;
  case "8":
    console.log(`El usuario con el ID ${userData[7].id} es: ${userData[7].name}, su usuario es: ${userData[7].username}, su correo es: ${userData[7].email}, su telefono es: ${userData[7].phone} y su pagina web es: ${userData[7].website}
      Su compañia es: ${userData[7].company.name}, su frase clave es: ${userData[7].company.catchPhrase} y su slogan es: ${userData[7].company.bs}
      Su direccion es: ${userData[7].address.street}, ${userData[7].address.suite}, ${userData[7].address.city}, ${userData[7].address.zipcode}`);
    break;
  case "9":
    console.log(`El usuario con el ID ${userData[8].id} es: ${userData[8].name}, su usuario es: ${userData[8].username}, su correo es: ${userData[8].email}, su telefono es: ${userData[8].phone} y su pagina web es: ${userData[8].website}
      Su compañia es: ${userData[8].company.name}, su frase clave es: ${userData[8].company.catchPhrase} y su slogan es: ${userData[8].company.bs}
      Su direccion es: ${userData[8].address.street}, ${userData[8].address.suite}, ${userData[8].address.city}, ${userData[8].address.zipcode}`);
    break;
  case "10":
    console.log(`El usuario con el ID ${userData[9].id} es: ${userData[9].name}, su usuario es: ${userData[9].username}, su correo es: ${userData[9].email}, su telefono es: ${userData[9].phone} y su pagina web es: ${userData[9].website}
      Su compañia es: ${userData[9].company.name}, su frase clave es: ${userData[9].company.catchPhrase} y su slogan es: ${userData[9].company.bs}
      Su direccion es: ${userData[9].address.street}, ${userData[9].address.suite}, ${userData[9].address.city}, ${userData[9].address.zipcode}`);
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
