import { Column, Entity } from "typeorm";

@Entity("s_tax", { schema: "planetb_ventas" })
export class STax {
  @Column("smallint", { primary: true, name: "taxid" })
  taxid: number;

  @Column("decimal", { name: "tax", precision: 6, scale: 3 })
  tax: string;

  @Column("date", { name: "desde" })
  desde: string;

  @Column("date", { name: "hasta" })
  hasta: string;
}
