import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceiveWebhookMiddleware } from './middlewares/ReceiveWebhookMiddleware';
import { WebhookModule } from './webhook/webhook.module';
import { RenderModule } from 'nest-next';
import next from 'next';

@Module({
  imports: [
    RenderModule.forRootAsync(next({ dev: false }), {
      viewsDir: null,
      passthrough404: true,
    }),
    WebhookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ReceiveWebhookMiddleware).forRoutes({
      path: 'webhook/*',
      method: RequestMethod.POST,
    });
  }
}
