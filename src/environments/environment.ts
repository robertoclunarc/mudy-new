// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //===========Url Base==================
  baseUrl: 'http://137.184.8.13/api',

 //==============GET=====================
  vehicle_types: '/vehicle-types',
  vehicle_brands: '/vehicle-brands', 
  banks: '/banks',
  buildings: '/buildings',
  categories: '/categories',
  articles: '/articles',
  places: '/places',
  confirm: '/payments/confirmation/172',

  //============POST=====================  
  carrier: '/applications/carrier',
  promoter: '/applications/promoter',
  freight: '/quotations/freights',
  movings: '/quotations/movings',
  calcule_volume: '/quotations/calculate-volume',
  payment: '/payments/start/172',

  googleApiKey: 'AIzaSyA7lwfqRatEpjjXlIQOKHyrz0QtFMVp338'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
