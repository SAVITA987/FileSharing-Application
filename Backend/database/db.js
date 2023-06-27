import mongoose from "mongoose";

const DBConnection = async () => {
    // const USERNAME = process.env.DB_USERNAME;
    // const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://savitatekale1234:dNYgf2s3ouaHWvpK@ac-lukiuqn-shard-00-00.1bm0sln.mongodb.net:27017,ac-lukiuqn-shard-00-01.1bm0sln.mongodb.net:27017,ac-lukiuqn-shard-00-02.1bm0sln.mongodb.net:27017/?ssl=true&replicaSet=atlas-9dp9rd-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}
export default DBConnection;