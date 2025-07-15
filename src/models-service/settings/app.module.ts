import { Module } from "@nestjs/common";
import { ModelModule } from "../models/model.module";
import { AccountModule } from "../accounts/account.module";

@Module({
    imports: [ModelModule, AccountModule]
})
export class GModelsModule { }