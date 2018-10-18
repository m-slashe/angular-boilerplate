/* eslint-disable prefer-arrow-callback, strict */
describe('Page', function () {
	beforeEach(angular.mock.module('newproject'));

	beforeEach(inject(function ($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) {
		this.scope = $rootScope.$new();
		this.element = $compile('<page></page>')(this.scope);
		this.scope.$digest();
		this.controller = this.element.controller('page');
	}));

	it('Seila deve retornar 1', async function () {
		const value = await this.controller.seila();
		expect(value).toBe(5);
	});

	it('Deve chamar o change da comboBox', async function () {
		await this.controller.combo.dataSource.read();
		let value = this.controller.combo.value();
		expect(value).toBe('');
		this.controller.combo.select(0);
		this.controller.combo.trigger('change');
		value = this.controller.combo.value();
		expect(value).toBe('Afghanistan');
	});

	it('Deve trocar a data', function () {
		this.controller.datePicker.value(new Date(2018, 1, 1, 1, 0, 0, 0));
		const value = this.controller.datePicker.value();
		expect(value).toBe(new Date(2018, 1, 1, 1, 0, 0, 0));
	});
});

