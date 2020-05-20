"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
require("./env");
const common_1 = require("@nestjs/common");
const potato_module_1 = require("./potato/potato.module");
const health_module_1 = require("./health/health.module");
let ApplicationModule = /** @class */ (() => {
    let ApplicationModule = class ApplicationModule {
    };
    ApplicationModule = __decorate([
        common_1.Module({
            imports: [health_module_1.HealthModule, potato_module_1.PotatoModule],
        })
    ], ApplicationModule);
    return ApplicationModule;
})();
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map