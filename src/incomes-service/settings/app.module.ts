import { Module } from '@nestjs/common';
import { IncomesModule } from '../incomes/incomes.module';

@Module({
  imports: [IncomesModule],
})
export class GIncomesModule { }
