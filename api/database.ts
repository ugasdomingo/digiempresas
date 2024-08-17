//Import tools
import mongoose from 'mongoose';

//Connect to the database
export const connect = async () => {
    try {
        const db = await mongoose.connect(process.env.DATABASE as string);
        console.log('Connected to ' + db.connections[0].name);
    } catch (error) {
        console.error(error);
    }
};
