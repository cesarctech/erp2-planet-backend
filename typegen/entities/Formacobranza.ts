import { Column, Entity } from "typeorm";

@Entity("formacobranza", { schema: "planetb_ventas" })
export class Formacobranza {
  @Column("int", { primary: true, name: "formacobranzaid" })
  formacobranzaid: number;

  @Column("varchar", { name: "formacobranza", length: 50 })
  formacobranza: string;

  @Column("varchar", { name: "formacobranza_jp", length: 80 })
  formacobranzaJp: string;
}
