"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('style-loader!./bubbleMaps.scss');
var BubbleMaps = (function () {
    function BubbleMaps(_bubbleMapsService) {
        this._bubbleMapsService = _bubbleMapsService;
    }
    BubbleMaps.prototype.ngOnInit = function () {
        this.chartData = this._bubbleMapsService.getData();
    };
    BubbleMaps = __decorate([
        core_1.Component({
            selector: 'bubble-maps',
            templateUrl: './bubbleMaps.html'
        })
    ], BubbleMaps);
    return BubbleMaps;
}());
exports.BubbleMaps = BubbleMaps;
