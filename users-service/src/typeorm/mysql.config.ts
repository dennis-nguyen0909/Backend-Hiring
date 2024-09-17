import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/entity/User';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'mysql_db',
  port: 3307,
  username: 'minhduy',
  password: '123456',
  database: 'hiring_db',
  entities: [User],
  synchronize: true,
};
