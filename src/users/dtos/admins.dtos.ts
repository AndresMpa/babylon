import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAdminDto {
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;
}

export class UpdateAdminDto extends PartialType(CreateAdminDto) {}
