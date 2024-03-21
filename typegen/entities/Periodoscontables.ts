import { Column, Entity } from "typeorm";

@Entity("periodoscontables", { schema: "planetb_ventas" })
export class Periodoscontables {
  @Column("varchar", { primary: true, name: "periodoscontablesid", length: 7 })
  periodoscontablesid: string;

  @Column("varchar", { name: "periodonm", length: 80 })
  periodonm: string;

  @Column("tinyint", {
    name: "estadoperiodo",
    comment:
      "0=desbloqueado, 1=cierre periodo , 2=desbloqueado exepto ventas, 4=bloqueado",
    default: () => "'0'",
  })
  estadoperiodo: number;

  @Column("date", { name: "fechaperiododesde" })
  fechaperiododesde: string;

  @Column("date", { name: "fechaperiodohasta" })
  fechaperiodohasta: string;

  @Column("date", { name: "fechacontabledesde" })
  fechacontabledesde: string;

  @Column("date", { name: "fechacontablehasta" })
  fechacontablehasta: string;
}
