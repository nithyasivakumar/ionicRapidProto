/**
 * Created with JetBrains WebStorm.
 * User: nithyasivakumar
 * Date: 18/04/14
 * Time: 22:08
 * To change this template use File | Settings | File Templates.
 */
angular.module('ionicRapidProto.controllers.statsController', [
        'ionicRapidProto.services.backendConnector',
        'ionicRapidProto.services.chartData'
    ])

    .controller('StatsController', function ($scope, BackendConnector, LineData) {

        function constructLineChart() {
            if (raphael)
                raphael.remove()
            raphael = Raphael("lineChart");
            lineChart = raphael.g.linechart(
                10, 10,
                490, 180,
                [
                    LineData.getXAxisData()
                ],
                [
                    LineData.getY1AxisData(),
                    LineData.getY2AxisData()
                ],
                {
                    nostroke: false,
                    axis: "0 0 1 1",
                    symbol: "disc",
                    smooth: false,
                    colors: [
                        "#008000",
                        "#6495ED"
                    ],
                    axisxstep: 6,
                    no_grid: false
                });

            var xText = lineChart.axis[0].text.items;
            for (var i in xText) {
                var old = xText[i].attr('text');
                xText[i].attr({'text': old + ":00"});
            }
            ;
        }

        function initLineChart() {
            xAxisArray = [];
            y1AxisArray = [];
            y2AxisArray = [];
            BackendConnector.getData('lineChartData').then(function (data) {
                data.forEach(function (value) {
                    var optionsArray = [
                        value.noOfVisitors,
                        value.returnedVisitors,
                        value.leftVisitors,
                        value.newVisitors
                    ];

                    y1AxisArray.push(optionsArray[$scope.selectedItemX1.code - 1]);
                    y2AxisArray.push(optionsArray[$scope.selectedItemX2.code - 1]);
                    xAxisArray.push(value.time);

                    LineData.setXAxisData(xAxisArray)
                    LineData.setY1AxisData(y1AxisArray)
                    LineData.setY2AxisData(y2AxisArray)
                });
                constructLineChart()
            });
        }

        function constructAreaChart() {
            raphael1 = Raphael("areaChart");
            areaChart = raphael1.g.linechart(
                10, 10,
                490, 180,
                [
                    LineData.getXAxisData()
                ],
                [
                    LineData.getY1AxisData(),
                    LineData.getY2AxisData(),
                    LineData.getY3AxisData()
                ],
                {
                    nostroke: false,
                    axis: "0 0 1 0",
                    smooth: true,
                    dash: "-",
                    colors: [
                        "#008000",
                        "#6495ED",
                        "#F0E0B0"
                    ],
                    axisxstep: 6,
                    no_grid: false,
                    shade: true
                });

            var labels = ["Russia", "USA", "New Zealand"];
            areaChart.labels = raphael1.set();

            var x = 15;
            var h = 5;
            for (var i = 0; i < labels.length; ++i) {
                var clr = areaChart.lines[i].attr("stroke");
                areaChart.labels.push(raphael1.set());
                areaChart.labels[i].push(raphael1.g["disc"](x + 5, h, 5)
                    .attr({fill: clr, stroke: "none"}));
                areaChart.labels[i].push(txt = raphael1.text(x + 20, h, labels[i])
                    .attr(raphael1.g.txtattr)
                    .attr({fill: "#000", "text-anchor": "start"}));
                x += areaChart.labels[i].getBBox().width * 1.2;
            }
            ;

            var xText = areaChart.axis[0].text.items;
            for (var i in xText) {
                var old = xText[i].attr('text')
                xText[i].attr({'text': old + ":00"});
            }
            ;
        }

        function initAreaGraph() {
            xAxisArrayForArea = [];
            y1AxisArrayForArea = [];
            y2AxisArrayForArea = [];
            y3AxisArrayForArea = []
            BackendConnector.getData('areaChartData').then(function (data) {
                data.forEach(function (value) {
                    y1AxisArrayForArea.push(value.russia);
                    y2AxisArrayForArea.push(value.usa);
                    y3AxisArrayForArea.push(value.newZealand);
                    xAxisArrayForArea.push(value.time);
                });
                LineData.setXAxisData(xAxisArrayForArea)
                LineData.setY1AxisData(y1AxisArrayForArea)
                LineData.setY2AxisData(y2AxisArrayForArea)
                LineData.setY3AxisData(y3AxisArrayForArea)
                constructAreaChart()
            });
        }


        var visitorsCountArray = [];
        var returningVisitorsCountArray = [];
        var visitorsTimeArray = [];
        var xAxisArray = [];
        var y1AxisArray = [];
        var y2AxisArray = [];
        var raphael;
        var lineChart;

        var raphael1;
        var areaChart;
        var xAxisArrayForArea = []
        var y1AxisArrayForArea = []
        var y2AxisArrayForArea = []
        var y3AxisArrayForArea = []


        $scope.lineChartOptions = [
            {code: 1, name: 'Visitors'},
            {code: 2, name: 'Returning visitors'},
            {code: 3, name: "Visitors left"},
            {code: 4, name: "New visitors"}
        ];
        $scope.selectedItemX1 = $scope.lineChartOptions[0]
        $scope.selectedItemX2 = $scope.lineChartOptions[1]

        $scope.updateX1 = function () {
            initLineChart();
        }
        $scope.updateX2 = function () {
            initLineChart();
        }

        initLineChart();
        initAreaGraph();
    })

