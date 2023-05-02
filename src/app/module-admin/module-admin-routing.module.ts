import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { LoginComponent } from './login/login.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { AboutComponent } from './about/about.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodComponent } from './food/food.component';
import { CommandsComponent } from './commands/commands.component';
import { AdminUserComponent } from './admin-user/admin-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'admin', component: AdminComponent, children: [
        {path: 'login', component: LoginComponent},
        {path: ':user', component: AdminUserComponent, children: [
          {path: 'food', component: FoodComponent, children: [
            {path: 'all', component: FoodListComponent},
            {path: 'add', component: NewFoodComponent},
            {path: 'edit/:id', component: EditFoodComponent},
            {path: 'commands', component: CommandsComponent}
          ]},
          {path: 'about', component: AboutComponent}
        ]},
      ]},
    ])
  ],
  exports: [
    RouterModule
  ],
})
export class ModuleAdminRoutingModule { }
