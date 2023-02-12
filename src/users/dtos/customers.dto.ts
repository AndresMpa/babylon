import { IsNotEmpty, IsPhoneNumber, IsString } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCustomerDto {
  /**
   * Customer's name
   * @example Jack
   */
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  /**
   * Customer's last name
   * @example Prank
   */
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  /**
   * Customer's registered contact phone
   * @example 32184568945
   */
  @IsNotEmpty()
  @IsPhoneNumber()
  readonly phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
