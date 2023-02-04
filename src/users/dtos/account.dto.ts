import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateAccountDto {
  /**
   * Account's encrypted password
   * @example a$@ase365/6dsf@@@d
   */
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  /**
   * Account's registered email
   * @example 'admin@admin.com'
   */
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  /**
   * Different accounts should have different roles
   * @example ['Manager', 'Customer']
   */
  @IsNotEmpty()
  @IsString()
  readonly role: string;
}

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
