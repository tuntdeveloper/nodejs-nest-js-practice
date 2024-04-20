import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthRegisterDto } from "./dto/register.dto";
import { AuthLoginDto } from "./dto/login.dto";

@Controller('/auth')
export class AuthController {
    constructor(private service: AuthService) {}

    @Post('/register')
    async register(@Body() dto: AuthRegisterDto) {
        return this.service.register(dto);
    }

    @Post('/login')
    async login(@Body() dto: AuthLoginDto) {
        return this.service.login(dto);
    }
}