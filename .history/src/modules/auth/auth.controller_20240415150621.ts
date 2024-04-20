import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthRegisterDto } from "./dto/register.dto";

@Controller('/auth')
export class AuthController {
    constructor(private service: AuthService) {}

    @Post('/register')
    async register(@Body() dto: AuthRegisterDto) {
        return this.service.register();
    }

    @Post('/login')
    async login(@Body() do) {
        return this.service.login();
    }
}