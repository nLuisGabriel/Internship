import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { NewCarComponent } from './components/Car/new-car/new-car.component';
import { NewOwnerComponent } from './components/Owner/new-owner/new-owner.component';
import { NewInsuranceComponent } from './components/Insurance/new-insurance/new-insurance.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OwnerWrapperComponent } from './components/Owner/owner-wrapper/owner-wrapper.component';
import { OwnerListComponent } from './components/Owner/owner-list/owner-list.component';
import { CarListComponent } from './components/Car/car-list/car-list.component';
import { CarWrapperComponent } from './components/Car/car-wrapper/car-wrapper.component';
import { InsuranceWrapperComponent } from './components/Insurance/insurance-wrapper/insurance-wrapper.component';
import { InsuranceListComponent } from './components/Insurance/insurance-list/insurance-list.component';
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { SetFocusDirective } from './directives/set-focus.directive';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ZebraStrippedTableDirective } from './directives/zebra-stripped-table.directive';
import { TestComponent } from './components/test/test.component';
import {CommonModule} from "@angular/common";
import { MyFirstPipePipe } from './pipes/my-first-pipe.pipe';
import { PlatesPipePipe } from './pipes/plates-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NewCarComponent,
    NewOwnerComponent,
    NewInsuranceComponent,
    AppFooterComponent,
    OwnerWrapperComponent,
    OwnerListComponent,
    CarListComponent,
    CarWrapperComponent,
    InsuranceWrapperComponent,
    InsuranceListComponent,
    ChangeBackgroundDirective,
    SetFocusDirective,
    ButtonsComponent,
    ZebraStrippedTableDirective,
    TestComponent,
    MyFirstPipePipe,
    PlatesPipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
