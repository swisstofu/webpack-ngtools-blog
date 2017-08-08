import './angular.module.ng1';

import {platformBrowser} from "@angular/platform-browser";
import { UpgradeModule } from '@angular/upgrade/static';
import {AppModuleNgFactory} from "../aot/app/app.module.ngfactory";
import { enableProdMode } from '@angular/core';

declare var process;
if (process.env.ENV === 'production') {
    console.log("PROD MODE");
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then((platformRef) => {
	const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
	upgrade.bootstrap(document.body, ['leshopApp']);
});