import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  create(createAccountDto: any) {
    console.log('createAccountDto', createAccountDto);
    return 'This action adds a new account';
  }

  findAll() {
    return `This action returns all accounts`;
  }

  findOne(id: number) {
    console.log('id', id);
    return `This action returns a #id account`;
  }

  update(id: number, updateAccountDto: any) {
    console.log('id', id, updateAccountDto);
    return `This action updates a #id account`;
  }

  remove(id: number) {
    console.log('id', id);
    return `This action removes a #id account`;
  }
}
