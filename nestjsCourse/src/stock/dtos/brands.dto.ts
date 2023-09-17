import { IsNotEmpty, IsString, IsUrl } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateBrandsDto {
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

export class UpdateBrandsDto extends PartialType(CreateBrandsDto) {}
