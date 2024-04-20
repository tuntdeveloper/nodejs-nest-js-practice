import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegisterDto } from "./dto/register.dto";
import { AuthLoginDto } from "./dto/login.dto";

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async register(dto: AuthRegisterDto) {
        this.prisma.user.create(
            {
                data: {
                    email: dto.email,
                    propsData
                }
            }
        );
    }
    async login(dto: AuthLoginDto) {}
}