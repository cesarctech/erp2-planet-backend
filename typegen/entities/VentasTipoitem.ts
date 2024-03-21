import { Column, Entity } from "typeorm";

@Entity("ventas_tipoitem", { schema: "planetb_ventas" })
export class VentasTipoitem {
  @Column("smallint", { primary: true, name: "tipoitemid" })
  tipoitemid: number;

  @Column("varchar", { name: "tipoitem", length: 30 })
  tipoitem: string;

  @Column("varchar", { name: "memo", length: 50 })
  memo: string;
}
