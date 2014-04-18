/**
 * Created with JetBrains WebStorm.
 * User: nithyasivakumar
 * Date: 18/04/14
 * Time: 22:26
 * To change this template use File | Settings | File Templates.
 */
angular.module('ionicRapidProto.controllers.homeController', [
        'ionicRapidProto.services.backendConnector'
    ])
    .controller('HomeController', function ($scope, BackendConnector) {
        BackendConnector.getData('home').then(function (data) {
            $scope.title = data.title
            $scope.description = data.description
            $scope.actionButtonText = data.actionButtonText
            $scope.ignoreButtonText = data.ignoreButtonText
        });
    });