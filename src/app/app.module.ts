import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToonListComponent } from './toon-list/toon-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    ToonListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
{path: '', component:ToonListComponent},

    ]),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
