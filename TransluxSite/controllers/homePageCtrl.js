transluxModule.controller("homePageCtrl",
    ["$scope", "$location",
    function ($scope, $location) {

      $scope.Name = "Home Page";
      $scope.openPage = function(url)
      {
        window.location = url;
      };

            $scope.url = {

        templateUrl: "pages/navBar.html",
        controller: "navCtrl"
        }
}]);
