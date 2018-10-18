/* eslint-disable prefer-arrow-callback, strict */

describe('Test', function () {
	beforeEach(angular.mock.module('newproject'));

	it('Deve somar 2 valores', inject(function (testService: any) {
		const firstNumber = 5;
		const secondNumber = 6;
		const result = 11;
		const value = testService.soma(firstNumber, secondNumber);
		expect(value).toBe(result);
	}));

	it('Deve subtrair 2 valores', inject(function (testService: any) {
		const firstNumber = 5;
		const secondNumber = 6;
		const result = -1;
		const value = testService.subtracao(firstNumber, secondNumber);
		expect(value).toBe(result);
	}));
});
