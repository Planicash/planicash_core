import { PartialType } from '@nestjs/mapped-types';
import { CreateIncomeDto } from './create-incomes.dto';

export class UpdateIncomesDto extends PartialType(CreateIncomeDto) { }
