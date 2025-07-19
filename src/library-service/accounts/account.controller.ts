import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from 'generated/prisma';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(@Body() createAccount: Account) {
    return this.accountService.createAccount(createAccount);
  }

  @Get()
  findAll() {
    return this.accountService.findAllAccounts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOneAccount(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: any) {
    return this.accountService.updateAccount(Number(id), updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.removeAccount(Number(id));
  }
}
