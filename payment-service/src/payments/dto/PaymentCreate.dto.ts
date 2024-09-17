import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PaymentCreate {
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @IsString()
  description: string;
}
