import { Test, TestingModule } from "@nestjs/testing";
import { ConfigModule } from "@nestjs/config";

import { PotatoService } from "./potato.service";
import { potatoServiceProvider } from "./potato.provider";

describe("UserService", () => {
  let service: PotatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [PotatoService, potatoServiceProvider],
    }).compile();

    service = module.get<PotatoService>(PotatoService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
