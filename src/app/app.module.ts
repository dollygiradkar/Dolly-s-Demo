import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesCompoment } from './course.component'
import { CourseService } from "src/app/course.service";
import { RouterModule,Routes } from '@angular/router';
import { NoInformationCompoment } from "src/app/no-information.component";
import { ProductCategoryService } from './product-category.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'product', component: CoursesCompoment }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesCompoment,
    NoInformationCompoment
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([   
      {
        path:'noInformation',
        component:NoInformationCompoment
      }
    ])
  ],
  providers: [CourseService,ProductCategoryService],
  bootstrap: [AppComponent,CoursesCompoment]
})

export class AppModule { }
