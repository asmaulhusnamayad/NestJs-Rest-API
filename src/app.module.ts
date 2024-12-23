import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/strategy';
import { JwtService } from '@nestjs/jwt';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal :  true,
  }),AuthModule, UserModule, PrismaModule, StudentModule, TeacherModule, CourseModule],
  providers : [AuthService , JwtStrategy,JwtService]
  
 
})
export class AppModule {}
