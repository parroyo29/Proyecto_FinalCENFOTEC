import {hacerClick, llenarInput} from "../util";
import {abrirPagina} from "../util";

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




    })});