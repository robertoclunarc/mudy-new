export const environment = {
  production: true,
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

  //============POST=====================  
  carrier: '/applications/carrier',
  promoter: '/applications/promoter',
  freight: '/quotations/freights',
  movings: '/quotations/movings',
  calcule_volume: '/quotations/calculate-volume',

  googleApiKey: 'AIzaSyA7lwfqRatEpjjXlIQOKHyrz0QtFMVp338'
};
