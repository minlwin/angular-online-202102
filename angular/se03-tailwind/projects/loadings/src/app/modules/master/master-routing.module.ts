import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmployeesComponent } from "./employees/employees.component";
import { RolesComponent } from "./roles/roles.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'master', children: [
                    { path: 'role', component: RolesComponent },
                    { path: 'employee', component: EmployeesComponent },
                    { path: '', redirectTo: '/master/employee', pathMatch: 'full' }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MasterRoutingModule {

}