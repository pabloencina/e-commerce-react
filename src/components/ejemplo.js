import { v4 as uuidv4 } from "uuid";
import cardIndumentaria from "./images/card-indumentaria.jpg";
import matVerdeAgua from "./images/ImagesProducts/matVerdeAgua.jpg";
import matNaranja from "./images/ImagesProducts/matNaranja.jpg";
import matVioleta from "./images/ImagesProducts/matVioleta.jpg";
import matsEstampado from "./images/ImagesProducts/matsEstampado.jpg";
import matsColores from "./images/ImagesProducts/matsColores.jpg";
import kitMats from "./images/ImagesProducts/kitMats.jpg";
import matNegro from "./images/ImagesProducts/matNegro.jpg";
import matRosado from "./images/ImagesProducts/matRosado.jpg";
import tacoYoga from "./images/ImagesProducts/tacoYoga.jpg";
import bolsoYoga from "./images/ImagesProducts/bolsoYoga.jpg";
import cintoYoga from "./images/ImagesProducts/cintoYoga.jpg";
import bandaYoga from "./images/ImagesProducts/bandaYoga.jpg";
import cuenco from "../components/images/ImagesProducts/cuenco.jpg";
import velas from "../components/images/ImagesProducts/velas.jpg";
import sahumerios from "../components/images/ImagesProducts/sahumerio.jpg";
import portavela from "../components/images/ImagesProducts/portavela.jpg";
import cuencoCuarzoMeditacion from "../components/images/ImagesProducts/cuencoCuarzoMeditacion.jpg";
import jardinZen from "../components/images/ImagesProducts/jardinZen.jpg";

const dataArray = [
  {
    id: uuidv4(),
    name: "Mats Yoga",
    category: "mats",
    sale: false,
    offerPrice: 15,
    description:
      "Mat de yoga pilates 5mm de corcho y caucho TPE adherente ecológico con guía de posiciones.",
    price: 12390.0,
    image: matVerdeAgua,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Yoga Mat ",
    category: "mats",
    sale: false,
    offerPrice: 15,
    description: "Mat yoga PVC 6mm Antideslizante,Pilates Fitness Gym 6mm .",
    price: 3399.0,
    image: matNaranja,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Yoga Mat Colchoneta",
    price: 4680.0,
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
    price: 5090.0,
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
    price: 4099.0,
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
      " Sus puntas son redondeadas y además cuentan con una terminación en barniz no tóxicos (según el fabricante). Sus medidas son 7cm X 14cm X 24.5cm.",
    price: 1120.0,
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
    price: 1450.0,
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
    price: 6588.0,
    offerPrice: 15,
    image: bolsoYoga,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Velas",
    category: "meditation",
    sale: false,
    description:
      "Medida: 15x28 cm. Funda: Loneta de algodón. Es un tejido robusto y resistente.",
    price: 1990.0,
    offerPrice: 15,
    image: velas,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Porta velas",
    category: "meditation",
    sale: false,
    description:
      "Está relleno con cáscara de semillas de trigo sarraceno y posee doble funda con cierre para facilitar su lavado o cambio.",
    price: 7500.0,
    offerPrice: 15,
    image: portavela,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Jardín zen",
    category: "meditation",
    sale: false,
    description:
      "Base Rectangular de Madera de 20cm x 40cm-Piedras de Base Blancas-Porta velas triple -c/Velas aromáticas-Piedra Zen-Rastrillo Zen-Arena de Cuarzo Blanco + 1 Buda Color Dorado.",
    price: 5400.0,
    offerPrice: 15,
    image: jardinZen,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Cuenco tibetano",
    category: "meditation",
    sale: true,
    description:
      "Este es un cuenco Jambati de rango agudo, que se caracteriza por tener un sonido de largo tiempo de duración, en el que se perciben muchos tonos y sobre tonos muy claros y con un dulce y parejo batimento.",
    price: 29870.0,
    offerPrice: 10,
    image: cuenco,
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
    price: 10500.0,
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
    price: 66000.0,
    image: cuencoCuarzoMeditacion,
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
    price: 2735.0,
    image: sahumerios,
    stock: 2,
  },
  {
    id: uuidv4(),
    name: "Colchoneta mats",
    category: "mats",
    sale: false,
    offerPrice: 15,
    description: "PVC Suave, 173 x 61 cm (largo x ancho), 6 mm de espesor",
    price: 2990.0,
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
    price: 5200.0,
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
    price: 12500.0,
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
    price: 14650.0,
    image: matRosado,
    stock: 2,
  },
];

export default dataArray;
