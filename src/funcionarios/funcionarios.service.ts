import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FuncionariosService {
  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository:Repository<Funcionario>
  ){}
  async create(createFuncionarioDto: CreateFuncionarioDto) {
    return await this.funcionarioRepository.save({
      ...createFuncionarioDto
    });
  }

  findAll() {
    return `This action returns all funcionarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} funcionario`;
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return `This action updates a #${id} funcionario`;
  }

  remove(id: number) {
    return `This action removes a #${id} funcionario`;
  }
}
