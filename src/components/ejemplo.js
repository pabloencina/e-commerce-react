import { v4 as uuidv4 } from "uuid";
import cardIndumentaria from "./images/card-indumentaria.jpg";
import matVerdeAgua from "./images/Imagenes Productos/matVerdeAgua.jpg";
import matNaranja from "./images/Imagenes Productos/matNaranja.jpg";
import matVioleta from "./images/Imagenes Productos/matVioleta.jpg";
import matsEstampado from "./images/Imagenes Productos/matsEstampado.jpg";
import matsColores from "./images/Imagenes Productos/matsColores.jpg";
import kitMats from "./images/Imagenes Productos/kitMats.jpg";
import matNegro from "./images/Imagenes Productos/matNegro.jpg";
import matRosado from "./images/Imagenes Productos/matRosado.jpg";
import tacoYoga from "./images/Imagenes Productos/tacoYoga.jpg";
import bolsoYoga from "./images/Imagenes Productos/bolsoYoga.jpg";
import cintoYoga from "./images/Imagenes Productos/cintoYoga.jpg";
import bandaYoga from "./images/Imagenes Productos/bandaYoga.jpg";

const dataArray = [
  {
    id: uuidv4(),
    name: "Mats Yoga",
    category: "mats",
    sale: false,
    offerPrice: 15,
    description:
      "MAT DE YOGA PILATES 5MM CORCHO + CAUCHO TPE ADHERENTE ECOLÓGICO CON GUÍA DE POSICIONES",
    price: 12390,
    image: matVerdeAgua,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Yoga Mat Colchoneta ",
    category: "mats",
    sale: false,
    offerPrice: 15,
    description:
      "MAT YOGA UNNIC PVC 6mm Antideslizante,Pilates Fitness Gym 6mm .",
    price: 3399,
    image: matNaranja,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Yoga Mat Colchoneta",
    price: 4680,
    category: "mats",
    sale: true,
    offerPrice: 10,
    description: " Fitness Gym,MAT YOGA NBR BALBOAFIT 10 MM",
    image: matVioleta,
    stock: 3,
  },
  {
    id: uuidv4(),
    name: "Colchoneta Mat Yoga Caucho Nbr ",
    category: "mats",
    sale: true,
    description:
      "Colchoneta para hacer ejercicios de Fitness, Crossfit, Pilates, Rehabilitación, Gimnasia y Yoga",
    price: 5090,
    offerPrice: 25,
    image: matsEstampado,
    stock: 4,
  },
  {
    id: uuidv4(),
    name: "Banda de yoga ",
    category: "yoga",
    sale: false,
    description: "Medidas 70cm, banda de lienzo.",
    price: 4099,
    offerPrice: 15,
    image: bandaYoga,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Tacos para yoga",
    category: "yoga",
    sale: false,
    description:
      " sus puntas son redondeadas y además cuentan con una terminación en barniz no tóxicos (según el fabricante). Sus medidas son 7cm X 14cm X 24.5cm.",
    price: 1120,
    offerPrice: 15,
    image: tacoYoga,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Cinto de yoga",
    category: "yoga",
    sale: false,
    description: "Medidas 30cm . Fibra vegetal color morado",
    price: 1450,
    offerPrice: 15,
    image: cintoYoga,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Bolso porta mat",
    category: "yoga",
    sale: false,
    description:
      "Confeccionado en gabardina super resistente, muy amplio, ideal para llevar tu mat y demás elementos, o solo lucirlo en tu paseo .",
    price: 6588,
    offerPrice: 15,
    image: bolsoYoga,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Zafu almohadón",
    category: "meditation",
    sale: false,
    description:
      "Medida: 15x28 cm. Funda: Loneta de algodón. Es un tejido robusto y resistente.",
    price: 1990,
    offerPrice: 15,
    image: cardIndumentaria,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Zafu de jean",
    category: "meditation",
    sale: false,
    description:
      "Está relleno con cáscara de semillas de trigo sarraceno y posee doble funda con cierre para facilitar su lavado o cambio.",
    price: 7500,
    offerPrice: 15,
    image: cardIndumentaria,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Jardín zen",
    category: "meditation",
    sale: false,
    description:
      "Base Rectangular de Madera de 20cm x 40cm ( color Negro)-Piedras de Base Blancas-Porta velas triple -c/Velas aromáticas-Piedra Zen-Rastrillo Zen-Arena de Cuarzo Blanco + 1 Buda Color Dorado.",
    price: 5400,
    offerPrice: 15,
    image: cardIndumentaria,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Cuenco tibetano",
    category: "meditation",
    sale: true,
    description:
      "Este es un cuenco Jambati de rango agudo, que se caracteriza por tener un sonido de largo tiempo de duración, en el que se perciben muchos tonos y sobre tonos muy claros y con un dulce y parejo batimento.",
    price: 29870,
    offerPrice: 10,
    image: cardIndumentaria,
    stock: 1,
  },
  {
    id: uuidv4(),
    name: "Mangira Tibetana",
    category: "meditation",
    sale: false,
    offerPrice: 15,
    description:
      "Tamaño mediano-6 com de diámetro-material de bronce-labrada con dibujos y escrituras sagradas.",
    price: 10500,
    image: cardIndumentaria,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Cuenco de cuarzo",
    category: "meditation",
    sale: false,
    offerPrice: 15,
    description: "Cuenco de cuarzo de 20 cm de diámetro",
    price: 66000,
    image: cardIndumentaria,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Sahumerios",
    category: "meditation",
    sale: false,
    offerPrice: 15,
    description:
      "Sahumerios Magistrales Aromanza. Cantidad: 10 Unidades que contiene 8 Varillas Cada uno",
    price: 2735,
    image: cardIndumentaria,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Colchoneta mats",
    category: "mats",
    sale: false,
    offerPrice: 15,
    description: "PVC Suave, 173 x 61 cm (largo x ancho), 6 mm de espesor",
    price: 2990,
    image: matsColores,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "kit Yoga",
    category: "mats",
    sale: false,
    offerPrice: 15,
    description: "Kit yoga set mat- ladrillo- correa",
    price: 5200,
    image: kitMats,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Mat yoga",
    category: "mats",
    sale: false,
    offerPrice: 15,
    description:
      "Mat de yoga pilates 5mm corcho + caucho tpe adherente ecologico.",
    price: 12500,
    image: matNegro,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Mat estampado",
    category: "mats",
    sale: false,
    offerPrice: 15,
    description:
      "Mat de yoga impreso / Hecho con materiales ecológicos sin ftalatos peligrosos, más saludable para el usuario y el planeta / Libre de látex / Antideslizante",
    price: 14650,
    image: matRosado,
    stock: 2,
  },
];

export default dataArray;
