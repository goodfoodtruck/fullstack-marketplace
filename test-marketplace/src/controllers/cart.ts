import { RequestHandler } from "express"
import { Cart } from "../models/cart"
import { Item } from "../models/item"
import { Product } from "../models/product"

export const createCart: RequestHandler = (req, res) => {
    Cart.create()
        .then((createdCart) => {
            res.status(200).json({cart: createdCart})
        })
        .catch((e) => {
            console.error("Error on cart creation : ", e)
        })
}

export const getCartById: RequestHandler = (req, res) => {
    Cart.findByPk(req.params.id)
        .then((cart) => {
            res.status(200).json({cart: cart})
        })
        .catch((e) => (
            console.error("Error when fetching cart : ", e)
        ))
}

export const getAllCartItems: RequestHandler = (req, res) => {
    Item.findAll({where: { cartId: req.params.id }})
        .then((allItems) => {
            res.status(200).json({items: allItems})
        })
        .catch((e) => {
            console.error("Error when fetching cart items : ", e)
        })
}

export const checkoutCart: RequestHandler = async (req, res) => {
    try {
        const cart = await Cart.update({checkedOut: true}, {where: { id: req.params.id }})
        const allItems = await Item.findAll({where: { cartId: req.params.id }})
        if (allItems) {
            allItems.map(async (item) => {
                const product = await Product.findByPk(item.productId)
                product.increment("ordered", {by: item.quantity})
            })
        }
        return res.status(200).json({cart: cart})
    } catch(e) {
        console.error(e)
    }
}