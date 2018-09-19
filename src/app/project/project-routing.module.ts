/**
 *
 * Created by Administrator on 2018/9/19.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectListComponent} from "./project-list/project-list.component";
const routes: Routes = [
  { path: 'project', component: ProjectListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule { }

