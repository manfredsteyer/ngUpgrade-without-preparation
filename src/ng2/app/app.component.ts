import { Component, Inject } from '@angular/core';
import { PHONE_SERVICE } from "ng2/app/phone.service";
import { UpgradeModule } from "@angular/upgrade/static";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

   phones: any[] = [];


   constructor(private upgrade: UpgradeModule) { }

    ngOnInit() {
      this.upgrade.bootstrap(document.body, ['phonecatApp']);
    }
    /*
  constructor(
    @Inject(PHONE_SERVICE) private phoneService: any) {
    }

    ngOnInit() {
      this.phones = this.phoneService.query();
    }
*/
}
