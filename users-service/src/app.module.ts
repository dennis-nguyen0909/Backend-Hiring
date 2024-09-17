import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { registerTypeOrm } from './typeorm';
@Module({
  imports: [registerTypeOrm, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
