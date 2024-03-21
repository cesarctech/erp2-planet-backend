import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("unq_ssss", ["periodoscontablesid", "clientesid"], { unique: true })
@Entity("clientes_facturas", { schema: "planetb_ventas" })
export class ClientesFacturas {
  @PrimaryGeneratedColumn({ type: "int", name: "facturaid" })
  facturaid: number;

  @Column("varchar", { name: "periodoscontablesid", length: 7 })
  periodoscontablesid: string;

  @Column("date", { name: "fechafactura" })
  fechafactura: string;

  @Column("int", { name: "clientesid", default: () => "'0'" })
  clientesid: number;

  @Column("int", { name: "facturacd", nullable: true, default: () => "'0'" })
  facturacd: number | null;

  @Column("int", { name: "saldoanterior", default: () => "'0'" })
  saldoanterior: number;

  @Column("int", { name: "pagamentos", default: () => "'0'" })
  pagamentos: number;

  @Column("int", { name: "importefactura8", default: () => "'0'" })
  importefactura8: number;

  @Column("int", { name: "importefactura10", default: () => "'0'" })
  importefactura10: number;

  @Column("int", { name: "impuesto8", default: () => "'0'" })
  impuesto8: number;

  @Column("int", { name: "impuesto10", default: () => "'0'" })
  impuesto10: number;

  @Column("int", { name: "totalfactura", default: () => "'0'" })
  totalfactura: number;

  @Column("varchar", { name: "observacion", nullable: true, length: 100 })
  observacion: string | null;
}
