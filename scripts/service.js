"use strict";

function ProfileService() {
    const vm = this;
    vm.chirpusProfile = {
        name: "Grand Chirpus",
        contact: "grant@grandcircus.co",
        bio: "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at AngularJS."
    }
    vm.getUserProfile = ( ) => {
        return vm.chirpusProfile;
    };
    vm.setUserProfile = (username, contact, bio) => {
        vm.name = username;
        vm.contact = contact;
        vm.bio = bio;
    };
}

angular
    .module("App")
    .service("ProfileService", ProfileService);