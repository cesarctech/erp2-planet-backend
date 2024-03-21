import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("productos", { schema: "planetb_ventas" })
export class Productos {
  @PrimaryGeneratedColumn({ type: "int", name: "productosid" })
  productosid: number;

  @Column("int", { name: "productoscd", nullable: true, default: () => "'0'" })
  productoscd: number | null;

  @Column("varchar", { name: "codigobarra", nullable: true, length: 13 })
  codigobarra: string | null;

  @Column("varchar", { name: "productosnm", nullable: true, length: 100 })
  productosnm: string | null;

  @Column("varchar", { name: "productosnm_jp", nullable: true, length: 100 })
  productosnmJp: string | null;

  @Column("int", { name: "proveedorid", nullable: true })
  proveedorid: number | null;

  @Column("int", { name: "productos_categoriasid", nullable: true })
  productosCategoriasid: number | null;

  @Column("int", { name: "productos_subcategorias1id", nullable: true })
  productosSubcategorias1id: number | null;

  @Column("int", { name: "productos_subcategorias2id", nullable: true })
  productosSubcategorias2id: number | null;

  @Column("varchar", { name: "marca", nullable: true, length: 50 })
  marca: string | null;

  @Column("varchar", { name: "marca_jp", nullable: true, length: 50 })
  marcaJp: string | null;

  @Column("tinyint", {
    name: "s_unidadid",
    nullable: true,
    comment: "1 = unitario\n2 = caja\n3 = etc",
    default: () => "'1'",
  })
  sUnidadid: number | null;

  @Column("varchar", { name: "presentacion", nullable: true, length: 100 })
  presentacion: string | null;

  @Column("varchar", { name: "color", length: 20 })
  color: string;

  @Column("varchar", { name: "talla", length: 20 })
  talla: string;

  @Column("tinyint", { name: "cantidadcaja", default: () => "'0'" })
  cantidadcaja: number;

  @Column("decimal", {
    name: "peso",
    precision: 4,
    scale: 3,
    default: () => "'0.000'",
  })
  peso: string;

  @Column("tinyint", { name: "s_umedidaventasid", default: () => "'0'" })
  sUmedidaventasid: number;

  @Column("decimal", {
    name: "precio_costo",
    precision: 10,
    scale: 3,
    default: () => "'0.000'",
  })
  precioCosto: string;

  @Column("int", { name: "precio_venta_min", default: () => "'0'" })
  precioVentaMin: number;

  @Column("int", { name: "precio_venta", default: () => "'0'" })
  precioVenta: number;

  @Column("int", { name: "precio_venta_max", default: () => "'0'" })
  precioVentaMax: number;

  @Column("tinyint", {
    name: "control_existencias",
    nullable: true,
    default: () => "'0'",
  })
  controlExistencias: number | null;

  @Column("decimal", {
    name: "existencias",
    nullable: true,
    precision: 12,
    scale: 3,
    default: () => "'0.000'",
  })
  existencias: string | null;

  @Column("decimal", {
    name: "existencias_min",
    nullable: true,
    precision: 12,
    scale: 3,
    default: () => "'0.000'",
  })
  existenciasMin: string | null;

  @Column("decimal", {
    name: "existencias_max",
    nullable: true,
    precision: 12,
    scale: 3,
    default: () => "'0.000'",
  })
  existenciasMax: string | null;

  @Column("tinyint", { name: "estado", nullable: true, default: () => "'0'" })
  estado: number | null;

  @Column("tinyint", {
    name: "restringir",
    nullable: true,
    default: () => "'0'",
  })
  restringir: number | null;

  @Column("tinyint", {
    name: "comisionventas",
    nullable: true,
    default: () => "'0'",
  })
  comisionventas: number | null;

  @Column("smallint", { name: "taxid", default: () => "'3'" })
  taxid: number;
}
