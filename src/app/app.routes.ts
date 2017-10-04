import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './tradedet/dashboard/dashboard.component';
import { OrdersComponent } from './tradedet/orders/orders.component';
import { WeblayoutComponent } from './weblayout/weblayout.component';
import { UserCardComponent } from './tradedet/users/user-card/user-card.component';
import { OrderCardComponent } from './tradedet/orders/order-card/order-card.component';
import { UserListComponent } from './tradedet/users/user-list/user-list.component';
import { LoginComponent } from './home/login/login.component';
import { LoginchkComponent } from './home/loginchk/loginchk.component';


export const ROUTES: Routes = [
  
  { path: 'test',  component: OrderCardComponent },  
  { path: 'home',    component: HomeComponent, children: [
    { path: 'login',  component: LoginComponent }    
   ]},
  { path: 'dashboard',  component: DashboardComponent, children: [
    { path: 'orders',  component: OrdersComponent },
    { path: 'users',  component: UserListComponent },
  ]  
  },
  { path: 'authchk',  component: LoginchkComponent },
  
  { path: '',      component: HomeComponent }
  
];

  
  /*{ path: 'home',  component: HomeComponent, children: [
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'section2',  component: Section2Component },
    { path: 'section3',  component: Section3Component },
    { path: 'forms/basicform',  component: BasicFormComponent },
    { path: 'forms/templateform',  component: TemplateFormComponent },
    { path: 'forms/modeldrivenform',  component: SimpleModelDrivenFormComponent },
    { path: 'forms/dynamicmodeldriven',  component: DynamicModelDrivenFormComponent },
    { path: 'grids/basicgrid',  component: BasicGridComponent },
    { path: 'grids/crudgrid', component: CrudGridComponent },
    { path: 'grids/filtergrid',  component: FilterGridComponent },
    { path: 'itemgrid', component: ItemGridComponent },
    { path: '**',    component: NoContentComponent } 
    
    ]
  },
  { path: 'usercard',  component: UserCardComponent },*/