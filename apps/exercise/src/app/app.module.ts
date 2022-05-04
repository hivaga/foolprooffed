import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";


import { AppComponent } from "./app.component";
import { DataService } from "./shared/services/data.service";


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
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatChipsModule,
    FlexModule],
  providers: [DataService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
