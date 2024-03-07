import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DepartmentsModule } from 'src/departments/departments.module';
import { DepartmentsService } from 'src/departments/departments.service';

@Module({
  imports:[TypeOrmModule.forFeature([User]),DepartmentsModule],
  controllers: [UsersController],
  providers: [UsersService,DepartmentsService],
  exports:[UsersService]
})
export class UsersModule {}
