import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://AvinashMourya:Baroda2024@cluster0.nijp76z.mongodb.net/food-dev')).isObjectIdOrHexString(()=>console.log("DB Connected"));
}