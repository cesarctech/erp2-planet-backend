import {
  BadRequestException,
  ConsoleLogger,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDepartmentDto } from './dto/create-user-department.dto';
import { DepartmentsService } from 'src/departments/departments.service';

@Injectable()
export class UsersDepartmentsRelationService {
  constructor(
    private readonly usersService: UsersService,
    private readonly departmentsService: DepartmentsService,
  ) {}

  async create({ users_id, departments_id }: CreateUserDepartmentDto) {
    const user = await this.usersService.findOne(users_id);
    if (!user) {
      throw new NotFoundException('Usuario no existe!!');
    }

    const departments = await Promise.all(
      departments_id.map(async (id) => {
        try {
          const department = await this.departmentsService.findOne(id);
          return department;
        } catch (error) {
          throw error;
        }
      }),
    );
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

    user.departments = [...user.departments, ...departments];

    return await this.usersService.createUserDepartment(user);
    // return true;
  }
}
