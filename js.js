// angular.module('app', [])
//     .controller('MyFormCtrl', [function() {
 
//         this.user = {
//              name: '',
//              email: ''
//         };
 
//         this.register = function() {
//            console.log('User clicked register', this.user);
//         };
//     }]);

//Testing something new
// angular.module('scopeExample', [])
// .controller('MyController', ['$scope', function($scope) {
//   $scope.username = '',
//   $scope.name = '',
//   $scope.email = '';

//   $scope.sayHello = function() {
//     $scope.greeting =  $scope.username + $scope.email = $scope. = $scope.name;
//     console.log($scope.username)
//   };
// }]);


// Testing Something new again
// var app = angular.module('myApp', []);
// app.controller('personCtrl', function($scope) {
//     $scope.firstName = "John";
//     $scope.lastName = "Doe";
//     $scope.fullName = function() {
//         return $scope.firstName + " " + $scope.lastName;
//     };
// });


// Pfffff.... Finally working Code 
var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.user = {
        firstname :'',
        lastname : '',
        email :'',
        username :'',
        gender :'',
        isanAppleUser :'false',
        isanAndroidUser :'false'
        
    };
    $scope.sayHello = function() {
        console.log($scope.user);
    	};
    
    
});