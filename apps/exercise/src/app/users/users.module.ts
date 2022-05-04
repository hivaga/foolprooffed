import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";

const ROUTES = [
  {
    path: "",
    component: UsersComponent
  }
];

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UsersModule {
}
