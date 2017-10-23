app.controller('bannerController', function ($scope, $http) {
    $scope.calculation = {};
    $scope.types = [{ cat: 'Choose Type', price: 0},
        { cat: 'Milk Powder', price: 9},
        { cat: 'Supplyment', price: 9},
        { cat: 'Cosmetics', price: 9},
        { cat: 'Fashion & Clothes', price: 12},
        { cat: 'Electronic Products', price: 11},
        { cat: 'Oversized Products', price: 15 }];

    $scope.calculation.type = 'Choose Type';
    $scope.calculation.destitation = 'saigon';

    $scope.calculation.cost = function () {
        return $scope.calculation.type.price * $scope.calculation.weight || 0;
    }
});