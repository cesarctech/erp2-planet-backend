import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("productos_categoriasnm_UNIQUE", ["productosCategoriasnm"], {
  unique: true,
})
@Entity("productos_categorias", { schema: "planetb_ventas" })
export class ProductosCategorias {
  @PrimaryGeneratedColumn({ type: "int", name: "productos_categoriasid" })
  productosCategoriasid: number;

  @Column("int", { name: "productos_categoriascd", nullable: true })
  productosCategoriascd: number | null;

  @Column("varchar", {
    name: "productos_categoriasnm",
    unique: true,
    length: 100,
  })
  productosCategoriasnm: string;

  @Column("varchar", { name: "descripcion", nullable: true, length: 150 })
  descripcion: string | null;

  @Column("tinyint", { name: "estado", nullable: true, default: () => "'0'" })
  estado: number | null;

  @Column("int", { name: "id1", default: () => "'0'" })
  id1: number;
}
