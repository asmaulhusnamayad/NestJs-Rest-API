import { Catch, ForbiddenException, Injectable } from "@nestjs/common";
import { auth } from "src/dto";
import * as argon from 'argon2';

import { PrismaService } from "src/prisma/prisma.service";
import { Any } from "typeorm";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";


@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {

    }
    async signin(dto: auth) {
        //find the user by email
        const user = this.prisma.user.findUnique({
            where: {
                email: dto.Email
            }
        });
        //if user doesnt exist 
        if (!user) throw new ForbiddenException('Hey! you are not using a unique email.')
        //compare passsword
        const pwMatches = await argon.verify(
            (await user).hash,
            dto.Password
        );
        if (!pwMatches) {
            throw new ForbiddenException(
                'hey!password is incorrent'
            );
        }
        return this.signToken((await user).id, (await user).email)
    }

    async signup(dto: auth) {
        //generate the password hash
        const hash = await argon.hash(dto.Password);

        //save the new user to the database 
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.Email,
                    hash,


                },
            });

            return this.signToken(user.id, user.email)

        }
        catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Hey! you are using duplicate items.')
                }
            }
            throw error;
        }



    }
    async signToken(userId: Number, email: String): Promise<{access_token :string}> {
        const payload = {
            sub: userId,
            email
        }
        const secret = this.config.get('JWT_SECRET')
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: secret,
        },
    );
        return {
            access_token: token, 
        };
    }
}

