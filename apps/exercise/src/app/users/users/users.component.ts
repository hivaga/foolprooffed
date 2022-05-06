import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, takeUntil } from "rxjs";
import { BaseComponent } from "../../shared/BaseComponent";
import { User } from "../../shared/model/Types";

@Component({
  selector: "foolproof-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent extends BaseComponent implements OnInit {

  users = new Observable<User[]>();

  constructor(private routeSnapshot: ActivatedRoute) {
    super();
    console.log("routeSnapshot:", routeSnapshot.snapshot);
  }

  ngOnInit(): void {

    this.users = this.routeSnapshot.data.pipe((takeUntil(this.isDestroyed)),
      map(data => data["users"] as User[])
    );

  }

}
