angular.module('app', [])
    .controller('MyFormCtrl', [function() {
 
        this.user = {
             name: '',
             email: ''
        };
 
        this.register = function() {
           console.log('User clicked register', this.user);
        };
    }]);
