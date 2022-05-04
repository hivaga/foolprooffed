import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FilesComponent } from "./files/files.component";

const ROUTES = [
  {
    path: "",
    component: FilesComponent
  }
];

@NgModule({
  declarations: [
    FilesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FilesModule {
}
