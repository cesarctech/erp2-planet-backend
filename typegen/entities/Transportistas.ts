import { Column, Entity } from "typeorm";

@Entity("transportistas", { schema: "planetb_ventas" })
export class Transportistas {
  @Column("int", { primary: true, name: "transportistasid" })
  transportistasid: number;

  @Column("varchar", { name: "transportistasnm", length: 100 })
  transportistasnm: string;

  @Column("varchar", { name: "transportistasnm_jp", length: 100 })
  transportistasnmJp: string;
}
