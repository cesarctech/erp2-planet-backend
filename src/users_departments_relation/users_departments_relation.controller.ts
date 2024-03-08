import { Body, Controller, Post } from '@nestjs/common';
import { UsersDepartmentsRelationService } from './users_departments_relation.service';
import { CreateDto } from './dto/create.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user-department')
@Controller('users-departments-relation')
export class UsersDepartmentsRelationController {
    constructor(
        private readonly userDepartment:UsersDepartmentsRelationService
    ){}

    @Post('user-department')
    create(@Body() createDto: CreateDto){
        return this.userDepartment.create(createDto);
    }

}

