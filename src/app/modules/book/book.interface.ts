import { Model} from "mongoose"

export type IBook = {
    title: string;
    author: string;
    genre: string;
    publicationDate: Date
    imageUrl : string
    addedBy : string
    year? : string
}

export type IBookFilters = {
    searchTerm?: string;
    genre?: string;
    publicationYear? : string
  };

export type BookModel = Model<IBook, Record<string, unknown>>