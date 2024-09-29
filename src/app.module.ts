import { Module } from "@nestjs/common";

import { AccountsModule } from "./accounts/accounts.module";
import { PrismaService } from "./prisma/prisma.service";

@Module({
	controllers: [],
	providers: [PrismaService],
	imports: [AccountsModule],
})
export class AppModule {}
