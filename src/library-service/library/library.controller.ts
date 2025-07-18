import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LibraryService } from './library.service';
import { Library } from '@prisma/client';

@Controller('libraries')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  createLibrary(@Body() createLibrary: Library) {
    return this.libraryService.createLibrary(createLibrary);
  }

  @Get()
  findAllLibrary() {
    return this.libraryService.findAllLibraries();
  }

  @Get(':id')
  findOneLibrary(@Param('id') id: string) {
    return this.libraryService.findOneLibrary(Number(id));
  }

  @Patch(':id')
  updateLibrary(@Param('id') id: string, @Body() updateLibrary: Library) {
    return this.libraryService.updateLibrary(Number(id), updateLibrary);
  }

  @Delete(':id')
  removeLibrary(@Param('id') id: string) {
    return this.libraryService.removeLibrary(Number(id));
  }
}
