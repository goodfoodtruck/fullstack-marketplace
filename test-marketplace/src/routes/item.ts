import { Router } from "express"

import { 
    findOrCreateItem,
    getItemById
} from "../controllers/item"

const router = Router()

router.get("/:cartId/:productId", getItemById)
router.get("/:cartId/:productId/:quantity", findOrCreateItem)

export default router