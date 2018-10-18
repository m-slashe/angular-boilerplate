import './page.scss';
import pageTemplate from './page.html';

interface ICountry {
	name: string;
	topLevelDomain: Array<string>;
	alpha2Code: string;
	alpha3Code: string;
}

class PageController {
	user: string;
	$log: ng.ILogService;
	$http: ng.IHttpService;
	$scope: ng.IScope;

	constructor($log: ng.ILogService, $http: ng.IHttpService, $scope: ng.IScope) {
		this.$log = $log;
		this.$http = $http;
		this.$scope = $scope;
		this.user = 'world';
	}

	getComboOptions(): kendo.ui.ComboBoxOptions {
		const self = this;
		return {
			dataSource: new kendo.data.DataSource({
				transport: {
					read: {
						url: 'https://restcountries.eu/rest/v2/all',
					},
				},
			}),
			placeholder: 'Select countryy',
			filter: 'contains',
			dataTextField: 'name',
			dataValueField: 'name',
			dataBound(e: kendo.ui.ComboBoxDataBoundEvent) {
				const data = e.sender.dataSource.at(0);
				self.$log.log(data);
				self.$log.log(e.sender.dataSource.total());
			},
			change(e: kendo.ui.ComboBoxChangeEvent) {
				const { dataSource } = e.sender;
				self.$log.log(dataSource.total());
			},
		};
	}

	getDataPickerOptions(): kendo.ui.DatePickerOptions {
		const self = this;
		return {
			value: new Date(),
			change(e: kendo.ui.DateInputChangeEvent) {
				self.$log.log(e.sender.value);
			},
		};
	}

	async seila() {
		const value = await new Promise<number>((resolve) => {
			const cinco = 5;
			resolve(cinco);
		});
		return value;
	}
}

PageController.$inject = ['$log', '$http', '$scope'];

export default ['page', {
	template: pageTemplate,
	controller: PageController,
}];
