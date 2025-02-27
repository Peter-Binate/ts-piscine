import { traiterValeur } from "./s3/ep1/narrowing.js";
import { Rectangle, Cercle } from "./s3/ep2/formes.js";
import { afficherSurface } from "./s3/ep2/formes.js";
// Episode 1
traiterValeur("Hello");
traiterValeur(42);
// Episode 2
let rectangle = new Rectangle(10, 20);
let cercle = new Cercle(10);
afficherSurface(rectangle);
afficherSurface(cercle);
