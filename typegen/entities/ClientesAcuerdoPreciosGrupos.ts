import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClientesAcuerdoPreciosDetalles } from "./ClientesAcuerdoPreciosDetalles";

@Entity("clientes_acuerdo_precios_grupos", { schema: "planetb_ventas" })
export class ClientesAcuerdoPreciosGrupos {
  @PrimaryGeneratedColumn({ type: "int", name: "acuerdopreciosid" })
  acuerdopreciosid: number;

  @Column("varchar", { name: "acuerdopreciosnm", length: 150 })
  acuerdopreciosnm: string;

  @Column("tinyint", { name: "porcentaje", default: () => "'0'" })
  porcentaje: number;

  @OneToMany(
    () => ClientesAcuerdoPreciosDetalles,
    (clientesAcuerdoPreciosDetalles) =>
      clientesAcuerdoPreciosDetalles.acuerdoprecios
  )
  clientesAcuerdoPreciosDetalles: ClientesAcuerdoPreciosDetalles[];
}
