import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { createDto, editDto } from './dto';
import { TeacherService } from './teacher.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('teacher')
@UseGuards(AuthGuard('jwt'))

export class TeacherController {

    constructor(private teacher:TeacherService){}
    
        @Post('add')
        create(@Body()dto:createDto){
            return this.teacher.createTeacher(dto);
        }
    
        @Get('allteacher')
        findAll(){
            return this.teacher.getteacher()
        }
    
        @Get(':id')
        findOne(@Param('id') id:string){
            return this.teacher.getteacherbyId(+id);
        }
    
        @Delete(':id')
        remove(@Param('id') id:string,){
            return this.teacher.deleteteacher(+id)
        }
    
        @Patch(':id')
        update(@Param('id') id:string,@Body() dto:editDto){
            return this.teacher.editteacher(+id,dto)
        }

}
