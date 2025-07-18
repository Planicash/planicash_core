import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../utils/prisma.service';
import { Income } from '@prisma/client';
import { UpdateIncomesDto } from './types/dto/update-incomes.dto';
import { CreateIncomeDto } from './types/dto/create-incomes.dto';

@Injectable()
export class IncomesService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CreateIncomeDto) {
    return await this.prisma.income.create({
      data: dto,
    });
  }
  async findAll(): Promise<Income[]> {
    return await this.prisma.income.findMany();
  }
  async findOne(id: number): Promise<Income> {
    const existing = await this.prisma.income.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException('Income not found');
    }
    return existing;
  }
  async update(id: number, dto: UpdateIncomesDto) {
    const existing = await this.prisma.income.findUnique({
      where: {
        id,
      },
    });
    if (!existing) {
      throw new NotFoundException('Income not found');
    }

    return this.prisma.income.update({
      where: { id },
      data: dto
    })
  }

  async remove(id: number) {
    const existing = await this.prisma.income.findUnique({ where: { id } })
    if (!existing) {
      throw new NotFoundException("Income not found")
    }
    return this.prisma.income.delete({
      where: { id }
    })
  }
}
