import { Module } from '@nestjs/common';
import { GModelsModule } from 'src/models-service/settings/app.module';
import { GUserModule } from 'src/user-service';

@Module({
  imports: [
    GUserModule, 
    GModelsModule
  ],
  providers: [],
})
export class MainModule {}
