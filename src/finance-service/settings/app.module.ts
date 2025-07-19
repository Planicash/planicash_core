import { Module } from "@nestjs/common";
import { IncomesModule } from "../incomes/incomes.module";
import { PaymentsModule } from "../payments/payments.module";

@Module({
    imports: [
        IncomesModule,
        PaymentsModule
    ],
    providers: [],
})
export class GFinanceModule { }