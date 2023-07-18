import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { BookRoutes } from '../modules/book/book.route'
import { ReviewRoutes } from '../modules/review/review.route'

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
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router