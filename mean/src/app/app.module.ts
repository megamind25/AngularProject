import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgModule, NO_ERRORS_SCHEMA,ApplicationRef } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import 'hammerjs';
import { MenuitemsComponent } from './menuitems/menuitems.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { DispComponent } from './disp/disp.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RestDdComponent } from './rest-dd/rest-dd.component';
import { OrdersComponent } from './orders/orders.component';
import { MappComponent } from './mapp/mapp.component';
import { AgmCoreModule } from '@agm/core';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuitemsComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    DisplayComponent,
    FeedbackComponent,
    AboutusComponent,
    ContactComponent,
    DispComponent,
    RestDdComponent,
    OrdersComponent,
    MappComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule, 
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,MatGridListModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0xar_Ob7YamaSUeWOmyIMAB18QBvyMn8'
    }),
    RouterModule.forRoot([
      {
        path: 'app-menuitems',
         component: MenuitemsComponent
         
      },
      {
        path: 'app-login',
        component: LoginComponent
      },
      {
        path: 'app-register',
         component: RegisterComponent
        //  children:[{
        //   path: 'app-login',
        //   component: LoginComponent,
        //   children:[{
        //    path: 'app-menuitems',
        //    component: MenuitemsComponent
 
        //   }]
        //  }]
        
         
      },
     
      {
        path: 'app-search',
         component: SearchComponent
        
         
      },
      {
        path: 'app-display',
         component: DisplayComponent
         
      },
      {
        path: 'app-contact',
         component: ContactComponent,
         children:[{
          path: 'app-mapp',
          component: MappComponent

         }]
         
      },
      {
        path: 'app-aboutus',
         component: AboutusComponent
         
         
      },
      {
        path: 'app-feedback',
                 component: FeedbackComponent
      },
      {
        path: 'app-orders',
             component: OrdersComponent
      },
      {
        path: 'app-logout',
             component: LogoutComponent
      },
      {
        path: 'app-disp',
         component: DispComponent,
         children:[
          {
            path: 'app-orders',
             component: OrdersComponent,
             children:[{
              
              
                path: 'app-feedback',
                 component: FeedbackComponent
                 
                 
              

             }]
             
          }
         ]
         
      }
   ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
