import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Tiago', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 21 });
myDatabaseClassic.add({ name: 'Andre', age: 13 });

export { myDatabaseClassic };
