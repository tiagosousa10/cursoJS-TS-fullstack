import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 36 });
myDatabaseClassic.add({ name: 'Joao', age: 11 });
myDatabaseClassic.add({ name: 'Sousa', age: 63 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
