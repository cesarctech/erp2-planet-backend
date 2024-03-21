import { Column, Entity } from "typeorm";

@Entity("movi", { schema: "planetb_ventas" })
export class Movi {
  @Column("char", { primary: true, name: "Almacen", length: 2 })
  almacen: string;

  @Column("char", { primary: true, name: "Clase", length: 1 })
  clase: string;

  @Column("int", { name: "Nro_Voucher" })
  nroVoucher: number;

  @Column("char", { primary: true, name: "Codigo", length: 10 })
  codigo: string;

  @Column("decimal", {
    name: "Cantidad",
    precision: 20,
    scale: 5,
    default: () => "'0.00000'",
  })
  cantidad: string;
}
