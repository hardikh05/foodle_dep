import mongoose from "mongoose";
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env file from the correct path (assuming config folder is inside backend)
dotenv.config({ path: path.join(__dirname, '..', '.env') });

export const connectDB = async () => {
    try {
        // Log the MongoDB URI (remove this in production)
        console.log('MongoDB URI:');
        
        if (!process.env.MONGODB_URI) {
            throw new Error('MongoDB URI is not defined in environment variables');
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        process.exit(1);
    }
}