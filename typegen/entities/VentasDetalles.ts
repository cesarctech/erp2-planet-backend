import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ventas } from "./Ventas";
import { VentasEntregas } from "./VentasEntregas";

@Index("pktes", ["ventasid"], {})
@Entity("ventas_detalles", { schema: "planetb_ventas" })
export class VentasDetalles {
  @PrimaryGeneratedColumn({ type: "bigint", name: "ventas_detallesid" })
  ventasDetallesid: string;

  @Column("int", { name: "ventasid" })
  ventasid: number;

  @Column("smallint", { name: "tipoitemid", default: () => "'1'" })
  tipoitemid: number;

  @Column("int", { name: "productosid", nullable: true })
  productosid: number | null;

  @Column("varchar", { name: "codigobarra", length: 13 })
  codigobarra: string;

  @Column("int", { name: "proveedorid", nullable: true })
  proveedorid: number | null;

  @Column("varchar", { name: "marca", length: 30 })
  marca: string;

  @Column("int", { name: "s_unidadid" })
  sUnidadid: number;

  @Column("varchar", { name: "presentacion", length: 50 })
  presentacion: string;

  @Column("decimal", { name: "cantidad", precision: 10, scale: 3 })
  cantidad: string;

  @Column("decimal", { name: "precio_costo", precision: 10, scale: 3 })
  precioCosto: string;

  @Column("decimal", { name: "precio_venta", precision: 10, scale: 3 })
  precioVenta: string;

  @Column("decimal", { name: "precio", precision: 10, scale: 3 })
  precio: string;

  @Column("tinyint", { name: "control_existencias" })
  controlExistencias: number;

  @Column("int", { name: "importe" })
  importe: number;

  @Column("smallint", { name: "taxid", default: () => "'0'" })
  taxid: number;

  @Column("decimal", {
    name: "tax",
    precision: 6,
    scale: 3,
    default: () => "'0.000'",
  })
  tax: string;

  @Column("decimal", {
    name: "valortax",
    precision: 7,
    scale: 3,
    default: () => "'0.000'",
  })
  valortax: string;

  @Column("date", { name: "fechavencimiento", nullable: true })
  fechavencimiento: string | null;

  @Column("date", { name: "fechainventario", nullable: true })
  fechainventario: string | null;

  @Column("datetime", { name: "create_date", nullable: true })
  createDate: Date | null;

  @Column("datetime", { name: "update_date", nullable: true })
  updateDate: Date | null;

  @Column("int", { name: "userid", default: () => "'0'" })
  userid: number;

  @Column("int", { name: "produccion_detallesid", default: () => "'0'" })
  produccionDetallesid: number;

  @Column("enum", {
    name: "estado_produccion",
    enum: ["pendientes", "en_proceso", "completado"],
    default: () => "'pendientes'",
  })
  estadoProduccion: "pendientes" | "en_proceso" | "completado";

  @Column("datetime", { name: "fecha_estado_produccion", nullable: true })
  fechaEstadoProduccion: Date | null;

  @Column("int", { name: "ventas_entregasid", default: () => "'0'" })
  ventasEntregasid: number;

  @ManyToOne(() => Ventas, (ventas) => ventas.ventasDetalles, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "ventasid", referencedColumnName: "ventasid" }])
  ventas: Ventas;

  @OneToMany(
    () => VentasEntregas,
    (ventasEntregas) => ventasEntregas.ventasDetalles
  )
  ventasEntregases: VentasEntregas[];
}
