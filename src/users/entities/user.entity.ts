import { Column, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { Role } from "../../common/enums/role.enum";
import { Department } from "src/departments/entities/department.entity";
import { Funcionario } from "src/funcionarios/entities/funcionario.entity";

@Entity({name: "users"})
export class User {
    @Column({ primary: true, generated: true })
    id: number;
  
    @Column({ type: "varchar", length: 200 })
    name: string;
  
    @Column({ type: "varchar", length: 200, unique: true, nullable: false })
    email: string;
  
    @Column({ type: "varchar", length: 150, nullable: false })
    password: string;
  
    @Column({ type: "enum", enum:Role,default: Role.USER })
    role: string;
  
    @ManyToMany(() => Department, department => department.users,{eager:true})
    @JoinTable({
        name: 'users_departments_relation',
        joinColumn: {
          name: 'user_id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'department_id',
          referencedColumnName: 'id',
        },
        
    })
    departments: Department[]
    
    // @Column({type: "int",nullable: true})
    // funcionariosid:number
    @OneToOne(() => Funcionario)
    @JoinColumn({ name: "funcionariosid"})
    funcionarios: Funcionario


    @Column({type: "boolean",default: true})
    disabled: number;

    @Column({nullable: true})
    createat: Date;

    @DeleteDateColumn()
    deletedat: Date;
}
