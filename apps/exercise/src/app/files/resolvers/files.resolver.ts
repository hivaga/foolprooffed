import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataService } from "../../shared/services/data.service";

@Injectable({
  providedIn: "root"
})
export class FilesResolver implements Resolve<any> {
  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataService.getFiles();
  }
}
