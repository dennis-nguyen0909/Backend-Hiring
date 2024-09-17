import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './mysql.config';

export const registerTypeOrm = TypeOrmModule.forRoot(typeOrmConfig);
