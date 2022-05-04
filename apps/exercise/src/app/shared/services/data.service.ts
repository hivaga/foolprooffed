import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {

  readonly baseURL: string = "http://localhost:3001";

  constructor(private http: HttpClient) {
  }

  public getFiles() {
    return this.http.get(`${this.baseURL}/Files`, { responseType: "json" });
  }

  public getUsers() {
    return this.http.get(`${this.baseURL}/Users`, { responseType: "json" });
  }

  public getTypes() {
    return this.http.get(`${this.baseURL}/Types`, { responseType: "json" });
  }


}
