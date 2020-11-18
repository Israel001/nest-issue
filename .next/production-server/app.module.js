"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const ReceiveWebhookMiddleware_1 = require("./middlewares/ReceiveWebhookMiddleware");
const webhook_module_1 = require("./webhook/webhook.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(ReceiveWebhookMiddleware_1.ReceiveWebhookMiddleware).forRoutes({
            path: 'webhook/*',
            method: common_1.RequestMethod.POST,
        });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            webhook_module_1.WebhookModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map