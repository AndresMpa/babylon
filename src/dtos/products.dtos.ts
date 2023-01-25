import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly stock: number;

  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly price?: number;
  readonly description?: string;
  readonly stock?: number;
  readonly image?: string;
}
