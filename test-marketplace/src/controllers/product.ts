import { RequestHandler } from "express"
import { Product } from "../models/product"

export const getAllProducts: RequestHandler = (req, res) => {
    Product.findAll()
        .then((allProducts) => {
            if (req.url == "/admin")
            {
                res.render("admin", { products: allProducts })
            }
            else
            {
                res.status(200).json({ products: allProducts })
            }
        })
        .catch((e) => {
            console.error("Error when fetching products : ", e)
        })
}

export const createProduct: RequestHandler = (req, res) => {
    Product.create(req.body)
        .then(() => {
            res.redirect("/products/admin")
        })
        .catch((e) => {
            console.error("Error on product creation : ", e)
        })
}

export const editForm: RequestHandler = (req, res) => {
    Product.findByPk(req.params.id)
        .then((productToEdit) => {
            res.render("edit", { product: productToEdit })
        })
        .catch((e) => {
            console.error("Error fetching product with id : ", e)
        })
}

export const editProduct: RequestHandler = (req, res) => {
    Product.update(req.body, { where: { id: req.params.id } })
        .then(() => {
            res.redirect("/products/admin")
        })
        .catch((e) => {
            console.error("Error trying to udpate product : ", e)
        })
}

export const deleteProduct: RequestHandler = (req, res) => {
    Product.destroy({ where: { id: req.params.id } })
        .then(() => {
            res.redirect("/products/admin")
        })
        .catch((e) => {
            console.error("Error trying to delete product : ", e)
        })
}