import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VisionComponent } from './pages/vision/vision.component';
import { ViewCardComponent } from './components/view-card/view-card.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { DownloadCvComponent } from './components/download-cv/download-cv.component';
import { TechIconsComponent } from './components/tech-icons/tech-icons.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ViewProjectComponent } from './components/view-project/view-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    VisionComponent,
    ViewCardComponent,
    SendEmailComponent,
    SocialMediaComponent,
    DownloadCvComponent,
    TechIconsComponent,
    SafeUrlPipe,
    ViewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
