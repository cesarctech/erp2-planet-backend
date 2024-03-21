import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TmpVentas } from "./TmpVentas";
import { TmpProduccionDetalles } from "./TmpProduccionDetalles";

@Index("FK_venta_prod", ["ventaId"], {})
@Entity("tmp_produccion", { schema: "planetb_ventas" })
export class TmpProduccion {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "venta_id", nullable: true, default: () => "'0'" })
  ventaId: number | null;

  @Column("date", { name: "fecha" })
  fecha: string;

  @Column("int", { name: "clientesid" })
  clientesid: number;

  @ManyToOne(() => TmpVentas, (tmpVentas) => tmpVentas.tmpProduccions, {
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "venta_id", referencedColumnName: "id" }])
  venta: TmpVentas;

  @OneToMany(
    () => TmpProduccionDetalles,
    (tmpProduccionDetalles) => tmpProduccionDetalles.produccion
  )
  tmpProduccionDetalles: TmpProduccionDetalles[];
}
