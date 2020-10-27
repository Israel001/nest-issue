import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceiveWebhookMiddleware } from './middlewares/ReceiveWebhookMiddleware';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [WebhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ReceiveWebhookMiddleware).forRoutes({
      path: 'webhook/(.*)',
      method: RequestMethod.POST,
    });
  }
}
