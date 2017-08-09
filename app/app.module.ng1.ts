import * as angular from 'angular';
import { Ng1Component } from './components/ng1.component';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import 'angular-ui-router';

var app = angular.module('leshopApp', [
	'ui.router'
])
angular.module('leshopApp')
	.component('ng1', new Ng1Component());

import './components/ng1js.component'
import { AppComponent } from './app.component';

angular.module('leshopApp')
	.directive(
	'myApp',
	downgradeComponent({
		component: AppComponent
	}) as angular.IDirectiveFactory
);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	console.error('****', $stateProvider);

	$stateProvider
		.state('state1', {
			url: "/state1",
			template: require("./views/state1.html")
		})
		.state('state2', {
			url: "/state2",
			template: require("./views/state2.html")
		});
}]);
