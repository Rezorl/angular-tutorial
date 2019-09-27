import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CoursesComponent} from "./courses/courses.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CourseDetailsComponent} from "./course-details/course-details.component";
import {CourseListComponent} from "./course-list/course-list.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    //component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: '',  // www.example.pl/courses
        component: CourseListComponent
      },
      {
        path: ':id', // www.example.pl/courses/1
        component: CourseDetailsComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  // gdy sciezka nie istnieje
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
