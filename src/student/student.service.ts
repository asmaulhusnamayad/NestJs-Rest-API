import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDto } from './dto/create.dto';
import { editDto } from './dto/edit.dto';

@Injectable()
export class StudentService {
    constructor(private  prisma:PrismaService){}

    async createStudent(dto:createDto){
        const student =await this.prisma.student.create({
            data : {
                    
                    name: dto.name,
                
                  
                    email: dto.email,
                
                    
                    username: dto.username,
                
                    password: dto.password,
                
                    address: dto.address,
                   
                    phonrNumber: dto.phoneNumber
            }
        })
        return 'Insertion success';
    }


    async getstudent(){
        return this.prisma.student.findMany();
    }


    async getStudentbyId(id:number){
        return this.prisma.student.findUnique({
            where : {
                id
            }
        })
    }


    async editStudent (userId : number ,dto:editDto){
        const student=await this.prisma.student.update({
            where : {
                id : userId,
            },
            data : {
                    
                        name:dto.name,
                    
                       
                        email: dto.email,
                    
                        username: dto.username,
                    
                        password: dto.password,
                    
                        address: dto.address,
                        
                        phonrNumber: dto.phoneNumber
            }
        })

        return 'data update success';
    }


    async deleteStudent(id:number){
        return this.prisma.student.delete({
            where : {
                id,
            }
        })
    }


}
