import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersRoleService } from './users_role.service';
import { CreateUsersRoleDto } from './dto/create-users_role.dto';
import { UpdateUsersRoleDto } from './dto/update-users_role.dto';

@Controller('users-role')
export class UsersRoleController {
  constructor(private readonly usersRoleService: UsersRoleService) {}

  @Post()
  create(@Body() createUsersRoleDto: CreateUsersRoleDto) {
    return this.usersRoleService.create(createUsersRoleDto);
  }

  @Get()
  findAll() {
    return this.usersRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersRoleDto: UpdateUsersRoleDto) {
    return this.usersRoleService.update(+id, updateUsersRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersRoleService.remove(+id);
  }
}
