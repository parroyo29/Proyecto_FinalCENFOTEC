import {abrirPagina, hacerClick} from "../util";
import {llenarInput} from "../util";

describe('ProyectoFinal', () => {
    it('eliminar', () => {

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


    })});