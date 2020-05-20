import {Module} from "@nestjs/common";
import {HealthModule} from "./health/health.module";
import {PotatoModule} from "./potato/potato.module";


@Module({
  imports: [
    HealthModule,
    PotatoModule,
  ],
})
export class AppModule {}
