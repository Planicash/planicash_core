import { Module } from "@nestjs/common";
import { AccountModule } from "../accounts/account.module";
import { LIbraryModule } from "../library/library.module";

@Module({
    imports: [AccountModule, LIbraryModule]
})
export class GLibraryModule { }