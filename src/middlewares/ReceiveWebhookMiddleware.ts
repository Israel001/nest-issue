import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ReceiveWebhookMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    console.log('we are in the middleware');
    next();
  }
}
