import mongoose from "mongoose";

export default function dbConnect() {
    if(mongoose.connection.readyState < 1) {
        mongoose.connect(process.env.MONGO_URI);
    }
}