import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Rutas } from "./Rutas";
import { VentasDetalles } from "./VentasDetalles";

@Index("fk_ventas_rutas", ["rutasid"], {})
@Entity("ventas", { schema: "planetb_ventas" })
export class Ventas {
  @PrimaryGeneratedColumn({ type: "int", name: "ventasid" })
  ventasid: number;

  @Column("int", { name: "ventascd", nullable: true })
  ventascd: number | null;

  @Column("int", { name: "pedidosid", nullable: true })
  pedidosid: number | null;

  @Column("tinyint", { name: "entregaparcelada", default: () => "'0'" })
  entregaparcelada: number;

  @Column("int", { name: "entregaparceladaid", default: () => "'0'" })
  entregaparceladaid: number;

  @Column("varchar", { name: "periodoscontablesid", length: 7 })
  periodoscontablesid: string;

  @Column("int", { name: "clientesid" })
  clientesid: number;

  @Column("int", { name: "funcionariosid" })
  funcionariosid: number;

  @Column("smallint", { name: "ventastipoid", default: () => "'0'" })
  ventastipoid: number;

  @Column("date", { name: "fechaventa", nullable: true })
  fechaventa: string | null;

  @Column("datetime", { name: "horaventa", nullable: true })
  horaventa: Date | null;

  @Column("date", { name: "fechaentrega" })
  fechaentrega: string;

  @Column("date", { name: "fechapago" })
  fechapago: string;

  @Column("tinyint", { name: "diapago", default: () => "'0'" })
  diapago: number;

  @Column("date", { name: "periodofacturacion", nullable: true })
  periodofacturacion: string | null;

  @Column("int", {
    name: "destinatarioid",
    nullable: true,
    default: () => "'0'",
  })
  destinatarioid: number | null;

  @Column("tinyint", {
    name: "estadoventa",
    nullable: true,
    default: () => "'0'",
  })
  estadoventa: number | null;

  @Column("int", { name: "transportistasid", nullable: true })
  transportistasid: number | null;

  @Column("tinyint", { name: "rutasid" })
  rutasid: number;

  @Column("tinyint", { name: "horarioentrega", nullable: true })
  horarioentrega: number | null;

  @Column("smallint", { name: "formapagoid" })
  formapagoid: number;

  @Column("tinyint", { name: "plazopagoid" })
  plazopagoid: number;

  @Column("int", { name: "facturaid", nullable: true })
  facturaid: number | null;

  @Column("tinyint", {
    name: "estadocobranza",
    nullable: true,
    default: () => "'0'",
  })
  estadocobranza: number | null;

  @Column("tinyint", { name: "estadocontable", default: () => "'0'" })
  estadocontable: number;

  @Column("date", { name: "estadocontable_fecha", nullable: true })
  estadocontableFecha: string | null;

  @Column("datetime", { name: "fechaimpresion", nullable: true })
  fechaimpresion: Date | null;

  @Column("smallint", {
    name: "numimpresion",
    nullable: true,
    default: () => "'0'",
  })
  numimpresion: number | null;

  @Column("int", { name: "estadologisticoid", nullable: true })
  estadologisticoid: number | null;

  @Column("int", { name: "logistica_recibido", default: () => "'0'" })
  logisticaRecibido: number;

  @Column("int", { name: "logistica_enviado", default: () => "'0'" })
  logisticaEnviado: number;

  @Column("tinyint", { name: "tiporedondeo", default: () => "'0'" })
  tiporedondeo: number;

  @Column("tinyint", { name: "precisionredondeo", default: () => "'0'" })
  precisionredondeo: number;

  @Column("varchar", { name: "memo", nullable: true, length: 350 })
  memo: string | null;

  @Column("tinyint", { name: "flgmemo", nullable: true, default: () => "'0'" })
  flgmemo: number | null;

  @Column("varchar", { name: "memo_logistico", nullable: true, length: 350 })
  memoLogistico: string | null;

  @Column("int", { name: "acuerdopreciosid", default: () => "'0'" })
  acuerdopreciosid: number;

  @Column("varchar", { name: "bunruikodo", nullable: true, length: 6 })
  bunruikodo: string | null;

  @Column("varchar", { name: "denpyokubun", nullable: true, length: 3 })
  denpyokubun: string | null;

  @Column("varchar", { name: "denpyobango", nullable: true, length: 10 })
  denpyobango: string | null;

  @Column("varchar", { name: "hatchubango", nullable: true, length: 10 })
  hatchubango: string | null;

  @Column("datetime", { name: "create_date", nullable: true })
  createDate: Date | null;

  @Column("datetime", { name: "update_date", nullable: true })
  updateDate: Date | null;

  @Column("int", { name: "userid", default: () => "'0'" })
  userid: number;

  @Column("int", { name: "produccionid", default: () => "'0'" })
  produccionid: number;

  @Column("datetime", { name: "fecha_produccion", nullable: true })
  fechaProduccion: Date | null;

  @ManyToOne(() => Rutas, (rutas) => rutas.ventas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "rutasid", referencedColumnName: "rutasid" }])
  rutas: Rutas;

  @OneToMany(() => VentasDetalles, (ventasDetalles) => ventasDetalles.ventas)
  ventasDetalles: VentasDetalles[];
}
