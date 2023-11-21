import { Router } from "express"

import { 
    createCart,
    getCartById,
    getAllCartItems,
    checkoutCart
} from "../controllers/cart"

const router = Router()

router.get("/", createCart)
router.get("/:id", getCartById)
router.get("/:id/items", getAllCartItems)
router.get("/:id/checkout", checkoutCart)

export default router