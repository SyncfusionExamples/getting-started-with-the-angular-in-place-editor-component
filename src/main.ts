import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2VFhiQlJPcUBDX3xLflF1VWJZdVx1flVAcC0sT3RfQF5jTn9SdEdjXX9feXJdRw==");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
