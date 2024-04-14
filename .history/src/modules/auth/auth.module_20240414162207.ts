import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

@Module({
    controllers: [AuthController],
    providers: [AuthSe]
})
export class AuthModule {}
