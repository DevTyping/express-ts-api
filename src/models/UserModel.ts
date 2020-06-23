import { Model, DataTypes } from "sequelize"
import { database } from "../configs/Database"

export class User extends Model {
  public id!: Number
  public email!: String
  public password!: String
  public name: String | undefined
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "Users",
    sequelize: database,
  }
)

export interface UserInterface {
  email: String
  name: String
}
