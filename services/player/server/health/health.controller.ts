import {Controller, Get} from "@nestjs/common";
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HealthIndicatorResult,
  MicroserviceHealthIndicator,
} from "@nestjs/terminus";
import {Transport} from "@nestjs/microservices";

@Controller("health")
export class HealthController {
  constructor(private health: HealthCheckService, private service: MicroserviceHealthIndicator) {}

  @Get()
  @HealthCheck()
  readiness(): Promise<HealthCheckResult> {
    return this.health.check([
      async (): Promise<HealthIndicatorResult> =>
        this.service.pingCheck("RMQ", {
          transport: Transport.RMQ,
          options: {
            urls: [process.env.RMQ_URL],
            queue: process.env.RMQ_QUEUE,
          },
        }),
    ]);
  }
}
