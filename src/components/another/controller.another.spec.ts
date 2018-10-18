/* eslint-disable prefer-arrow-callback, strict */
describe('Another', function () {
	beforeEach(angular.mock.module('newproject'));

	beforeEach(inject(function ($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) {
		this.scope = $rootScope.$new();
		this.element = $compile('<another></another>')(this.scope);
		this.scope.$digest();
		this.controller = this.element.controller('another');
	}));

	it('Deve', function () {
		expect(1).toBe(1);
	});
});
