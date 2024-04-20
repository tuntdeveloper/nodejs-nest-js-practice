import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('/auth')
export class AuthController {
    constructor(private service: AuthService) {}

    @Post('/register')
    async register(private dto: Auth) {
        return this.service.register();
    }

    @Post('/login')
    async login() {
        return this.service.login();
    }
}