angular.module('qss', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '..public/src/views/home.html'
    })
    .state('gallery', {
      url:'/gallery',
      templateUrl: '../src/views/gallery.html'
    })
    .state('contact', {
      url:'/contact',
      templateUrl: '../src/views/contact.html'
    })
})
