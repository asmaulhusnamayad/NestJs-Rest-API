import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class createDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    username: string

    @IsStrongPassword()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    address: string
    @IsString()
    @IsNotEmpty()
    phonrNumber: string


}