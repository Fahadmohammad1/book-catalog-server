import { Schema, model } from "mongoose"
import { BookModel, IBook } from "./book.interface"


const BookSchema = new Schema<IBook, BookModel>(
    {
      title : {
        type : String,
        required : true,
        unique : true
      },
      author : {
        type : String,
        required : true
      },
      genre : {
        type : String,
        required : true
      },
      publicationDate : {
        type : Date,
        required : true
      },
      imageUrl : {
        type : String,
        required : true
      },
      addedBy : {
        type : String,
        required : true
      },
      year : {
        type : String,
      },
    },
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
      },
    }
  )

  export const Book = model<IBook, BookModel>('Book', BookSchema)