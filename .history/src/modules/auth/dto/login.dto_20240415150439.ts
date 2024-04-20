import { IsEmail } from "class-validator";

export class AuthLoginDto {

    @IsEmail()
    @Require
    email: string;
    password: string;

}