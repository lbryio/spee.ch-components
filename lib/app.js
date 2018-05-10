"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _HomePage = _interopRequireDefault(require("./pages/HomePage"));

var _AboutPage = _interopRequireDefault(require("./pages/AboutPage"));

var _LoginPage = _interopRequireDefault(require("./pages/LoginPage"));

var _ShowPage = _interopRequireDefault(require("./pages/ShowPage"));

var _FourOhFourPage = _interopRequireDefault(require("./pages/FourOhFourPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var store = _ref.store;
  var state = store.getState();
  console.log('state:', state);
  var plugins = state.plugins;
  var MyHomePage = plugins.pages.HomePage || _HomePage.default;
  var MyAboutPage = plugins.pages.AboutPage || _AboutPage.default;
  var MyLoginPage = plugins.pages.LoginPage || _LoginPage.default;
  var MyShowPage = plugins.pages.ShowPage || _ShowPage.default;
  var MyFourOhFourPage = plugins.pages.FourOhFourPage || _FourOhFourPage.default;
  return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: MyHomePage
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/about",
    component: MyAboutPage
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/login",
    component: MyLoginPage
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/:identifier/:claim",
    component: MyShowPage
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/:claim",
    component: MyShowPage
  }), _react.default.createElement(_reactRouterDom.Route, {
    component: MyFourOhFourPage
  }));
};

var _default = App;
exports.default = _default;