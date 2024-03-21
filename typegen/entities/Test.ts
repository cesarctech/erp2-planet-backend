import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("test", { schema: "planetb_ventas" })
export class Test {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "precio" })
  precio: number;

  @Column("date", { name: "entrega", nullable: true })
  entrega: string | null;

  @Column("datetime", { name: "fecha", nullable: true })
  fecha: Date | null;

  @Column("int", { name: "valor", nullable: true })
  valor: number | null;
}
