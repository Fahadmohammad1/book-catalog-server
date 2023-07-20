import { Model, Schema, model } from 'mongoose'
import { IBook } from '../book/book.interface'

export type IReadingList = {
  email: string
  book: Schema.Types.ObjectId | IBook
  willReadSoon: boolean
  isReading: boolean
  isFinished: boolean
}

export type ReadingListModel = Model<IReadingList, Record<string, unknown>>

const readingListSchema = new Schema<IReadingList, ReadingListModel>(
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
    willReadSoon : {
        type : Boolean,
        default : false
    },
    isReading : {
        type : Boolean,
        default : false
    },
    isFinished : {
        type : Boolean,
        default : false
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const ReadingList = model<IReadingList, ReadingListModel>(
  'ReadingList',
  readingListSchema
)
