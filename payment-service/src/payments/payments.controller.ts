import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentCreate } from './dto/PaymentCreate.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsMicroserviceController {
  constructor(
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
    private paymentService: PaymentsService,
  ) {}

  @MessagePattern({ cmd: 'createPayment' })
  createPayment(@Payload() data: PaymentCreate) {
    return  this.paymentService.createPayment(data);
  }

  @MessagePattern({ cmd: 'getAll' })
   getAll() {
    return  this.paymentService.getAll();
  }
}
