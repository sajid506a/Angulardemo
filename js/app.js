/**
 * Created by imran on 8/1/2014.
 */

var myapp = angular.module("MyApp",[]);
myapp.factory('UserService',function(){
var users = ["imran","ali","syed"];
    return {
        all:function(){
            return users;
        },
        first:function(){
            return users[0];
        }
    }
});
myapp.controller('UserCtrl',function($scope,UserService){
    $scope.users = UserService.all();
    $scope.first = UserService.first();
});
myapp.controller('MyAuthCtl',['$scope','$http',function($scope,$http){



    $http.get('js/data.json').success(function(data){
        console.log(data);


        $scope.items = data;
    });

}]);

myapp.controller('ToggleCtrl',function($scope){
    $scope.visible=true;
    $scope.toggle=function(){

        $scope.visible = !$scope.visible;
    }

});

myapp.controller('Inctrl',function($scope){
  $scope.value=1;
    $scope.incrementValue = function(){
        return $scope.value +1;
    }



});

myapp.controller('NameCtrl',function($scope){
    $scope.name = "";

    $scope.$watch('name',function(newValue,oldValue){
        if($scope.name.length >0){
            $scope.greetings = "Greetings " + $scope.name;
        }
    });
});

myapp.controller('FirstController', function($scope) {
    $scope.counter = 0;
    $scope.add = function(amount) { $scope.counter += amount; };
    $scope.subtract = function(amount) { $scope.counter -= amount; };
});

