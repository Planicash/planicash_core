import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma.service';
import { CreatePaymentsDto } from './dto/create-payments.dto';
import { PaymentMethod } from "@prisma/client"
import { UpdatePaymentsDto } from './dto/update-payments.dto';
@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) { }

  create(dto: CreatePaymentsDto) {
    return this.prisma.paymentMethod.create({
      data: dto,
    });
  }
  findAll(): Promise<PaymentMethod[]> {
    return this.prisma.paymentMethod.findMany();
  }

  async findOne(id: number): Promise<PaymentMethod> {
    const existing = await this.prisma.paymentMethod.findUnique({ where: { id } })
    if (!existing) {
      throw new NotFoundException("Payment not found")
    }
    return existing
  }

  async update(id: number, dto: UpdatePaymentsDto) {
    const existing = await this.prisma.paymentMethod.findUnique({
      where: {
        id,
      },
    });

    if (!existing) {
      throw new NotFoundException('Payments not found');
    }

    return this.prisma.paymentMethod.update({
      where: { id },
      data: dto
    })
  }

  remove(id: number) {
    return `This action removes a #id payments`;
  }
}