// var app = angular.module("EmployeeApp", []);

app.controller("EmployeeCtrl", function ($scope, $http) {
  $scope.newEmployee = {}

  $scope.fireEmployee = function (key, employee) {
    employee.employmentEnd = Date.now()
    $http
      .put(`https://angular-employees-5f04f.firebaseio.com/${key}.json`, employee)
      .then(getEmployees)
  }

  $scope.hireEmployee = function () {
    $http
      .post("https://angular-employees-5f04f.firebaseio.com/.json", {
        "firstName": $scope.newEmployee.firstName,
        "lastName": $scope.newEmployee.lastName,
        "employmentStart": Date.now(),
        "employmentEnd": 0
      })
      .then(function () {
        $scope.newEmployee.firstName = ""
        $scope.newEmployee.lastName = ""
        getEmployees()
      })
  }

  getEmployees = function () {
    $http
      .get("https://angular-employees-5f04f.firebaseio.com/.json")
      .then(function (res) {
        $scope.employees = res.data
      })
      getEmployees()
  }

})
