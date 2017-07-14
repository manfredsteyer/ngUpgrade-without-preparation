import { InjectionToken } from "@angular/core";

export const PHONE_SERVICE = new InjectionToken<any>('PHONE_SERVICE');

export function createPhoneService(i) {
  return i.get('Phone');
}

export const phoneServiceProvider = {
  provide: PHONE_SERVICE,
  useFactory: createPhoneService,
  deps: ['$injector']
}
