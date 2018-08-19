"use strict";

const editProfile = {
    template:`
    <input type="text" ng-model="$ctrl.inputValues.name">
    <input type="text" ng-model="$ctrl.inputValues.contact">
    <input type="text" ng-model="$ctrl.inputValues.bio">
    <button ng-click="$ctrl.updateProfile();">Update</button>
    `,
    controller: ["ProfileService", "$location", function(ProfileService, $location) {
        const vm = this;
        vm.inputValues = {};
        vm.populateFields = () => {
            vm.inputValues = ProfileService.getUserProfile();
        }
        vm.updateProfile = () => {
            ProfileService.setUserProfile(vm.inputValues.name, vm.inputValues.contact, vm.inputValues.bio);
            $location.path("/profile");
        }
        vm.populateFields();
    }]
}

angular
    .module("App")
    .component("editProfile", editProfile);