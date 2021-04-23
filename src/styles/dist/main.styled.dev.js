"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpanComponents = exports.RowComponents = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-top: 1px solid black;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display:-ms-flexbox;\n    display:flex;\n    -ms-flex-wrap:wrap;\n    flex-wrap:wrap;\n    margin-right:-15px;\n    margin-left:-15px\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Row
var RowComponents = _styledComponents["default"].div(_templateObject()); //Footer


exports.RowComponents = RowComponents;
var SpanComponents = (0, _styledComponents["default"])(_templateObject2());
exports.SpanComponents = SpanComponents;