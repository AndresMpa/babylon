import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateAdminDto {
  /**
   * Administrator's encrypted password
   * @example a$@ase365/6dsf@@@d
   */
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  /**
   * Administrator's registered email
   * @example 'admin@admin.com'
   */
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  /**
   * Different administrator should have different roles
   * @example ['Manager', 'Salesman']
   */
  @IsNotEmpty()
  @IsString()
  readonly role: string;
}

export class UpdateAdminDto extends PartialType(CreateAdminDto) {}
