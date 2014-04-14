angular.module('ionicRapidProto.controllers', ['ionicRapidProto.services'])

.controller('homeController', function($scope, BackendConnector) {
   BackendConnector.getData('home').then(function(data) {
       $scope.title = data.title
       $scope.description = data.description
       $scope.actionButtonText = data.actionButtonText
       $scope.ignoreButtonText = data.ignoreButtonText
   });
   $scope.title = "This is my rapid prototype"
   $scope.description =
   $scope.actionButtonText = "CHECK IT OUT"
   $scope.ignoreButtonText = "Just ignore it"
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});

