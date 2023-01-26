import { IsNotEmpty, IsString, IsUrl } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandsDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  readonly image: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;
}

export class UpdateBrandsDto extends PartialType(CreateBrandsDto) {}
