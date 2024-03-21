import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tmpconta", { schema: "planetb_ventas" })
export class Tmpconta {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "clientesid", default: () => "'0'" })
  clientesid: number;

  @Column("int", { name: "id_conta", default: () => "'0'" })
  idConta: number;
}
