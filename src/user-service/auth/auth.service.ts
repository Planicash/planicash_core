import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../utils/prisma.service';
import { User } from '../../../generated/prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private prismaCLient: PrismaService) { }

    public async validateUser(user: User) {
        const foundUser = await this.prismaCLient.user.findUnique({where: { email: user.email }});
        if (!foundUser) return null; 
        const isPasswordValid = await bcrypt.compare(user.passwordHash, foundUser.passwordHash);
        if (!isPasswordValid) return null;
        const { passwordHash, ...userWithoutPassword } = foundUser;
        return userWithoutPassword;
    }

    public async registerUser(user: User) {
        return await this.prismaCLient.user.create({ data: user });
    }
}
