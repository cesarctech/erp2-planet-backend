import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TmpVentas } from "./TmpVentas";

@Index("venta_id", ["ventaId"], {})
@Entity("tmp_ventas_detalles", { schema: "planetb_ventas" })
export class TmpVentasDetalles {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "venta_id" })
  ventaId: number;

  @Column("int", { name: "productosid" })
  productosid: number;

  @Column("varchar", { name: "producto", nullable: true, length: 50 })
  producto: string | null;

  @Column("int", { name: "cantidad" })
  cantidad: number;

  @Column("decimal", { name: "precio", precision: 10, scale: 3 })
  precio: string;

  @ManyToOne(() => TmpVentas, (tmpVentas) => tmpVentas.tmpVentasDetalles, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "venta_id", referencedColumnName: "id" }])
  venta: TmpVentas;
}
