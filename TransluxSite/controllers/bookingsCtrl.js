transluxModule.controller("bookingsCtrl",
    ["$scope", "$location", "transluxService",
    function ($scope, $location, transluxService) {

      $scope.Name = "Bookings Page";

      transluxService.getDeparturePoints('../TransluxSite/Json/').then(function (results) {
          console.log(results);
      },
      function (results) {
          // on error.
          console.log(results);
      });

}]);
