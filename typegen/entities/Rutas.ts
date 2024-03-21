import { Column, Entity, OneToMany } from "typeorm";
import { Ventas } from "./Ventas";

@Entity("rutas", { schema: "planetb_ventas" })
export class Rutas {
  @Column("tinyint", { primary: true, name: "rutasid" })
  rutasid: number;

  @Column("varchar", { name: "rutasnm", length: 100 })
  rutasnm: string;

  @Column("int", { name: "transportistasid", default: () => "'0'" })
  transportistasid: number;

  @Column("tinyint", { name: "cancelar", default: () => "'0'" })
  cancelar: number;

  @Column("varchar", { name: "memo", length: 150 })
  memo: string;

  @OneToMany(() => Ventas, (ventas) => ventas.rutas)
  ventas: Ventas[];
}
