"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('style-loader!./feed.scss');
var Feed = (function () {
    function Feed(_feedService) {
        this._feedService = _feedService;
    }
    Feed.prototype.ngOnInit = function () {
        this._loadFeed();
    };
    Feed.prototype.expandMessage = function (message) {
        message.expanded = !message.expanded;
    };
    Feed.prototype._loadFeed = function () {
        this.feed = this._feedService.getData();
    };
    Feed = __decorate([
        core_1.Component({
            selector: 'feed',
            templateUrl: './feed.html'
        })
    ], Feed);
    return Feed;
}());
exports.Feed = Feed;
