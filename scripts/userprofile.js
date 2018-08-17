"use strict";

const userProfile = {
    template: `
        <p>{{ $ctrl.inputValues.name }}</p>
        <p>{{ $ctrl.inputValues.contact }}</p>
        <p>{{ $ctrl.inputValues.bio }}</p>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.profile = ProfileService.getUserProfile();
    }]
}

angular
    .module("App")
    .component("userProfile", userProfile);