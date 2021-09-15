import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TestFormBuilderComponent } from './test-form-builder/test-form-builder.component';
const routes: Routes = [
  {path:'form',component: FormComponent},
  {path:'test-form-builder',component:TestFormBuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
