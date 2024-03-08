import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateDto } from './dto/create.dto';
import { DepartmentsService } from 'src/departments/departments.service';


@Injectable()
export class UsersDepartmentsRelationService {
    constructor(
        private readonly usersService: UsersService,
        private readonly departmentsService:DepartmentsService
    ){}


    async create({users_id,departments_id}:CreateDto){
        const user = await this.usersService.findOne(users_id);
        const userdepartments = await user.departmets;

        const  department = await this.departmentsService.findOne(departments_id);
        user.departmets.push(department);
        console.log(user,userdepartments)
        return await user.save();

    }
}
