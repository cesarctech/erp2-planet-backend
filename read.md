# **Creacion CRUD con NestJS TypeORM**

## Instalacion NestJS

```
npm nest new .

```
select npm

## Instalacion class-validator
Simplificar el proceso de validación de datos en tus aplicaciones Node.js
```
npm install class-validator --save

```

## Instalacion class-transformer
Facilitar la transformación de datos entre objetos JavaScript simples e instancias de clase
```
npm install class-transformer --save

```

## Instalacion @nestjs/config
Gestionar la configuración en tus aplicaciones NestJS
```
npm install @nestjs/config --save

```

## Instalacion TYPEORM y DRIVER POSTGRESQl MySQL MariaDB
Simplifica la interacción con bases de datos relacionales en aplicaciones Node.js
```
npm install typeorm --save
npm install pg --save
npm install mysql --save
npm install mysql2 --save

```

## Instalacion bcryptjs

```
npm install bcryptjs --save

```

## Instalacion @nestjs/jwt

```
npm install @nestjs/jwt --save

```

# Autenticación y Registro con JWT 

## Creacion de una entidad users
```
nest g res users --no-spec

```
Seleccionar estas  opciones
? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? Yes

Crear entidad users
src\users\entities\user.entity.ts
```
import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class User {
    @Column({ primary: true, generated: true })
    id: number;
  
    @Column({ length: 500 })
    name: string;
  
    @Column({ unique: true, nullable: false })
    email: string;
  
    @Column({ nullable: false })
    password: string;
  
    @Column({ default: "user" })
    role: string;
    
    @DeleteDateColumn()
    deletedAt: Date;
}


```