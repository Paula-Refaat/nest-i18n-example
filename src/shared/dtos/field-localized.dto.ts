/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class FieldLocalizedDto {
  @Transform(({ value }) => {
    return value.toString().trim();
  })
  @IsNotEmpty()
  @IsString()
  ar: string; 

  @Transform(({ value }) => {
    return value.toString().trim();
  })
  @IsNotEmpty()
  @IsString()
  en: string;
}
