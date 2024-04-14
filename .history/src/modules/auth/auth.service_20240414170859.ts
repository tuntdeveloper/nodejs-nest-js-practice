import { Injectable } from "@nestjs/common";
import { PrismaService } from '../../../.history/src/prisma/prisma.service_20240414170746';

@Injectable({})
export class AuthService {
    constructor(private PrismaService: Pris) {}

    async register() {}
    async login() {}
}