import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("inventario", { schema: "planetb_ventas" })
export class Inventario {
  @PrimaryGeneratedColumn({ type: "int", name: "inventarioid" })
  inventarioid: number;

  @Column("int", { name: "ventasid" })
  ventasid: number;

  @Column("int", { name: "ventas_detallesid" })
  ventasDetallesid: number;

  @Column("date", { name: "fecha" })
  fecha: string;

  @Column("int", { name: "almacenesid" })
  almacenesid: number;

  @Column("int", { name: "productosid" })
  productosid: number;

  @Column("varchar", { name: "tipo", length: 3 })
  tipo: string;

  @Column("decimal", {
    name: "cantidad",
    nullable: true,
    precision: 12,
    scale: 3,
    default: () => "'0.000'",
  })
  cantidad: string | null;

  @Column("varchar", { name: "detalle", length: 100 })
  detalle: string;

  @Column("date", { name: "fechavencimiento", nullable: true })
  fechavencimiento: string | null;

  @Column("int", { name: "transferenciaid" })
  transferenciaid: number;

  @Column("date", { name: "fechainventario", nullable: true })
  fechainventario: string | null;
}
