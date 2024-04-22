import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { DarkModeService } from '../dark-mode.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, AppComponent,
    HttpClientModule,
    TranslateModule.forRoot(),
  ],
  exports: [AppComponent],
  providers: [TranslateService]
})
export class AppModule { }
