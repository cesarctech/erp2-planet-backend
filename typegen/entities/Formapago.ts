import { Column, Entity } from "typeorm";

@Entity("formapago", { schema: "planetb_ventas" })
export class Formapago {
  @Column("tinyint", { primary: true, name: "formapagoid" })
  formapagoid: number;

  @Column("varchar", {
    name: "formapagonm",
    comment:
      "1 efectivo, 2 credito, 3 pago entrega, 4 transderencia bancaria, 5 tarjeta credito, 99 otros",
    length: 45,
  })
  formapagonm: string;

  @Column("varchar", { name: "formapagonm_jp", length: 50 })
  formapagonmJp: string;
}
