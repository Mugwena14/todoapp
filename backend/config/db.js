import mongoose from 'mongoose';

const connectingDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI) ;

        console.log(`Connected to DB: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectingDB;