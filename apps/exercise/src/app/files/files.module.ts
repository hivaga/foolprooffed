import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { StringToDatePipe } from "../shared/pipes/string-to-date.pipe";
import { FilesResolver } from "../shared/resolvers/files.resolver";
import { UsersResolver } from "../shared/resolvers/users.resolver";
import { FilesComponent } from "./files/files.component";

const ROUTES = [
  {
    path: "",
    component: FilesComponent,
    resolve: {
      files: FilesResolver,
      users: UsersResolver
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
    MatSortModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FilesModule {
}
