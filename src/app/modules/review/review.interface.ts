import { Model } from 'mongoose'

export type IReview = {
  bookId: string
  email: string
  name: string
  reviewText: string
}

export type ReviewModel = Model<IReview, Record<string, unknown>>
