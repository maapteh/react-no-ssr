"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DefaultOnSSR = function () { return React.createElement("span", null); };
var NoSSR = function (_a) {
    var children = _a.children, _b = _a.onSSR, onSSR = _b === void 0 ? React.createElement(DefaultOnSSR, null) : _b;
    var _c = React.useState(false), render = _c[0], setRender = _c[1];
    React.useEffect(function () { return setRender(true); }, []);
    if (!render) {
        return onSSR;
    }
    return children;
};
exports.default = NoSSR;
