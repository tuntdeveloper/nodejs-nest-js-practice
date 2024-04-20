import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegisterDto } from "./dto/register.dto";
import { AuthLoginDto } from "./dto/login.dto";

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async register(dto: AuthRegisterDto) {
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
    async login(dto: AuthLoginDto) {
        const existUser = await this.prisma.user.findFirst(
            {
                where: {
                    email: dto.email,
                    password: d
                }   
            }
        );

        if(!existUser) {
            throw new ForbiddenException('Credential not exist');
        }




        return existUser;
    }
}