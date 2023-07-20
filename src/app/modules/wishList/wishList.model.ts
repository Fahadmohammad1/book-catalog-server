import { Model, Schema, model } from 'mongoose'
import { IBook } from '../book/book.interface'

export type IWishList = {
  email: string
  book: Schema.Types.ObjectId | IBook
}

export type WishListModel = Model<IWishList, Record<string, unknown>>

const wishListSchema = new Schema<IWishList, WishListModel>(
  {
    email: {
      type: String,
      required: true,
    },
    book: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const WishList = model<IWishList, WishListModel>(
  'Wishlist',
  wishListSchema
)
