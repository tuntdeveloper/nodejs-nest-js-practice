import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthLoginDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Le
    password: string;

}