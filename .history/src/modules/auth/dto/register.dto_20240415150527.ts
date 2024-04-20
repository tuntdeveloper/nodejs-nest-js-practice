import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class AuthRegiosteDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(5)
    password: string;

}