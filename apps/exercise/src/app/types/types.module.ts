import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TypesComponent } from "./types/types.component";

const ROUTES = [
  {
    path: "",
    component: TypesComponent
  }
];

@NgModule({
  declarations: [
    TypesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class TypesModule {
}
