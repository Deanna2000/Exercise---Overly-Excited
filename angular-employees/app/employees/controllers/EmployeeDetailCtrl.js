angular
    .module("EmployeeApp") //connects to location in html
    .controller("EmployeeDetailCtrl",  //identifies the controller

    //function to perform various actions(brings in the parameters that are needed)
    function ($scope, $location, $routeParams, EmployeeFactory) {
        $scope.employee = {}

        //get single employee info
        EmployeeFactory.single($routeParams.employeeId).then(employee => {
            $scope.employee = employee
        })

       $scope.fireEmployee = () =>
        EmployeeFactory.fire($scope.employee, $routeParams.employeeId).then(() =>
        $location.url("/"));


        $scope.murderEmployee = () =>
            EmployeeFactory.murder($routeParams.employeeId).then(() =>
            $location.url("/"));
    }
)
