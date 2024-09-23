

describe("load the app ", () => {
  beforeEach(()=>{
    cy.visit("http://localhost:3000");
    cy.intercept(
        "GET",
        "http://localhost:3001/api/v1/orders",
        {statusCode:200, fixture:'mocCardData'}
    ).as("mocCardData.json")


  });
  it("user shuld see the previos orders", () => {


  });
});
