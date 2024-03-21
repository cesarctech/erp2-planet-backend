import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("almacenes", { schema: "planetb_ventas" })
export class Almacenes {
  @PrimaryGeneratedColumn({ type: "int", name: "almacenesid" })
  almacenesid: number;

  @Column("varchar", { name: "almacen", length: 50 })
  almacen: string;
}
