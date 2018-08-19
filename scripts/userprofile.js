"use strict";

const userProfile = {
    template: `
        <p>{{ $ctrl.profile.name }}</p>
        <p>{{ $ctrl.profile.contact }}</p>
        <p>{{ $ctrl.profile.bio }}</p>
        <button ng-click="$ctrl.linkEditProfile();">Edit</button>
    `,
    controller: ["ProfileService", "$location", function(ProfileService, $location) {
        const vm = this;
        vm.profile = ProfileService.getUserProfile();
        vm.linkEditProfile = () => {
            $location.path("/edit-profile");
        }
    }]
}

angular
    .module("App")
    .component("userProfile", userProfile);