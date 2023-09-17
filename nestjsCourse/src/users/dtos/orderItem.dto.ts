import { IsNotEmpty, IsPositive, IsNumber } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateOrderItemDto {
  /**
   * Order's identifier
   * @example 1234
   */
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly orderId: number;

  /**
   * Product's identifier
   * @example 31254
   */
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly productId: number;

  /**
   * Number of items a customer
   * want of a specific product
   * @example 12
   */
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly quantity: number;
}

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {}
