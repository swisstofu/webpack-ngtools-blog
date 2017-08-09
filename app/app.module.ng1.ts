import * as angular from 'angular';
import { Ng1Component } from './components/ng1.component';

angular.module('leshopApp', []);
angular.module('leshopApp')
	.component('ng1', new Ng1Component());

import './components/ng1js.component'

