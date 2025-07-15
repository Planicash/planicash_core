import { Controller } from '@nestjs/common';
// import { UserService } from './user.service';
// import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
// import { tags } from 'typia';
// import { User } from '../../../generated/prisma';

@Controller('user')
export class UserController {

    // constructor(private readonly userService: UserService) { }

    // @TypedRoute.Get()
    // public async getAllUsers() {
    //     return await this.userService.getMany();
    // }

    // @TypedRoute.Get('/:id')
    // public async getUserById(
    //     @TypedParam('id') userId: number & tags.Type<'uint32'>
    // ) {
    //     return await this.userService.findById(userId);
    // }

    // @TypedRoute.Post()
    // public async createUser(
    //     @TypedBody() user: User,
    // ) {
    //     return await this.userService.createOne(user);
    // }

    // @TypedRoute.Put('/:id')
    // public async updateUser(
    //     @TypedParam('id') userId: number & tags.Type<'uint32'>,
    //     @TypedBody() user: User,
    // ) {
    //     return await this.userService.setOne(userId, user);
    // }

    // @TypedRoute.Delete('/:id')
    // public async deleteUser(
    //     @TypedParam('id') userId: number & tags.Type<'uint32'>,
    // ) {
    //     return await this.userService.deleteOne(userId);
    // }

}
