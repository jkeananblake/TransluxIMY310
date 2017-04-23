transluxModule.controller("bookingsCtrl",
    ["$scope", "$location", "transluxService",
    function ($scope, $location, transluxService) {

      $scope.Name = "Bookings Page";

      transluxService.getDeparturePoints('./Json/').then(function (results) {
          //console.log(results.data);
          $scope.departurePoints = results.data;
      },
      function (results) {
          // on error.
          console.log(results);
      });

}]);
