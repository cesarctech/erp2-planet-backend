import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cuentas_rolusuarios", { schema: "planetb_ventas" })
export class CuentasRolusuarios {
  @PrimaryGeneratedColumn({ type: "int", name: "rolusuarioid" })
  rolusuarioid: number;

  @Column("int", { name: "usuarioid" })
  usuarioid: number;

  @Column("int", { name: "rolid" })
  rolid: number;
}
