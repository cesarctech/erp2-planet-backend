import { BadRequestException, ConsoleLogger, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDepartmentDto } from './dto/create-user-department.dto';
import { DepartmentsService } from 'src/departments/departments.service';
import { isDataURI } from 'class-validator';


@Injectable()
export class UsersDepartmentsRelationService {
    constructor(
        private readonly usersService: UsersService,
        private readonly departmentsService:DepartmentsService
    ){}


    async create({users_id,departments_id}:CreateUserDepartmentDto){
        const user = await this.usersService.findOne(users_id);

        if(!user){
            throw new BadRequestException('Usuario no existe!!')
        }

        const  department = await this.departmentsService.findAllByUser([3,4,5]);
        const  department2 = await this.departmentsService.findOne(4);

        if(!department){
            throw new BadRequestException('Departamento no existe!!')
        }

        // const userdepartments = await user.departmets;
        console.log(user,department)

        user.departments = department;
         
        return await this.usersService.createUserDepartment(user);
        // return true;
    }

    async update({users_id,departments_id}){
     
        console.log("ssssss=",departments_id)
        if(departments_id.length === 0){
            throw new BadRequestException('es nulo')
        }

        const user = await this.usersService.findOne(users_id);
        // console.log(user)
        if(!user){
            throw new BadRequestException('Usuario no existe!!')
        }

        // const  department = await this.departmentsService.findAllByUser([5,9]);

        const  departments = await Promise.all(
            departments_id.map(async(id) => {
                try {
                    const department = await this.departmentsService.findOne(id) ;
                    return department;
                } catch (error) {
                    throw error;
                }
                
                })
            )

        console.log(departments)
        // const dp = departments_id.map((dp) => console.log(dp))

        // if(department.length === 0){
        //     throw new BadRequestException('Departamento no existe!!')
        // }
        // if (!user.departments) {
        //     user.departments = []; // Initialize as empty array if needed
        //   }
        // const userdepartments = await user.departmets;
        // console.log(user,department)

        // user.departments=[...user.departments,...department];
        // console.log(user.departments,department)

        user.departments=[...user.departments,...departments]

        
        return await this.usersService.createUserDepartment(user);
        // return true;
    }
}
