import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("auditoria_ventas", { schema: "planetb_ventas" })
export class AuditoriaVentas {
  @PrimaryGeneratedColumn({ type: "bigint", name: "auditoriaid" })
  auditoriaid: string;

  @Column("varchar", { name: "tipo", length: 1 })
  tipo: string;

  @Column("bigint", { name: "id1", default: () => "'0'" })
  id1: string;

  @Column("bigint", { name: "id2", default: () => "'0'" })
  id2: string;

  @Column("longtext", { name: "valororiginal", nullable: true })
  valororiginal: string | null;

  @Column("longtext", { name: "valornuevo", nullable: true })
  valornuevo: string | null;

  @Column("datetime", { name: "fecha" })
  fecha: Date;

  @Column("int", { name: "userid", nullable: true })
  userid: number | null;
}
