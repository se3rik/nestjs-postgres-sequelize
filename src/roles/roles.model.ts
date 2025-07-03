import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({
  tableName: "roles",
})
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique identifier" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({ example: "admin", description: "role value" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @Column({ type: DataType.STRING, allowNull: false })
  @ApiProperty({ example: "admin can...", description: "role description" })
  descripton: string;
}