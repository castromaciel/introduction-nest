import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: `The brand must be a cool string` })
  @MinLength(3)
  readonly brand: string;

  @IsString()
  readonly model: string;
}
