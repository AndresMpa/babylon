export class CreateProductDto {
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly price?: number;
  readonly description?: string;
  readonly stock?: number;
  readonly image?: string;
}
