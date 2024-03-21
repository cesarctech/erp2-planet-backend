import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("usuario_UNIQUE", ["usuario"], { unique: true })
@Entity("cuentas_usuarios", { schema: "planetb_ventas" })
export class CuentasUsuarios {
  @PrimaryGeneratedColumn({ type: "int", name: "usuarioid" })
  usuarioid: number;

  @Column("varchar", { name: "usuario", unique: true, length: 20 })
  usuario: string;

  @Column("varchar", { name: "passwords", length: 20 })
  passwords: string;

  @Column("varchar", { name: "password", length: 100 })
  password: string;

  @Column("int", { name: "funcionariosid" })
  funcionariosid: number;

  @Column("varchar", { name: "email", length: 100 })
  email: string;

  @Column("tinyint", {
    name: "desactivar",
    nullable: true,
    default: () => "'0'",
  })
  desactivar: number | null;

  @Column("datetime", { name: "fechahora", nullable: true })
  fechahora: Date | null;
}
