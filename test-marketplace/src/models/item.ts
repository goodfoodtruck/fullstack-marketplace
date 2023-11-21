import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript"
import { Cart } from "./cart"
import { Product } from "./product"

@Table({ tableName: "items" })
export class Item extends Model {
    @ForeignKey(() => Cart)
    @Column({type: DataType.INTEGER, allowNull: false})
    cartId!: number

    @BelongsTo(() => Cart)
    cart!: Cart

    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER, allowNull: false})
    productId!: number

    @BelongsTo(() => Product)
    product!: Product
    
    @Column({ type: DataType.INTEGER, allowNull: false})
    quantity!: number
}