import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import { HelloComponent } from "./hello/hello.component";
import { MatrixComponent } from "./hello/matrix/matrix.component";
import { PathComponent } from "./hello/path/path.component";
import { QueryComponent } from "./hello/query/query.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DATA, ProductResolver } from "./resolve/product.resolve";
import { ResolveFormComponent } from "./resolve/resolve-form/resolve-form.component";
import { ResolveToComponent } from "./resolve/resolve-to/resolve-to.component";


const ROUTES: Route[] = [
    {
        path: 'hello',
        component: HelloComponent,
        children: [
            { path: 'path/:id/category/:type', component: PathComponent },
            { path: 'matrix', component: MatrixComponent },
            { path: 'query', component: QueryComponent },
            { path: '', redirectTo: '/hello/matrix', pathMatch: 'full' },
        ]
    },
    {
        path: 'resolve',
        children: [
            { path: 'from', component: ResolveFormComponent, data: { list: DATA } },
            { path: 'to/:id', component: ResolveToComponent, resolve: { product: ProductResolver } },
            { path: '', redirectTo: 'from', pathMatch: 'full' }
        ]
    },
    { path: 'forms', component: FormsComponent },
    { path: '', redirectTo: '/forms', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}