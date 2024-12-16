import { IsEmail, IsNotEmpty, isNotEmpty, IsString } from "class-validator"

export class auth{
    @IsEmail()
    @IsNotEmpty()
    Email : string

    @IsString()
    @IsNotEmpty()
    Password : string
}