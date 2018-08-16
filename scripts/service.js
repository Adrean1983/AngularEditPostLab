"use strict";

function ProfileService() {
    const vm = this;
    vm.name = "Grand Chirpus";
    vm.contact = "grant@grandcircus.co";
    vm.bio = "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS."
}

angular
    .module("App")
    .service("ProfileService", ProfileService);