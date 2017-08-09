import * as angular from 'angular';
import { Ng1Component } from './components/ng1.component';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

angular.module('leshopApp', []);
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
