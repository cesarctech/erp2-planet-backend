import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("clientes_categoriasnm_UNIQUE", ["clientesCategoriasnm"], {
  unique: true,
})
@Entity("clientes_categorias", { schema: "planetb_ventas" })
export class ClientesCategorias {
  @PrimaryGeneratedColumn({ type: "int", name: "clientes_categoriasid" })
  clientesCategoriasid: number;

  @Column("int", { name: "clientes_categoriascd", nullable: true })
  clientesCategoriascd: number | null;

  @Column("varchar", {
    name: "clientes_categoriasnm",
    unique: true,
    length: 100,
  })
  clientesCategoriasnm: string;

  @Column("varchar", { name: "descripcion", nullable: true, length: 150 })
  descripcion: string | null;

  @Column("tinyint", { name: "estado", nullable: true, default: () => "'0'" })
  estado: number | null;
}
