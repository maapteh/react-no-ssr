"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var DefaultOnSSR = function () { return react_1.default.createElement("span", null); };
var NoSSR = function (_a) {
    var children = _a.children, _b = _a.onSSR, onSSR = _b === void 0 ? react_1.default.createElement(DefaultOnSSR, null) : _b;
    var _c = react_1.useState(false), render = _c[0], setRender = _c[1];
    react_1.useEffect(function () { return setRender(true); }, []);
    if (!render) {
        return onSSR;
    }
    return children;
};
exports.default = NoSSR;
