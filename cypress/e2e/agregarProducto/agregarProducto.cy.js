import {abrirPagina, hacerClick, llenarInput} from "../util";

describe('ProyectoFinal', () => {
    it('agregarProducto', () => {

        abrirPagina();

        llenarInput("input[name=user-name]", "standard_user");
        llenarInput("input[name=password]", "secret_sauce");

        hacerClick("input[id=login-button]");

        hacerClick("button[id=add-to-cart-sauce-labs-backpack]");
        hacerClick("button[id=add-to-cart-sauce-labs-bolt-t-shirt]");
        hacerClick("button[id=add-to-cart-sauce-labs-onesie]");
        cy.wait(3000);

        // Assert para verificar que el carrito tiene 3 artículos (El have.text asegurará que el número mostrado dentro del span sea '3')
        cy.get('.shopping_cart_badge').should('have.text', '3');




    })

    })

