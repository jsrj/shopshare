// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/app-routing.module';

// SERVICES
import { AuthService } from './auth.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './left-nav/favorites/favorites.component';
import { HistoryComponent } from './left-nav/history/history.component';
import { MessagesComponent } from './left-nav/messages/messages.component';
import { CertificationsComponent } from './left-nav/certifications/certifications.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    SupportComponent,
    ProfileComponent,
    FavoritesComponent,
    HistoryComponent,
    MessagesComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
