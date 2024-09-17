import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PaymentCreate {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsOptional()
  @IsString()
  description: string;
}
