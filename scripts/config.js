"use strict";

angular
    .module("firstRoute", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/#", {
                template: ""
            })
    }]);