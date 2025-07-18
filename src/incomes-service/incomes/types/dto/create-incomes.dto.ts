import { IsNotEmpty, IsNumber, IsOptional, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateIncomeDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    amount: number

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    incomeDate: Date

    @IsOptional()
    @IsString()
    notes?: string
}