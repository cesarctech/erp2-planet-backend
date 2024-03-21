import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TmpProduccion } from "./TmpProduccion";
import { TmpVentasDetalles } from "./TmpVentasDetalles";

@Entity("tmp_ventas", { schema: "planetb_ventas" })
export class TmpVentas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "produccion_id", default: () => "'0'" })
  produccionId: number;

  @Column("date", { name: "fecha" })
  fecha: string;

  @Column("int", { name: "clientesid" })
  clientesid: number;

  @Column("decimal", {
    name: "total",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  total: string;

  @OneToMany(() => TmpProduccion, (tmpProduccion) => tmpProduccion.venta)
  tmpProduccions: TmpProduccion[];

  @OneToMany(
    () => TmpVentasDetalles,
    (tmpVentasDetalles) => tmpVentasDetalles.venta
  )
  tmpVentasDetalles: TmpVentasDetalles[];
}
