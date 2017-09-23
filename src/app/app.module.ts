import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdFormFieldModule } from '@angular/material';
import { MdAutocompleteModule } from '@angular/material';
import { MdCard } from '@angular/material';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdSlideToggleModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {MdExpansionModule} from '@angular/material';
import {MdRadioModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import 'hammerjs';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './tradedet/sidenav/sidenav.component';
import { DashboardComponent } from './tradedet/dashboard/dashboard.component';
import { WeblayoutComponent } from './weblayout/weblayout.component';
import { TradedetComponent } from './tradedet/tradedet.component';
import { OrdersComponent } from './tradedet/orders/orders.component';
import { ToolbarComponent } from './weblayout/toolbar/toolbar.component';
import { FooterComponent } from './weblayout/footer/footer.component';
import { BodyComponent } from './weblayout/body/body.component';
import { UserCardComponent } from './tradedet/users/user-card/user-card.component';
import { UserListComponent } from './tradedet/users/user-list/user-list.component';
import { OrderCardComponent } from './tradedet/orders/order-card/order-card.component';
//import {InterceptorModule} from './app.interceptor.module';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HomeComponent,
    SidenavComponent,
    DashboardComponent,
    WeblayoutComponent,
    TradedetComponent,
    ToolbarComponent,
    FooterComponent,
    BodyComponent,
    UserCardComponent,
    UserListComponent,
    OrderCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    FlexLayoutModule,
    MdInputModule,
    MdFormFieldModule,
    MdAutocompleteModule,    
    FormsModule,
    ReactiveFormsModule,
    MdSlideToggleModule,
    MatStepperModule,
    MdExpansionModule,
    MdRadioModule,
 //   InterceptorModule,
    RouterModule.forRoot(ROUTES)       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
