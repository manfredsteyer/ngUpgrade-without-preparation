import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { Ng2DemoComponent } from "ng2/app/ng2-demo.component";

declare var angular: any;

angular.module('phonecatApp')
  .directive(
    'ng2Demo',
    downgradeComponent({component: Ng2DemoComponent})
  );

@NgModule({
  declarations: [
    AppComponent,
    Ng2DemoComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [
    Ng2DemoComponent // Don't forget this!!!
  ],
  providers: [],
  // bootstrap: [AppComponent] // No Bootstrap-Component
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
  }
}
