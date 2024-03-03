import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersRoleDto } from './create-users_role.dto';

export class UpdateUsersRoleDto extends PartialType(CreateUsersRoleDto) {}
