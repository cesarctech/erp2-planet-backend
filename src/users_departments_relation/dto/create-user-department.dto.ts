import { ParseIntPipe, UsePipes } from '@nestjs/common';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';


export class CreateUserDepartmentDto {
  @IsNotEmpty()
  @IsNumber()
  users_id: number;

  @ArrayNotEmpty({ message: 'Department IDs are required.' })
  @IsArray({ message: 'Department IDs must be an array of numbers.' })
  // @ValidateNested({ each: true })
  @IsNumber({}, { each: true, message: 'tiene que ser numerico' })
  departments_id: number[];

  // {
  //     "users_id":1,
  //     "departments_id":[]
  // }
}
