import { IsArray, IsNumber } from "class-validator";

export class CreateUserDepartmentDto{
    @IsNumber()
    users_id:number;

    @IsArray()
    departments_id:number[];
}