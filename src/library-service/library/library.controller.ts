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

@Controller('librarys')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  create(@Body() createLibraryDto: any) {
    return this.libraryService.create(createLibraryDto);
  }

  @Get()
  findAll() {
    return this.libraryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libraryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibraryDto: any) {
    return this.libraryService.update(+id, updateLibraryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libraryService.remove(+id);
  }
}
