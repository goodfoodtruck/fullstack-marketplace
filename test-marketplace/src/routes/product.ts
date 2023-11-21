import { Router } from "express"

import { 
    createProduct,
    deleteProduct,
    editProduct,
    editForm,
    getAllProducts
} from "../controllers/product"

const router = Router()

router.get("/", getAllProducts)
router.get("/admin", getAllProducts)
router.post("/add", createProduct)
router.post("/edit/:id", editProduct)
router.get("/edit/:id", editForm)
router.post("/delete/:id", deleteProduct)

export default router