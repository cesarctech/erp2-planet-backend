import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersRoleModule } from './users_role/users_role.module';

@Module({
  imports: [UsersModule, UsersRoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
