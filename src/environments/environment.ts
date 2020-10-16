// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  oidcConfig: {
    //browser
    //client_id: '0oa96tl7pkpy10E7T0x6',
    //server_host: 'https://afc-np.oktapreview.com/oauth2/aus74vrltqIvAV7w00x6',
    //mobile
    client_id: '0oaruqy0iNDUCeW8n0x6',
    server_host: 'https://afc-np.oktapreview.com/oauth2/ausruqcv4uJD5x9xj0x6',
    redirect_url: window.location.origin + '/loginCallback',
    end_session_redirect_url: window.location.origin + '/logout',
    scopes: 'openid profile',
    pkce: true
  },
  //scheme: 'com.oktapreview.afc-np:/'
  //scheme: 'dev.com.adesa.afc:/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
