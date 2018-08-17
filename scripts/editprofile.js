"use strict";

const editProfile = {
    template:`
    <input type="text" ng-model="$ctrl.inputValues.name">
    <input type="text" ng-model="$ctrl.inputValues.contact">
    <input type="text" ng-model="$ctrl.inputValues.bio">
    <button>Edit</button>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.inputvalues = {};
        vm.setUserProfile = () => {
            ProfileService.setUserProfile(vm.inputValues);
        }
    }]
}

angular
    .module("App")
    .component("editProfile", editProfile);