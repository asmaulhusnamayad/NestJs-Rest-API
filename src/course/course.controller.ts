import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { editDto } from './dto/edit.dto';
import { createDto } from './dto/create.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('course')
@UseGuards(AuthGuard('jwt'))

export class CourseController {
    constructor(private course : CourseService){}
    
        @Post('add')
        create(@Body()dto:createDto){
            return this.course.createcourse(dto);
        }
    
        @Get('allcourse')
        findAll(){
            return this.course.getcourse()
        }
    
        @Get(':id')
        findOne(@Param('id') id:string){
            return this.course.getcoursebyId(+id);
        }
    
        @Delete(':id')
        remove(@Param('id') id:string){
            return this.course.deletecourse(+id)
        }
    
        @Patch(':id')
        update(@Param('id') id:string,@Body() dto:editDto){
            return this.course.editcourse(+id,dto)
        }
}
