(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-member/add-member.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-member/add-member.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "strong {\r\n    color: #616161\r\n}\r\ndiv{ \r\n    float:left;\r\n    min-width: 320px;\r\n}\r\n.addBgColor{\r\n    height: 200px;\r\n    padding: 16px;\r\n    border-radius: 8px;\r\n    background-color: #fff;\r\n    margin: 0px 16px 32px 0px;\r\n}\r\ninput{\r\n    border: none;\r\n    border-bottom: 1px solid #bdbdbd;\r\n    background-color: #fff;\r\n    padding: 4px;\r\n    margin: 4px 0px;\r\n    width: 80%;\r\n}\r\ntextarea{\r\n    border: none;\r\n    border-bottom: 1px solid #bdbdbd;\r\n    background-color: #fff;\r\n    padding: 4px;\r\n    margin: 4px 0px;\r\n    width: 80%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW1lbWJlci9hZGQtbWVtYmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZGQtbWVtYmVyL2FkZC1tZW1iZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInN0cm9uZyB7XHJcbiAgICBjb2xvcjogIzYxNjE2MVxyXG59XHJcbmRpdnsgXHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxufVxyXG4uYWRkQmdDb2xvcntcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMHB4IDE2cHggMzJweCAwcHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBtYXJnaW46IDRweCAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgbWFyZ2luOiA0cHggMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/add-member/add-member.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-member/add-member.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div @fade class='activity'>\n  <h3>Add member</h3> \n  <div class='addBgColor shadow'>\n    <input [(ngModel)]='memberName' type=\"text\" placeholder=\"Member name...\"><br>\n    <input [(ngModel)]='contactNo' type=\"text\" placeholder=\"Contact number...\"><br>\n    <textarea [(ngModel)]='permanentAddress' type=\"text\" placeholder=\"Address...\"></textarea><br>\n  </div>\n\n  <div @fade *ngIf='contactNo'>\n    <h4>You ready to add this member.</h4>\n    <strong>Member Name: </strong>{{memberName}}<br>\n    <strong class=\"secondarText\">Contact Information: </strong>{{contactNo}}<br>\n    <strong class=\"secondarText\">Permanent Address: </strong>{{permanentAddress}}<br>\n    <button (click)=\"addMember()\" routerLink='/members'>Add</button>\n  </div>  \n    \n</div>\n\n  "

/***/ }),

/***/ "./src/app/add-member/add-member.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-member/add-member.component.ts ***!
  \****************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../animation */ "./src/app/animation.ts");
/* harmony import */ var _services_feeder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/feeder.service */ "./src/app/services/feeder.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AddMemberComponent = /** @class */ (function () {
    function AddMemberComponent(feeder) {
        this.feeder = feeder;
        this.data = {};
    }
    AddMemberComponent.prototype.ngOnInit = function () {
    };
    AddMemberComponent.prototype.addMember = function (memberName, contactNo, permanentAddress) {
        this.data = { 'name': this.memberName, 'contactNo': this.contactNo, 'permanentAddress': this.permanentAddress };
        this.feeder.addMember(this.data);
    };
    AddMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-member',
            template: __webpack_require__(/*! ./add-member.component.html */ "./src/app/add-member/add-member.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_1__["fade"]],
            styles: [__webpack_require__(/*! ./add-member.component.css */ "./src/app/add-member/add-member.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feeder_service__WEBPACK_IMPORTED_MODULE_2__["FeederService"]])
    ], AddMemberComponent);
    return AddMemberComponent;
}());



/***/ }),

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: fade, slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slide", function() { return slide; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(800)
    ])
]);
var slide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 10 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(800)
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/rooms/rooms.component.ts");
/* harmony import */ var _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-member/add-member.component */ "./src/app/add-member/add-member.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _room_details_room_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room-details/room-details.component */ "./src/app/room-details/room-details.component.ts");
/* harmony import */ var _newroom_newroom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./newroom/newroom.component */ "./src/app/newroom/newroom.component.ts");
/* harmony import */ var _updates_updates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./updates/updates.component */ "./src/app/updates/updates.component.ts");










