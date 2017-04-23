transluxModule.controller("bookingsCtrl",
    ["$scope", "$location", "transluxService",
    function ($scope, $location, transluxService) {

      //$scope.pageName = "Bookings Page";
      $scope.path = './Json/';

      transluxService.getDeparturePoints($scope.path).then(function (results) {
          //console.log(results.data);
          $scope.departurePoints = results.data;
      },
      function (results) {
          // on error.
          //console.log(results);
      });

      $scope.setDestinationPoints = function(){
        $scope.destinationPoints = JSON.parse(JSON.stringify($scope.departurePoints));
        var index = $scope.departurePoints.indexOf($scope.departurePoint);
        //console.log(index);
        if(index > -1){
          $scope.destinationPoints.splice(index, 1);
        }

      }

      $scope.getDates = function(){

        transluxService.getDates($scope.path).then(function (results) {
            //console.log(results.data);
            $scope.calendar = results.data;
        },
        function (results) {
            // on error.
            //console.log(results);
        });

      }

      $scope.check = function(indx, value, arr){
        console.log(indx);
        console.log(value);

        if(indx == 1)
          $scope.myYear = value;

        if(indx == 2)
          $scope.myMonth = value;

        if(indx == 3)
          $scope.myDay = value;

        for(var ind = 0; ind < arr.length; ind++)
        {
          if (arr[ind].checked != null && arr[ind].checked == true)
          {
            arr[ind].checked = false;
          }else {
            arr[ind].checked = true;
          }
        }

      }

      $scope.setTime = function(time){
        console.log(time);
        $scope.time = time;
      }

      $scope.url = {
        templateUrl: "pages/navBar.html",
        controller: "navCtrl"
        }

}]);
