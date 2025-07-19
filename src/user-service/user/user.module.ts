import { Module } from "@nestjs/common";
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaClient } from "@prisma/client";

@Module({
    providers: [UserService, PrismaClient],
    controllers: [UserController],
})
export class UserModule { }