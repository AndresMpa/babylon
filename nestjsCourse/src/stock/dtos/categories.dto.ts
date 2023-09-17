import {
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsNumber,
  Min,
} from '@nestjs/class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCategoryDto {
  /**
   * Category's name
   * @example 'J-Technology'
   */
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  /**
   * Category's description
   * @example 'Japanese imported products'
   */
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

export class FilterCategoryDto {
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
