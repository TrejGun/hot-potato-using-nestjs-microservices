import "./env";
import { Module } from "@nestjs/common";

import { PotatoModule } from "./potato/potato.module";
import { HealthModule } from "./health/health.module";

@Module({
  imports: [HealthModule, PotatoModule],
})
export class ApplicationModule {}
