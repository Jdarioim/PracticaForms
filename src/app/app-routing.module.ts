import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './component/reactive/reactive.component';
import { TemplateComponent } from './component/template/template.component';

const routes: Routes = [
  {path: 'template', component: TemplateComponent},
  {path: 'reactive', component: ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
