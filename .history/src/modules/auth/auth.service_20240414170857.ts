import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    constructor(private prismaSer) {}

    async register() {}
    async login() {}
}