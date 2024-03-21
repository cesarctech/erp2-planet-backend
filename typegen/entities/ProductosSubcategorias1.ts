import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("productos_subcategorias1", { schema: "planetb_ventas" })
export class ProductosSubcategorias1 {
  @PrimaryGeneratedColumn({ type: "int", name: "productos_subcategorias1id" })
  productosSubcategorias1id: number;

  @Column("int", { name: "productos_subcategorias1cd", nullable: true })
  productosSubcategorias1cd: number | null;

  @Column("varchar", { name: "productos_subcategorias1nm", length: 100 })
  productosSubcategorias1nm: string;

  @Column("varchar", { name: "descripcion", nullable: true, length: 150 })
  descripcion: string | null;

  @Column("tinyint", { name: "estado", nullable: true, default: () => "'0'" })
  estado: number | null;

  @Column("int", { name: "id1", default: () => "'0'" })
  id1: number;
}
