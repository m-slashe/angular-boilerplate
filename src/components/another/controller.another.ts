import anotherTemplate from './another.html';
import TestService from '../../services/service.test';

class AnotherCtrl {
	constructor(testService: TestService, $scope: ng.IScope, $log: ng.ILogService) {
		const primeiroNumero = 3;
		const segundoNumero = 5;
		const timeout = 100;
		setTimeout(() => {
			$log.log('teste');
		}, timeout);
		$log.log(testService.soma(primeiroNumero, segundoNumero));
		$log.log(testService.subtracao(primeiroNumero, segundoNumero));
		$scope.$emit('seila', () => {
			$log.log('teste1');
		});
	}
}

AnotherCtrl.$inject = ['testService', '$scope', '$log'];

export default ['another', {
	template: anotherTemplate,
	controller: AnotherCtrl,
}];
