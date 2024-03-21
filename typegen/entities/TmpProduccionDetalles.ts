import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TmpProduccion } from "./TmpProduccion";

@Index("produccion_id", ["produccionId"], {})
@Entity("tmp_produccion_detalles", { schema: "planetb_ventas" })
export class TmpProduccionDetalles {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "produccion_id" })
  produccionId: number;

  @Column("int", { name: "cantidad" })
  cantidad: number;

  @ManyToOne(
    () => TmpProduccion,
    (tmpProduccion) => tmpProduccion.tmpProduccionDetalles,
    { onDelete: "CASCADE", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "produccion_id", referencedColumnName: "id" }])
  produccion: TmpProduccion;
}
