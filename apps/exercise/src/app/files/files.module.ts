import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { StringToDatePipe } from "../shared/pipes/string-to-date.pipe";
import { FilesComponent } from "./files/files.component";

const ROUTES = [
  {
    path: "",
    component: FilesComponent
  }
];

@NgModule({
  declarations: [
    FilesComponent,
    StringToDatePipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FilesModule {
}
