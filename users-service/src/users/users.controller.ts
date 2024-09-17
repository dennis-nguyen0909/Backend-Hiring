import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UsersService } from './users.service';

@Controller()
export class UserMicroserviceController {
  constructor(private userService: UsersService) {}


  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }

  @EventPattern('PaymentSuccess')
  paymentSuccess(@Payload() data: any) {
    console.log('Đã nhận thành công ', data);
  }

  @MessagePattern({ cmd: 'findAll' })
  findAll(): Promise<CreateUserDto[] | any> {
    return this.userService.findAll();
  }
}
