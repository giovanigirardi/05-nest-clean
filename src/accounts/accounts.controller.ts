import { Body, Controller, Post, UsePipes } from "@nestjs/common";

import { ZodValidationPipe } from "@/pipes/zod-validation-pipe";
import { AccountsService } from "./accounts.service";
import { CreateAccountDto, createAccountSchema } from "./dto/create-account.dto";

@Controller("accounts")
export class AccountsController {
	constructor(private readonly accountsService: AccountsService) {}

	@Post()
	@UsePipes(new ZodValidationPipe(createAccountSchema))
	create(@Body() createAccountDto: CreateAccountDto) {
		return this.accountsService.create(createAccountDto);
	}
}
