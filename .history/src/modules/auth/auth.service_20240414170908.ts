import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    constructor(private PrismaService: Pris) {}

    async register() {}
    async login() {}
}