/**
 * Created with JetBrains WebStorm.
 * User: nithyasivakumar
 * Date: 18/04/14
 * Time: 22:14
 * To change this template use File | Settings | File Templates.
 */
angular.module('ionicRapidProto.services.chartData', [])

    .factory('LineData', function () {
        var _y1AxisData = null;
        var _y2AxisData = null;
        var _y3AxisData = null;
        var _xAxisData = null;

        function setY1AxisData(data) {
            _y1AxisData = data
        }

        function getY1AxisData() {
            return _y1AxisData
        }

        function setY2AxisData(data) {
            _y2AxisData = data
        }

        function getY2AxisData() {
            return _y2AxisData
        }

        function setY3AxisData(data) {
            _y3AxisData = data
        }

        function getY3AxisData() {
            return _y3AxisData
        }

        function setXAxisData(data) {
            _xAxisData = data
        }

        function getXAxisData() {
            return _xAxisData
        }

        return {
            setY1AxisData: setY1AxisData,
            getY1AxisData: getY1AxisData,
            setY2AxisData: setY2AxisData,
            getY2AxisData: getY2AxisData,
            setY3AxisData: setY3AxisData,
            getY3AxisData: getY3AxisData,

            setXAxisData: setXAxisData,
            getXAxisData: getXAxisData
        }
    });