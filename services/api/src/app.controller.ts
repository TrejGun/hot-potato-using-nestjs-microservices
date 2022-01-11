import { Controller, Get, Redirect } from "@nestjs/common";

@Controller("/")
export class AppController {
  @Get("/")
  @Redirect("/swagger", 301)
  public redirect(): void {}
}
