import mongoose, {Schema, model} from "mongoose";

const schema =  new Schema({
    name: {
        type: String,
        required:true
    },
    bio:String,
    author: Date,
    books:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
})
export const Author = model("Author", schema);