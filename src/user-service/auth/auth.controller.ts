import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { 
    TypedBody, 
    // TypedParam, 
    // TypedQuery, 
    TypedRoute 
} from '@nestia/core';
import { User } from '../../../generated/prisma';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @TypedRoute.Post('login')
    public async login(
        @TypedBody() user: User,
        // @TypedQuery() search: any,
    ){
        return await this.authService.validateUser(user);
    }

    @TypedRoute.Post('register')
    public async register(
        @TypedBody() user: User,
    ){
        return await this.authService.registerUser(user);
    }
}
