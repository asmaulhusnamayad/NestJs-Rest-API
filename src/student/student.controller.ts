import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { createDto } from './dto/create.dto';
import { editDto } from './dto/edit.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('student')
@UseGuards(AuthGuard('jwt'))
export class StudentController {
    constructor(private student:StudentService){}

    @Post('add')
    create(@Body()dto:createDto){
        return this.student.createStudent(dto);
    }

    @Get('allstudent')
    findAll(){
        return this.student.getstudent()
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.student.getStudentbyId(+id);
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.student.deleteStudent(+id)
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body() dto:editDto){
        return this.student.editStudent(+id,dto)
    }


}
