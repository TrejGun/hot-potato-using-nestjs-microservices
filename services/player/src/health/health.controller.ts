import { Controller, Get } from "@nestjs/common";
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  HealthIndicatorResult,
  MicroserviceHealthIndicator,
} from "@nestjs/terminus";
import { Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

@Controller("health")
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private service: MicroserviceHealthIndicator,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  @HealthCheck()
  readiness(): Promise<HealthCheckResult> {
    const rmqUrl = this.configService.get<string>("RMQ_URL", "amqp://127.0.0.1:5672/");
    const rmqQueue = this.configService.get<string>("RMQ_QUEUE", "potato");

    return this.health.check([
      async (): Promise<HealthIndicatorResult> =>
        this.service.pingCheck("RMQ", {
          transport: Transport.RMQ,
          options: {
            urls: [rmqUrl],
            queue: rmqQueue,
          },
        }),
    ]);
  }
}
