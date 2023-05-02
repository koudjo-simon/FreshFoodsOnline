import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ModuleAdminRoutingModule } from './module-admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food/food.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminUserComponent } from './admin-user/admin-user.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AboutComponent,
    FoodListComponent,
    FoodComponent,
    AdminUserComponent,
  ],
  imports: [
    CommonModule,
    ModuleAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ],
})
export class ModuleAdminModule { }
