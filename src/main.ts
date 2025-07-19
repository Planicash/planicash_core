import { NestFactory } from '@nestjs/core';
import { MainModule } from './settings/app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
// import { I18nService } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  // const i18nService = app.get<I18nService>(I18nService);

  app.useWebSocketAdapter(new IoAdapter(app));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