var routes = [
    { path: '', redirectTo: '/rooms', pathMatch: 'full' },
    { path: 'rooms', component: _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_1__["RoomsComponent"] },
    { path: 'members', component: _members_members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"] },
    { path: 'addMember', component: _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_2__["AddMemberComponent"] },
    { path: 'updates/:roomId', component: _updates_updates_component__WEBPACK_IMPORTED_MODULE_9__["UpdatesComponent"] },
    { path: 'newRoom', component: _newroom_newroom_component__WEBPACK_IMPORTED_MODULE_8__["NewroomComponent"] },
    { path: 'details/:PostId', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] },
    { path: 'room-details/:memberID/:roomID', component: _room_details_room_details_component__WEBPACK_IMPORTED_MODULE_7__["RoomDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    color: #fff;\r\n    text-decoration: none;\r\n    margin: 6px;\r\n}\r\n.header{\r\n    z-index: 2;\r\n    padding: 10px;\r\n    width: 100%; \r\n    color: #fff;   \r\n}\r\n.body{\r\n    border-radius: 16px 16px 0px 0px;\r\n    padding: 10px;\r\n    position: fixed;\r\n    background: #e0e0e0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.activeLink{\r\n    background-color: #fff;\r\n    border-radius: 8px;\r\n    padding: 4px 12px;\r\n    color: #2196F3;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgY29sb3I6ICNmZmY7ICAgXHJcbn1cclxuLmJvZHl7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hY3RpdmVMaW5re1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgY29sb3I6ICMyMTk2RjM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n    <div class=\"header\">\r\n        <h2>{{title | uppercase}}</h2>\r\n        <nav>\r\n            <a routerLink='/rooms' routerLinkActive='activeLink'>Rooms</a>\r\n            <a routerLink='/members' routerLinkActive='activeLink'>Members</a>\r\n            <a routerLink='/addMember' routerLinkActive='activeLink'>Add a Member</a>\r\n        </nav>  \r\n    </div>\r\n    <div class='body'>\r\n        <router-outlet></router-outlet>\r\n    </div>    \r\n</div>   "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'rentally';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-member/add-member.component */ "./src/app/add-member/add-member.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rooms/rooms.component */ "./src/app/rooms/rooms.component.ts");
/* harmony import */ var _room_details_room_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./room-details/room-details.component */ "./src/app/room-details/room-details.component.ts");
/* harmony import */ var _newroom_newroom_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./newroom/newroom.component */ "./src/app/newroom/newroom.component.ts");
/* harmony import */ var _updates_updates_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./updates/updates.component */ "./src/app/updates/updates.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _members_members_component__WEBPACK_IMPORTED_MODULE_8__["MembersComponent"],
                _add_member_add_member_component__WEBPACK_IMPORTED_MODULE_10__["AddMemberComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"],
                _rooms_rooms_component__WEBPACK_IMPORTED_MODULE_12__["RoomsComponent"],
                _room_details_room_details_component__WEBPACK_IMPORTED_MODULE_13__["RoomDetailsComponent"],
                _newroom_newroom_component__WEBPACK_IMPORTED_MODULE_14__["NewroomComponent"],
                _updates_updates_component__WEBPACK_IMPORTED_MODULE_15__["UpdatesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase, 'Rentally'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    text-align: center;\r\n}\r\n#memberCard{\r\n    min-height: 340px;\r\n    width: 280px;\r\n    border-radius: 16px;\r\n    background-color: #fff;\r\n    margin: 30px auto;\r\n    box-shadow: 0px 0px 5px 0.4px #bdbdbd; \r\n}\r\n.imageWindow{\r\n    background-color:#E3F2FD;\r\n    border-radius: 16px 16px 0px 0px;\r\n    image-resolution: auto;\r\n    padding: 40px;\r\n}\r\n#memberAvatar{\r\n    height: 160px;\r\n}\r\n.infoTab{\r\n    padding: 8px;\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI21lbWJlckNhcmR7XHJcbiAgICBtaW4taGVpZ2h0OiAzNDBweDtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwLjRweCAjYmRiZGJkOyBcclxufVxyXG4uaW1hZ2VXaW5kb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFM0YyRkQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMHB4IDBweDtcclxuICAgIGltYWdlLXJlc29sdXRpb246IGF1dG87XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbiNtZW1iZXJBdmF0YXJ7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcbi5pbmZvVGFie1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class='activity' *ngIf=\"post\">\n    <h3 @fade><img routerLink='/members' src=\"assets/img/backButton.png\"> Member details</h3>\n    <div @slide id='memberCard'> \n        <div class='imageWindow'>\n            <img id='memberAvatar' src=\"assets/img/man.png\">\n        </div>\n        <div class='infoTab'>\n            <strong>Name: {{(post|async)?.name}}</strong><br>\n            <span class='secondaryText'> Contact details: {{(post|async)?.contactNo}} </span><br>\n            <span class='secondaryText'> permanent address: {{(post|async)?.permanentAddress}} </span>\n        </div>    \n    </div>\n </div>\n  "

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_feeder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/feeder.service */ "./src/app/services/feeder.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animation */ "./src/app/animation.ts");





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(feeder, route) {
        this.feeder = feeder;
        this.route = route;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.id = params['PostId'];
        });
        this.getPost(this.id);
    };
    DetailsComponent.prototype.getPost = function (postId) {
        this.post = this.feeder.getPost(postId);
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_4__["slide"]],
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feeder_service__WEBPACK_IMPORTED_MODULE_1__["FeederService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/members/members.component.css":
/*!***********************************************!*\
  !*** ./src/app/members/members.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    width:240px;\r\n    float: left;\r\n}\r\nul{\r\n    padding: 0px;\r\n    height: 500px;\r\n    list-style-type: none;\r\n    overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcclxuICAgIHdpZHRoOjI0MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxudWx7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/members/members.component.html":
/*!************************************************!*\
  !*** ./src/app/members/members.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='activity'>\n  <h3>Members list.</h3>\n  <ul>\n    <li class=\"block\" @fade *ngFor='let member of members | async'>\n      <div>\n        <strong routerLink=\"/details/{{member.id}}\">\n        {{member.data.name | uppercase}}\n        </strong><br>\n        {{member.data.contactNo}}<br>\n      </div>  \n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_feeder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/feeder.service */ "./src/app/services/feeder.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation */ "./src/app/animation.ts");




var MembersComponent = /** @class */ (function () {
    function MembersComponent(feeder) {
        this.feeder = feeder;
    }
    MembersComponent.prototype.ngOnInit = function () {
        this.members = this.feeder.getMembers();
    };
    MembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.component.html */ "./src/app/members/members.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_3__["fade"]],
            styles: [__webpack_require__(/*! ./members.component.css */ "./src/app/members/members.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feeder_service__WEBPACK_IMPORTED_MODULE_1__["FeederService"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "./src/app/newroom/newroom.component.css":
/*!***********************************************!*\
  !*** ./src/app/newroom/newroom.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    height: 160px;\r\n    list-style-type: none;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    padding: 0px;\r\n}\r\nli{\r\n    width: 240px;\r\n    margin: 4px;\r\n    padding: 6px;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n}\r\ninput{\r\n    border:none;\r\n    border-bottom: 1px solid #bdbdbd;\r\n    background-color:#e0e0e0;\r\n    padding: 4px;\r\n    margin: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cm9vbS9uZXdyb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL25ld3Jvb20vbmV3cm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbmxpe1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/newroom/newroom.component.html":
/*!************************************************!*\
  !*** ./src/app/newroom/newroom.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='activity'>\n  <h3>Add a new member here.</h3>\n  <input [(ngModel)]='roomNo' type=\"number\" placeholder=\"Room number...\"><br>\n  <input [(ngModel)]='rent' type=\"number\" placeholder=\"Room rent...\"><br>\n  <ul>\n    <li *ngFor='let member of members| async' (click)='getMemberDetails(member.id, member.data.name)'>\n       {{(member.data)?.name}}<br> \n    </li>\n  </ul>\n\n  <div *ngIf='rent'>\n    <i>\n      <strong>Rooom number: </strong>{{roomNo}}<br>\n      <strong>Rooom rent: </strong>{{rent}}<br>\n      <strong>Rooom rented by: </strong>{{memberName}}\n    </i>\n  </div>\n\n  <button (click)='addRoom()' routerLink='/rooms/'>Add this Room</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/newroom/newroom.component.ts":
/*!**********************************************!*\
  !*** ./src/app/newroom/newroom.component.ts ***!
  \**********************************************/
/*! exports provided: NewroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewroomComponent", function() { return NewroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_feeder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/feeder.service */ "./src/app/services/feeder.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NewroomComponent = /** @class */ (function () {
    function NewroomComponent(feeder) {
        this.feeder = feeder;
    }
    NewroomComponent.prototype.ngOnInit = function () {
        this.members = this.feeder.getMembers();
    };
    NewroomComponent.prototype.addRoom = function () {
        this.roomData = { 'memberId': this.memberID, 'rent': this.rent, 'rentedBy': this.memberName, 'roomNo': this.roomNo };
        this.feeder.addRoom(this.roomData);
    };
    NewroomComponent.prototype.getMemberDetails = function (memberId, name) {
        this.memberID = memberId;
        this.memberName = name;
    };
    NewroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-newroom',
            template: __webpack_require__(/*! ./newroom.component.html */ "./src/app/newroom/newroom.component.html"),
            styles: [__webpack_require__(/*! ./newroom.component.css */ "./src/app/newroom/newroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feeder_service__WEBPACK_IMPORTED_MODULE_1__["FeederService"]])
    ], NewroomComponent);
    return NewroomComponent;
}());



/***/ }),

/***/ "./src/app/room-details/room-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/room-details/room-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    border-left: 3px solid #bdbdbd;\r\n}\r\nbutton{\r\n    padding: 4px 12px;\r\n    border-style:none;\r\n    color: #ffffff;\r\n    background-color: #1E88E5;\r\n    border-radius: 4px;\r\n    margin: 4px 4px 4px 0px;\r\n}\r\ninput{\r\n    width: 300px;\r\n    border: none;\r\n    padding: 6px;\r\n    background-color: #eeeeee;\r\n    border-bottom: 1px solid #bdbdbd;\r\n}\r\n#generateBlock{\r\n    padding: 8px;\r\n    width: 320px;\r\n    border-radius: 4px;\r\n    margin-top: 8px;\r\n    margin-right: 8px;\r\n}\r\n.highlight{    \r\n    display: none;\r\n    background-color: #eeeeee;\r\n}\r\n#firstValue{\r\n    display:none;\r\n}\r\n.marginLeft{\r\n    margin-left: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS1kZXRhaWxzL3Jvb20tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm9vbS1kZXRhaWxzL3Jvb20tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNiZGJkYmQ7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICBib3JkZXItc3R5bGU6bm9uZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFODhFNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogNHB4IDRweCA0cHggMHB4O1xyXG59XHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xyXG59XHJcbiNnZW5lcmF0ZUJsb2Nre1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmhpZ2hsaWdodHsgICAgXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxufVxyXG4jZmlyc3RWYWx1ZXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG4ubWFyZ2luTGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/room-details/room-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/room-details/room-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div @fade class='activity'>\n  <div class='row'>\n    <div class='col'>\n      <h3><img class='backButton' routerLink='/rooms' src='assets/img/backButton.png'> Room Details:</h3>\n      <div *ngIf='room'>       \n        \n        <div class='marginLeft'>\n          <strong>Room number: {{(room|async)?.roomNo}}</strong><br>\n          Renty name: {{(member|async)?.name}}<br>\n          Contact information: {{(member|async)?.contactNo}}<br>\n          Room rent: {{(room|async)?.rent}}rs.<br>\n          Permanent address: {{(member|async)?.permanentAddress}}<br>\n        \n          <button (click)='toggle()'> Generate bill </button>\n          <button routerLink='/updates/{{roomID}}'>Update data</button>\n        </div>  \n      </div>\n      \n      <div @fade id='generateBlock' class='highlight'>\n        <input [(ngModel)]='meterValue' type=\"number\" placeholder=\"Meter Reading...\" required><br>  \n        <input [(ngModel)]='dues' type=\"number\" placeholder=\"Dues...\" required><br>\n        <input [(ngModel)]='date' type=\"date\" placeholder=\"Noted date...\"><br>\n        <button (click)='generateBill()'>Add</button>\n      </div>\n    </div>\n\n    <div @fade id='generateBlock' class='col' *ngIf='bill'>\n      <h3>Genrated bill.</h3>\n      <strong>Name: </strong> Mr/Mrs {{memberName}}<br>\n      <strong>Date: </strong> {{date}}<br>\n      <strong>Contact information: </strong> Phone no. {{contactNo}}<br>\n      <strong>Monthly Rent: </strong>{{rent}}Rs<br>\n      <strong>Current Reading: </strong>{{meterValue}}Units<br>\n      <strong>Previous Reading: </strong>{{preReading}}Units<br>\n      <strong>Dues: </strong>{{dues}}<br>\n      <strong>Total Bill: </strong> {{bill}}  <br>\n      <button (click)='postBill(roomID)'>Save Bill</button>\n    </div>\n  </div>\n\n  <br>\n  <div *ngIf='bills'>\n    <hr>\n    <h4>Meter reading history:</h4>\n    <ul>\n      <li @fade *ngFor='let bill of bills | async; let i=index'>\n        Meter reading: {{(bill.data)?.meterReading}}<br>\n        Total Bill: {{(bill.data)?.totalBill}}<br>\n        Date noted: {{(bill.data)?.date | date}}\n      </li>\n    </ul>\n  </div>\n</div>  "

/***/ }),

