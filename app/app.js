var app = angular.module('coderSchool', ['ui.router']);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  function categoryRoute(category){
    $http.get('http://localhost:3000/' + category)
      .success(function(response) {
        $scope.titles = response.topTen;
      });
  }
 function pointDisplay(){

 }

}])

// .controller('CategoryCtrl', function ($scope){
//   function categoryRoute(category){
//     console.log('Categories');
//   }

// })



app.config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: 'templates/home.html',
      controller: 'MainCtrl'
    })
      .state('category', {
        url:'/category',
        templateUrl: 'templates/category.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/home')
}])
