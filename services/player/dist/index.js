"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.ApplicationModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [process.env.RMQ_URL],
            queue: "potato",
        },
    });
    await app
        .startAllMicroservicesAsync()
        .then(() => console.info(`Email service is subscribed to ${process.env.RMQ_URL}`));
    await app.listen(process.env.PORT, process.env.HOST, () => {
        console.info(`Email service health check is running on http://${process.env.HOST}:${process.env.PORT}/health`);
    });
}
bootstrap();
//# sourceMappingURL=index.js.map