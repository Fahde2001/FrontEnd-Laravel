import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { SupplyChainComponent } from './pages/supply-chain/supply-chain.component';
import { StudentComponent } from './pages/student/student.component';
import { NotesComponent } from './pages/notes/notes.component';
import { MattersComponent } from './pages/matters/matters.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'supplyChaine',component:SupplyChainComponent},
  {path:'student',component:StudentComponent},
  {path:'notes',component:NotesComponent},
  {path:'matters',component:MattersComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
