import { User } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users_departaments"})
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 200 })
    department: string;

    @Column({ type: "varchar", length: 500 })
    description: string;

    @ManyToMany(() => User, user => user.departmets)
    @JoinTable({
        name: 'users_departments_relation',
        joinColumn: {
          name: 'department_id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'user_id',
          referencedColumnName: 'id',
        },
    })    
    users: User[]

    @Column({nullable: true})
    createat: Date;

    @DeleteDateColumn()
    deletedat: Date;    
}
