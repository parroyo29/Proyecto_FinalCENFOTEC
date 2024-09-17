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




    })

    })

