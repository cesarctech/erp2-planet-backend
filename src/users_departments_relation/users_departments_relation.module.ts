import { Module } from '@nestjs/common';
import { UsersDepartmentsRelationController } from './users_departments_relation.controller';
import { UsersDepartmentsRelationService } from './users_departments_relation.service';
import { UsersModule } from 'src/users/users.module';
import { DepartmentsModule } from 'src/departments/departments.module';

@Module({
  imports:[UsersModule,DepartmentsModule],
  controllers: [UsersDepartmentsRelationController],
  providers: [UsersDepartmentsRelationService]
})
export class UsersDepartmentsRelationModule {}
