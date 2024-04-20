import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthRegisterDto } from "./dto/register.dto";

@Controller('/auth')
export class AuthController {
    constructor(private service: AuthService) {}

    @Post('/register')
    async register( dto: AuthRegisterDto) {
        return this.service.register();
    }

    @Post('/login')
    async login() {
        return this.service.login();
    }
}