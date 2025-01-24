import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { PotatoModule } from "./potato/potato.module";
import { HealthModule } from "./health/health.module";

@Module({
  imports: [ConfigModule.forRoot(), HealthModule, PotatoModule],
})
export class ApplicationModule {}
