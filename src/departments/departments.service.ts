import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepo:Repository<Department>,
  ){}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const newDepartment = new Department();
    newDepartment.department = createDepartmentDto.department
    newDepartment.description = createDepartmentDto.description
    return await this.departmentRepo.save(newDepartment);
  }

  findAll() {
    return this.departmentRepo.find();
  }

  findOne(id: number) {
    return this.departmentRepo.findOneBy({id});
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
