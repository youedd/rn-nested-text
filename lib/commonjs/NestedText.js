"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _parser = require("./parser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const NestedText = _ref => {
  let {
    children,
    textProps,
    ...props
  } = _ref;

  const parsed = _react.default.useMemo(() => {
    return _parser.Parser.parse(children);
  }, [children]);

  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, props, renderNestedText(parsed, textProps));
};

const renderNestedText = function (nestedText) {
  let textProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return nestedText.map((text, index) => {
    if (typeof text === 'string') {
      return text;
    }

    const props = textProps[text.tag];
    return /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({
      key: index
    }, props), renderNestedText(text.children, textProps));
  });
};

var _default = NestedText;
exports.default = _default;
//# sourceMappingURL=NestedText.js.map