"use strict";

angular
    .module("App")
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/profile", {
                template: `
                <user-profile></user-profile>
                `
            })
            .when("/edit-profile", {
                template: `
                <edit-profile></edit-profile>
                `
            })
            .otherwise({
                redirectTo: "/profile"
            })

    }]);
