
angular.module('ionicRapidProto', ['ionic', 'ionicRapidProto.controllers', 'ionicRapidProto.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.controller('rootController', function($scope) {
   $scope.title = "My Rapid Proto!"
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    // setup an abstract state for the tabs directive
    .state('index', {
      url: "/",
      templateUrl: "index.html"
    })

    // Each tab has its own nav history stack:

   /* .state('tab.dash', {
      url: '/tab',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })*/
    .state('home', {
          url: "/home",
          templateUrl: "templates/home.html",
          controller: 'homeController'
      })

    .state('stats', {
          url: "/stats",
          templateUrl: "templates/stats.html"
      })

    .state('stream', {
          url: "/stream",
          templateUrl: "templates/stream.html"
      })

    .state('gallery', {
          url: "/gallery",
          templateUrl: "templates/gallery.html"
      })

    $urlRouterProvider.otherwise('/home',{
        url:"/home",
        controller: 'rootController'
    });
});

