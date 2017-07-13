'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('ng1/phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
