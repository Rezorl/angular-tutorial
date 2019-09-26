import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {Test2Component} from './test2/test2.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {FormsModule} from '@angular/forms';
import {PodstawyComponent} from './podstawy/podstawy.component';
import {TaskListComponent} from './task-list/task-list.component';
import {ChildInputComponent} from './child-input/child-input.component';
import {ParentInputComponent} from './parent-input/parent-input.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {TaskList2Component} from './task-list2/task-list2.component';
import {TodoTaskComponent} from './todo-task/todo-task.component';
import {DoneTaskComponent} from './done-task/done-task.component';
import {LifecycleHooksComponent} from './lifecycle-hooks/lifecycle-hooks.component';
import {LocalReferenceComponent} from './local-reference/local-reference.component';
import {KlikaczPrzykladSerwisuComponent} from './klikacz-przyklad-serwisu/klikacz-przyklad-serwisu.component';
import {Klikacz1Component} from './klikacz1/klikacz1.component';
import {Klikacz2Component} from './klikacz2/klikacz2.component';
import {ClickService} from "./services/click/click.service";
import {LogService} from "./services/log/log.service";
import {TaskList3ServicesComponent} from './task-list3-services/task-list3-services.component';
import {AddTaskWithServiceComponent} from './add-task-with-service/add-task-with-service.component';
import {TasksService} from "./services/tasks/tasks.service";
import { TodoTaskWithServicesComponent } from './todo-task-with-services/todo-task-with-services.component';
import { DoneTaskWithServiceComponent } from './done-task-with-service/done-task-with-service.component';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { ExampleHttpComponent } from './example-http/example-http.component';
import {HttpService} from "./services/http/http.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  // components, pipes, directives
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    DataBindingComponent,
    PodstawyComponent,
    TaskListComponent,
    ChildInputComponent,
    ParentInputComponent,
    AddTaskComponent,
    TaskList2Component,
    TodoTaskComponent,
    DoneTaskComponent,
    LifecycleHooksComponent,
    LocalReferenceComponent,
    KlikaczPrzykladSerwisuComponent,
    Klikacz1Component,
    Klikacz2Component,
    TaskList3ServicesComponent,
    AddTaskWithServiceComponent,
    TodoTaskWithServicesComponent,
    DoneTaskWithServiceComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    ExampleHttpComponent
  ],
  // add new modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  // services
  providers: [
    ClickService,
    LogService,
    TasksService,
    HttpService
  ],
  // start component
  bootstrap: [AppComponent]
})
export class AppModule {
}
