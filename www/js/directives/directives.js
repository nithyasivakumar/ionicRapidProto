/**
 * Created with JetBrains WebStorm.
 * User: nithyasivakumar
 * Date: 18/04/14
 * Time: 21:44
 * To change this template use File | Settings | File Templates.
 */
angular.module('ionicRapidProto.directives', [])

    .directive('onFinishNgRepeat', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    scope.$evalAsync(attr.onFinishNgRepeat);
                }
            }
        }
    })