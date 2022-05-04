import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { StringToDatePipe } from "../shared/pipes/string-to-date.pipe";
import { FilesComponent } from "./files/files.component";
import { FilesResolver } from "./resolvers/files.resolver";

const ROUTES = [
  {
    path: "",
    component: FilesComponent,
    resolve: {
      files: FilesResolver
    }
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
