import { Component } from "@angular/core";

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
  } | any)[] = [
    {
      "creationDateTime": "2015-01-27T01:24:05.919Z",
      "status": "For review",
      "modifiedBy": 7,
      "type": "article",
      "uri": "/project/test/content/9a3f52e0-4ec4-564d-b193-d9b99ee86f2c",
      "version": 2,
      "id": "9a3f52e0-4ec4-564d-b193-d9b99ee86f2c",
      "fileId": "Halimpo-kenus.",
      "scheduled": false,
      "title": "Halimpo kenus.",
      "createdBy": 7,
      "modifiedDateTime": "2015-01-27T05:24:05.919Z",
      "live": true,
      "popularity": false
    }
  ];


}
