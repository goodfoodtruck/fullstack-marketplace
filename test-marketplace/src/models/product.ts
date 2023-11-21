import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript"
import { Item } from "./item"

@Table({ tableName: "products" })
export class Product extends Model {
    @Column({ type: DataType.STRING, allowNull: false})
    name!: string

    @Column({ type: DataType.DECIMAL(2), allowNull: false})
    price!: number

    @Column({ type: DataType.DECIMAL, validate: { is: /^5\.5|20\.0$/ }, allowNull: false})
    tax!: number

    @Column({ type: DataType.INTEGER, defaultValue: 0, allowNull: false})
    ordered!: number

    @Column({ type: DataType.INTEGER, allowNull: false})
    stock!: number

    @HasMany(() => Item)
    items!: Item[]

}