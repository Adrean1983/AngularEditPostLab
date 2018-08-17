"use strict";

angular
    .module("App")
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/userprofile", {
                template: `
                <user-profile></user-profile>
                `
            })
            .when("/editprofile", {
                template: `
                <edit-profile</edit-profile>
                `
            })
            .otherwise({
                redirectTo: "/userprofile"
            })

    }]);
