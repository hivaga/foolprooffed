import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { UsersResolver } from "../shared/resolvers/users.resolver";
import { UsersComponent } from "./users/users.component";

const ROUTES = [
  {
    path: "",
    component: UsersComponent,
    resolve: { users: UsersResolver }
  }
];

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UsersModule {
}
