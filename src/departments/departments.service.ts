import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository,In } from 'typeorm';

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

  async findOne(id: number) {
    const department =  await this.departmentRepo.findOneBy({id});
      if(!department){
      throw new NotFoundException("No Existe este codigo "+id);
    }
    return department
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }

  // USER - DEPARTMENTS

  findAllByUser(id:number[]){
    return this.departmentRepo.findBy({id: In(id)});
  }

}
