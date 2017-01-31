angular.module('qss')
.directive('galleryDirective', function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: '../src/views/galleryDirective.html',
    scope: {
      images: '='
    },

    controller: function($scope, $state) {
      
        },

    link: function(scope, element, attrs) {

    }


    }

  })
