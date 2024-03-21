import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tmpnyukin1027", { schema: "planetb_ventas" })
export class Tmpnyukin1027 {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("date", { name: "fechacobranza" })
  fechacobranza: string;

  @Column("int", { name: "formacobranzaid" })
  formacobranzaid: number;

  @Column("int", { name: "importepagado", default: () => "'0'" })
  importepagado: number;

  @Column("int", { name: "cd", default: () => "'0'" })
  cd: number;

  @Column("int", { name: "clientesid", default: () => "'0'" })
  clientesid: number;
}
