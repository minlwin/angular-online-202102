import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { TransactionRoutingModule } from './transaction-routing.module';


@NgModule({
  declarations: [
    InvoicesComponent,
    CreateInvoiceComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
