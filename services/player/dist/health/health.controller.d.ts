import { HealthCheckResult, HealthCheckService, MicroserviceHealthIndicator } from "@nestjs/terminus";
export declare class HealthController {
    private health;
    private service;
    constructor(health: HealthCheckService, service: MicroserviceHealthIndicator);
    readiness(): Promise<HealthCheckResult>;
}
