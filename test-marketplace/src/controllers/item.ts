import { RequestHandler } from "express"
import { Item } from "../models/item"

export const getItemById: RequestHandler = (req, res) => {
    const cartId = req.params.cartId
    const productId = req.params.productId

    Item.findOne({where: { cartId: cartId, productId: productId }})
        .then((item) => {
            res.status(200).json({item: item})
        })
        .catch((e) => {
            console.error(e)
        })
}

export const findOrCreateItem: RequestHandler = (req, res) => {
    const cartId = req.params.cartId
    const productId = req.params.productId
    const quantity = req.params.quantity

    Item.findOrCreate({
        where: { cartId: cartId, productId: productId },
        defaults: {
            quantity: quantity
        }
    })
        .then(([item, created]) => {
            if (!created) {
                item.update({ quantity: quantity })
                    .then(() => res.status(200))
                    .catch((e) => console.error(e))
            } else {
                res.status(200)
            }
        })
        .catch((e) => {
            console.error(e)
        })
}