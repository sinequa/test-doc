import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Foo } from './foo.component';

@NgModule({
  declarations: [
    AppComponent, Foo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(injector: Injector) {
    console.log('App module loaded');
    const customElement = createCustomElement(Foo, { injector });
    customElements.define("ce-foo", customElement);
  }
}
