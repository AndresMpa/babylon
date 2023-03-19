import { Type } from '@nestjs/class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from '@nestjs/class-validator';
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
  @IsPhoneNumber()
  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  /**
   * preferences sub field
   */
  @IsNotEmpty()
  @IsArray()
  readonly preferences: any;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
