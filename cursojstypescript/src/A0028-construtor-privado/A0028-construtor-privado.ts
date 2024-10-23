// Singleton - Gof - Padrao do Projeto | Factory Method - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
  //Factory Method
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retorna uma instancia já criada');
      return Database.database;
    }
    console.log('Criando uma nova instancia');
    Database.database = new Database(host, user, password); // caso tenha cria uma nova Base Dados com esses parametros
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123');
db3.connect();

const db4 = Database.getDatabase('localhost', 'root', '123');
db4.connect();
