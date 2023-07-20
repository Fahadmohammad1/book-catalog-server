import express from 'express'
import { WishListController } from './wishList.controller'

const router = express.Router()

router.get('/:email', WishListController.getWishlist)

router.post('/add', WishListController.addToWishlist)



export const WishListRoutes = router