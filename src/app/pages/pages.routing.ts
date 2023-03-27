import { Router, RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes= [
    { path:'',
    component:PagesComponent,
    children:[
      // {path: '',component:DashboardComponent},
      {path: '',component:DashboardComponent},
      {path: 'progress',component:ProgressComponent},
      {path: 'grafica1',component:Grafica1Component},
      {path: 'register',component:UserregisterComponent},
      {path: 'listUser',component:UserlistComponent},
      {path: 'listproducts',component:ListproductsComponent},
      {path: 'newproduct',component:NewproductComponent},
      {path: 'listcategory',component:ListcategoryComponent},
      {path: 'category',component:CategoryComponent},
      {path: '', redirectTo:'/dashboard', pathMatch:'full' },
    ],

  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule{}