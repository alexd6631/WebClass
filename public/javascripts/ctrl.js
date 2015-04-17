
var app = angular.module('app', ['app.service']);
app.controller('UnicornsCtrl', function ($scope, UnicornService) {
    UnicornService.getAllUnicorns().then(function(unicorns) {
        $scope.unicorns = unicorns;
    })

    $scope.edit = function(unicorn) {
        $scope.unicornId = unicorn._id;
        $scope.unicorn = angular.copy(unicorn);
    };

    $scope.newLicorn = function() {
        $scope.unicornId = undefined;
        $scope.unicorn = {};
    }

    $scope.saveUnicorn = function() {
        if ($scope.unicornId) {
            //Update
        } else {
            //Create
        }

    }
});
