import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UsersService,
        private jwtService:JwtService
    ){}

    async register({name,email,password}:RegisterDto){

        // console.log(name,email,password);

        const user = await this.userService.findOneByEmail(email)

        if(user){
            throw new BadRequestException('User already exits!');
        }

        const hashedPassword = await bcryptjs.hash(password,10);

        await this.userService.create({name,email,password:hashedPassword})
        return {
            name,
            email
        }
    }

    async login({email,password}:LoginDto){
        const user = await this.userService.findByEmailWithPassword(email);

        if(!user){
            throw new UnauthorizedException('Invalid email');
        }
        
        const isPasswordValid = bcryptjs.compare(password,user.password);

        if(!isPasswordValid){
            throw new UnauthorizedException('Invalid password');
        }

        const payload = {email:user.email,role:user.role};

        const token = await this.jwtService.signAsync(payload);

        return {
            token,
            email: user.email,
            role: user.role
        }
    }

    async profile({email,role}:{email:string,role:string}){
        return await this.userService.findOneByEmail(email);
    }
}
