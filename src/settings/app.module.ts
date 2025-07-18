import { Module } from '@nestjs/common';
import { GIncomesModule } from 'src/incomes-service/settings/app.module';
import { GModelsModule } from 'src/models-service/settings/app.module';
import { GUserModule } from 'src/user-service';
import { GPaymentsModule } from '../payments-service/settings/app.module';

@Module({
  imports: [
    GUserModule,
    GModelsModule,
    GIncomesModule,
    GPaymentsModule
  ],
  providers: [],
})
export class MainModule { }
