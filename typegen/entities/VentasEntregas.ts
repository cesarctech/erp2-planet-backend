import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { VentasDetalles } from "./VentasDetalles";

@Index("fk_entregasventasdetalles", ["ventasDetallesid"], {})
@Entity("ventas_entregas", { schema: "planetb_ventas" })
export class VentasEntregas {
  @PrimaryGeneratedColumn({ type: "int", name: "ventas_entregasid" })
  ventasEntregasid: number;

  @Column("bigint", { name: "ventas_detallesid", default: () => "'0'" })
  ventasDetallesid: string;

  @Column("date", { name: "fechaentrega" })
  fechaentrega: string;

  @Column("int", { name: "productosid", default: () => "'0'" })
  productosid: number;

  @Column("decimal", {
    name: "cantidad",
    precision: 10,
    scale: 3,
    default: () => "'0.000'",
  })
  cantidad: string;

  @Column("text", { name: "memo", nullable: true })
  memo: string | null;

  @ManyToOne(
    () => VentasDetalles,
    (ventasDetalles) => ventasDetalles.ventasEntregases,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([
    { name: "ventas_detallesid", referencedColumnName: "ventasDetallesid" },
  ])
  ventasDetalles: VentasDetalles;
}
