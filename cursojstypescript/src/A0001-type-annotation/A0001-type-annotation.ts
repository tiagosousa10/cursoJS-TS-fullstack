/* eslint-disable */

        //TIPOS BASICOS
let nomeTeste:string = 'Tiago';
let idade:number=30;// number, 10, 1.67, -555.55, 0xf100,0x0213
let adulto:boolean=true;//true ou false
let simbolo:symbol=Symbol('qualquer-symbol')//symbol
//let big:bigint=10n ;//bigint

// Arrays
let arrayDeNumeros: Array<number>=[1,2,3];
let arrayDeNumeros2: number[]=[1,2,3];
let arrayDeStrings: Array<string>=['a','b'];
let arrayDeStrings2: string[]=['a','b'];


// Objetos
let pessoa:{nome:string,idade:number,adulto?:boolean}={
  idade:30,
  nome:'Tiago',

}

// Funçoes

function somaTeste(x:number,y:number){
  return x+y;
}
const result= somaTeste(2,2)
const soma2:(x:number,y:number) => number = (x,y) => x+y

