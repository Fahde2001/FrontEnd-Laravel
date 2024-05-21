import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SupplyChainComponent } from './pages/supply-chain/supply-chain.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentComponent } from './pages/student/student.component';
import { NotesComponent } from './pages/notes/notes.component';
import { MattersComponent } from './pages/matters/matters.component';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { EditStudentFormComponent } from './edit-student-form/edit-student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SupplyChainComponent,
    StudentComponent,
    DashboardComponent,
    NotesComponent,
    MattersComponent,
    AddStudentFormComponent,
    EditStudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule // Add RouterModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
