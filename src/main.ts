import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

  bootstrapApplication(App, {
    providers: [
         importProvidersFrom(HttpClientModule),
     importProvidersFrom(AppRoutingModule),
importProvidersFrom(ToastrModule.forRoot({
        positionClass: 'toast-bottom-right',
              progressBar: true, // İlerleme çubuğu görünür

      }))   
    ]

}).catch(err => console.error(err));