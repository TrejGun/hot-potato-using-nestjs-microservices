"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.disable("x-powered-by");
    const options = new swagger_1.DocumentBuilder()
        .setTitle("Hot Potato")
        .setDescription("API description")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("swagger", app, document);
    await app.listen(process.env.PORT, process.env.HOST, () => {
        console.info(`API server is running on http://${process.env.HOST}:${process.env.PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=index.js.map