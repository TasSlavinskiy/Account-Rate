
Feature('Account Remote');
var assert = require('assert');
// let filters = new DataTable(['Country', 'Service/Segment', 'Product', 'Brand', 'Industry Served']); //
// filters.add(['Albania', '', '', '', '']); // adding records to a table
// filters.add(['Albania', '3D Printing', '', '', '']);
// filters.add(['Albania', '3D Printing', 'Aluminum', '', '']);
// filters.add(['Albania', '3D Printing', 'Aluminum', 'Accura', '']);
// filters.add(['Albania', '3D Printing', 'Aluminum', 'Accura', 'Automotive']);
//
// var arr = ['Country', 'Service/Segment', 'Product', 'Brand', 'Industry Served'];

Scenario('test something', async (I) => {
	
	

		session('rate3%', () => {
			I.amOnPage('/');
				I.fillField('#nameadd', 'Taras');
				I.fillField('#sumadd', '50');
				I.click('Отправить');
				I.see('Taras', '#name');
				I.see('50', '#sum');
				I.see('3%', '#rate');
		});
		session('rate5%', () => {
			I.amOnPage('/');
				I.fillField('#nameadd', 'Taras');
				I.fillField('#sumadd', '550');
				I.click('Отправить');
				I.see('Taras', '#name');
				I.see('550', '#sum');
				I.see('5%', '#rate');
		});
		session('rate7%', () => {
			I.amOnPage('/');
				I.fillField('#nameadd', 'Taras');
				I.fillField('#sumadd', '5500');
				I.click('Отправить');
				I.see('Taras', '#name');
				I.see('5500', '#sum');
				I.see('7%', '#rate');
		});
});
