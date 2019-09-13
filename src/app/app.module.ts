import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsPageComponent } from './albumspage/albums-page/albums-page.component';
import { AlbumsDetailComponent } from './albumdetail/albums-detail/albums-detail.component';
import { HtmlCssComponent } from './htmlcsspage/html-css/html-css.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'albums-page', component: AlbumsPageComponent },
  { path: 'album-detail/:id', component: AlbumsDetailComponent },
  { path: 'html-css', component: HtmlCssComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsPageComponent,
    AlbumsDetailComponent,
    HtmlCssComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
