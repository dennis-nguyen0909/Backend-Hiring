import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Payment } from 'src/payments/entity/Payment.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'mysql_db',
  port: 3307,
  username: 'minhduy',
  password: '123456',
  database: 'hiring_db',
  entities: [Payment],
  synchronize: true,
};
