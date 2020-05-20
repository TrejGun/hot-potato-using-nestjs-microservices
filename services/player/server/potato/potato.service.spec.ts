import {Test, TestingModule} from "@nestjs/testing";
import {PotatoService} from "./potato.service";


describe("UserService", () => {
  let service: PotatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotatoService],
    }).compile();

    service = module.get<PotatoService>(PotatoService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
