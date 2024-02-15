/* eslint-disable @typescript-eslint/no-unsafe-argument */
// eslint-disable-next-line @typescript-eslint/naming-convention
class mercadoLibre {
	get = {
		inputSearch: () => cy.get('form input'),
		buttonSearch: () => cy.get('form .nav-search-btn'),
		resultList:() => cy.get('ol.ui-search-layout--stack',{timeout:3000}),
	};
	searchProduct(product) {
		this.get.inputSearch().type(product);
		this.get.buttonSearch().click().end();
	}
}
export const mercadoLibrePage = new mercadoLibre();