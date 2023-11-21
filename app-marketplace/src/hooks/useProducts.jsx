import { useState, useEffect } from "react"

export const useProducts = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        const url = "http://localhost:3007/products"
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
                return setProducts(json.products)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [])

    return products
}