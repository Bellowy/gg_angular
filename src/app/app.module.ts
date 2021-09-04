import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { HeaderComponent } from './header/header.component';
import { TabContentComponent } from './tab-content/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TabPanelComponent,
    HeaderComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
