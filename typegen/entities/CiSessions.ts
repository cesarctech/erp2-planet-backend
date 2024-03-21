import { Column, Entity, Index } from "typeorm";

@Index("ci_sessions_timestamp", ["timestamp"], {})
@Entity("ci_sessions", { schema: "planetb_ventas" })
export class CiSessions {
  @Column("varchar", { name: "id", length: 128 })
  id: string;

  @Column("varchar", { name: "ip_address", length: 45 })
  ipAddress: string;

  @Column("int", { name: "timestamp", unsigned: true, default: () => "'0'" })
  timestamp: number;

  @Column("blob", { name: "data" })
  data: Buffer;

  @Column("datetime", { name: "fechahora", nullable: true })
  fechahora: Date | null;

  @Column("text", { name: "datautf8" })
  datautf8: string;
}
