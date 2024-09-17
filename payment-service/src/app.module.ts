import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { registerTypeOrm } from './typeorm';
@Module({
  imports: [registerTypeOrm, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
