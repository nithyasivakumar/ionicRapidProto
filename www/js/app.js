
angular.module('ionicRapidProto', [
        'ionic',
        'ionicRapidProto.directives',

        'ionicRapidProto.services.backendConnector',
        'ionicRapidProto.services.chartData',

        'ionicRapidProto.controllers.galleryController',
        'ionicRapidProto.controllers.homeController',
        'ionicRapidProto.controllers.rootController',
        'ionicRapidProto.controllers.statsController'
])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('index', {
      url: "/",
      templateUrl: "index.html"
    })

    .state('home', {
          url: "/home",
          templateUrl: "templates/home.html",
          controller: 'HomeController'
      })

    .state('stats', {
          url: "/stats",
          templateUrl: "templates/stats.html",
          controller:"StatsController"
      })

    .state('stream', {
          url: "/stream",
          templateUrl: "templates/stream.html"
      })

    .state('gallery', {
          url: "/gallery",
          templateUrl: "templates/gallery.html",
          controller: 'GalleryController'
      })

    $urlRouterProvider.otherwise('/home',{
        url:"/home"
    });
});

