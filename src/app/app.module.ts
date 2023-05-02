import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './module-admin/login/login.component';
import { CommandsComponent } from './module-admin/commands/commands.component';
import { NewFoodComponent } from './module-admin/new-food/new-food.component';
import { EditFoodComponent } from './module-admin/edit-food/edit-food.component';
import { ModuleAdminModule } from './module-admin/module-admin.module';
import { ModuleClientModule } from './module-client/module-client.module';

registerLocaleData(localeFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommandsComponent,
    NewFoodComponent,
    EditFoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModuleAdminModule,
    ModuleClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
