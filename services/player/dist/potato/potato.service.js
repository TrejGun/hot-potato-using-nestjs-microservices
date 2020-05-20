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
exports.PotatoService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let PotatoService = /** @class */ (() => {
    let PotatoService = class PotatoService {
        play(payload) {
            console.info(`Got message from server ${payload.server}`);
            const isSuccess = Math.random() > .1;
            if (isSuccess) {
                return this.client
                    .send("PLAY", {
                    server: process.env.INSTANCE,
                })
                    .toPromise();
            }
            else {
                return Promise.resolve({
                    server: process.env.INSTANCE,
                });
            }
        }
    };
    __decorate([
        microservices_1.Client({
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: [process.env.RMQ_URL],
                queue: "potato",
            },
        }),
        __metadata("design:type", microservices_1.ClientProxy)
    ], PotatoService.prototype, "client", void 0);
    PotatoService = __decorate([
        common_1.Injectable()
    ], PotatoService);
    return PotatoService;
})();
exports.PotatoService = PotatoService;
//# sourceMappingURL=potato.service.js.map