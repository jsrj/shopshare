// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';
import { HttpModule    } from '@angular/http';
import { FormsModule   } from '@angular/forms';
import { RoutingModule } from './routing/app-routing.module';
import { FileUploadModule } from 'ng2-file-upload';

// SERVICES
import { AuthService   } from './auth.service';

// COMPONENTS
import { AppComponent            } from './app.component';
import { RegistrationComponent   } from './registration/registration.component';
import { LoginComponent          } from './login/login.component';
import { SupportComponent        } from './support/support.component';
import { ProfileComponent        } from './profile/profile.component';
import { FavoritesComponent      } from './left-nav/favorites/favorites.component';
import { HistoryComponent        } from './left-nav/history/history.component';
import { MessagesComponent       } from './left-nav/messages/messages.component';
import { CertificationsComponent } from './left-nav/certifications/certifications.component';
import { HomeComponent           } from './home/home.component';
import { ServicesComponent } from './left-nav/services/services.component';
import { UserMenuComponent } from './conditional/user-menu/user-menu.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { NewListingComponent } from './home/new-listing/new-listing.component';



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
    CertificationsComponent,
    HomeComponent,
    ServicesComponent,
    UserMenuComponent,
    EditProfileComponent,
    NotificationsListComponent,
    NewListingComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    FileUploadModule,
    HttpModule
    // FileSelectDirective
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
