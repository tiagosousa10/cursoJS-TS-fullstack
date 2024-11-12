import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Roberto', age: 36 });
myDatabaseClassic.add({ name: 'Joao', age: 11 });
myDatabaseClassic.add({ name: 'Sousa', age: 63 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
