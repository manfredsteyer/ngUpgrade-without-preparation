'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      //$locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/ng2-demo', {
          template: '<ng2-demo></ng2-demo>'
        })
        .otherwise({template : ''});
        //.
       // otherwise('/phones');
    }
  ]);
