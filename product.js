angular.module('shopApp', [])
 .controller('productController', function ($scope) {
 var id = +utils.getQueryParams()['id'],
 p = repository.getProduct(id);
 $scope.name = p.name;
 $scope.price = p.price;
 $scope.description = p.description;
 $scope.category = p.category;
 });
var utils = (function () {
 return {
 getQueryParams: function () {
 var qs = document.location.search.split('+').join(' '),
 params = {},
 tokens,
 regex = /[?&]?([^=]+)=([^&]*)/g;
 while (tokens = regex.exec(qs)) {
 params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
 }
 return params;
 }
 };
})();
