import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    constructor(private PrismaService: Prisma) {}

    async register() {}
    async login() {}
}