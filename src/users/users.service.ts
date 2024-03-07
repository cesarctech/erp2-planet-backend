import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Department) private readonly departmentRepository: Repository<Department>,
  ){}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async updateDepartment(userid:any,body:any){
    const user = await this.userRepository.findOneBy(userid)

    if(!user){
      throw new BadRequestException('user no existe');
    }

    const department = await this.departmentRepository.findBy(body.departments);

    await this.findOne(userid);

    return await this.userRepository.update(
      userid,{
        departmets:department
      }
    )

  }

  findOneByEmail(email: string){
    return this.userRepository.findOneBy({email})
  }

  findByEmailWithPassword(email: string){
    return this.userRepository.findOne({
      where: { email },
      select: ['id','name','email','password','role']
    })
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
