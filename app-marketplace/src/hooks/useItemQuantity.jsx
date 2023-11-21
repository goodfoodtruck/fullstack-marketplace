import { useState, useEffect } from "react"

export const useItemQuantity = (cart, product) => {
    const [item, setItem] = useState(0)
    
    useEffect(() => {
        const url = `http://localhost:3007/items/${cart.id}/${product.id}`
        const request = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(url, request)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            return setItem(json.item.quantity)
        })
        .catch((e) => {
            console.error(e)
        })
    }, [])

    return item
}