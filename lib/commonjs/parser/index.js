"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = void 0;

var _parser = _interopRequireDefault(require("./parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Parser = {
  parse: text => _parser.default.parse(text)
};
exports.Parser = Parser;
//# sourceMappingURL=index.js.map