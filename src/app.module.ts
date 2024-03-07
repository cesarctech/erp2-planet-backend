import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersRoleModule } from './users_role/users_role.module';
import { User } from './users/entities/user.entity';
import { DepartmentsModule } from './departments/departments.module';
import { Department } from './departments/entities/department.entity';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.0.94',
      port: 5432,
      username: 'cesar',
      password: 'trade488',
      database: 'planet_erp',
      entities: [User,Department],
      // autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule, 
    UsersRoleModule, DepartmentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
