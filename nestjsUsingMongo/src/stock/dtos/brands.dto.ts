import {
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsNumber,
  IsUrl,
  Min,
} from '@nestjs/class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateBrandDto {
  /**
   * An URL to brand's icon
   * @example 'https://images/brand-1.jpg'
   */
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  readonly image: string;

  /**
   * Brand's name
   * @example 'Jam by Jack'
   */
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class FilterBrandDto {
  /**
    Where a pagination ends
    @example 1
  */
  @IsOptional()
  @IsPositive()
  @IsNumber()
  limit: number;

  /**
    Where a pagination starts
    @example 24
  */
  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number;
}
