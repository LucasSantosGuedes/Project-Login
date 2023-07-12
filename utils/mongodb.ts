import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // URI de conexão com o MongoDB. Verifique se o endereço e a porta estão corretos.

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client: MongoClient = null;

export async function connectDatabase() {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
  }

  return client.db('my-database'); // Substitua 'my-database' pelo nome do seu banco de dados no MongoDB
}
