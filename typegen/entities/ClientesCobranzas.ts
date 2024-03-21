import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("clientes_cobranzas", { schema: "planetb_ventas" })
export class ClientesCobranzas {
  @PrimaryGeneratedColumn({ type: "int", name: "cobranzasid" })
  cobranzasid: number;

  @Column("varchar", { name: "periodoscontablesid", nullable: true, length: 7 })
  periodoscontablesid: string | null;

  @Column("date", { name: "fechacobranza" })
  fechacobranza: string;

  @Column("int", { name: "clientesid", default: () => "'0'" })
  clientesid: number;

  @Column("int", { name: "numfactura", default: () => "'0'" })
  numfactura: number;

  @Column("int", {
    name: "formacobranzaid",
    comment: "0=otros, 1=cash, 2=deposito bancario 3= Daibiki 4 = tax",
    default: () => "'1'",
  })
  formacobranzaid: number;

  @Column("int", { name: "importepagado", default: () => "'0'" })
  importepagado: number;

  @Column("varchar", { name: "observacion", nullable: true, length: 150 })
  observacion: string | null;

  @Column("datetime", { name: "create_date", nullable: true })
  createDate: Date | null;

  @Column("datetime", { name: "update_date", nullable: true })
  updateDate: Date | null;

  @Column("int", { name: "userid", default: () => "'0'" })
  userid: number;
}
