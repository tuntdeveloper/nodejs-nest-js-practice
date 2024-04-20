import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegisterDto } from "./dto/register.dto";
import { AuthLoginDto } from "./dto/login.dto";

@Injectable({})
export class AuthService {
    constructor(private PrismaService: PrismaService) {}

    async register(dto: AuthRegisterDto) {}
    async login(dto: AuthLoginDto) {}
}