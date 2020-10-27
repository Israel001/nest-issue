import { Controller, Post } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Post('app-uninstalled')
  appUninstalled() {
    console.log('we are in the controller');
  }
}