/***/ "./src/app/room-details/room-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/room-details/room-details.component.ts ***!
  \********************************************************/
/*! exports provided: RoomDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomDetailsComponent", function() { return RoomDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../animation */ "./src/app/animation.ts");
/* harmony import */ var _services_feeder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/feeder.service */ "./src/app/services/feeder.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var RoomDetailsComponent = /** @class */ (function () {
    function RoomDetailsComponent(route, feeder) {
        this.route = route;
        this.feeder = feeder;
        this.state = false;
        this.dues = 0;
        this.preReading = 0;
        this.rent = 0;
    }
    RoomDetailsComponent.prototype.toggle = function () {
        if (this.state) {
            this.state = !this.state;
            document.getElementById('generateBlock').style.display = 'none';
        }
        else {
            this.state = !this.state;
            document.getElementById('generateBlock').style.display = 'block';
        }
    };
    RoomDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSub = this.route.params.subscribe(function (params) {
            _this.memberID = params['roomID'];
            _this.roomID = params['memberID'];
        });
        this.bills = this.feeder.getBills(this.roomID);
        //console.log(this.bills);
        this.room = this.feeder.getRoomInfo(this.roomID);
        this.member = this.feeder.getPost(this.memberID);
        this.getValue();
    };
    RoomDetailsComponent.prototype.generateBill = function () {
        this.bill = this.rent + this.dues + (this.meterValue - this.preReading) * 8;
    };
    RoomDetailsComponent.prototype.getValue = function () {
        var _this = this;
        this.bills.subscribe(function (response) {
            _this.preReading = response[0].data.meterReading;
        });
        this.room.subscribe(function (response) {
            _this.rent = response.rent;
            _this.roomNo = response.roomNo;
        });
        this.member.subscribe(function (response) {
            _this.memberName = response.name;
            _this.contactNo = response.contactNo;
        });
    };
    RoomDetailsComponent.prototype.postBill = function (roomID) {
        this.billDetails = { 'roomId': roomID, 'Name': this.memberName, 'Rent': this.rent, 'date': this.date, 'meterReading': this.meterValue, 'previousReading': this.preReading, 'dues': this.dues, 'totalBill': this.bill };
        //console.log(this.billDetails);
        this.feeder.postBill(this.billDetails);
    };
    RoomDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-room-details',
            template: __webpack_require__(/*! ./room-details.component.html */ "./src/app/room-details/room-details.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_1__["fade"]],
            styles: [__webpack_require__(/*! ./room-details.component.css */ "./src/app/room-details/room-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_feeder_service__WEBPACK_IMPORTED_MODULE_2__["FeederService"]])
    ], RoomDetailsComponent);
    return RoomDetailsComponent;
}());



