import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Tiago', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 21 });
myDatabaseClassic.add({ name: 'Andre', age: 13 });

export { myDatabaseClassic };
