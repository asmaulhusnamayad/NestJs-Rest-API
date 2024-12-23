import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class signinDto{

    @IsNotEmpty()
    @IsString()
    email : string

    @IsNotEmpty()
    @IsStrongPassword()
    hash : string
}