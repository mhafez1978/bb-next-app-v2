exports.id = 805;
exports.ids = [805];
exports.modules = {

/***/ 94334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(16066);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 55601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(94334)();
}


/***/ }),

/***/ 16066:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 92780:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireDefault(__webpack_require__(18038));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Masonry = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Masonry, _React$Component);

  function Masonry() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Masonry.prototype;

  _proto.getColumns = function getColumns() {
    var _this$props = this.props,
        children = _this$props.children,
        columnsCount = _this$props.columnsCount;
    var columns = Array.from({
      length: columnsCount
    }, function () {
      return [];
    });

    _react["default"].Children.forEach(children, function (child, index) {
      if (child && _react["default"].isValidElement(child)) {
        columns[index % columnsCount].push(child);
      }
    });

    return columns;
  };

  _proto.renderColumns = function renderColumns() {
    var gutter = this.props.gutter;
    return this.getColumns().map(function (column, i) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: i,
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "stretch",
          flex: 1,
          width: 0,
          gap: gutter
        }
      }, column.map(function (item) {
        return item;
      }));
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        gutter = _this$props2.gutter,
        className = _this$props2.className,
        style = _this$props2.style;
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: _extends({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "stretch",
        boxSizing: "border-box",
        width: "100%",
        gap: gutter
      }, style),
      className: className
    }, this.renderColumns());
  };

  return Masonry;
}(_react["default"].Component);

Masonry.propTypes =  false ? 0 : {};
Masonry.defaultProps = {
  columnsCount: 3,
  gutter: "0",
  className: null,
  style: {}
};
var _default = Masonry;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 34962:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(55601));

var _react = _interopRequireWildcard(__webpack_require__(18038));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_COLUMNS_COUNT = 1;
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? _react.useLayoutEffect : _react.useEffect;

var useHasMounted = function useHasMounted() {
  var _useState = (0, _react.useState)(false),
      hasMounted = _useState[0],
      setHasMounted = _useState[1];

  useIsomorphicLayoutEffect(function () {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

var useWindowWidth = function useWindowWidth() {
  var hasMounted = useHasMounted();

  var _useState2 = (0, _react.useState)(0),
      width = _useState2[0],
      setWidth = _useState2[1];

  var handleResize = (0, _react.useCallback)(function () {
    if (!hasMounted) return;
    setWidth(window.innerWidth);
  }, [hasMounted]);
  useIsomorphicLayoutEffect(function () {
    if (hasMounted) {
      window.addEventListener("resize", handleResize);
      handleResize();
      return function () {
        return window.removeEventListener("resize", handleResize);
      };
    }
  }, [hasMounted, handleResize]);
  return width;
};

var MasonryResponsive = function MasonryResponsive(_ref) {
  var _ref$columnsCountBrea = _ref.columnsCountBreakPoints,
      columnsCountBreakPoints = _ref$columnsCountBrea === void 0 ? {
    350: 1,
    750: 2,
    900: 3
  } : _ref$columnsCountBrea,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? null : _ref$style;
  var windowWidth = useWindowWidth();
  var columnsCount = (0, _react.useMemo)(function () {
    var breakPoints = Object.keys(columnsCountBreakPoints).sort(function (a, b) {
      return a - b;
    });
    var count = breakPoints.length > 0 ? columnsCountBreakPoints[breakPoints[0]] : DEFAULT_COLUMNS_COUNT;
    breakPoints.forEach(function (breakPoint) {
      if (breakPoint < windowWidth) {
        count = columnsCountBreakPoints[breakPoint];
      }
    });
    return count;
  }, [windowWidth, columnsCountBreakPoints]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className,
    style: style
  }, _react["default"].Children.map(children, function (child, index) {
    return _react["default"].cloneElement(child, {
      key: index,
      columnsCount: columnsCount
    });
  }));
};

MasonryResponsive.propTypes =  false ? 0 : {};
var _default = MasonryResponsive;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ 41805:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.ZP = void 0;

var _Masonry = _interopRequireDefault(__webpack_require__(92780));

var _ResponsiveMasonry = _interopRequireDefault(__webpack_require__(34962));

exports.GD = _ResponsiveMasonry["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _Masonry["default"];
exports.ZP = _default;

/***/ })

};
;