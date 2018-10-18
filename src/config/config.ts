/* eslint-disable require-jsdoc */

function config($routeProvider: ng.route.IRouteProvider) {
	$routeProvider
		.when('/', {
			template: '<page></page>',
		})
		.when('/another', {
			template: '<another></another>',
		})
		.otherwise('/another');
}

config.$inject = ['$routeProvider'];
export default config;
