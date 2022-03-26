import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularHttpClientComponent } from './components/angular-http-client/angular-http-client.component';
import { FormsModule} from '@angular/forms'
import { TailwindDemoModule } from './tailwind-demo/tailwind-demo.module';
@NgModule({
  declarations: [
    AppComponent,
    AngularHttpClientComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TailwindDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
