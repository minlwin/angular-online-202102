import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import { HelloComponent } from "./hello/hello.component";
import { MatrixComponent } from "./hello/matrix/matrix.component";
import { PathComponent } from "./hello/path/path.component";
import { QueryComponent } from "./hello/query/query.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const ROUTES: Route[] = [
    {
        path: 'hello', component: HelloComponent, children: [
            { path: 'path/:id/category/:type', component: PathComponent },
            { path: 'matrix', component: MatrixComponent },
            { path: 'query', component: QueryComponent },
            { path: '', redirectTo: '/hello/matrix', pathMatch: 'full' },
        ]
    },
    { path: 'forms', component: FormsComponent },
    { path: '', redirectTo: '/hello', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}