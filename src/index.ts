import * as $ from 'jquery';

import '@progress/kendo-ui/css/web/kendo.common.min.css';
import '@progress/kendo-ui/css/web/kendo.metroblack.min.css';

import config from './config/config';
import pageComponent from './components/page/controller.page';
import anotherComponent from './components/another/controller.another';
import testService from './services/service.test';

const angular = require('angular');
require('@progress/kendo-ui/js/kendo.all');

const ngRoute = require('angular-route');

const mainModule = 'newproject';

angular.module(mainModule, [ngRoute, 'kendo.directives'])
	.config(config)
	.component(...pageComponent)
	.component(...anotherComponent)
	.service('testService', testService);

$('<ng-view></ng-view>').appendTo(document.body);
angular.bootstrap(document, [mainModule]);
