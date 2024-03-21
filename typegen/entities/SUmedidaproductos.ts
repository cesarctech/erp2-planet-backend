import { Column, Entity } from "typeorm";

@Entity("s_umedidaproductos", { schema: "planetb_ventas" })
export class SUmedidaproductos {
  @Column("tinyint", {
    primary: true,
    name: "s_umedidaventasid",
    default: () => "'0'",
  })
  sUmedidaventasid: number;

  @Column("varchar", { name: "s_umedidaventasnm", length: 50 })
  sUmedidaventasnm: string;

  @Column("varchar", { name: "s_umedidaventasabv", length: 5 })
  sUmedidaventasabv: string;

  @Column("tinyint", { name: "s_unidadesmedidaid", default: () => "'0'" })
  sUnidadesmedidaid: number;
}
