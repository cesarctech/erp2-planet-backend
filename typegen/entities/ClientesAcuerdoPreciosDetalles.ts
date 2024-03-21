import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ClientesAcuerdoPreciosGrupos } from "./ClientesAcuerdoPreciosGrupos";

@Index(
  "u_acuproinifin",
  ["acuerdopreciosid", "productosid", "fechainicial", "fechafinal"],
  { unique: true }
)
@Entity("clientes_acuerdo_precios_detalles", { schema: "planetb_ventas" })
export class ClientesAcuerdoPreciosDetalles {
  @PrimaryGeneratedColumn({ type: "int", name: "acuerdopreciosdetallesid" })
  acuerdopreciosdetallesid: number;

  @Column("int", { name: "acuerdopreciosid" })
  acuerdopreciosid: number;

  @Column("int", { name: "productosid" })
  productosid: number;

  @Column("date", { name: "fechainicial" })
  fechainicial: string;

  @Column("date", { name: "fechafinal", default: () => "'9999-12-31'" })
  fechafinal: string;

  @Column("int", { name: "porcentaje", default: () => "'0'" })
  porcentaje: number;

  @Column("decimal", { name: "precioanterior", precision: 10, scale: 3 })
  precioanterior: string;

  @Column("decimal", { name: "precioventa", precision: 10, scale: 3 })
  precioventa: string;

  @Column("varchar", { name: "memo", length: 100 })
  memo: string;

  @ManyToOne(
    () => ClientesAcuerdoPreciosGrupos,
    (clientesAcuerdoPreciosGrupos) =>
      clientesAcuerdoPreciosGrupos.clientesAcuerdoPreciosDetalles,
    { onDelete: "RESTRICT", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "acuerdopreciosid", referencedColumnName: "acuerdopreciosid" },
  ])
  acuerdoprecios: ClientesAcuerdoPreciosGrupos;
}
