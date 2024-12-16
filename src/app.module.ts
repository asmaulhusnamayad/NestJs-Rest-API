import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/strategy';
import { JwtService } from '@nestjs/jwt';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal :  true,
  }),AuthModule, UserModule, BookmarkModule, PrismaModule],
  providers : [AuthService , JwtStrategy,JwtService]
  
 
})
export class AppModule {}
