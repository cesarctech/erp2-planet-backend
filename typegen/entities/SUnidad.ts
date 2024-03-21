import { Column, Entity, Index } from "typeorm";

@Index("unidad_UNIQUE", ["unidad"], { unique: true })
@Entity("s_unidad", { schema: "planetb_ventas" })
export class SUnidad {
  @Column("tinyint", { primary: true, name: "s_unidadid" })
  sUnidadid: number;

  @Column("varchar", { name: "unidad", unique: true, length: 20 })
  unidad: string;
}
