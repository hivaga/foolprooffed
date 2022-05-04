import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";


import { AppComponent } from "./app.component";


const ROUTES = [
  {
    path: "files",
    loadChildren: () =>
      import("./files/files.module").then((m) => m.FilesModule)
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule)
  },
  {
    path: "types",
    loadChildren: () =>
      import("./types/types.module").then((m) => m.TypesModule)
  },
  {
    redirectTo: "/files",
    path: "",
    pathMatch: "full"
  },
  {
    redirectTo: "/files",
    path: "**",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule, MatButtonModule, MatChipsModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
