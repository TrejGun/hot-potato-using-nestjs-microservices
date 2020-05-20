"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const microservices_1 = require("@nestjs/microservices");
let HealthController = /** @class */ (() => {
    let HealthController = class HealthController {
        constructor(health, service) {
            this.health = health;
            this.service = service;
        }
        readiness() {
            return this.health.check([async () => this.service.pingCheck("RMQ", {
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: [process.env.RMQ_URL],
                        queue: "potato",
                    },
                })]);
        }
    };
    __decorate([
        common_1.Get(),
        terminus_1.HealthCheck(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], HealthController.prototype, "readiness", null);
    HealthController = __decorate([
        common_1.Controller("health"),
        __metadata("design:paramtypes", [terminus_1.HealthCheckService,
            terminus_1.MicroserviceHealthIndicator])
    ], HealthController);
    return HealthController;
})();
exports.HealthController = HealthController;
//# sourceMappingURL=health.controller.js.map