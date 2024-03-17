import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { validate } from "class-validator";

export class testPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        const { users_id, departments_id} = value
    // Validar la estructura del array ents_id
    if (Array.isArray(departments_id) && departments_id.length === 0) {
        throw new BadRequestException('ents_id array cannot be empty'); // Si está vacío, lanzar un error
      } else if (!Array.isArray(departments_id) && departments_id !== null) {
        throw new BadRequestException('ents_id must be an array or null'); // Si no es un array válido, lanzar un error
      }
  
      // Realizar una validación adicional usando class-validator
      validate(departments_id).then((errors) => {
        if (errors.length > 0) {
          throw new BadRequestException('Invalid ents_id:' + errors.toString());
        }
      });
        console.log("pipe=",departments_id);
        return value
    }

}