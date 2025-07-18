import { Module } from '@nestjs/common';
import { IncomesController } from './incomes.controller';
import { IncomesService } from './incomes.service';
import { PrismaService } from 'src/utils/prisma.service';

@Module({
  controllers: [IncomesController],
  providers: [IncomesService, PrismaService],
})
export class IncomesModule { }
