import { Injectable } from '@nestjs/common';
import { Library } from 'generated/prisma';
import { PrismaService } from 'src/utils/prisma.service';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class LibraryService {

  constructor(
    private prisma: PrismaService
  ) {}

  async createLibrary(data: Library): Promise<Library> {
    return await this.prisma.library.create({data});
  }

  async findAllLibraries(): Promise<Library[]> {
    return await this.prisma.library.findMany();
  }

  async findOneLibrary(id: number): Promise<Library> {
    const library = await this.prisma.library.findUnique({
    where: { id },
    });

  if (!library) {
    throw new NotFoundException(`Library with id ${id} not found`);
  }

  return library
  }

  async updateLibrary(id: number, data: Library): Promise<Library> {
    return await this.prisma.library.update({where: {id}, data})
  }

  async removeLibrary(id: number) {
    return await this.prisma.library.delete({where: {id}});
  }
}
