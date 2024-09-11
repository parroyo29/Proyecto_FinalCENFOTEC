describe('ProyectoFinal', () => {
    it('to buy animals', () => {
        cy.visit("https://www.saucedemo.com/");
        cy.wait(1000);
        cy.get("input[name=user-name]").type("standard_user");
        cy.get("input[name=password]").type("secret_sauce");



    })
})