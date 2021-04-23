"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLinkDirect = exports.colors = exports.sitename = void 0;
var sitename = "moharaouafi";
exports.sitename = sitename;
var colors = {
  footerBG: '#20232a'
};
exports.colors = colors;
var userLinkDirect = [{
  name: 'Service',
  cName: 'nav-item',
  cname: 'nav-links',
  direction: '/dashboard',
  cFun: false
}, {
  name: 'Portfolio',
  cName: 'nav-item',
  cname: 'nav-links',
  direction: '/transactions',
  cFun: false
}, {
  name: 'Blog',
  cname: 'nav-links',
  cName: 'nav-item',
  direction: '/claim',
  cFun: false
}, {
  name: 'Contact',
  cname: 'nav-links',
  cName: 'nav-item',
  direction: '#',
  cFun: true
}, {
  name: 'F.A.Q',
  cname: 'nav-links',
  cName: 'nav-item',
  direction: '#',
  cFun: true
}];
exports.userLinkDirect = userLinkDirect;