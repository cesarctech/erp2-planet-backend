import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("clientes_donki", { schema: "planetb_ventas" })
export class ClientesDonki {
  @PrimaryGeneratedColumn({ type: "int", name: "clientesdonki_id" })
  clientesdonkiId: number;

  @Column("int", { name: "clientesid", default: () => "'0'" })
  clientesid: number;

  @Column("varchar", { name: "empresaid", length: 30 })
  empresaid: string;

  @Column("varchar", { name: "empresanm", length: 100 })
  empresanm: string;

  @Column("varchar", { name: "empresanm_jp", length: 100 })
  empresanmJp: string;

  @Column("varchar", { name: "sucursalid", length: 30 })
  sucursalid: string;

  @Column("varchar", { name: "sucursalnm", length: 100 })
  sucursalnm: string;

  @Column("varchar", { name: "sucursalnm_jp", length: 100 })
  sucursalnmJp: string;

  @Column("varchar", { name: "item1", length: 50 })
  item1: string;

  @Column("varchar", { name: "item2", length: 50 })
  item2: string;

  @Column("varchar", { name: "item3", length: 50 })
  item3: string;
}
