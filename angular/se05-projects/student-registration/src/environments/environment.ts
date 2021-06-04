// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    url: 'https://parseapi.back4app.com',
    appId: {
      key: 'X-Parse-Application-Id',
      value: '8mD3V4aoRtqZJnZXCXxumhH1FJQDhy3HGaxMG2qF'
    },
    apiKey: {
      key: 'X-Parse-REST-API-Key',
      value: 'ar2ozqOGm55SsDcm3KvZoFye2sKAozsZ7eEdtxKU'
    },
    sessionKey: 'X-Parse-Session-Token'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
