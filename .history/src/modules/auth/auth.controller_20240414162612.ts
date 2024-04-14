import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { register } from "module";

@Controller('/auth')
export class AuthController {
    constructor(private service: AuthService) {}

    @Post('/register')
    async register() {

        return this.service.register();
    }


}