import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("log_recepcionpedidos", { schema: "planetb_ventas" })
export class LogRecepcionpedidos {
  @PrimaryGeneratedColumn({ type: "int", name: "recepcionpedidosid" })
  recepcionpedidosid: number;

  @Column("datetime", { name: "fecharecepcion", nullable: true })
  fecharecepcion: Date | null;

  @Column("smallint", { name: "numpedidos", default: () => "'0'" })
  numpedidos: number;

  @Column("int", {
    name: "funcionariosid",
    nullable: true,
    default: () => "'0'",
  })
  funcionariosid: number | null;

  @Column("varchar", { name: "memo", length: 100 })
  memo: string;
}
