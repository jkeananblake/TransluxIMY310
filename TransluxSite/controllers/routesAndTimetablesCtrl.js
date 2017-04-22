transluxModule.controller("routesAndTimetablesCtrl",
    ["$scope", "$location",
    function ($scope, $location) {

      $scope.Name = "Routes And Timetable Page";

      var SouthAfricanRegion = {
            northEast: {
                lat: -20.46818922264095,
                lng: 47.197265625
            },
            southWest: {
                lat: -35.6037187406973,
                lng: 6.0205078125
            }
        }

        //get sa lat nd long here
        //https://www.distancesto.com/coordinates/za/polokwane-latitude-longitude/history/7767.html 

        angular.extend($scope, {
            maxbounds: SouthAfricanRegion,
            defaults: {
                scrollWheelZoom: true,
                maxZoom: 15,
                minZoom: 1,
            },
            SouthAfrica: {
                lat: 24.00,
                lng: 29.00,
                zoom: 5
            },
            paths: {
		            p1: {
		                color: '#008000',
		                weight: 4,
		                latlngs: [
		                { lat: 	-25.745536, lng: 28.185559 },
		                    { lat: -26.195246, lng: 28.034088 },
		                    { lat: 	-33.918861, lng: 18.423300 }
		                ],
		            },
		            p2: {
		                color: '#008000',
		                weight: 4,
		                latlngs: [
		                    { lat: -26.195246, lng: 28.034088 },
		                    { lat: 	-29.839285, lng: 31.024377 }
		                ],
		            },
		            p3: {
		                color: '#008000',
		                weight: 4,
		                latlngs: [
		                    { lat: -26.195246, lng: 28.034088 },
		                    { lat: 	-29.13184, lng: 26.195021 },
		                    { lat: 	-33.958056, lng: 25.6 }
		                ],
		            },
		             p4: {
		                color: '#008000',
		                weight: 4,
		                latlngs: [
		                    { lat: -22.932497, lng: 30.467446 },
		                    { lat: -23.8961708, lng: 29.4486263 },
		                    { lat: 	-26.195246, lng: 28.034088 }
		                ],
		            }
		        },
		     markers: {

		            Johanesburg: {
		                lat: -26.195246,
		                lng: 28.034088,
		      			message: "Johanesburg Park Station",
                		focus: true,
                		draggable: false
		              },
		            Cape_Town: {
		                lat: -33.918861,
		                lng: 18.423300,
		                message: "Cape Town Station",
                		focus: true,
                		draggable: false
		            },
		            Pretoria: {
		                lat: -25.745536,
		                lng: 28.185559,
		                message: "Pretoria Bosman Station",
                		focus: true,
                		draggable: false
		            },
		            Durban: {
		                lat: -29.839285,
		                lng: 31.024377,
		                message: "Daburn Central Station",
                		focus: true,
                		draggable: false
		            },
		            Bloemfontein: {
		                lat: -29.13184,
		                lng: 26.195021,
		                message: "Bloemfontein Station",
                		focus: true,
                		draggable: false
		            },
		            PortElizaberth: {
		                lat: -33.958056,
		                lng: 25.6,
		                message: "Port Elizabeth Station",
                		focus: true,
                		draggable: false
		            },
		            Sibasa: {
		                lat: -22.932497,
		                lng: 30.467446,
		                message: "Sibasa Station",
                		focus: true,
                		draggable: false
		            },
		             Polokwane: {
		                lat: -23.8961708,
		                lng: 29.4486263,
		                message: "Polokwane Station",
                		focus: true,
                		draggable: false
		            },

		        },

            events: {
                map: {
                    enable: ['zoomstart', 'drag', 'click', 'mousemove'],
                    logic: 'emit'
                }
            }

        });
        //detect click event
        $scope.$on('leafletDirectivePath.click', function (event, path) {
                $scope.event = "clicked";
                console.log(path);
        });


}]);
