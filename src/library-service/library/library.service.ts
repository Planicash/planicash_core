import { Injectable } from '@nestjs/common';
import { Library } from 'generated/prisma';
import { PrismaService } from 'src/utils/prisma.service';

@Injectable()
export class LibraryService {

  constructor(
    private prisma: PrismaService
  ) {}

  create(createLibraryDto: any) {
    return 'This action adds a new library';
  }

  async findAll(): Promise<Library[]> {
    return await this.prisma.library.findMany();
  }

  findOne(id: number) {
    return `This action returns a #id library`;
  }

  update(id: number, updateLibraryDto: any) {
    return `This action updates a #id library`;
  }

  remove(id: number) {
    return `This action removes a #id library`;
  }
}
