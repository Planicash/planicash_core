import { Injectable } from '@nestjs/common';
import { User } from '../../../generated/prisma';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prismaCLient: PrismaClient) { }

    public async getMany() {
        return await this.prismaCLient.user.findMany();
    }

    public async findById(id: number) {
        return await this.prismaCLient.user.findUnique({
            where: { id }
        });
    }

    public async createOne(user: User) {
        return await this.prismaCLient.user.create({
            data: user
        });
    }

    public async setOne(id: number, user: User) {
        const { id: _, ...userData } = user;
        return await this.prismaCLient.user.update({
            where: { id },
            data: userData
        });
    }

    public async deleteOne(id: number) {
        return await this.prismaCLient.user.delete({
            where: { id }
        });
    }
}
