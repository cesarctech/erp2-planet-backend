import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, MinLength, NotEquals, ValidateNested } from "class-validator";

export class CreateUserDepartmentDto{
    @IsNotEmpty()
    @IsNumber()
    users_id:number;

    @ArrayNotEmpty({ message: 'Department IDs are required.' })
     @IsArray({ message: 'Department IDs must be an array of numbers.' })
    // @ValidateNested({ each: true })
    @IsNumber({},{ each: true,message:'tiene que ser numerico'} )
    departments_id:number[];
}