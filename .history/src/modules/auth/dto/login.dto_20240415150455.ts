import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthLoginDto {

    @IsEmail()
    @IsNotEmpty
    email: string;
    password: string;

}