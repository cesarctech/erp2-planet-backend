import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("transportistas_horario", { schema: "planetb_ventas" })
export class TransportistasHorario {
  @PrimaryGeneratedColumn({ type: "int", name: "transportistas_horarioid" })
  transportistasHorarioid: number;

  @Column("int", { name: "transportistasid" })
  transportistasid: number;

  @Column("varchar", { name: "horario", length: 30 })
  horario: string;
}