/***/ }),

/***/ "./src/app/rooms/rooms.component.css":
/*!*******************************************!*\
  !*** ./src/app/rooms/rooms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    list-style: none;\r\n    padding:0px;\r\n}\r\nli{\r\n    width: 300px;\r\n    float: left;\r\n}\r\n#button{\r\n    margin-top:0px;\r\n    float:right; \r\n}\r\nh3{\r\n    margin-bottom: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbXMvcm9vbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Jvb21zL3Jvb21zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG5saXtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiNidXR0b257XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGZsb2F0OnJpZ2h0OyBcclxufVxyXG5oM3tcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/rooms/rooms.component.html":
/*!********************************************!*\
  !*** ./src/app/rooms/rooms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='activity'>\n  <h3>Room list <button id='button' routerLink='/newRoom/'>New </button>  </h3>\n  <ul>\n    <li @fade *ngFor='let room of rooms | async'>\n      <strong routerLink='/room-details/{{room.id}}/{{room.data.memberId}}'>Room number: {{room.data.roomNo}}</strong><br>\n      Room rented by:  {{room.data.rentedBy}}<br>\n      Room rent: {{room.data.rent}}rs<br>\n    </li>  \n    \n  </ul><br>\n</div>"

/***/ }),

/***/ "./src/app/rooms/rooms.component.ts":
/*!******************************************!*\
  !*** ./src/app/rooms/rooms.component.ts ***!
  \******************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_feeder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/feeder.service */ "./src/app/services/feeder.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../animation */ "./src/app/animation.ts");




