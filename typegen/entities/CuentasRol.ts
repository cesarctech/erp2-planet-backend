import { Column, Entity } from "typeorm";

@Entity("cuentas_rol", { schema: "planetb_ventas" })
export class CuentasRol {
  @Column("smallint", { primary: true, name: "rolid" })
  rolid: number;

  @Column("varchar", { name: "rolnm", length: 100 })
  rolnm: string;
}
