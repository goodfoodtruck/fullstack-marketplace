import { useState, useEffect } from "react"
import { useItemQuantity } from "../hooks/useItemQuantity"

const Product = (props) => {
    const itemQuantity = useItemQuantity(props.cart, props.product)
    const [quantity, setQuantity] = useState(itemQuantity)

    useEffect(() => {
        setQuantity(() => itemQuantity)
        props.setTotal((total) => total + itemQuantity)
    }, [itemQuantity])

    useEffect(() => {
        if (itemQuantity !== quantity) {
            logToCart()
        }
    }, [quantity])

    const logToCart = () => {
        const url = `http://localhost:3007/items/${props.cart.id}/${props.product.id}/${quantity}`
        const request = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(url, request)
            .then(response => {return})
            .catch((e) => {
                console.error(e)
            })
    }

    const getTaxPrice = (product) => {
        var taxPrice = product.price + ((product.tax / 100) * product.price)
        taxPrice = taxPrice.toPrecision(2)
        return taxPrice
    }

    const addQuantity = () => {
        if (quantity + 1 > props.product.stock - props.product.ordered) {
            return
        }
        setQuantity((quantity) => quantity + 1)
        props.setTotal((total) => total + 1)
    }

    const removeQuantity = () => {
        if (quantity - 1 < 0) {
            return
        }
        setQuantity((quantity) => quantity - 1)
        props.setTotal((total) => total - 1)
    }

    return (
        <tr className="Product">
            <td>{props.product.name}</td>
            <td>{getTaxPrice(props.product)} €</td>
            <td className="button" onClick={() => removeQuantity()}>-</td>
            <td style={{textAlign: "center"}}>{quantity}</td>
            <td className="button" onClick={() => addQuantity()}>+</td>
        </tr>
    )
}

export default Product