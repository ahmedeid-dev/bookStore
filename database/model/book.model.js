import { Schema, model } from "mongoose";

const schema = new Schema(
{
    title: {
    type: String,
    required:true
    },
    content: {
    type: String,
    required: true,
    },
    author: {
    type: String,
    required: true,
        },
        // publishedDate: { type: Date, default: Date.now }
},
    {
    timestamps: {
    createdAt: "publishedDate",
    updatedAt: false,
    },
    versionKey: false,
}
);
export const Book = model("Book", schema);
