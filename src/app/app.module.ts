import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUiComponent } from './login-ui/login-ui.component';
import { RoutpageComponent } from './routpage/routpage.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule} from '@angular/common/http';
import { MapsComponent } from './maps/maps.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginUiComponent,
    RoutpageComponent,
    SignupComponent,
    ItemsComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule    


  ],
  providers: [LoginUiComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
