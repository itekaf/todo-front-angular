import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodosComponent } from './components/todo/todo-array/todos.component';
import { TodoItemComponent } from './components/todo/todo-item/todo-item.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ListsComponent } from './components/list/list-array/lists.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { ListAddComponent } from './components/list/list-add/list-add.component';
import { ListSearchComponent } from './components/list/list-search/list-search.component';
import { TodoSearchComponent } from './components/todo/todo-search/todo-search.component';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FormComponent } from './controllers/form/form.component';
import { FormItemWrapperComponent } from './controllers/form-item-wrapper/form-item-wrapper.component';
import { ButtonComponent } from './controllers/button/button.component';
import { InputComponent } from './controllers/input/input.component';
import { FormItemValidationComponent } from './controllers/form-item-validation/form-item-validation.component';
import { LabelComponent } from './controllers/label/label.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    SigninComponent,
    SignupComponent,
    ListsComponent,
    ListItemComponent,
    ListAddComponent,
    ListSearchComponent,
    TodoSearchComponent,
    TodoAddComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FormComponent,
    FormItemWrapperComponent,
    ButtonComponent,
    InputComponent,
    FormItemValidationComponent,
    LabelComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
