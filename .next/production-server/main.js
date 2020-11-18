"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bull_arena_1 = __importDefault(require("bull-arena"));
const bull_1 = __importDefault(require("bull"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use('/monitor', bull_arena_1.default({
        Bull: bull_1.default,
        queues: [{ name: 'QUEUE_1', redis: {} }],
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map