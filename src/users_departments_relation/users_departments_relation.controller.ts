import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { UsersDepartmentsRelationService } from './users_departments_relation.service';
import { CreateUserDepartmentDto } from './dto/create-user-department.dto';
import { ApiTags } from '@nestjs/swagger';
import { testPipe } from 'src/common/pipe/testpipe';

@ApiTags('user-department')
@Controller('users-departments-relation')
export class UsersDepartmentsRelationController {
  constructor(
    private readonly userDepartment: UsersDepartmentsRelationService,
  ) {}

  @Post('user-department')
  // @UsePipes(new testPipe())
  create(@Body() createDto: CreateUserDepartmentDto) {
    return this.userDepartment.create(createDto);
  }
}
