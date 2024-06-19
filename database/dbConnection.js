import mongoose from "mongoose";

export const dbConnection = mongoose.connect('mongodb://localhost:27017/bookStore')
    .then(() => {
        console.log("database connected successfuly ...");
    }).catch(() => {
        console.log("error at connecting database !!!");
    
    });