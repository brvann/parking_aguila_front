import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstanciasComponent } from './estancias/estancias.component';
import { TareasComponent } from './tareas/tareas.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
  {path: '', redirectTo: 'estancias', pathMatch: 'full' },
  {path: 'estancias', component: EstanciasComponent},
  {path: 'vehiculos', component: VehiculosComponent},
  {path: 'tareas', component: TareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
