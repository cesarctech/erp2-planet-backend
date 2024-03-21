import { Column, Entity } from "typeorm";

@Entity("tmpsaldos", { schema: "planetb_ventas" })
export class Tmpsaldos {
  @Column("int", { name: "id" })
  id: number;

  @Column("varchar", { name: "nm", length: 100 })
  nm: string;

  @Column("int", { name: "saldo" })
  saldo: number;

  @Column("int", { name: "clientesid", default: () => "'0'" })
  clientesid: number;
}
