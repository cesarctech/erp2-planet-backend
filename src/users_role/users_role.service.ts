import { Injectable } from '@nestjs/common';
import { CreateUsersRoleDto } from './dto/create-users_role.dto';
import { UpdateUsersRoleDto } from './dto/update-users_role.dto';

@Injectable()
export class UsersRoleService {
  create(createUsersRoleDto: CreateUsersRoleDto) {
    return 'This action adds a new usersRole';
  }

  findAll() {
    return `This action returns all usersRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersRole`;
  }

  update(id: number, updateUsersRoleDto: UpdateUsersRoleDto) {
    return `This action updates a #${id} usersRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersRole`;
  }
}
