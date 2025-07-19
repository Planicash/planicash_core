import { Injectable } from '@nestjs/common';
import { Account } from '@prisma/client';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class AccountService {


  constructor(private prisma: PrismaService) {}

  async createAccount(data: Account) {
    return await this.prisma.account.create({data});
  }

  async findAllAccounts() {
    return await this.prisma.account.findMany();
  }

  async findOneAccount(id: number) {
    return await this.prisma.account.findUnique({
      where: {id}
    });
  }

  async updateAccount(id: number, data: Account) {
    return await this.prisma.account.update({where: {id}, data});
  }

  async removeAccount(id: number) {
    return await this.prisma.account.delete({ where: {id}});
  }
}
