let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string, // string ou undefined
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
//const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Deu ERRO');
} else {
  console.log(squareOfTwoNumber * 100);
}

/* if (squareOfTwoString === null) {
  console.log('Deu ERRO');
} else {
  console.log(squareOfTwoString * 100);
} */
