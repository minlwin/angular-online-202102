import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MasterRoutingModule } from "./master-routing.module";

@NgModule({
    imports: [
        CommonModule,
        MasterRoutingModule
    ],
    exports: [
        MasterRoutingModule
    ]
})
export class MasterModule {

}