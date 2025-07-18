import { Module } from '@nestjs/common';
import { GIncomesModule } from 'src/incomes-service/settings/app.module';
import { GLibraryModule } from 'src/library-service/settings/app.module';
import { GUserModule } from 'src/user-service';
import { GPaymentsModule } from '../payments-service/settings/app.module';

@Module({
  imports: [
    GUserModule,
    GLibraryModule,
    GIncomesModule,
    GPaymentsModule
  ],
  providers: [],
})
export class MainModule { }
