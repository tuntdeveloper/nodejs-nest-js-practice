import { IsEmail } from "class-validator";

export class AuthLoginDto {

    @IsEmail()
    @Requi
    email: string;
    password: string;

}