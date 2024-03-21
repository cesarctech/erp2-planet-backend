import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("proveedor", { schema: "planetb_ventas" })
export class Proveedor {
  @PrimaryGeneratedColumn({ type: "int", name: "proveedorid" })
  proveedorid: number;

  @Column("int", { name: "proveedorcd", nullable: true })
  proveedorcd: number | null;

  @Column("varchar", { name: "proveedornm", length: 100 })
  proveedornm: string;

  @Column("varchar", { name: "proveedornmcorto", nullable: true, length: 50 })
  proveedornmcorto: string | null;

  @Column("date", { name: "fechareg", nullable: true })
  fechareg: string | null;

  @Column("varchar", { name: "contacto", nullable: true, length: 100 })
  contacto: string | null;

  @Column("varchar", { name: "codigopostal", nullable: true, length: 10 })
  codigopostal: string | null;

  @Column("varchar", { name: "departamento", nullable: true, length: 100 })
  departamento: string | null;

  @Column("varchar", { name: "direccion1", nullable: true, length: 100 })
  direccion1: string | null;

  @Column("varchar", { name: "direccion2", nullable: true, length: 100 })
  direccion2: string | null;

  @Column("varchar", { name: "proveedornm_jp", nullable: true, length: 100 })
  proveedornmJp: string | null;

  @Column("varchar", { name: "contacto_jp", nullable: true, length: 100 })
  contactoJp: string | null;

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

  @Column("varchar", { name: "fax2", nullable: true, length: 15 })
  fax2: string | null;

  @Column("varchar", { name: "homepage", nullable: true, length: 100 })
  homepage: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 15 })
  email: string | null;

  @Column("varchar", { name: "memo", nullable: true, length: 150 })
  memo: string | null;

  @Column("varchar", { name: "feriado1", nullable: true, length: 45 })
  feriado1: string | null;

  @Column("varchar", { name: "feriado2", nullable: true, length: 45 })
  feriado2: string | null;

  @Column("varchar", { name: "horarioatencion", nullable: true, length: 45 })
  horarioatencion: string | null;

  @Column("int", { name: "responsable", nullable: true })
  responsable: number | null;

  @Column("tinyint", { name: "formapagoid", nullable: true })
  formapagoid: number | null;

  @Column("tinyint", { name: "diapago", nullable: true })
  diapago: number | null;

  @Column("tinyint", {
    name: "plazopagoid",
    nullable: true,
    default: () => "'0'",
  })
  plazopagoid: number | null;

  @Column("tinyint", { name: "estado", nullable: true, default: () => "'0'" })
  estado: number | null;
}
