import * as angular from 'angular';

class Ng1Controller implements angular.IController {
}

export class Ng1Component implements angular.IComponentOptions {
	controller = Ng1Controller;
	template = '<span>yes :) or no :(</span>';
	// public bindings: any = {
	// 	price: '<priceAttr',
	// 	quantity: '<quantityAttr',
	// 	idPrefix: '@idPrefixAttr'
	// };
}