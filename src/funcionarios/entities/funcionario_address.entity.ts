import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Funcionario } from "./funcionario.entity";

@Entity("funcionarios_address")
export class funcionario_address{
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "type", length: 200 , nullable: false})
    type: string;

    @Column("varchar", { name: "codigopostal", nullable: false, length: 10 })
    codigopostal: string | null;
  
    @Column("varchar", { name: "departamento", nullable: false, length: 150 })
    departamento: string | null;
  
    @Column("varchar", { name: "direccion1", nullable: false, length: 250 })
    direccion1: string | null;
  
    @Column("varchar", { name: "direccion2", nullable: true, length: 250 })
    direccion2: string | null;
  
    @Column("varchar", { name: "funcionariosnm_jp", nullable: false, length: 200 })
    funcionariosnm_jp: string | null;
  
    @Column("varchar", { name: "departamento_jp", nullable: true, length: 150 })
    departamento_jp: string | null;
  
    @Column("varchar", { name: "direccion1_jp", nullable: true, length: 250 })
    direccion1Jp: string | null;
  
    @Column("varchar", { name: "direccion2_jp", nullable: true, length: 250 })
    direccion2Jp: string | null; 
    
    @ManyToOne(() => Funcionario, funcionario => funcionario.direcciones)
    funcionario: Funcionario;   
}