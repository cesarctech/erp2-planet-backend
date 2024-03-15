import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersRoleModule } from './users_role/users_role.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersDepartmentsRelationModule } from './users_departments_relation/users_departments_relation.module';
import { UserDepartmentMiddleware } from './common/enums/middleware/user-department.middleware';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.0.94',
      // host: 'localhost',
      port: 5432,
      username: 'cesar',
      password: 'trade488',
      database: 'planet_erp',
      // entities: [User,Department],
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.POSTGRES_SSL === "true",
      extra: {
        ssl:
          process.env.POSTGRES_SSL === "true"
            ? {
                rejectUnauthorized: false,
              }
            : null,
      }, 
    }),
    UsersModule, 
    UsersRoleModule, DepartmentsModule, AuthModule,  UsersDepartmentsRelationModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserDepartmentMiddleware)
      .forRoutes({path:'users-departments-relation/user-department',method:RequestMethod.ALL})
  }
}
