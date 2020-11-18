import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Arena from 'bull-arena';
import Bull from 'bull';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/monitor',
    Arena({
      Bull,
      queues: [{ name: 'QUEUE_1', redis: {} }],
    }),
  );

  await app.listen(3000);
}
bootstrap();
