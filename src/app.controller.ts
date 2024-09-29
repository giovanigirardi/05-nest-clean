import { Controller, Get } from "@nestjs/common";

import type { AppService } from "./app.service";
import type { PrismaService } from "./prisma/prisma.service";

@Controller("/api")
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly prisma: PrismaService,
	) {}

	@Get("/hello")
	getHello(): string {
		return this.appService.getHello();
	}
}
