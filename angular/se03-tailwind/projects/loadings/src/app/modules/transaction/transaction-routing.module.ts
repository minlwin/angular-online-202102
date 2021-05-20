import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';

const routes: Routes = [
  { path: 'invoices', component: InvoicesComponent },
  { path: 'create', component: CreateInvoiceComponent },
  { path: '', redirectTo: '/transaction/invoices', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
