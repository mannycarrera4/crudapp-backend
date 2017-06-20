module.exports = function(ngModule) {

  ngModule.directive('mcHello', ($http) => {
    // require('../css/main.scss')
    return {
      restrict: 'E',
      scope: {},
      template: require('./mc-hello.html'),
      controllerAs: 'vm',
      controller: function() {
      	console.log(123)
        // $http.get('http://localhost:3000/').then(function (response) {
        //   console.log(response.data);
        // });
        const vm = this;
        vm.title = 'Trax'
        vm.blah = 'Route'

      }
    };
  });
};
