var transluxModule = angular.module('transluxModule', ['ngRoute','leaflet-directive','oi.select']);

transluxModule.config(["$routeProvider", function($routeProvider) {

    $routeProvider
   .when("/", {
       templateUrl: "pages/homePage.html",
       controller: "homePageCtrl"
   })
   .when("/bookings", {
       templateUrl: "pages/bookings.html",
       controller: "bookingsCtrl"
   })
   .when("/customerCare", {
       templateUrl: "pages/customerCare.html",
       controller: "customerCareCtrl"
   })
   .when("/promotions", {
       templateUrl: "pages/promotions.html",
       controller: "promotionsCtrl"
   })
   .when("/routesAndTimetables", {
       templateUrl: "pages/routesAndTimetables.html",
       controller: "routesAndTimetablesCtrl"
   })
   .when("/travelInfo", {
       templateUrl: "pages/travelInfo.html",
       controller: "travelInfoCtrl"
   })
  .otherwise({
      redirectTo: "/"
  });

}]);
