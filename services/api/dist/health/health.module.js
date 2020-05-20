"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthModule = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const health_controller_1 = require("./health.controller");
let HealthModule = /** @class */ (() => {
    let HealthModule = class HealthModule {
    };
    HealthModule = __decorate([
        common_1.Module({
            controllers: [health_controller_1.HealthController],
            imports: [terminus_1.TerminusModule],
        })
    ], HealthModule);
    return HealthModule;
})();
exports.HealthModule = HealthModule;
//# sourceMappingURL=health.module.js.map