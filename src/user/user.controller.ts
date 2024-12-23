import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtGuard } from '../auth/Guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { editUserDto } from './dto';
@UseGuards(JwtGuard)
@Controller('user') 
export class UserController {
    constructor(private userService : UserService){}
    
    @Get('me')
    getme(@GetUser() user : User ) {

        return user;
    }

    @Patch()
    editUser( 
        @GetUser('id') userId : number,@Body() dto : editUserDto,
    ){
        return this.userService.editUser(userId,dto);
    }
}


 