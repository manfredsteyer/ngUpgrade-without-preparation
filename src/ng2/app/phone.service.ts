import { InjectionToken } from "@angular/core";

export const PHONE_SERVICE = new InjectionToken<any>('PHONE_SERVICE');

export const phoneServiceProvider = {
  provide: PHONE_SERVICE,
  useFactory: (i) => i.get('Phone'),
  deps: ['$injector']
}
