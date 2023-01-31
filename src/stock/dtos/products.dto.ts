import { PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsString,
  IsUrl,
} from '@nestjs/class-validator';

export class CreateProductDto {
  /**
   * Product's name
   * @example SmartTV
   */
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  /**
   * Product's price
   * @example 2_000_000
   */
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly price: number;

  /**
   * Product's description
   * @example 'Some cool TV'
   */
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  /**
   * Quantity of corresponding product
   * @example 6
   */
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  readonly stock: number;

  /**
   * An URL to the hots server
   * @example https://images/someimage.com
   */
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
