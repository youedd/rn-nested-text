function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Text } from 'react-native';
import { Parser } from './parser';

const NestedText = _ref => {
  let {
    children,
    textProps,
    ...props
  } = _ref;
  const parsed = React.useMemo(() => {
    return Parser.parse(children);
  }, [children]);
  return /*#__PURE__*/React.createElement(Text, props, renderNestedText(parsed, textProps));
};

const renderNestedText = function (nestedText) {
  let textProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return nestedText.map((text, index) => {
    if (typeof text === 'string') {
      return text;
    }

    const props = textProps[text.tag];
    return /*#__PURE__*/React.createElement(Text, _extends({
      key: index
    }, props), renderNestedText(text.children, textProps));
  });
};

export default NestedText;
//# sourceMappingURL=NestedText.js.map