angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
    for(var i = 0; i < mainSrv.travelInfo.length; i++) {
      if($stateParams.id == mainSrv.travelInfo[i].id) {
        $scope.booked = mainSrv.travelInfo[i];
      }
    }

})
