import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator"

export class editDto{
       
        @IsOptional()
        student_id : number
    
        
        @IsOptional()
        
        teacher_id : number
    
        @IsString()
        @IsOptional()
        title: string
    
        
        @IsNotEmpty()
        @IsOptional()
        description: string
}