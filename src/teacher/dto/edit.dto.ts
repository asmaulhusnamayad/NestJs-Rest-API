import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator"

export class editDto{
        @IsString()
        @IsOptional()
        name: string
    
        @IsString()
        @IsOptional()
        @IsEmail()
        email: string
    
        @IsString()
        @IsOptional()
        username: string
    
        @IsStrongPassword()
        @IsOptional()
        password: string
    
        @IsString()
        @IsOptional()
        address: string
        @IsString()
        @IsOptional()
        phonrNumber: string
}