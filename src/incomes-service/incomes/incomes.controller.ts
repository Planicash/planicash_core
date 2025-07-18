import { CreateIncomeDto } from './types/dto/create-incomes.dto';
import { UpdateIncomesDto } from './types/dto/update-incomes.dto';
import { IncomesService } from './incomes.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';


@Controller('incomes')
export class IncomesController {
  constructor(private readonly incomesService: IncomesService) { }

  @Get()
  findAll() {
    return this.incomesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.incomesService.findOne(id);
  }
  @Post()
  create(@Body() dto: CreateIncomeDto) {
    return this.incomesService.create(dto);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateIncomesDto) {
    return this.incomesService.update(id, dto);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.incomesService.remove(id)
  }
}