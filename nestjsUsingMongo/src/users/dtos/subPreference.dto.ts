import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateSubPrefenceDto {
  /**
   * Preference's name
   * @example Technology
   */
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  /**
   * Products description for that preference
   * @example "Devices related to tech"
   */
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}

export class UpdateSubPreferenceDto extends PartialType(CreateSubPrefenceDto) {}
