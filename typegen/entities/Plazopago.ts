import { Column, Entity, Index } from "typeorm";

@Index("plazopagonm_UNIQUE", ["plazopagonm"], { unique: true })
@Entity("plazopago", { schema: "planetb_ventas" })
export class Plazopago {
  @Column("tinyint", { primary: true, name: "plazopagoid" })
  plazopagoid: number;

  @Column("varchar", {
    name: "plazopagonm",
    unique: true,
    comment: "7 -> semanal\n14 -> quincenal\n30 -> mensual\n60 -> 2 meses\n",
    length: 100,
  })
  plazopagonm: string;

  @Column("varchar", { name: "numdias", length: 45 })
  numdias: string;
}
