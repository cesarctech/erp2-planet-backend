import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { funcionario_address } from './funcionario_address.entity';

// @Entity("funcionarios", { schema: "planetb_ventas" })
@Entity('funcionarios')
export class Funcionario {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'funcionarioscd', length: 100, nullable: true })
  funcionarioscd: string | null;

  @Column('varchar', { name: 'funcionariosnm', length: 250, nullable: false })
  funcionariosnm: string;

  @Column('varchar', {
    name: 'funcionariosnmcorto',
    length: 100,
    nullable: false,
  })
  funcionariosnmcorto: string;

  @Column('date', {
    name: 'fechareg',
    default: () => 'CURRENT_DATE',
    nullable: true,
  })
  fechareg: Date;
  // @CreateDateColumn()
  // fechareg2: Date;
  @OneToMany(() => funcionario_address, (direccion) => direccion.funcionario)
  direcciones: funcionario_address[];

  @Column('varchar', { name: 'codigopostal', nullable: false, length: 10 })
  codigopostal: string | null;

  @Column('varchar', { name: 'departamento', nullable: false, length: 150 })
  departamento: string | null;

  @Column('varchar', { name: 'direccion1', nullable: false, length: 250 })
  direccion1: string | null;

  @Column('varchar', { name: 'direccion2', nullable: true, length: 250 })
  direccion2: string | null;

  @Column('varchar', {
    name: 'funcionariosnm_jp',
    nullable: false,
    length: 200,
  })
  funcionariosnm_jp: string | null;

  @Column('varchar', { name: 'departamento_jp', nullable: true, length: 150 })
  departamento_jp: string | null;

  @Column('varchar', { name: 'direccion1_jp', nullable: true, length: 250 })
  direccion1Jp: string | null;

  @Column('varchar', { name: 'direccion2_jp', nullable: true, length: 250 })
  direccion2Jp: string | null;

  @Column('varchar', { name: 'telefono1', nullable: false, length: 15 })
  telefono1: string | null;

  @Column('varchar', { name: 'telefono2', nullable: true, length: 15 })
  telefono2: string | null;

  @Column('varchar', { name: 'celular1', nullable: false, length: 15 })
  celular1: string | null;

  @Column('varchar', { name: 'celular2', nullable: true, length: 15 })
  celular2: string | null;

  @Column('varchar', { name: 'fax1', nullable: true, length: 15 })
  fax1: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 15 })
  email: string | null;

  @Column('varchar', { name: 'memo', nullable: true, length: 300 })
  memo: string | null;

  @Column('smallint', { name: 'estado', default: () => '0' })
  estado: number;

  @Column('smallint', { name: 'sectorid', default: () => '0' })
  sectorid: number;
}