var RoomsComponent = /** @class */ (function () {
    function RoomsComponent(feeder) {
        this.feeder = feeder;
    }
    RoomsComponent.prototype.ngOnInit = function () {
        this.rooms = this.feeder.getRooms();
    };
    RoomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-rooms',
            template: __webpack_require__(/*! ./rooms.component.html */ "./src/app/rooms/rooms.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_3__["fade"]],
            styles: [__webpack_require__(/*! ./rooms.component.css */ "./src/app/rooms/rooms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feeder_service__WEBPACK_IMPORTED_MODULE_1__["FeederService"]])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "./src/app/services/feeder.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/feeder.service.ts ***!
  \********************************************/
/*! exports provided: FeederService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeederService", function() { return FeederService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var FeederService = /** @class */ (function () {
    function FeederService(afs) {
        this.afs = afs;
        this.data = {};
    }
    FeederService.prototype.ngOnInit = function () {
    };
    FeederService.prototype.getMembers = function () {
        this.membersDoc = this.afs.collection('Members', function (ref) { return ref.orderBy('name', 'asc'); });
        this.members = this.membersDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        }));
        return this.members;
    };
    FeederService.prototype.getRooms = function () {
        this.roomsDoc = this.afs.collection('Rooms');
        this.rooms = this.roomsDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        }));
        return this.rooms;
    };
    FeederService.prototype.addRoom = function (data) {
        this.afs.collection('Rooms').add(data);
    };
    FeederService.prototype.addMember = function (data) {
        this.afs.collection('Members').add(data);
    };
    FeederService.prototype.getPost = function (postID) {
        //console.log('post id:',postID);
        this.postDoc = this.afs.doc('Members/' + postID);
        this.post = this.postDoc.valueChanges();
        return this.post;
    };
    FeederService.prototype.getRoomInfo = function (roomID) {
        this.roomDoc = this.afs.doc('Rooms/' + roomID);
        this.room = this.roomDoc.valueChanges();
        //console.log('room id:', roomID);
        return this.room;
    };
    FeederService.prototype.getBills = function (roomID) {
        this.billsDocs = this.afs.collection('Bills', function (ref) { return ref.where('roomId', '==', roomID).orderBy('date', 'desc'); });
        this.bills = this.billsDocs.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return { id: id, data: data };
            });
        }));
        return this.bills;
    };
    FeederService.prototype.updateRentedBy = function (roomID, memberID, memberName) {
        this.afs.collection('Rooms').doc(roomID).update({ 'memberId': memberID, 'rentedBy': memberName });
    };
    FeederService.prototype.deletePost = function (postId) {
        this.afs.doc('Members/' + postId).delete();
    };
    FeederService.prototype.postBill = function (details) {
        this.afs.collection('Bills').add(details);
    };
    FeederService.prototype.updateRent = function (roomId, roomRent) {
        this.afs.collection('Rooms').doc(roomId).update({ 'rent': roomRent });
    };
    FeederService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FeederService);
    return FeederService;
}());



