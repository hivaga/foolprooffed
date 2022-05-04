import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, takeUntil } from "rxjs";
import { BaseComponent } from "../../shared/BaseComponent";

type FileType = {
  fullName: string,
  createdBy: number,
  creationDateTime: string,
  modifiedDateTime: string,
  type: "article" | "profile"
}

@Component({
  selector: "foolproof-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.scss"]
})
export class FilesComponent extends BaseComponent implements OnInit {

  files: Observable<FileType[]> = new Observable<FileType[]>();

  constructor(private routeSnapshot: ActivatedRoute) {
    super();
    console.log("routeSnapshot:", routeSnapshot.snapshot);

  }

  ngOnInit() {
    this.files = this.routeSnapshot.data.pipe((takeUntil(this.isDestroyed)),
      map(data => data["files"] as FileType[]),
      map(files => files.map(file => {
        const users = this.routeSnapshot.snapshot.data["users"];
        const user = users[file.createdBy] || { givenName: "Unknonw", familyName: "Unknown" };
        return {
          fullName: `${user.givenName} ${user.familyName}`,
          createdBy: user.createdBy,
          creationDateTime: file.creationDateTime,
          modifiedDateTime: file.modifiedDateTime,
          type: file.type
        };
      })));

  }

}
