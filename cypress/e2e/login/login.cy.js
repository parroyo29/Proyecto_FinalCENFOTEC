import {abrirPagina, llenarInput} from "../util";


describe('ProyectoFinal', () => {
    it('logearse', () => {
        abrirPagina();

        llenarInput("input[name=user-name]", "standard_user");
        llenarInput("input[name=password]", "secret_sauce");

        cy.get("input[id=login-button]").click();
        cy.wait(3000);

        // Assert para verificar que la URL cambió a la página
        cy.url().should('include', '/inventory.html');
    })
})