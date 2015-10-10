var app = angular.module('coderSchool', ['ui.router']);

app.controller('MainCtrl', ['$scope', function($scope){
 console.log('Main');

}])

.controller('CategoryCtrl', function ($scope){
  console.log('hello');
  $scope.subcategories =[];
  for (var i = 0; i <=10; i++){
    $scope.subcategories.push(i*30000)

  }

})



app.config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
      .state('category', {
        url:'/category',
        templateUrl: '/category.html',
        controller: 'CategoryCtrl'
      });

    $urlRouterProvider.otherwise('home')
}])
