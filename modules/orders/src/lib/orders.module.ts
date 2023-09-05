import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ordersRoutes } from './lib.routes';
import { OrderListComponent } from './order-list/order-list.component';

import { StarRatingComponent } from 'modules/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports: [
  CommonModule,
  RouterModule.forChild(ordersRoutes),
  StarRatingComponent,
  ReactiveFormsModule,
],
  declarations: [OrderListComponent],
})
export class OrdersModule {}
