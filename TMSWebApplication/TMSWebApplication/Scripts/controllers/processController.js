app.controller('processController', function ($scope, $http) {
    $scope.activeclass = ["active", "", "", "", ""];

    $scope.eventActive = function (n) {
        for (var i = 0; i < 5; i++) {
            if (i == n) $scope.activeclass[i] = "active";
            else $scope.activeclass[i] = "";
        }
    }
});