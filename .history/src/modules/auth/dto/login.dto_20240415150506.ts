import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class AuthLoginDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength
    password: string;

}