/***/ }),

/***/ "./src/app/updates/updates.component.css":
/*!***********************************************!*\
  !*** ./src/app/updates/updates.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block{\r\n    padding: 8px;\r\n    margin: 4px;\r\n    border-radius: 4px;\r\n    background-color: #e0e0e0;\r\n}\r\nul{\r\n    display: none;\r\n    height: 200px;\r\n    overflow-y:scroll; \r\n    list-style-type: none;\r\n}\r\nli{\r\n    background-color: #eeeeee;\r\n    padding: 8px;\r\n    border-radius: 4px;\r\n    width: 300px;\r\n    overflow: hidden;\r\n    margin: 2px;\r\n}\r\nbutton{    \r\n    color: #ffffff;\r\n    padding: 4px 8px;\r\n    background-color: #1E88E5;\r\n    border-style: none;\r\n    border-radius: 4px;\r\n    margin: 4px 0px;\r\n}\r\nspan{\r\n    margin-bottom: 4px;\r\n}\r\ninput{\r\n    display: none;\r\n    padding: 4px;\r\n    background-color: #e0e0e0;\r\n    border-style: none;\r\n    border-bottom: 1px solid #bdbdbd;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlcy91cGRhdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlcy91cGRhdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2t7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxudWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsOyBcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5saXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuYnV0dG9ueyAgICBcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTg4RTU7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW46IDRweCAwcHg7XHJcbn1cclxuc3BhbntcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5pbnB1dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/updates/updates.component.html":
/*!************************************************!*\
  !*** ./src/app/updates/updates.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='block'>\n  <h4 (click)='toogleAppList()'>Update Renty</h4>\n  <ul id='appListBlock'>\n    <b>Select applicant</b>\n    <li @fade *ngFor='let member of members| async' (click)='getMemberDetails(member.id, member.data.name, member.data.contactNo)'>\n       {{(member.data)?.name}} \n    </li>\n  </ul>\n  \n  <span *ngIf='memberName'><strong>New renty: </strong>{{memberName}}<br></span>\n  <span *ngIf='contactNo'><strong>Contact details: </strong>{{contactNo}}<br></span>\n  <button (click)='updateRenty(memberId)' *ngIf='contactNo' routerLink='/rooms/'>Update</button>\n</div>\n\n<div class='block'>\n  <h4 (click)='toggleRentInput()'>Update rent here.</h4>\n  <input id='rentBlock' type=\"number\" [(ngModel)]='updatedRent' placeholder=\"New rent...\"><br>\n  <button *ngIf='updatedRent' (click)=updateRent()>Update rent</button>\n</div>"

/***/ }),

