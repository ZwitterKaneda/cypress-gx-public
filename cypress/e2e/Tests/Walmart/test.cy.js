import { mercadoLibrePage } from '../../../support/pages/walmart.Page';
// import data from '../../../fixtures/data/walmartData.json';
import { faker } from '@faker-js/faker';
describe('Walmart Búsqueda',() => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const randomProduct = faker.commerce.product();
	beforeEach('precondición',() => {
		cy.visit('https://www.mercadolibre.com.ar/');
		cy.url().should('contain', 'mercadolibre');
	});
	it('Validar la búsqueda de un producto', () => {
		mercadoLibrePage.searchProduct(randomProduct);
		mercadoLibrePage.get.resultList().should('have.length.at.most', 1);
	});
	it('Validar la búsqueda con código hardcode', () => {
		cy.get('form input').type(randomProduct);
		cy.get('form .nav-search-btn').click();
		cy.get('ol.ui-search-layout--stack',{timeout:3000}).should('have.length.at.most', 1);
	});
});