import Pythagoras from "../../models/Pythagoras.js";
import Matematica from "../../models/Matematica.js";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// ctx?.fillRect(100,40,30,40)
const w = canvas.width;
const h = canvas.height;
const w2 = canvas.width/2;
const h2 = canvas.height/2;

ctx.beginPath();
ctx.moveTo(w2-w2,h*-1);
ctx.lineTo(w,h);

ctx.moveTo(w,h*-1);
ctx.lineTo(70,170);

// ctx.moveTo(70,170);
// ctx.lineTo(w2,h2-90);

ctx.stroke();
ctx.closePath();

console.log("Triangle");


const x = Pythagoras.calcCateto(5, 4);
const y = Pythagoras.calcHipotenusa(3,4);


