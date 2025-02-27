import { premierElement } from "./s2/ep1/generics.js";
import { premierElementS2 } from "./s2/ep2/generics.js";

// Episode 1
let numberArray = [1, 2, 3];
let strinArray = ["a", "b", "c"];
let objectArray = [{ name: "John" }, { name: "Doe" }];
premierElement(numberArray);
premierElement(strinArray);
premierElement(objectArray);

// Episode 2
let city: string[] = ["London", "Moscou", "Berlin"];
let emptyArray: string[] = [];
premierElementS2(city);
premierElementS2(emptyArray);
