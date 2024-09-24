import {abrirPagina, hacerClick, llenarInput} from "../util";

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
    it('eliminarProducto', () => {


        abrirPagina();

        llenarInput("input[name=user-name]", "standard_user");
        llenarInput("input[name=password]", "secret_sauce");

        hacerClick("input[id=login-button]");

        hacerClick("button[id=add-to-cart-sauce-labs-backpack]");
        hacerClick("button[id=add-to-cart-sauce-labs-bolt-t-shirt]");
        hacerClick("button[id=add-to-cart-sauce-labs-onesie]");


        hacerClick("a[class=shopping_cart_link]");
        hacerClick("button[id=remove-sauce-labs-onesie]");
        hacerClick("button[id=remove-sauce-labs-backpack]");

        //Assert
        // 1 producto en el carrito
        cy.get('.cart_item').should('have.length', 1);

        // producto restante sea (Sauce Labs Bolt T-Shirt)
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Bolt T-Shirt');







    })
    it('comprar', () => {

        abrirPagina();

        llenarInput("input[name=user-name]", "standard_user");
        llenarInput("input[name=password]", "secret_sauce");

        hacerClick("input[id=login-button]");

        hacerClick("button[id=add-to-cart-sauce-labs-backpack]");
        hacerClick("button[id=add-to-cart-sauce-labs-bolt-t-shirt]");
        hacerClick("button[id=add-to-cart-sauce-labs-onesie]");

        hacerClick("a[class=shopping_cart_link]");
        hacerClick("button[id=remove-sauce-labs-onesie]");
        hacerClick("button[id=remove-sauce-labs-backpack]");

        //Test Checkout (Formulario)

        hacerClick("button[id=checkout]");
        cy.wait(2000);
        llenarInput("input[id=first-name]", "Paola");
        cy.wait(1000);
        llenarInput("input[id=last-name]", "Arroyo Garcia");
        cy.wait(1000);
        llenarInput("input[id=postal-code]", "8506");
        cy.wait(1000);
        hacerClick("input[id=continue]");
        cy.wait(3000);
        hacerClick("button[id=finish]");

        // Assert verificación pedido completado
        cy.url().should('include', '/checkout-complete.html');
        cy.wait(2000);

        // Assert mensaje
        cy.get('.complete-header').should('contain.text', 'Thank you for your order');





    })
    it('salirPagina', () => {
        abrirPagina();

        llenarInput("input[name=user-name]", "standard_user");
        llenarInput("input[name=password]", "secret_sauce");

        hacerClick("input[id=login-button]");

        hacerClick("button[id=add-to-cart-sauce-labs-backpack]");
        hacerClick("button[id=add-to-cart-sauce-labs-bolt-t-shirt]");
        hacerClick("button[id=add-to-cart-sauce-labs-onesie]");

        hacerClick("a[class=shopping_cart_link]");
        hacerClick("button[id=remove-sauce-labs-onesie]");
        hacerClick("button[id=remove-sauce-labs-backpack]");

        //Test Checkout (Formulario)

        hacerClick("button[id=checkout]");
        cy.wait(2000);
        llenarInput("input[id=first-name]", "Paola");
        cy.wait(1000);
        llenarInput("input[id=last-name]", "Arroyo Garcia");
        cy.wait(1000);
        llenarInput("input[id=postal-code]", "8506");
        cy.wait(1000);
        hacerClick("input[id=continue]");
        cy.wait(3000);
        hacerClick("button[id=finish]");

        // Test logout

        hacerClick("button[id=react-burger-menu-btn]");
        hacerClick("a[id=logout_sidebar_link]");

        // Assert volver al dominio /
        cy.url().should('include', 'www.saucedemo.com');


    })
    })

