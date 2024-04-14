import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    constructor(private PrismaService: PrismaService) {}

    async register() {}
    async login() {}
}