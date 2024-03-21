import { Column, Entity } from "typeorm";

@Entity("impuestos", { schema: "planetb_ventas" })
export class Impuestos {
  @Column("date", { primary: true, name: "inicio" })
  inicio: string;

  @Column("date", { primary: true, name: "fin" })
  fin: string;

  @Column("decimal", { name: "tasaimpuesto", precision: 3, scale: 2 })
  tasaimpuesto: string;
}
