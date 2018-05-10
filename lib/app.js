"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customizedApp = function customizedApp(_ref) {
  var components = _ref.components,
      containers = _ref.containers,
      pages = _ref.pages;

  var HomePage = pages.HomePage || require('./pages/HomePage').default;

  var AboutPage = pages.AboutPage || require('./pages/AboutPage').default;

  var LoginPage = pages.LoginPage || require('./pages/LoginPage').default;

  var ShowPage = pages.ShowPage || require('./pages/ShowPage').default;

  var FourOhFourPage = pages.FourOhFourPage || require('./pages/FourOhFourPage').default;

  var MultisitePage = require('./pages/MultisitePage').default;

  return function () {
    return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/",
      component: HomePage
    }), _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/about",
      component: AboutPage
    }), _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/login",
      component: LoginPage
    }), _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/multisite",
      component: MultisitePage
    }), _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/:identifier/:claim",
      component: ShowPage
    }), _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/:claim",
      component: ShowPage
    }), _react.default.createElement(_reactRouterDom.Route, {
      component: FourOhFourPage
    }));
  };
};

var _default = customizedApp;
exports.default = _default;