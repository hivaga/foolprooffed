export type File = {
  fullName: string,
  createdBy: number,
  creationDateTime: string,
  modifiedDateTime: string,
  type: "article" | "profile"
}

export type User = {
  id: number,
  givenName: string,
  familyName: string
}
