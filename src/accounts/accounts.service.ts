import { ConflictException, Injectable } from "@nestjs/common";
import { hash } from "bcryptjs";

import { PrismaService } from "@/prisma/prisma.service";

import { CreateAccountDto } from "./dto/create-account.dto";

@Injectable()
export class AccountsService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createAccountDto: CreateAccountDto) {
		const { name, email, password } = createAccountDto;

		const emailAlreadyExists = await this.prisma.user.findUnique({
			where: { email },
		});

		if (emailAlreadyExists) {
			throw new ConflictException("Email already exists");
		}

		const hashedPassword = await hash(password, 8);

		await this.prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});
	}
}
