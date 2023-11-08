(function(){
'use strict';

angular.module('Assignment1', [])
.controller('A1Controller', A1Controller);

A1Controller.$inject = ['$scope'];
function A1Controller($scope){
    $scope.food_list = "";
    $scope.message = "please enter data first!";

    $scope.checkit = function (){
        var a1 = $scope.food_list.split(",");
        var a2 = a1.length;

        if(a1 == ""){
            $scope.message ="please enter data first!";
        } else if(a2 <= 3){
            $scope.message = "enjoy";

        } else{
            $scope.message = "Too much!";
        }
           

        

        

    };
};





})();