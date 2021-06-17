import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { HomeTemplateModule } from './home-template/home-template.module';

const routes: Routes = [
  //localhost:4200
  {
    path: '',
    loadChildren: () => HomeTemplateModule,
  },

  //localhost:4200/admin
  {
    path: 'admin',
    component: AdminTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
