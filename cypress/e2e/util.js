export function abrirPagina(){
    cy.visit("https://www.saucedemo.com/",{
        onBeforeLoad(win) {
            delete win.navigator.__proto__.serviceWorker;
        },
    });
    cy.wait(1000);
}

export function llenarInput(input, texto){
    cy.get(input).type(texto);
    cy.wait(1000);
}

export function hacerClick(id) {
    cy.get(id).click();
    cy.wait(2000);
}