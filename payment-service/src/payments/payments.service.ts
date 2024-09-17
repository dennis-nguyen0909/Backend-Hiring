import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entity/Payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
  ) {}

  createPayment(payment: any) {
    const newPayment = this.paymentRepository.create(payment);
    console.log('newPayment', newPayment);
    return this.paymentRepository.save(newPayment);
  }
  getAll() {
    return this.paymentRepository.find();
  }
}
