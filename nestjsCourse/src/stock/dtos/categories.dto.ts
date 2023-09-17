import { IsNotEmpty, IsString } from '@nestjs/class-validator';
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
