"use strict";

const editProfile = {
    template:`
    
    <input type='text' ng-model='$ctrl.newInfo.name'>
    <input type='text' ng-model='$ctrl.newInfo.age'>
    <input type='text' ng-model='$ctrl.newInfo.favMovie'>
    `

}

angular
    .module("App")
    .component("editProfile", editProfile);