import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, takeUntil } from "rxjs";
import { BaseComponent } from "../../shared/BaseComponent";
import { File, User } from "../../shared/model/Types";

type ShortFile = {
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

  files = new Observable<ShortFile[]>();

  dataSource: MatTableDataSource<ShortFile>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private routeSnapshot: ActivatedRoute) {
    super();
    console.log("routeSnapshot:", routeSnapshot.snapshot);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ShortFile>([]);

    this.routeSnapshot.data.pipe((takeUntil(this.isDestroyed)),
      map(data => data["files"] as File[]),
      map(files => {
          const result: ShortFile[] = files.map(file => {
            const users: User[] = this.routeSnapshot.snapshot.data["users"];
            const user = users.filter((user) => user.id === file.createdBy).pop() || { givenName: "-", familyName: "-" };
            return {
              fullName: `${user.givenName} ${user.familyName}`,
              createdBy: file.createdBy,
              creationDateTime: file.creationDateTime,
              modifiedDateTime: file.modifiedDateTime,
              type: file.type
            };
          });
          return result;
        }
      )).subscribe(files => {
      console.log("Files", files);
      this.dataSource.data = files;
      this.dataSource.sort = this.sort;
    });

  }

}
