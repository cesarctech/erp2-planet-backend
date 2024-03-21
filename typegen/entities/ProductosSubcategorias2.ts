import { Column, Entity } from "typeorm";

@Entity("productos_subcategorias2", { schema: "planetb_ventas" })
export class ProductosSubcategorias2 {
  @Column("int", { name: "productos_subcategorias2id" })
  productosSubcategorias2id: number;

  @Column("int", { name: "productos_subcategorias2cd", nullable: true })
  productosSubcategorias2cd: number | null;

  @Column("varchar", { name: "productos_subcategorias2nm", length: 100 })
  productosSubcategorias2nm: string;

  @Column("varchar", { name: "descripcion", nullable: true, length: 150 })
  descripcion: string | null;

  @Column("tinyint", { name: "estado", nullable: true, default: () => "'0'" })
  estado: number | null;

  @Column("int", { name: "id1", default: () => "'0'" })
  id1: number;
}
