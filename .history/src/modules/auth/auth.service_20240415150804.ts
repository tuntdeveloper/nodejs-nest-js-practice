import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegisterDto } from "./dto/register.dto";
import { AuthLoginDto } from "./dto/login.dto";

@Injectable({})
export class AuthService {
    constructor(private prismaService: PrismaService) {}

    async register(dto: AuthRegisterDto) {
        prismaService.user
    }
    async login(dto: AuthLoginDto) {}
}