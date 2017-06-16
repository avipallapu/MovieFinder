import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from "@angular/forms"
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
