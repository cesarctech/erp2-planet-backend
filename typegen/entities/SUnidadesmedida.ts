import { Column, Entity } from "typeorm";

@Entity("s_unidadesmedida", { schema: "planetb_ventas" })
export class SUnidadesmedida {
  @Column("tinyint", { primary: true, name: "s_unidadesmedidaid" })
  sUnidadesmedidaid: number;

  @Column("varchar", { name: "s_unidadesmedidanm", length: 100 })
  sUnidadesmedidanm: string;

  @Column("varchar", { name: "s_unidadesmedidaabv", length: 15 })
  sUnidadesmedidaabv: string;
}
