import {  Injectable, NestMiddleware } from "@nestjs/common";
import { isJSON } from "class-validator";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class UserDepartmentMiddleware implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction){

    const body = req.body;

    if (!isJSON(body)) {
      return res.status(400).json({ mensaje: 'Formato JSON no válido en el cuerpo de la solicitud' });
    }
    const { departments_id } = req.body;
    console.log("UserDepartmentMiddleware",departments_id)
    // if (!isValid(id2)) {
    //   return res.status(400).send({ message: 'El valor de id2 no es válido' });
    // }
  
    next();
  } 

  }