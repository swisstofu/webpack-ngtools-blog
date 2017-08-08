import './angular.module.ng1';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app.module';
import {enableProdMode} from "@angular/core";

declare var process;
if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then((platformRef) => {
	const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
	upgrade.bootstrap(document.body, ['leshopApp']);
});