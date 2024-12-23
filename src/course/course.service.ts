import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDto } from './dto/create.dto';
import { editDto } from './dto/edit.dto';
import { title } from 'process';

@Injectable()
export class CourseService {
    constructor(private  prisma:PrismaService){}
    
        async createcourse(dto:createDto){
            const course =await this.prisma.course.create({
                data : {
                        
                        student_id:dto.student_id,
                    
                      
                        title:dto.title,
                    
                        
                        teacher_id:dto.teacher_id,
                    
                        description:dto.description
                    
                       
                }
            })
            return 'Insertion success';
        }
    
    
        async getcourse(){
            return this.prisma.course.findMany();
        }
    
    
        async getcoursebyId(id:number){
            return this.prisma.course.findUnique({
                where : {
                    id
                }
            })
        }
    
    
        async editcourse (userId : number ,dto:editDto){
            const course=await this.prisma.course.update({
                where : {
                    id : userId,
                },
                data : {
                        
                    student_id:dto.student_id,
                    
                      
                    title:dto.title,
                
                    
                    teacher_id:dto.teacher_id,
                
                    description:dto.description
                }
            })
    
            return 'data update success';
        }
    
    
        async deletecourse(id:number){
            return this.prisma.course.delete({
                where : {
                    id,
                }
            })
        }
    
}
