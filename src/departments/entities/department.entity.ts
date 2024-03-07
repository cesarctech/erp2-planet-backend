import { User } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "users_departament"})
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 200 })
    department: string;

    @Column({ type: "varchar", length: 500 })
    description: string;

    @ManyToMany(() => User, user => user.departmets)
    users: User[]

    @Column()
    createat: Date;

    @DeleteDateColumn()
    deletedat: Date;    
}
