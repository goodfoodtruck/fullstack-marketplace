import { useState, useEffect } from "react"

export const useCart = () => {
    const [cart, setCart] = useState()
    const cartId = localStorage.getItem("cartId")
    
    useEffect(() => {
        const url = cartId ? `http://localhost:3007/cart/${cartId}` : "http://localhost:3007/cart"
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
                localStorage.setItem("cartId", json.cart.id)
                return setCart(json.cart)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [])

    return cart
}