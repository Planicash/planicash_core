import { Module } from '@nestjs/common';
import { GUserModule } from 'src/user-service';

@Module({
  imports: [GUserModule],
  providers: [],
})
export class MainModule {}
