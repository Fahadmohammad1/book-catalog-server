import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { BookRoutes } from '../modules/book/book.route'
import { ReviewRoutes } from '../modules/review/review.route'
import { WishListRoutes } from '../modules/wishList/wishList.route'
import { ReadingListRoutes } from '../modules/readingList/readingList.route'

const router = express.Router()

const moduleRoutes = [
    {
        path : '/user',
        route : UserRoutes
    },
    {
        path : '/book',
        route : BookRoutes
    },
    {
        path : '/review',
        route : ReviewRoutes
    },
    {
        path : '/wishlist',
        route : WishListRoutes
    },
    {
        path : '/reading',
        route : ReadingListRoutes
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router