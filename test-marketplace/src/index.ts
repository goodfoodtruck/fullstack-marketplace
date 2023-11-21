import express = require("express")
import path = require("path")
import cors = require("cors")
import { Sequelize } from "sequelize-typescript"

/* Models */
import { Product } from "./models/product"
import { Item } from "./models/item"
import { Cart } from "./models/cart"

/* Routes */
import cartRouter from "./routes/cart"
import productRouter from "./routes/product"
import itemRouter from "./routes/item"

/* Initializing database */
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    models: [Product, Cart, Item]
})

/* Synchronizing with database */
sequelize.sync()
    .then(() => {
        console.log("Synchronized with the database")
    })
    .catch((e) => {
        console.error("Error synchronizing with database : ", e)
    })

const app = express()

app.use(cors())

/* View engine */
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "twig")
app.use(express.urlencoded({ extended: true }))

/* Routes */
app.use("/cart", cartRouter)
app.use("/products", productRouter)
app.use("/items", itemRouter)

/* Start server */
app.listen(3007, () => {
  console.log("Server running")
})