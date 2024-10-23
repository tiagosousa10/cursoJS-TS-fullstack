function* geradora1(){
  //c
  yield 'Valor 1'; // = return === yield
  yield 'Valor 2'; // = return === yield
  yield 'Valor 3'; // = return === yield


}

const g1 = geradora1();
for(let valor of g1){
  console.log(valor)
}

function* gerador2(){
  let i = 0;

  while(true){
    yield i ;
    i++;
  }
}

function* geradora3(){
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4(){
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();

function* geradora5(){
yield function() {
  console.log('Vim do y1');
}
yield function(){
  console.log('yield2')
}

yield function(){
  console.log('Vim do yield 3')
}

}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();





/* console.log(g1.next().value)
console.log(g1.next())
console.log(g1.next().value)
console.log(g1.next()) */