import { Column, DeleteDateColumn, Entity } from "typeorm";
import { Role } from "../../common/enums/role.enum";

@Entity({name: "users"})
export class User {
    @Column({ primary: true, generated: true })
    id: number;
  
    @Column({ type: "varchar", length: 200 })
    name: string;
  
    @Column({ type: "varchar", length: 200, unique: true, nullable: false })
    email: string;
  
    @Column({ type: "varchar", length: 8, nullable: false })
    password: string;
  
    @Column({ type: "enum", enum:Role,default: Role.USER })
    role: string;
  
    @Column({type: "int",nullable: true})
    funcionariosid:number

    @Column({type: "boolean",default: true})
    disabled: number;

    @Column()
    createat: Date;

    @DeleteDateColumn()
    deletedat: Date;
}
