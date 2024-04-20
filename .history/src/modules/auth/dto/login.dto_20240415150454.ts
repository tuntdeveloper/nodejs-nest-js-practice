import { IsEmail } from "class-validator";

export class AuthLoginDto {

    @IsEmail()
    @IsN
    email: string;
    password: string;

}