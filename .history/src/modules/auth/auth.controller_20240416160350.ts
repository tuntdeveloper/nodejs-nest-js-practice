import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthRegisterDto } from "./dto/register.dto";
import { AuthLoginDto } from "./dto/login.dto";
import { User } from "@prisma/client";
import { ApiPath } from "src/core/constant/api.constant";

@Controller(ApiPath.auth)
export class AuthController {
    constructor(private service: AuthService) {}

    @Post(ApiPath.re)
    async register(@Body() dto: AuthRegisterDto) : Promise<User> {
        return this.service.register(dto);
    }

    @Post('/login')
    async login(@Body() dto: AuthLoginDto) : Promise<User> {
        return this.service.login(dto);
    }
}