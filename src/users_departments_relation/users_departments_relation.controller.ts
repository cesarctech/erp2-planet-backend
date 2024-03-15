import { BadRequestException, Body, Controller, Get, Param, ParseArrayPipe, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { UsersDepartmentsRelationService } from './users_departments_relation.service';
import { CreateUserDepartmentDto } from './dto/create-user-department.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user-department')
@Controller('users-departments-relation')
export class UsersDepartmentsRelationController {
    constructor(
        private readonly userDepartment:UsersDepartmentsRelationService
    ){}

    @Get('user-department')  
    // @UsePipes(new ParseArrayPipe())
    create(@Body() createDto: CreateUserDepartmentDto){
        console.log(createDto.departments_id)
        if (createDto.departments_id.some(id => id < 0)) {
            throw new BadRequestException('Los valores de id2 no pueden ser negativos');
        }
        return this.userDepartment.update(createDto);
    }

}

