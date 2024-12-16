import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from 'express';
import { auth } from "src/dto";

@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService) { }
    
    @Post('signup')
    signup(@Body() dto:auth) {
        return this.authservice.signup(dto);
    };
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body()dto:auth) {
        return this.authservice.signin(dto);
    };
} 