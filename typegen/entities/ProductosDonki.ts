import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("productos_donki", { schema: "planetb_ventas" })
export class ProductosDonki {
  @PrimaryGeneratedColumn({ type: "int", name: "productosdonki_id" })
  productosdonkiId: number;

  @Column("int", { name: "productosid", default: () => "'0'" })
  productosid: number;

  @Column("varchar", { name: "dk_color", length: 20 })
  dkColor: string;

  @Column("varchar", { name: "dk_talla", length: 20 })
  dkTalla: string;

  @Column("int", { name: "dk_cantidadcaja" })
  dkCantidadcaja: number;

  @Column("decimal", { name: "dk_peso", precision: 10, scale: 3 })
  dkPeso: string;

  @Column("tinyint", { name: "dk_s_umedidaventasid", default: () => "'0'" })
  dkSUmedidaventasid: number;
}
