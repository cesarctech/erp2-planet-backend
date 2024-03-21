import {Column,Entity,PrimaryGeneratedColumn} from "typeorm";


@Entity("traduccion" ,{schema:"planetb_ventas" } )
export  class Traduccion {

@PrimaryGeneratedColumn({ type:"int", name:"id" })
id:number;

@Column("varchar",{ name:"相手科目",nullable:true,length:7 })
:string | null;

@Column("varchar",{ name:"翻訳",nullable:true,length:23 })
:string | null;

}
