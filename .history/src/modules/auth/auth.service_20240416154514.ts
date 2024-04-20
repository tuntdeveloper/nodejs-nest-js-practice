import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegisterDto } from "./dto/register.dto";
import { AuthLoginDto } from "./dto/login.dto";
import { User } from "@prisma/client";

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async register(dto: AuthRegisterDto) : Promise<User> {
        const user = await this.prisma.user.create(
            {
                data: {
                    email: dto.email,
                    password: dto.password,
                }
            }
        );

        return user;
    }

    async login(dto: AuthLoginDto) : Promise<User> {
        const existUser = await this.prisma.user.findFirst(
            {
                where: {
                    email: dto.email,
                }   
            }
        );

        if(!existUser) {
            throw new ForbiddenException('Credential not exist');
        }

        if(existUser.password !== dto.password) {
            throw new ForbiddenException('Wrong password');
        }

        return existUser;
    }
}