/***/ "./src/app/updates/updates.component.ts":
/*!**********************************************!*\
  !*** ./src/app/updates/updates.component.ts ***!
  \**********************************************/
/*! exports provided: UpdatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatesComponent", function() { return UpdatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_feeder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/feeder.service */ "./src/app/services/feeder.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animation */ "./src/app/animation.ts");





var UpdatesComponent = /** @class */ (function () {
    function UpdatesComponent(route, feeder) {
        this.route = route;
        this.feeder = feeder;
        this.showList = false;
        this.showInput = false;
    }
    UpdatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.roomId = params['roomId'];
            console.log(_this.roomId);
        });
        this.members = this.feeder.getMembers();
    };
    UpdatesComponent.prototype.updateRenty = function (memberId, roomId) {
        console.log(this.roomId, memberId, this.memberName);
        return this.feeder.updateRentedBy(this.roomId, memberId, this.memberName);
    };
    UpdatesComponent.prototype.getMemberDetails = function (memberId, name, contactNo) {
        this.contactNo = contactNo;
        this.memberId = memberId;
        this.memberName = name;
    };
    UpdatesComponent.prototype.updateRent = function () {
        this.feeder.updateRent(this.roomId, this.updatedRent);
    };
    UpdatesComponent.prototype.toogleAppList = function () {
        if (this.showList) {
            this.showList = !this.showList;
            document.getElementById('appListBlock').style.display = 'none';
        }
        else {
            this.showList = !this.showList;
            document.getElementById('appListBlock').style.display = 'block';
            document.getElementById('rentBlock').style.display = 'none';
        }
    };
    UpdatesComponent.prototype.toggleRentInput = function () {
        if (this.showInput) {
            this.showInput = !this.showInput;
            document.getElementById('rentBlock').style.display = 'none';
        }
        else {
            this.showInput = !this.showInput;
            document.getElementById('rentBlock').style.display = 'block';
            document.getElementById('appListBlock').style.display = 'none';
        }
    };
    UpdatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-updates',
            template: __webpack_require__(/*! ./updates.component.html */ "./src/app/updates/updates.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_4__["fade"]],
            styles: [__webpack_require__(/*! ./updates.component.css */ "./src/app/updates/updates.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_feeder_service__WEBPACK_IMPORTED_MODULE_1__["FeederService"]])
    ], UpdatesComponent);
    return UpdatesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCcRE-Mg6Bl82eHxG3ho1psvLiG11V--zc",
        authDomain: "rentally-4f626.firebaseapp.com",
        databaseURL: "https://rentally-4f626.firebaseio.com",
        projectId: "rentally-4f626",
        storageBucket: "rentally-4f626.appspot.com",
        messagingSenderId: "849909137399",
        appId: "1:849909137399:web:a08e2d67ad5019b4"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Abhishek\Documents\AngularApps\rentally\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map