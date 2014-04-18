/**
 * Created with JetBrains WebStorm.
 * User: nithyasivakumar
 * Date: 18/04/14
 * Time: 22:14
 * To change this template use File | Settings | File Templates.
 */
angular.module('ionicRapidProto.services.backendConnector', [])

    .factory('BackendConnector', function($http){
        return {
            getData: function(contextInfo) {
                return $http.get('data/'+contextInfo+'.json')
                    .then(function(result) {
                        return result.data;
                    });
            }
        }
    })
