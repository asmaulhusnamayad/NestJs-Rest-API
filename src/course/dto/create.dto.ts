import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class createDto {
    
    @IsNotEmpty()
    student_id : number

    
    @IsNotEmpty()
    
    teacher_id : number

    @IsString()
    @IsNotEmpty()
    title: string

    
    @IsNotEmpty()
    @IsString()
    description: string

    

}