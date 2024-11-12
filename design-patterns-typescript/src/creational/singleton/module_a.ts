import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Tiago', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 21 });
myDatabaseClassic.add({ name: 'Andre', age: 13 });

export { myDatabaseClassic };
