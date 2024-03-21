import { Column, Entity } from "typeorm";

@Entity("auditoriainventarios", { schema: "planetb_ventas" })
export class Auditoriainventarios {
  @Column("char", { name: "Almacen", nullable: true, length: 2 })
  almacen: string | null;

  @Column("char", { name: "Clase", nullable: true, length: 1 })
  clase: string | null;

  @Column("int", { name: "Nro_Voucher", nullable: true })
  nroVoucher: number | null;

  @Column("char", { name: "Codigo", nullable: true, length: 10 })
  codigo: string | null;

  @Column("decimal", {
    name: "Cantidad_Anterior",
    nullable: true,
    precision: 20,
    scale: 5,
    default: () => "'0.00000'",
  })
  cantidadAnterior: string | null;

  @Column("decimal", {
    name: "Cantidad_Nueva",
    nullable: true,
    precision: 20,
    scale: 5,
    default: () => "'0.00000'",
  })
  cantidadNueva: string | null;

  @Column("char", { name: "Usuario", nullable: true, length: 30 })
  usuario: string | null;

  @Column("char", { name: "Fecha_Hora", nullable: true, length: 20 })
  fechaHora: string | null;

  @Column("tinytext", { name: "Accion", nullable: true })
  accion: string | null;
}
