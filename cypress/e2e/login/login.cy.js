


describe('ProyectoFinal', () => {
    it('logearse', () => {
        abrirPagina();

        llenarInput("input[name=user-name]", "standard_user");
        llenarInput("input[name=password]", "secret_sauce");

        cy.get("input[id=login-button]").click();
    })
})