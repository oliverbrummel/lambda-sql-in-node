var app = angular.module('app', []);

app.controller('PersonController', ['$http', function($http){
  var controller = this;
  controller.name = '';
  controller.address = '';
  controller.city = '';
  controller.state = '';
  controller.zip_code = '';

  controller.result = [];
  controller.sendData = function() {
    $http.post('/people', {name: controller.name, address: controller.address, city: controller.city, state: controller.state, zip_code: controller.zip_code})
      .then(function(serverResponse){
        console.log(serverResponse);
      });
    $http.get('/people').then(function(response){
      console.log('get request going through');
      console.log(controller);
      controller.result = response.data;
    })
  };
}]);
