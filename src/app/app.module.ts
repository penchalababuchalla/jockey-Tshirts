import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './token-interceptor.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
