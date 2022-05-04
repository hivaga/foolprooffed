import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "foolproof-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.scss"]
})
export class FilesComponent {

  files: ({
    createdBy: number,
    creationDateTime: string,
    modifiedDateTime: string
  })[] = [];

  constructor(routeSnapshot: ActivatedRoute) {
    console.log("routeSnapshot:", routeSnapshot.snapshot);
    this.files = routeSnapshot.snapshot.data["files"];
  }


}
