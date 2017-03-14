"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('style-loader!./usersMap.scss');
var UsersMap = (function () {
    function UsersMap(_usersMapService) {
        this._usersMapService = _usersMapService;
        this.mapData = this._usersMapService.getData();
    }
    UsersMap = __decorate([
        core_1.Component({
            selector: 'users-map',
            templateUrl: './usersMap.html'
        })
    ], UsersMap);
    return UsersMap;
}());
exports.UsersMap = UsersMap;
