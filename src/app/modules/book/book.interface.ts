import { Model} from "mongoose"

export type IReview = {
  email : string;
  reviewText : string
}

export type IBook = {
    title: string;
    author: string;
    genre: string;
    publicationDate: Date
    addedBy : string
    review? : IReview[]
}

export type IBookFilters = {
    searchTerm?: string;
    genre?: string;
    publicationYear? : string
  };

export type BookModel = Model<IBook, Record<string, unknown>>