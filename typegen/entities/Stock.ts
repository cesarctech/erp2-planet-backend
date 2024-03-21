import { Column, Entity } from "typeorm";

@Entity("stock", { schema: "planetb_ventas" })
export class Stock {
  @Column("char", { primary: true, name: "Almacen", length: 2 })
  almacen: string;

  @Column("char", { primary: true, name: "Codigo", length: 10 })
  codigo: string;

  @Column("decimal", {
    name: "StockActual",
    precision: 20,
    scale: 0,
    default: () => "'0'",
  })
  stockActual: string;
}
