import { IsInt, IsPositive, IsString, Length } from 'class-validator';
export class CreatePropertyDto {
  @IsString()
  @Length(2, 10, { message: 'name must be between 2 and 10 characters' })
  name: string;
  @IsString()
  description: string;

  @IsInt()
  @IsPositive()
  price: number;
}
