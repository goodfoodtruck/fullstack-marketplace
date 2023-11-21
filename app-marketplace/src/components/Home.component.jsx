import { useState } from "react"
import { useProducts } from "../hooks/useProducts"
import { useCart } from "../hooks/useCart"
import Product from "./Product.component"

const Home = () => {
    const [total, setTotal] = useState(0)

    const cart = useCart()
    const products = useProducts()

    const checkoutCart = async () => {
        const url = `http://localhost:3007/cart/${cart.id}/checkout`
        const request = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            localStorage.removeItem("cartId")
            await fetch(url, request)
            window.location.reload()
        } catch(e) {
            console.error(e)
        }
        
    }

    if (products) {
        return (
            <div className="Home">
                <table>
                    <thead>
                        <tr>
                            <th>Nom du produit</th>
                            <th>Prix TTC (€)</th>
                            <th>&nbsp;</th>
                            <th>Quantité</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <Product
                                key={product.id}
                                cart={cart}
                                product={product}
                                setTotal={setTotal}
                            />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>TOTAL</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            <th>{total}</th>
                            <th>&nbsp;</th>
                        </tr>
                        <tr>
                            <th>
                                <button onClick={checkoutCart}>Commander</button>
                            </th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    } else {
        return (
            <div className="Home">
                <h1>No product was found !</h1>
            </div>
        )
    }
}

export default Home