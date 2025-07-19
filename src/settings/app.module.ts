import { Module } from '@nestjs/common';
import { GLibraryModule } from 'src/library-service/settings/app.module';
import { GUserModule } from 'src/user-service';
import { GFinanceModule } from 'src/finance-service/settings/app.module';

@Module({
  imports: [
    GUserModule,
    GLibraryModule,
    GFinanceModule
  ],
  providers: [],
})
export class MainModule { }
