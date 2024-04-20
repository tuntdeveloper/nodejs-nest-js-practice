import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {
    constructor(private PrismaService: PrismaService) {}

    async register(dto: Auth) {}
    async login() {}
}