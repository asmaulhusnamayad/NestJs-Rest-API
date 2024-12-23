import { IsEmail, IsNotEmpty, isNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class auth{

    @IsNotEmpty()
    @IsString()
    name : string

    @IsEmail()
    @IsNotEmpty()
    Email : string

    @IsStrongPassword()
    @IsNotEmpty()
    Password : string

    @IsString()
    @IsNotEmpty()
    username :string

    @IsString()
    @IsNotEmpty()
    address : string

    @IsString()
    @IsNotEmpty()
    phoneNumber :string
}