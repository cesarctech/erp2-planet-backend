import { Transform } from "class-transformer"
import { IsOptional, IsString, MinLength } from "class-validator"

export class CreateFuncionarioDto {
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(2)
    @IsOptional()
    funcionarioscd?:string

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    funcionariosnm: string

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    funcionariosnmcorto: string

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(7)
    codigopostal: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(5)
    departamento: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(5)
    direccion1: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @IsOptional()
    direccion2?: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    funcionariosnm_jp: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @IsOptional()
    departamento_jp?: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @IsOptional()
    direccion1_jp?: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @IsOptional()
    direccion2_jp?: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(5)
    telefono1: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @IsOptional()
    telefono2?: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @IsOptional()
    celular1: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @IsOptional()
    celular2?: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @IsOptional()
    fax1?: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @IsOptional()
    email?: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @IsOptional()
    memo: string
    
    @Transform(({value}) => value.trim())
    @IsOptional()
    estado?: number

    @Transform(({value}) => value.trim())
    @IsOptional()
    sectorid?: number
    
}