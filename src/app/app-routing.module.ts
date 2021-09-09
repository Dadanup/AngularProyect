import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ButtonValidationComponent } from './form/button-validation/button-validation.component';
const routes: Routes = [
  {path:'form',component: FormComponent},
  {path:'button-validation',component:ButtonValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
