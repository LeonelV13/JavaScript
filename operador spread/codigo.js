"use strict";

let valor1 = "Valor 1";
let valor2 = "Valor 1";
let valor3 = "Valor 1";

let arr = ["Valor 1", "Valor 2", "Valor 3"];

console.log(valor1,valor2,valor3);
//OPERADOR SPREAD
console.log(...arr);

// ----------------------------- //

let arr1 = ["Manzana","Pera","Banana","Melon"];
let arr2 = ["Kiwi","Naranja","Uva","Sandia","Durazno","Frutilla","Ciruela"];

let arr3 = [...arr1,...arr2];

arr.push(arr2[0],arr2[1]);
arr.push(...arr2)
console.log(arr2);
console.log(arr3);

// ----------------------------- //

const sumar = (num1,num2,num3,num4)=>{
    console.log(num1 + num2 + num3 +num4)
}

let arr4 = [3,6,9,5];

sumar(...arr4);