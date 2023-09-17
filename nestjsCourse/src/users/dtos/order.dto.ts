import { IsNotEmpty, IsPositive, IsNumber } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateOrderDto {
  /**
   * Customer's identifier
   * @example 1234
   */
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly customerId: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
