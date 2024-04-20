import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthRegisterDto } from "./dto/register.dto";
import { AuthLogin } from '../../../.history/src/modules/auth/dto/login.dto_20240415150353';

@Controller('/auth')
export class AuthController {
    constructor(private service: AuthService) {}

    @Post('/register')
    async register(@Body() dto: AuthRegisterDto) {
        return this.service.register();
    }

    @Post('/login')
    async login(@Body() dto: AuthLoginL) {
        return this.service.login();
    }
}