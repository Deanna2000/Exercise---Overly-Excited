angular
    .module("EmployeeApp")
    .factory("EmployeeFactory", function ($http) {

        return Object.create(null, {
            "cache": {
                value: null,
                writable: true
            },
            "list": {
                value: function () {
                    return $http({
                        method: "GET",
                        url: "https://angular-employees-5f04f.firebaseio.com/employees/.json"
                    }).then(response => {
                        const data = response.data

                        // Make an array of objects so we can use filters
                        this.cache = Object.keys(data).map(key => {
                            data[key].id = key
                            return data[key]
                        })
                        return this.cache
                    })

                }
            },
            "single": {
                value: function (key) {
                    return $http({
                        method: "GET",
                        url: `https://angular-employees-5f04f.firebaseio.com/employees/${key}/.json`
                    }).then(response => {
                        return response.data
                    })
                }
            },
            "add": {
                value: function (employee) {
                    return $http({
                        method: "POST",
                        url: 'https://angular-employees-5f04f.firebaseio.com/employees/.json',
                        data: {
                            "firstName": employee.firstName,
                            "lastName": employee.lastName,
                            "employmentStart": Date.now(),
                            "employmentEnd": 0
                        }
                    })
                }
            },
            "murder": {
                value: function (key) {
                    return $http({
                        method: "DELETE",
                        url: `https://angular-employees-5f04f.firebaseio.com/employees/${key}/.json`
                    })
                }
            },
            "fire": {
                value: function (employee, key) {
                    employee.employmentEnd = Date.now()

                    return $http({
                        method: "PUT",
                        url: `https://angular-employees-5f04f.firebaseio.com/employees/${key}/.json`,
                        data: employee
                    })
                }
            }
        })
    })