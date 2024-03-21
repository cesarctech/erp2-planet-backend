import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("produccion", { schema: "planetb_ventas" })
export class Produccion {
  @PrimaryGeneratedColumn({ type: "int", name: "produccionid" })
  produccionid: number;

  @Column("enum", { name: "tipo_pedido", enum: ["venta", "planificada"] })
  tipoPedido: "venta" | "planificada";

  @Column("date", { name: "fecha_pedido" })
  fechaPedido: string;

  @Column("int", { name: "ventasid" })
  ventasid: number;

  @Column("date", { name: "fechaventa" })
  fechaventa: string;

  @Column("date", { name: "fechaentrega" })
  fechaentrega: string;

  @Column("int", { name: "clientesid" })
  clientesid: number;

  @Column("int", { name: "destinatarioid" })
  destinatarioid: number;

  @Column("int", { name: "responsable" })
  responsable: number;

  @Column("int", { name: "transportistasid" })
  transportistasid: number;

  @Column("int", { name: "productosid" })
  productosid: number;

  @Column("enum", { name: "tipo", enum: ["E", "S"] })
  tipo: "E" | "S";

  @Column("int", { name: "cantidad" })
  cantidad: number;

  @Column("enum", {
    name: "estado_pedido",
    enum: ["pendientes", "en_proceso", "completado"],
  })
  estadoPedido: "pendientes" | "en_proceso" | "completado";
}
