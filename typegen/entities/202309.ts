import {Column,Entity,PrimaryGeneratedColumn} from "typeorm";


@Entity("202309" ,{schema:"planetb_ventas" } )
export  class 202309 {

@PrimaryGeneratedColumn({ type:"int", name:"id" })
id:number;

@Column("date",{ name:"日付",nullable:true })
:string | null;

@Column("varchar",{ name:"決算仕訳",nullable:true,length:10 })
:string | null;

@Column("int",{ name:"伝番",nullable:true })
:number | null;

@Column("varchar",{ name:"作成元",nullable:true,length:10 })
:string | null;

@Column("varchar",{ name:"勘定科目",nullable:true,length:2 })
:string | null;

@Column("varchar",{ name:"補助",nullable:true,length:10 })
:string | null;

@Column("varchar",{ name:"税区分",nullable:true,length:10 })
:string | null;

@Column("varchar",{ name:"計算区分",nullable:true,length:10 })
:string | null;

@Column("varchar",{ name:"相手科目",nullable:true,length:7 })
:string | null;

@Column("varchar",{ name:"相手補助",nullable:true,length:24 })
:string | null;

@Column("varchar",{ name:"相手税区分",nullable:true,length:7 })
:string | null;

@Column("varchar",{ name:"相手計算区分",nullable:true,length:2 })
:string | null;

@Column("int",{ name:"収入金額",nullable:true })
:number | null;

@Column("int",{ name:"支出金額",nullable:true })
:number | null;

@Column("int",{ name:"残高",nullable:true })
:number | null;

@Column("varchar",{ name:"摘要",nullable:true,length:25 })
:string | null;

@Column("varchar",{ name:"付箋",nullable:true,length:10 })
:string | null;

@Column("varchar",{ name:"仕訳メモ",nullable:true,length:10 })
:string | null;

@Column("varchar",{ name:"シリアルNo.",nullable:true,length:10 })
no:string | null;

@Column("varchar",{ name:"入力日付",nullable:true,length:10 })
:string | null;

@Column("varchar",{ name:"取引先",nullable:true,length:10 })
:string | null;

@Column("varchar",{ name:"証憑ID",nullable:true,length:10 })
id:string | null;

}
