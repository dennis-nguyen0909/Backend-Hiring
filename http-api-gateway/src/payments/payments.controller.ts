import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PaymentCreate } from './dto/PaymentCreate.dto';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post('/create')
  createPayment(@Body() paymentCreate: PaymentCreate) {
    return this.natsClient.send({ cmd: 'createPayment' }, paymentCreate);
  }

  @Get('')
  getAll() {
    return this.natsClient.send({ cmd: 'getAll' }, '');
  }
}
