describe("Files Page", () => {
  beforeEach(() => cy.visit("/files"));

  it("Should contain all visual element", () => {
    cy.get("h1").should("contain.text", "Foolproofed Exercise");
    cy.get("table").should("exist");
    cy.get(".main-menu button").should("have.length", 2);
  });

  it("Table headers should be correct", () => {
    cy.get("table .mat-header-row > .cdk-column-fullName").should("contain.text", "User Name");
    cy.get("table .mat-header-row > .cdk-column-type").should("contain.text", "File Type");
    cy.get("table .mat-header-row > .cdk-column-type").should("contain.text", "File Type");
    cy.get("table .mat-header-row > .cdk-column-createdDate").should("contain.text", "Created");
    cy.get("table .mat-header-row > .cdk-column-modifiedDate").should("contain.text", "Modified");
  });

  it("Should show files correctly", () => {
    cy.get("tbody > :nth-child(1) > .cdk-column-fullName").should("contain.text", "Christopher Eccleston");
    cy.get("table tr[mat-row]").should("have.length", 20);
  });
});
