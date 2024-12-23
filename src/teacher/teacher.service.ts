import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDto, editDto } from './dto';

@Injectable()
export class TeacherService {
    constructor(private  prisma:PrismaService){}
    
        async createTeacher(dto:createDto){
            const teacher =await this.prisma.teacher.create({
                data : {
                        
                        name: dto.name,
                    
                      
                        email: dto.email,
                    
                        
                        username: dto.username,
                    
                        password: dto.password,
                    
                        address: dto.address,
                       
                        phonrNumber: dto.phonrNumber
                }
            })
            return 'Insertion success';
        }
    
    
        async getteacher(){
            return this.prisma.teacher.findMany();
        }
    
    
        async getteacherbyId(id:number){
            return this.prisma.teacher.findUnique({
                where : {
                    id
                }
            })
        }
    
    
        async editteacher (userId : number ,dto:editDto){
            const teacher=await this.prisma.teacher.update({
                where : {
                    id : userId,
                },
                data : {
                        
                            name:dto.name,
                        
                           
                            email: dto.email,
                        
                            username: dto.username,
                        
                            password: dto.password,
                        
                            address: dto.address,
                            
                            phonrNumber: dto.phonrNumber
                }
            })
    
            return 'data update success';
        }
    
    
        async deleteteacher(id:number){
            return this.prisma.teacher.delete({
                where : {
                    id,
                }
            })
        }
    
}
