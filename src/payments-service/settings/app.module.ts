import { Module } from "@nestjs/common";
import { PaymentsController } from "../payments/payments.controller";

@Module({
    imports: [PaymentsController],
})

export class GPaymentsModule { }