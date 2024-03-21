import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("funcionarios", { schema: "planetb_ventas" })
export class Funcionarios {
  @PrimaryGeneratedColumn({ type: "int", name: "funcionariosid" })
  funcionariosid: number;

  @Column("int", { name: "funcionarioscd", nullable: true })
  funcionarioscd: number | null;

  @Column("varchar", { name: "funcionariosnm", length: 100 })
  funcionariosnm: string;

  @Column("varchar", { name: "funcionariosnmcorto", length: 50 })
  funcionariosnmcorto: string;

  @Column("date", { name: "fechareg", nullable: true })
  fechareg: string | null;

  @Column("varchar", { name: "codigopostal", nullable: true, length: 10 })
  codigopostal: string | null;

  @Column("varchar", { name: "departamento", nullable: true, length: 100 })
  departamento: string | null;

  @Column("varchar", { name: "direccion1", nullable: true, length: 100 })
  direccion1: string | null;

  @Column("varchar", { name: "direccion2", nullable: true, length: 100 })
  direccion2: string | null;

  @Column("varchar", { name: "funcionariosnm_jp", nullable: true, length: 100 })
  funcionariosnmJp: string | null;

  @Column("varchar", { name: "departamento_jp", nullable: true, length: 100 })
  departamentoJp: string | null;

  @Column("varchar", { name: "direccion1_jp", nullable: true, length: 100 })
  direccion1Jp: string | null;

  @Column("varchar", { name: "direccion2_jp", nullable: true, length: 100 })
  direccion2Jp: string | null;

  @Column("varchar", { name: "telefono1", nullable: true, length: 15 })
  telefono1: string | null;

  @Column("varchar", { name: "telefono2", nullable: true, length: 15 })
  telefono2: string | null;

  @Column("varchar", { name: "celular1", nullable: true, length: 15 })
  celular1: string | null;

  @Column("varchar", { name: "celular2", nullable: true, length: 15 })
  celular2: string | null;

  @Column("varchar", { name: "fax1", nullable: true, length: 15 })
  fax1: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 15 })
  email: string | null;

  @Column("varchar", { name: "memo", nullable: true, length: 150 })
  memo: string | null;

  @Column("tinyint", { name: "estado", default: () => "'0'" })
  estado: number;

  @Column("tinyint", { name: "sectorid", default: () => "'0'" })
  sectorid: number;
}
