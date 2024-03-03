import { Module } from '@nestjs/common';
import { UsersRoleService } from './users_role.service';
import { UsersRoleController } from './users_role.controller';

@Module({
  controllers: [UsersRoleController],
  providers: [UsersRoleService],
})
export class UsersRoleModule {}
