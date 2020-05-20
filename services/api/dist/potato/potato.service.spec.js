"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const potato_service_1 = require("./potato.service");
describe("UserService", () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [potato_service_1.PotatoService],
        }).compile();
        service = module.get(potato_service_1.PotatoService);
    });
    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=potato.service.spec.js.map