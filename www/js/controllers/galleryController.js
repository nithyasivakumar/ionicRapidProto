/**
 * Created with JetBrains WebStorm.
 * User: nithyasivakumar
 * Date: 18/04/14
 * Time: 22:27
 * To change this template use File | Settings | File Templates.
 */
angular.module('ionicRapidProto.controllers.galleryController', [
        'ionicRapidProto.services.backendConnector'
    ])
    .controller('GalleryController', function ($scope, $interval, BackendConnector) {

        function initializeGallery() {
            BackendConnector.getData('gallerySource').then(function (data) {
                $scope.gallerySouce = [];
                angular.forEach(data, function (dataItem) {
                    $scope.gallerySouce.push({
                        "image": dataItem.image,
                        "title": dataItem.title,
                        "id": dataItem.id
                    })

                });
            });

            BackendConnector.getData('galleryDetail1').then(function (data) {
                $scope.allPictures = [];
                angular.forEach(data, function (dataItem) {
                    $scope.allPictures.push({
                        "image": dataItem.image,
                        "title": dataItem.title
                    })

                });
            });
        };

        function refreshGallery(galleryId) {
            BackendConnector.getData('galleryDetail' + galleryId).then(function (data) {
                $scope.allPictures = [];
                angular.forEach(data, function (dataItem) {
                    $scope.allPictures.push({
                        "image": dataItem.image,
                        "title": dataItem.title
                    })
                });
            });

        }

        function onGallerySwitch() {
            if ($('.roundabout-in-focus').is('#1'))
                refreshGallery(1);
            else if ($('.roundabout-in-focus').is('#2'))
                refreshGallery(2)
            else if ($('.roundabout-in-focus').is('#3'))
                refreshGallery(3);
        }

        function onButtonNext() {
            $('ul').roundabout("stopAutoplay");
            $interval.cancel(timer)
            onGallerySwitch()
        }

        function onButtonPrev() {
            $('ul').roundabout("stopAutoplay");
            $interval.cancel(timer)
            onGallerySwitch()
        }

        $scope.onNgRepeatComplete = function () {
            $('ul').roundabout(options, function () {
                refreshGallery(1);
            });
        }

        $scope.allPictures = [];
        $scope.gallerySouce = [];
        CHECK_FOR_GALLERY_SWITCH_TIME_INTERVAL = 1000;
        GALLERY_AUTOPLAY_DURATION = 3000;

        var timer = $interval(function () {
            onGallerySwitch()
        }, CHECK_FOR_GALLERY_SWITCH_TIME_INTERVAL);

        var options = {
            shape: 'square',
            minScale: 0.6,
            btnNext: ".next",
            btnNextCallback: onButtonNext,
            btnPrev: ".prev",
            btnPrevCallback: onButtonPrev,
            reflect: true,
            autoplay: true,
            autoplayDuration: GALLERY_AUTOPLAY_DURATION,
            responsive: true
        }

        initializeGallery()

    });