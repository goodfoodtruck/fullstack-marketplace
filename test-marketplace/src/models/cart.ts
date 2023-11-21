import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript"
import { Item } from "./item"

@Table({ tableName: "carts" })
export class Cart extends Model {
    @Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: false})
    checkedOut!: boolean

    @HasMany(() => Item)
    items!: Item[]
}