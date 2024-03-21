import { IsNotEmpty, IsString, Min } from "class-validator";

export class CreateDepartmentDto {
    @IsNotEmpty()
    @IsString()
    @Min(5)
    department:string;

    @IsString()
    description?:string;
}
