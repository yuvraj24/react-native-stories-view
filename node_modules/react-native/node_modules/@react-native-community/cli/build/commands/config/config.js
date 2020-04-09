"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isValidRNDependency(config) {
  return Object.keys(config.platforms).filter(key => Boolean(config.platforms[key])).length !== 0 || config.hooks && Object.keys(config.hooks).length !== 0 || config.assets && config.assets.length !== 0 || config.params && config.params.length !== 0;
}

function filterConfig(config) {
  const filtered = _objectSpread({}, config);

  Object.keys(filtered.dependencies).forEach(item => {
    if (!isValidRNDependency(filtered.dependencies[item])) {
      delete filtered.dependencies[item];
    }
  });
  return filtered;
}

var _default = {
  name: 'config',
  description: 'Print CLI configuration',
  func: async (_argv, ctx) => {
    console.log(JSON.stringify(filterConfig(ctx), null, 2));
  }
};
exports.default = _default;

//# sourceMappingURL=config.js.map