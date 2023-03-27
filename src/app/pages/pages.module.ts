import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [   
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    UserregisterComponent,
    UserlistComponent,
    ListproductsComponent,
    NewproductComponent,
    ListcategoryComponent,
    CategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    UserregisterComponent,
    UserlistComponent
  ],
})
export class PagesModule { }
