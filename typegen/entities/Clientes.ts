import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("clientes", { schema: "planetb_ventas" })
export class Clientes {
  @PrimaryGeneratedColumn({ type: "int", name: "clientesid" })
  clientesid: number;

  @Column("int", { name: "clientescd", nullable: true })
  clientescd: number | null;

  @Column("varchar", { name: "clientesnm", length: 100 })
  clientesnm: string;

  @Column("varchar", { name: "clientesnmcorto", length: 50 })
  clientesnmcorto: string;

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

  @Column("varchar", { name: "clientesnm_jp", nullable: true, length: 100 })
  clientesnmJp: string | null;

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

  @Column("varchar", { name: "email", nullable: true, length: 100 })
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

  @Column("int", { name: "facturar", nullable: true })
  facturar: number | null;

  @Column("tinyint", { name: "estado", nullable: true, default: () => "'0'" })
  estado: number | null;

  @Column("tinyint", { name: "restringir", default: () => "'0'" })
  restringir: number;

  @Column("int", { name: "clientes_actividad", nullable: true })
  clientesActividad: number | null;

  @Column("tinyint", { name: "grupoempresarial", default: () => "'0'" })
  grupoempresarial: number;

  @Column("int", { name: "id_conta", default: () => "'0'" })
  idConta: number;

  @Column("tinyint", { name: "tiporedondeo", default: () => "'0'" })
  tiporedondeo: number;

  @Column("tinyint", { name: "precisionredondeo", default: () => "'0'" })
  precisionredondeo: number;

  @Column("int", { name: "acuerdopreciosid", default: () => "'0'" })
  acuerdopreciosid: number;

  @Column("datetime", { name: "create_date", nullable: true })
  createDate: Date | null;

  @Column("datetime", { name: "update_date", nullable: true })
  updateDate: Date | null;

  @Column("int", { name: "userid", nullable: true, default: () => "'0'" })
  userid: number | null;
}
