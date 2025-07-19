import { Module } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaClient } from "@prisma/client";

@Module({
    providers: [AuthService, PrismaClient],
    controllers: [AuthController],
})
export class AuthModule { }