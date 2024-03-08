import { IsNumber } from "class-validator";

export class CreateDto{
    @IsNumber()
    users_id:number;

    @IsNumber()
    departments_id:number;
}