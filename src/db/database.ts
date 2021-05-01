import {Db, MongoClient} from 'mongodb';

const URL: string = 'mongodb://localhost/flite-network';

var database: Db;

const connectToDatabase = () => {
    console.log('Initializing MongoDB Connection!');
    MongoClient.connect(URL, (error, connection) => {
        if (error) throw error;
        database = connection.db('flite-network');
    });
}

export {connectToDatabase};