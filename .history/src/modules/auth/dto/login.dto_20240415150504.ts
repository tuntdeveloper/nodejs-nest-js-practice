import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthLoginDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Leng
    password: string;

}