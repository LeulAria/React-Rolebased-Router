"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var SubRoute_1 = __importDefault(require("./SubRoute"));
var Router = function (_a) {
    var routes = _a.routes, userAuthRoles = _a.userAuthRoles, loginRedirectPath = _a.loginRedirectPath, isUserAuthenticated = _a.isUserAuthenticated, blocked = _a.blocked, blockedComponent = _a.blockedComponent;
    return (react_1.default.createElement(react_router_dom_1.Switch, null, routes &&
        routes.map(function (route) { return (react_1.default.createElement(SubRoute_1.default, __assign({ key: route.path, userAuthRoles: userAuthRoles, loginRedirectPath: loginRedirectPath, isUserAuthenticated: isUserAuthenticated, blocked: blocked, blockedComponent: blockedComponent }, route))); })));
};
exports.default = Router;
//# sourceMappingURL=index.js.map