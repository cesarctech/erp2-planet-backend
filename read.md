# **Creacion CRUD con NestJS TypeORM**

Inicializa un nuevo repositorio Git en el directorio actual.

```
git init
```

Clona un repositorio Git existente desde una URL remota (como GitHub) a tu máquina local.

```
git clone <url>
```

Agrega un archivo al área de preparación, preparándolo para la siguiente confirmación (commit).

```
git add .
```

Crea una confirmación con un mensaje descriptivo, capturando los cambios en el área de preparación.

```
git commit -m "primer commit"
```

git status

```
git remote add origin https://github.com/cesarctech/erp2-planet-backend.git
```

Envía tus confirmaciones locales al repositorio remoto en una rama específica

```
git push -u origin master
```

Obtiene actualizaciones del repositorio remoto y las fusiona con tu rama local.

```
git pull origin master
```


Pull forzado avanzado.

```
git fetch origin master --prune
git reset --hard origin/master
```


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
npm install @nestjs/typeorm
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

Seleccionar estas opciones
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

Swagger
```
npm install --save @nestjs/swaggerextjs\erp2\backend

  const config = new DocumentBuilder()
    .setTitle('PLANET BUSSINESS ERP')
    .setDescription('API ERP')
    .setVersion('1.0')
    .addTag('erp')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  ```