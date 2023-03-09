import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateAccountDto {
  /**
   * Account's registered email
   * @example 'admin@admin.com'
   */
  @IsString()
  @IsEmail()
  readonly email: string;

  /**
   * Account's encrypted password
   * @example a$@ase365/6dsf@@@d
   */
  @IsNotEmpty()
  @IsString()
  @Length(6)
  readonly password: string;

  /**
   * Different accounts should have different roles
   * @example ['Manager', 'Customer']
   */
  @IsNotEmpty()
  readonly role: string;
}

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
