app.controller('processController', function ($scope, $http) {
    $scope.processSelected = 'milk';

    $scope.selectProcess = function (process) {
        $scope.processSelected = process;
    };
});