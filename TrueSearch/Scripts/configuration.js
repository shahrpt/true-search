(function() {
  'use strict';

  angular
    .module('truelocal')
    .constant('env', {
      name: 'prod',
      cookie: {
        name: "SESSION",
        path: '/'
      },
      google: {
        appKey: 'AIzaSyCgwQZ9m3g4FZRTdXZWTQ98G7Dh4WTTFwI'
      },
      facebook: {
        appId: '178093711489'
      },
      api: {
        token: 'V0MxbDBlV2VNUw==',
        url: 'https://api.truelocal.com.au/rest/'
      },
      media: 'https://media.truelocal.com.au/',
      qubit: {
        container : "1521969",
      },
      auth: 'api',
      trackingBizWebsiteURL: 'https://api.truelocal.com.au/rest/track/link',
      trackingPhoneClickURL: 'https://api.truelocal.com.au/rest/track/phone',
      trackingToken: '?passToken=V0MxbDBlV2VNUw==',
      url: 'https://www.truelocal.com.au/',
      socialAuth: {
        tokenUrl: 'https://api.truelocal.com.au/rest/auth/social?passToken=V0MxbDBlV2VNUw==',
        appId: '0677215f57a85027459e38c0f049ad15c05c4b02',
        path: 'https://widget-cdn.rpxnow.com/js/lib/social.for.truelocal.com.au/engage.js',
        securePath: 'https://widget-cdn.rpxnow.com/js/lib/social.for.truelocal.com.au/engage.js'
      },
      urlStructure: '/business/',
      searchsettings: {
        businessUrl: '/business'
      },
      templateUrl: 'www-js/',
      instagram: {
        user_id: '1420875672',
        client_id: '6fae783226e24e6f9d968bc750ff7cfa',
        url: 'https://www.instagram.com/truelocal_au/'
      },
      appleItunesAppId: "311720817",
      googlePlayAppId: "com.truelocal.android",
      tapstreamAccountName: "truelocaltest",
      addBussLive: false,
      states: {
                "homepage": true,
                "business": true,
                "find": true,
                "search": true,
                "searchLocation": true,
                "service": true
            }
     })

    /**
     * @memberof truelocal
     * @method applicationConstants_findSearchCategories
     * @name applicationConstants_findSearchCategories
     * @description Categories constant to define list of categories eligible for search find pages
     */
      .constant('findSearchCategories', {
          //TODO: Start - Remove categoryList to allow all categories on new find and search
          // 'categoryList':[
          //     'painters',
          //     'cafe',
          //     'cafes',
          //     'restaurant',
          //     'restaurants'
          // ]
          //TODO: End - Remove categoryList to allow all categories on new find and search
      });
})();
