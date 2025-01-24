import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { HealthModule } from "./health/health.module";
import { PotatoModule } from "./potato/potato.module";
import { AppController } from "./app.controller";

@Module({
  imports: [ConfigModule.forRoot(), HealthModule, PotatoModule],
  controllers: [AppController],
})
export class AppModule {}
