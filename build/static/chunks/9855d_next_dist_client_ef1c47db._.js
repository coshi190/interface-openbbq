(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/9855d_next_dist_client_ef1c47db._.js", {

"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/portal/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Portal", {
    enumerable: true,
    get: function() {
        return Portal;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js [client] (ecmascript)");
const Portal = (param)=>{
    let { children, type } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const element = document.createElement(type);
        document.body.appendChild(element);
        setPortalNode(element);
        return ()=>{
            document.body.removeChild(element);
        };
    }, [
        type
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(children, portalNode) : null;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/set-attributes-from-props.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            // Correctly assign boolean script attributes
            // https://github.com/vercel/next.js/pull/20748
            ;
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-attributes-from-props.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/head-manager.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    isEqualNode: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return initHeadManager;
    },
    isEqualNode: function() {
        return isEqualNode;
    }
});
const _setattributesfromprops = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/set-attributes-from-props.js [client] (ecmascript)");
function reactElementToDOM(param) {
    let { type, props } = param;
    const el = document.createElement(type);
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    const { children, dangerouslySetInnerHTML } = props;
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
    }
    return el;
}
function isEqualNode(oldTag, newTag) {
    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute('nonce');
        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
        // be stripped if there is no content security policy response header that includes a nonce.
        if (nonce && !oldTag.getAttribute('nonce')) {
            const cloneTag = newTag.cloneNode(true);
            cloneTag.setAttribute('nonce', '');
            cloneTag.nonce = nonce;
            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
    }
    return oldTag.isEqualNode(newTag);
}
let updateElements;
if ("TURBOPACK compile-time truthy", 1) {
    updateElements = (type, components)=>{
        const headEl = document.querySelector('head');
        if (!headEl) return;
        const oldTags = new Set(headEl.querySelectorAll("" + type + "[data-next-head]"));
        if (type === 'meta') {
            const metaCharset = headEl.querySelector('meta[charset]');
            if (metaCharset !== null) {
                oldTags.add(metaCharset);
            }
        }
        const newTags = [];
        for(let i = 0; i < components.length; i++){
            const component = components[i];
            const newTag = reactElementToDOM(component);
            newTag.setAttribute('data-next-head', '');
            let isNew = true;
            for (const oldTag of oldTags){
                if (isEqualNode(oldTag, newTag)) {
                    oldTags.delete(oldTag);
                    isNew = false;
                    break;
                }
            }
            if (isNew) {
                newTags.push(newTag);
            }
        }
        for (const oldTag of oldTags){
            var _oldTag_parentNode;
            (_oldTag_parentNode = oldTag.parentNode) == null ? void 0 : _oldTag_parentNode.removeChild(oldTag);
        }
        for (const newTag of newTags){
            // meta[charset] must be first element so special case
            if (newTag.tagName.toLowerCase() === 'meta' && newTag.getAttribute('charset') !== null) {
                headEl.prepend(newTag);
            }
            headEl.appendChild(newTag);
        }
    };
} else {
    "TURBOPACK unreachable";
}
function initHeadManager() {
    return {
        mountedInstances: new Set(),
        updateHead: (head)=>{
            const tags = {};
            head.forEach((h)=>{
                if (// it won't be inlined. In this case revert to the original behavior
                h.type === 'link' && h.props['data-optimized-fonts']) {
                    if (document.querySelector('style[data-href="' + h.props['data-href'] + '"]')) {
                        return;
                    } else {
                        h.props.href = h.props['data-href'];
                        h.props['data-href'] = undefined;
                    }
                }
                const components = tags[h.type] || [];
                components.push(h);
                tags[h.type] = components;
            });
            const titleComponent = tags.title ? tags.title[0] : null;
            let title = '';
            if (titleComponent) {
                const { children } = titleComponent.props;
                title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
            }
            if (title !== document.title) document.title = title;
            [
                'meta',
                'base',
                'link',
                'style',
                'script'
            ].forEach((type)=>{
                updateElements(type, tags[type] || []);
            });
        }
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head-manager.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [client] (ecmascript)");
const _parsepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/add-base-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [client] (ecmascript)");
const _normalizetrailingslash = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/add-locale.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addLocale", {
    enumerable: true,
    get: function() {
        return addLocale;
    }
});
const _normalizetrailingslash = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)");
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return path;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/trusted-types.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "__unsafeCreateTrustedScriptURL", {
    enumerable: true,
    get: function() {
        return __unsafeCreateTrustedScriptURL;
    }
});
let policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */ function getPolicy() {
    if (typeof policy === 'undefined' && typeof window !== 'undefined') {
        var _window_trustedTypes;
        policy = ((_window_trustedTypes = window.trustedTypes) == null ? void 0 : _window_trustedTypes.createPolicy('nextjs', {
            createHTML: (input)=>input,
            createScript: (input)=>input,
            createScriptURL: (input)=>input
        })) || null;
    }
    return policy;
}
function __unsafeCreateTrustedScriptURL(url) {
    var _getPolicy;
    return ((_getPolicy = getPolicy()) == null ? void 0 : _getPolicy.createScriptURL(url)) || url;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=trusted-types.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/request-idle-callback.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/route-loader.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createRouteLoader: null,
    getClientBuildManifest: null,
    isAssetError: null,
    markAssetError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createRouteLoader: function() {
        return createRouteLoader;
    },
    getClientBuildManifest: function() {
        return getClientBuildManifest;
    },
    isAssetError: function() {
        return isAssetError;
    },
    markAssetError: function() {
        return markAssetError;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _getassetpathfromroute = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js [client] (ecmascript)"));
const _trustedtypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/trusted-types.js [client] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/request-idle-callback.js [client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/deployment-id.js [client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/encode-uri-path.js [client] (ecmascript)");
// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
    let entry = map.get(key);
    if (entry) {
        if ('future' in entry) {
            return entry.future;
        }
        return Promise.resolve(entry);
    }
    let resolver;
    const prom = new Promise((resolve)=>{
        resolver = resolve;
    });
    map.set(key, {
        resolve: resolver,
        future: prom
    });
    return generator ? generator().then((value)=>{
        resolver(value);
        return value;
    }).catch((err)=>{
        map.delete(key);
        throw err;
    }) : prom;
}
const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');
function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
}
function hasPrefetch(link) {
    try {
        link = document.createElement('link');
        return(// with relList.support
        !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch'));
    } catch (e) {
        return false;
    }
}
const canPrefetch = hasPrefetch();
const getAssetQueryString = ()=>{
    return (0, _deploymentid.getDeploymentIdQueryOrEmptyString)();
};
function prefetchViaDom(href, as, link) {
    return new Promise((resolve, reject)=>{
        const selector = '\n      link[rel="prefetch"][href^="' + href + '"],\n      link[rel="preload"][href^="' + href + '"],\n      script[src^="' + href + '"]';
        if (document.querySelector(selector)) {
            return resolve();
        }
        link = document.createElement('link');
        // The order of property assignment here is intentional:
        if (as) link.as = as;
        link.rel = "prefetch";
        link.crossOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_CROSS_ORIGIN;
        link.onload = resolve;
        link.onerror = ()=>reject(markAssetError(Object.defineProperty(new Error("Failed to prefetch: " + href), "__NEXT_ERROR_CODE", {
                value: "E268",
                enumerable: false,
                configurable: true
            })));
        // `href` should always be last:
        link.href = href;
        document.head.appendChild(link);
    });
}
function appendScript(src, script) {
    return new Promise((resolve, reject)=>{
        script = document.createElement('script');
        // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.
        script.onload = resolve;
        script.onerror = ()=>reject(markAssetError(Object.defineProperty(new Error("Failed to load script: " + src), "__NEXT_ERROR_CODE", {
                value: "E74",
                enumerable: false,
                configurable: true
            })));
        // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.
        script.crossOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_CROSS_ORIGIN;
        // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.
        script.src = src;
        document.body.appendChild(script);
    });
}
// We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.
let devBuildPromise;
// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p, ms, err) {
    return new Promise((resolve, reject)=>{
        let cancelled = false;
        p.then((r)=>{
            // Resolved, cancel the timeout
            cancelled = true;
            resolve(r);
        }).catch(reject);
        // We wrap these checks separately for better dead-code elimination in
        // production bundles.
        if ("TURBOPACK compile-time truthy", 1) {
            ;
            (devBuildPromise || Promise.resolve()).then(()=>{
                (0, _requestidlecallback.requestIdleCallback)(()=>setTimeout(()=>{
                        if (!cancelled) {
                            reject(err);
                        }
                    }, ms));
            });
        }
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    });
}
function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
    }
    const onBuildManifest = new Promise((resolve)=>{
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = ()=>{
            resolve(self.__BUILD_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(Object.defineProperty(new Error('Failed to load client build manifest'), "__NEXT_ERROR_CODE", {
        value: "E273",
        enumerable: false,
        configurable: true
    })));
}
function getFilesForRoute(assetPrefix, route) {
    if ("TURBOPACK compile-time truthy", 1) {
        const scriptUrl = assetPrefix + '/_next/static/chunks/pages' + (0, _encodeuripath.encodeURIPath)((0, _getassetpathfromroute.default)(route, '.js')) + getAssetQueryString();
        return Promise.resolve({
            scripts: [
                (0, _trustedtypes.__unsafeCreateTrustedScriptURL)(scriptUrl)
            ],
            // Styles are handled by `style-loader` in development:
            css: []
        });
    }
    "TURBOPACK unreachable";
}
function createRouteLoader(assetPrefix) {
    const entrypoints = new Map();
    const loadedScripts = new Map();
    const styleSheets = new Map();
    const routes = new Map();
    function maybeExecuteScript(src) {
        // With HMR we might need to "reload" scripts when they are
        // disposed and readded. Executing scripts twice has no functional
        // differences
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            return appendScript(src);
        }
    }
    function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
            return prom;
        }
        styleSheets.set(href, prom = fetch(href, {
            credentials: 'same-origin'
        }).then((res)=>{
            if (!res.ok) {
                throw Object.defineProperty(new Error("Failed to load stylesheet: " + href), "__NEXT_ERROR_CODE", {
                    value: "E189",
                    enumerable: false,
                    configurable: true
                });
            }
            return res.text().then((text)=>({
                    href: href,
                    content: text
                }));
        }).catch((err)=>{
            throw markAssetError(err);
        }));
        return prom;
    }
    return {
        whenEntrypoint (route) {
            return withFuture(route, entrypoints);
        },
        onEntrypoint (route, execute) {
            ;
            (execute ? Promise.resolve().then(()=>execute()).then((exports1)=>({
                    component: exports1 && exports1.default || exports1,
                    exports: exports1
                }), (err)=>({
                    error: err
                })) : Promise.resolve(undefined)).then((input)=>{
                const old = entrypoints.get(route);
                if (old && 'resolve' in old) {
                    if (input) {
                        entrypoints.set(route, input);
                        old.resolve(input);
                    }
                } else {
                    if (input) {
                        entrypoints.set(route, input);
                    } else {
                        entrypoints.delete(route);
                    }
                    // when this entrypoint has been resolved before
                    // the route is outdated and we want to invalidate
                    // this cache entry
                    routes.delete(route);
                }
            });
        },
        loadRoute (route, prefetch) {
            return withFuture(route, routes, ()=>{
                let devBuildPromiseResolve;
                if ("TURBOPACK compile-time truthy", 1) {
                    devBuildPromise = new Promise((resolve)=>{
                        devBuildPromiseResolve = resolve;
                    });
                }
                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then((param)=>{
                    let { scripts, css } = param;
                    return Promise.all([
                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet))
                    ]);
                }).then((res)=>{
                    return this.whenEntrypoint(route).then((entrypoint)=>({
                            entrypoint,
                            styles: res[1]
                        }));
                }), MS_MAX_IDLE_DELAY, markAssetError(Object.defineProperty(new Error("Route did not complete loading: " + route), "__NEXT_ERROR_CODE", {
                    value: "E12",
                    enumerable: false,
                    configurable: true
                }))).then((param)=>{
                    let { entrypoint, styles } = param;
                    const res = Object.assign({
                        styles: styles
                    }, entrypoint);
                    return 'error' in entrypoint ? entrypoint : res;
                }).catch((err)=>{
                    if (prefetch) {
                        // we don't want to cache errors during prefetch
                        throw err;
                    }
                    return {
                        error: err
                    };
                }).finally(()=>devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve());
            });
        },
        prefetch (route) {
            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
            // License: Apache 2.0
            let cn;
            if (cn = navigator.connection) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
            }
            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script.toString(), 'script')) : [])).then(()=>{
                (0, _requestidlecallback.requestIdleCallback)(()=>this.loadRoute(route, true).catch(()=>{}));
            }).catch(()=>{});
        }
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-loader.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/page-loader.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/add-base-path.js [client] (ecmascript)");
const _interpolateas = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js [client] (ecmascript)");
const _getassetpathfromroute = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js [client] (ecmascript)"));
const _addlocale = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/add-locale.js [client] (ecmascript)");
const _isdynamic = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [client] (ecmascript)");
const _parserelativeurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [client] (ecmascript)");
const _removetrailingslash = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [client] (ecmascript)");
const _routeloader = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/route-loader.js [client] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/constants.js [client] (ecmascript)");
class PageLoader {
    getPageList() {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            if (window.__DEV_PAGES_MANIFEST) {
                return window.__DEV_PAGES_MANIFEST.pages;
            } else {
                this.promisedDevPagesManifest || (this.promisedDevPagesManifest = fetch(this.assetPrefix + "/_next/static/development/" + _constants.DEV_CLIENT_PAGES_MANIFEST, {
                    credentials: 'same-origin'
                }).then((res)=>res.json()).then((manifest)=>{
                    window.__DEV_PAGES_MANIFEST = manifest;
                    return manifest.pages;
                }).catch((err)=>{
                    console.log("Failed to fetch devPagesManifest:", err);
                    throw Object.defineProperty(new Error("Failed to fetch _devPagesManifest.json. Is something blocking that network request?\n" + 'Read more: https://nextjs.org/docs/messages/failed-to-fetch-devpagesmanifest'), "__NEXT_ERROR_CODE", {
                        value: "E423",
                        enumerable: false,
                        configurable: true
                    });
                }));
                return this.promisedDevPagesManifest;
            }
        }
    }
    getMiddleware() {
        // Webpack production
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        // Turbopack production
        } else if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        // Development both Turbopack and Webpack
        } else {
            if (window.__DEV_MIDDLEWARE_MATCHERS) {
                return window.__DEV_MIDDLEWARE_MATCHERS;
            } else {
                if (!this.promisedMiddlewareMatchers) {
                    // TODO: Decide what should happen when fetching fails instead of asserting
                    // @ts-ignore
                    this.promisedMiddlewareMatchers = fetch(this.assetPrefix + "/_next/static/" + this.buildId + "/" + _constants.DEV_CLIENT_MIDDLEWARE_MANIFEST, {
                        credentials: 'same-origin'
                    }).then((res)=>res.json()).then((matchers)=>{
                        window.__DEV_MIDDLEWARE_MATCHERS = matchers;
                        return matchers;
                    }).catch((err)=>{
                        console.log("Failed to fetch _devMiddlewareManifest", err);
                    });
                }
                // TODO Remove this assertion as this could be undefined
                return this.promisedMiddlewareMatchers;
            }
        }
    }
    getDataHref(params) {
        const { asPath, href, locale } = params;
        const { pathname: hrefPathname, query, search } = (0, _parserelativeurl.parseRelativeUrl)(href);
        const { pathname: asPathname } = (0, _parserelativeurl.parseRelativeUrl)(asPath);
        const route = (0, _removetrailingslash.removeTrailingSlash)(hrefPathname);
        if (route[0] !== '/') {
            throw Object.defineProperty(new Error('Route name should start with a "/", got "' + route + '"'), "__NEXT_ERROR_CODE", {
                value: "E303",
                enumerable: false,
                configurable: true
            });
        }
        const getHrefForSlug = (path)=>{
            const dataRoute = (0, _getassetpathfromroute.default)((0, _removetrailingslash.removeTrailingSlash)((0, _addlocale.addLocale)(path, locale)), '.json');
            return (0, _addbasepath.addBasePath)("/_next/data/" + this.buildId + dataRoute + search, true);
        };
        return getHrefForSlug(params.skipInterpolation ? asPathname : (0, _isdynamic.isDynamicRoute)(route) ? (0, _interpolateas.interpolateAs)(hrefPathname, asPathname, query).result : route);
    }
    _isSsg(/** the route (file-system path) */ route) {
        return this.promisedSsgManifest.then((manifest)=>manifest.has(route));
    }
    loadPage(route) {
        return this.routeLoader.loadRoute(route).then((res)=>{
            if ('component' in res) {
                return {
                    page: res.component,
                    mod: res.exports,
                    styleSheets: res.styles.map((o)=>({
                            href: o.href,
                            text: o.content
                        }))
                };
            }
            throw res.error;
        });
    }
    prefetch(route) {
        return this.routeLoader.prefetch(route);
    }
    constructor(buildId, assetPrefix){
        this.routeLoader = (0, _routeloader.createRouteLoader)(assetPrefix);
        this.buildId = buildId;
        this.assetPrefix = assetPrefix;
        this.promisedSsgManifest = new Promise((resolve)=>{
            if (window.__SSG_MANIFEST) {
                resolve(window.__SSG_MANIFEST);
            } else {
                window.__SSG_MANIFEST_CB = ()=>{
                    resolve(window.__SSG_MANIFEST);
                };
            }
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=page-loader.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/script.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [client] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/set-attributes-from-props.js [client] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/request-idle-callback.js [client] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if (typeof window !== 'undefined') {
        let head = document.head;
        stylesheets.forEach((stylesheet)=>{
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = stylesheet;
            head.appendChild(link);
        });
    }
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    const { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript(props);
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ]) + ")"
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ]) + ")"
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/app-router-headers.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HEADER: null,
    FLIGHT_HEADERS: null,
    NEXT_DID_POSTPONE_HEADER: null,
    NEXT_HMR_REFRESH_HEADER: null,
    NEXT_IS_PRERENDER_HEADER: null,
    NEXT_REWRITTEN_PATH_HEADER: null,
    NEXT_REWRITTEN_QUERY_HEADER: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: null,
    NEXT_ROUTER_STALE_TIME_HEADER: null,
    NEXT_ROUTER_STATE_TREE_HEADER: null,
    NEXT_RSC_UNION_QUERY: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_HEADER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'RSC';
const ACTION_HEADER = 'Next-Action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
const NEXT_URL = 'Next-Url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/remove-base-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeBasePath", {
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
});
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function removeBasePath(path) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith('/')) path = "/" + path;
    return path;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/detect-domain-locale.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "detectDomainLocale", {
    enumerable: true,
    get: function() {
        return detectDomainLocale;
    }
});
const detectDomainLocale = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=detect-domain-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/remove-locale.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeLocale", {
    enumerable: true,
    get: function() {
        return removeLocale;
    }
});
const _parsepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)");
function removeLocale(path, locale) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return path;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/resolve-href.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "resolveHref", {
    enumerable: true,
    get: function() {
        return resolveHref;
    }
});
const _querystring = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
const _formaturl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/format-url.js [client] (ecmascript)");
const _omit = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/omit.js [client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
const _normalizetrailingslash = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [client] (ecmascript)");
const _utils1 = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/index.js [client] (ecmascript)");
const _interpolateas = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js [client] (ecmascript)");
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === 'string' ? href : (0, _formaturl.formatWithValidation)(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split('?', 1);
    if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL('/', 'http://n');
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = '';
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formaturl.formatWithValidation)({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: (0, _omit.omit)(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=resolve-href.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/with-router.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return withRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _router = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/router.js [client] (ecmascript)");
function withRouter(ComposedComponent) {
    function WithRouterWrapper(props) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(ComposedComponent, {
            router: (0, _router.useRouter)(),
            ...props
        });
    }
    WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
    WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
    if ("TURBOPACK compile-time truthy", 1) {
        const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
        WithRouterWrapper.displayName = "withRouter(" + name + ")";
    }
    return WithRouterWrapper;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=with-router.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/router.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/* global window */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Router: null,
    createRouter: null,
    default: null,
    makePublicRouterInstance: null,
    useRouter: null,
    withRouter: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Router: function() {
        return _router.default;
    },
    createRouter: function() {
        return createRouter;
    },
    // Export the singletonRouter and this is the public API.
    default: function() {
        return _default;
    },
    makePublicRouterInstance: function() {
        return makePublicRouterInstance;
    },
    useRouter: function() {
        return useRouter;
    },
    withRouter: function() {
        return _withrouter.default;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _router = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/router.js [client] (ecmascript)"));
const _routercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
const _withrouter = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/with-router.js [client] (ecmascript)"));
const singletonRouter = {
    router: null,
    readyCallbacks: [],
    ready (callback) {
        if (this.router) return callback();
        if (typeof window !== 'undefined') {
            this.readyCallbacks.push(callback);
        }
    }
};
// Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = [
    'pathname',
    'route',
    'query',
    'asPath',
    'components',
    'isFallback',
    'basePath',
    'locale',
    'locales',
    'defaultLocale',
    'isReady',
    'isPreview',
    'isLocaleDomain',
    'domainLocales'
];
const routerEvents = [
    'routeChangeStart',
    'beforeHistoryChange',
    'routeChangeComplete',
    'routeChangeError',
    'hashChangeStart',
    'hashChangeComplete'
];
const coreMethodFields = [
    'push',
    'replace',
    'reload',
    'back',
    'prefetch',
    'beforePopState'
];
// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
    get () {
        return _router.default.events;
    }
});
function getRouter() {
    if (!singletonRouter.router) {
        const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return singletonRouter.router;
}
urlPropertyFields.forEach((field)=>{
    // Here we need to use Object.defineProperty because we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    Object.defineProperty(singletonRouter, field, {
        get () {
            const router = getRouter();
            return router[field];
        }
    });
});
coreMethodFields.forEach((field)=>{
    // We don't really know the types here, so we add them later instead
    ;
    singletonRouter[field] = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const router = getRouter();
        return router[field](...args);
    };
});
routerEvents.forEach((event)=>{
    singletonRouter.ready(()=>{
        _router.default.events.on(event, function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
            const _singletonRouter = singletonRouter;
            if (_singletonRouter[eventField]) {
                try {
                    _singletonRouter[eventField](...args);
                } catch (err) {
                    console.error("Error when running the Router event: " + eventField);
                    console.error((0, _iserror.default)(err) ? err.message + "\n" + err.stack : err + '');
                }
            }
        });
    });
});
const _default = singletonRouter;
function useRouter() {
    const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
    if (!router) {
        throw Object.defineProperty(new Error('NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted'), "__NEXT_ERROR_CODE", {
            value: "E509",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function createRouter() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    singletonRouter.router = new _router.default(...args);
    singletonRouter.readyCallbacks.forEach((cb)=>cb());
    singletonRouter.readyCallbacks = [];
    return singletonRouter.router;
}
function makePublicRouterInstance(router) {
    const scopedRouter = router;
    const instance = {};
    for (const property of urlPropertyFields){
        if (typeof scopedRouter[property] === 'object') {
            instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
            ;
            continue;
        }
        instance[property] = scopedRouter[property];
    }
    // Events is a static property on the router, the router doesn't have to be initialized to use it
    instance.events = _router.default.events;
    coreMethodFields.forEach((field)=>{
        instance[field] = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return scopedRouter[field](...args);
        };
    });
    return instance;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/route-announcer.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RouteAnnouncer: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RouteAnnouncer: function() {
        return RouteAnnouncer;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _router = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/router.js [client] (ecmascript)");
const nextjsRouteAnnouncerStyles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '1px',
    // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
};
const RouteAnnouncer = ()=>{
    const { asPath } = (0, _router.useRouter)();
    const [routeAnnouncement, setRouteAnnouncement] = _react.default.useState('');
    // Only announce the path change, but not for the first load because screen
    // reader will do that automatically.
    const previouslyLoadedPath = _react.default.useRef(asPath);
    // Every time the path changes, announce the new page’s title following this
    // priority: first the document title (from head), otherwise the first h1, or
    // if none of these exist, then the pathname from the URL. This methodology is
    // inspired by Marcy Sutton’s accessible client routing user testing. More
    // information can be found here:
    // https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/
    _react.default.useEffect({
        "RouteAnnouncer.useEffect": ()=>{
            // If the path hasn't change, we do nothing.
            if (previouslyLoadedPath.current === asPath) return;
            previouslyLoadedPath.current = asPath;
            if (document.title) {
                setRouteAnnouncement(document.title);
            } else {
                const pageHeader = document.querySelector('h1');
                var _pageHeader_innerText;
                const content = (_pageHeader_innerText = pageHeader == null ? void 0 : pageHeader.innerText) != null ? _pageHeader_innerText : pageHeader == null ? void 0 : pageHeader.textContent;
                setRouteAnnouncement(content || asPath);
            }
        }
    }["RouteAnnouncer.useEffect"], [
        asPath
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
        "aria-live": "assertive" // Make the announcement immediately.
        ,
        id: "__next-route-announcer__",
        role: "alert",
        style: nextjsRouteAnnouncerStyles,
        children: routeAnnouncement
    });
};
const _default = RouteAnnouncer;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-announcer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reportGlobalError", {
    enumerable: true,
    get: function() {
        return reportGlobalError;
    }
});
const reportGlobalError = typeof reportError === 'function' ? reportError : (error)=>{
    // TODO: Dispatch error event
    globalThis.console.error(error);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=report-global-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/stitched-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getReactStitchedError", {
    enumerable: true,
    get: function() {
        return getReactStitchedError;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
const _errortelemetryutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/lib/error-telemetry-utils.js [client] (ecmascript)");
const REACT_ERROR_STACK_BOTTOM_FRAME = 'react-stack-bottom-frame';
const REACT_ERROR_STACK_BOTTOM_FRAME_REGEX = new RegExp("(at " + REACT_ERROR_STACK_BOTTOM_FRAME + " )|(" + REACT_ERROR_STACK_BOTTOM_FRAME + "\\@)");
function getReactStitchedError(err) {
    const isErrorInstance = (0, _iserror.default)(err);
    const originStack = isErrorInstance ? err.stack || '' : '';
    const originMessage = isErrorInstance ? err.message : '';
    const stackLines = originStack.split('\n');
    const indexOfSplit = stackLines.findIndex((line)=>REACT_ERROR_STACK_BOTTOM_FRAME_REGEX.test(line));
    const isOriginalReactError = indexOfSplit >= 0 // has the react-stack-bottom-frame
    ;
    let newStack = isOriginalReactError ? stackLines.slice(0, indexOfSplit).join('\n') : originStack;
    const newError = Object.defineProperty(new Error(originMessage), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    // Copy all enumerable properties, e.g. digest
    Object.assign(newError, err);
    (0, _errortelemetryutils.copyNextErrorCode)(err, newError);
    newError.stack = newStack;
    // Avoid duplicate overriding stack frames
    appendOwnerStack(newError);
    return newError;
}
function appendOwnerStack(error) {
    if (!_react.default.captureOwnerStack) {
        return;
    }
    let stack = error.stack || '';
    // This module is only bundled in development mode so this is safe.
    const ownerStack = _react.default.captureOwnerStack();
    // Avoid duplicate overriding stack frames
    if (ownerStack && stack.endsWith(ownerStack) === false) {
        stack += ownerStack;
        // Override stack
        error.stack = stack;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=stitched-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// This module can be shared between both pages router and app router
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "onRecoverableError", {
    enumerable: true,
    get: function() {
        return onRecoverableError;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [client] (ecmascript)");
const _reportglobalerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [client] (ecmascript)");
const _stitchederror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/stitched-error.js [client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
const onRecoverableError = (error, errorInfo)=>{
    // x-ref: https://github.com/facebook/react/pull/28736
    const cause = (0, _iserror.default)(error) && 'cause' in error ? error.cause : error;
    const stitchedError = (0, _stitchederror.getReactStitchedError)(cause);
    // In development mode, pass along the component stack to the error
    if (("TURBOPACK compile-time value", "development") === 'development' && errorInfo.componentStack) {
        ;
        stitchedError._componentStack = errorInfo.componentStack;
    }
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(cause)) return;
    (0, _reportglobalerror.reportGlobalError)(stitchedError);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=on-recoverable-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/tracing/tracer.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _mitt = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/mitt.js [client] (ecmascript)"));
class Span {
    end(endTime) {
        if (this.state.state === 'ended') {
            throw Object.defineProperty(new Error('Span has already ended'), "__NEXT_ERROR_CODE", {
                value: "E17",
                enumerable: false,
                configurable: true
            });
        }
        this.state = {
            state: 'ended',
            endTime: endTime != null ? endTime : Date.now()
        };
        this.onSpanEnd(this);
    }
    constructor(name, options, onSpanEnd){
        this.name = name;
        var _options_attributes;
        this.attributes = (_options_attributes = options.attributes) != null ? _options_attributes : {};
        var _options_startTime;
        this.startTime = (_options_startTime = options.startTime) != null ? _options_startTime : Date.now();
        this.onSpanEnd = onSpanEnd;
        this.state = {
            state: 'inprogress'
        };
    }
}
class Tracer {
    startSpan(name, options) {
        return new Span(name, options, this.handleSpanEnd);
    }
    onSpanEnd(cb) {
        this._emitter.on('spanend', cb);
        return ()=>{
            this._emitter.off('spanend', cb);
        };
    }
    constructor(){
        this._emitter = (0, _mitt.default)();
        this.handleSpanEnd = (span)=>{
            this._emitter.emit('spanend', span);
        };
    }
}
const _default = new Tracer();
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=tracer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-status-code.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-status-code.js [client] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/is-next-router-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [client] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/redirect-error.js [client] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/pages-dev-overlay-error-boundary.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PagesDevOverlayErrorBoundary", {
    enumerable: true,
    get: function() {
        return PagesDevOverlayErrorBoundary;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
class PagesDevOverlayErrorBoundary extends _react.default.PureComponent {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, // accidentally excluded in some versions.
    errorInfo) {
        this.props.onError(error, (errorInfo == null ? void 0 : errorInfo.componentStack) || null);
        this.setState({
            error
        });
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        // The component has to be unmounted or else it would continue to error
        return this.state.error ? null : this.props.children;
    }
    constructor(...args){
        super(...args), this.state = {
            error: null
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=pages-dev-overlay-error-boundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/bus.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    emit: null,
    off: null,
    on: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    emit: function() {
        return emit;
    },
    off: function() {
        return off;
    },
    on: function() {
        return on;
    }
});
let handlers = new Set();
let queue = [];
function drain() {
    // Draining should never happen synchronously in case multiple handlers are
    // registered.
    setTimeout(function() {
        while(Boolean(queue.length) && // Or, if all handlers removed themselves as a result of handling the
        // event(s)
        Boolean(handlers.size)){
            const ev = queue.shift();
            handlers.forEach((handler)=>handler(ev));
        }
    }, 1);
}
function emit(ev) {
    queue.push(Object.freeze({
        ...ev
    }));
    drain();
}
function on(fn) {
    if (handlers.has(fn)) {
        return false;
    }
    handlers.add(fn);
    drain();
    return true;
}
function off(fn) {
    if (handlers.has(fn)) {
        handlers.delete(fn);
        return true;
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bus.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_BEFORE_REFRESH: null,
    ACTION_BUILD_ERROR: null,
    ACTION_BUILD_OK: null,
    ACTION_DEBUG_INFO: null,
    ACTION_DEV_INDICATOR: null,
    ACTION_REFRESH: null,
    ACTION_STATIC_INDICATOR: null,
    ACTION_UNHANDLED_ERROR: null,
    ACTION_UNHANDLED_REJECTION: null,
    ACTION_VERSION_INFO: null,
    INITIAL_OVERLAY_STATE: null,
    REACT_REFRESH_FULL_RELOAD_FROM_ERROR: null,
    STORAGE_KEY_POSITION: null,
    STORAGE_KEY_THEME: null,
    useErrorOverlayReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_BEFORE_REFRESH: function() {
        return ACTION_BEFORE_REFRESH;
    },
    ACTION_BUILD_ERROR: function() {
        return ACTION_BUILD_ERROR;
    },
    ACTION_BUILD_OK: function() {
        return ACTION_BUILD_OK;
    },
    ACTION_DEBUG_INFO: function() {
        return ACTION_DEBUG_INFO;
    },
    ACTION_DEV_INDICATOR: function() {
        return ACTION_DEV_INDICATOR;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_STATIC_INDICATOR: function() {
        return ACTION_STATIC_INDICATOR;
    },
    ACTION_UNHANDLED_ERROR: function() {
        return ACTION_UNHANDLED_ERROR;
    },
    ACTION_UNHANDLED_REJECTION: function() {
        return ACTION_UNHANDLED_REJECTION;
    },
    ACTION_VERSION_INFO: function() {
        return ACTION_VERSION_INFO;
    },
    INITIAL_OVERLAY_STATE: function() {
        return INITIAL_OVERLAY_STATE;
    },
    REACT_REFRESH_FULL_RELOAD_FROM_ERROR: function() {
        return REACT_REFRESH_FULL_RELOAD_FROM_ERROR;
    },
    STORAGE_KEY_POSITION: function() {
        return STORAGE_KEY_POSITION;
    },
    STORAGE_KEY_THEME: function() {
        return STORAGE_KEY_THEME;
    },
    useErrorOverlayReducer: function() {
        return useErrorOverlayReducer;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
var _process_env___NEXT_DEV_INDICATOR;
const ACTION_STATIC_INDICATOR = 'static-indicator';
const ACTION_BUILD_OK = 'build-ok';
const ACTION_BUILD_ERROR = 'build-error';
const ACTION_BEFORE_REFRESH = 'before-fast-refresh';
const ACTION_REFRESH = 'fast-refresh';
const ACTION_VERSION_INFO = 'version-info';
const ACTION_UNHANDLED_ERROR = 'unhandled-error';
const ACTION_UNHANDLED_REJECTION = 'unhandled-rejection';
const ACTION_DEBUG_INFO = 'debug-info';
const ACTION_DEV_INDICATOR = 'dev-indicator';
const STORAGE_KEY_THEME = '__nextjs-dev-tools-theme';
const STORAGE_KEY_POSITION = '__nextjs-dev-tools-position';
function pushErrorFilterDuplicates(errors, err) {
    return [
        ...errors.filter((e)=>{
            // Filter out duplicate errors
            return e.event.reason.stack !== err.event.reason.stack;
        }),
        err
    ];
}
const shouldDisableDevIndicator = ((_process_env___NEXT_DEV_INDICATOR = ("TURBOPACK compile-time value", true)) == null ? void 0 : _process_env___NEXT_DEV_INDICATOR.toString()) === 'false';
const INITIAL_OVERLAY_STATE = {
    nextId: 1,
    buildError: null,
    errors: [],
    notFound: false,
    staticIndicator: false,
    // To prevent flickering, set the initial state to disabled.
    disableDevIndicator: true,
    refreshState: {
        type: 'idle'
    },
    rootLayoutMissingTags: [],
    versionInfo: {
        installed: '0.0.0',
        staleness: 'unknown'
    },
    debugInfo: {
        devtoolsFrontendUrl: undefined
    }
};
function getInitialState(routerType) {
    return {
        ...INITIAL_OVERLAY_STATE,
        routerType
    };
}
function useErrorOverlayReducer(routerType) {
    return (0, _react.useReducer)((_state, action)=>{
        switch(action.type){
            case ACTION_DEBUG_INFO:
                {
                    return {
                        ..._state,
                        debugInfo: action.debugInfo
                    };
                }
            case ACTION_STATIC_INDICATOR:
                {
                    return {
                        ..._state,
                        staticIndicator: action.staticIndicator
                    };
                }
            case ACTION_BUILD_OK:
                {
                    return {
                        ..._state,
                        buildError: null
                    };
                }
            case ACTION_BUILD_ERROR:
                {
                    return {
                        ..._state,
                        buildError: action.message
                    };
                }
            case ACTION_BEFORE_REFRESH:
                {
                    return {
                        ..._state,
                        refreshState: {
                            type: 'pending',
                            errors: []
                        }
                    };
                }
            case ACTION_REFRESH:
                {
                    return {
                        ..._state,
                        buildError: null,
                        errors: // and UNHANDLED_REJECTION events might be dispatched between the
                        // BEFORE_REFRESH and the REFRESH event. We want to keep those errors
                        // around until the next refresh. Otherwise we run into a race
                        // condition where those errors would be cleared on refresh completion
                        // before they can be displayed.
                        _state.refreshState.type === 'pending' ? _state.refreshState.errors : [],
                        refreshState: {
                            type: 'idle'
                        }
                    };
                }
            case ACTION_UNHANDLED_ERROR:
            case ACTION_UNHANDLED_REJECTION:
                {
                    switch(_state.refreshState.type){
                        case 'idle':
                            {
                                return {
                                    ..._state,
                                    nextId: _state.nextId + 1,
                                    errors: pushErrorFilterDuplicates(_state.errors, {
                                        id: _state.nextId,
                                        event: action
                                    })
                                };
                            }
                        case 'pending':
                            {
                                return {
                                    ..._state,
                                    nextId: _state.nextId + 1,
                                    refreshState: {
                                        ..._state.refreshState,
                                        errors: pushErrorFilterDuplicates(_state.refreshState.errors, {
                                            id: _state.nextId,
                                            event: action
                                        })
                                    }
                                };
                            }
                        default:
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            const _ = _state.refreshState;
                            return _state;
                    }
                }
            case ACTION_VERSION_INFO:
                {
                    return {
                        ..._state,
                        versionInfo: action.versionInfo
                    };
                }
            case ACTION_DEV_INDICATOR:
                {
                    return {
                        ..._state,
                        disableDevIndicator: shouldDisableDevIndicator || !!action.devIndicator.disabledUntil
                    };
                }
            default:
                {
                    return _state;
                }
        }
    }, getInitialState(routerType));
}
const REACT_REFRESH_FULL_RELOAD_FROM_ERROR = '[Fast Refresh] performing full reload because your application had an unrecoverable error';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=shared.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NEXTJS_HYDRATION_ERROR_LINK: null,
    REACT_HYDRATION_ERROR_LINK: null,
    getDefaultHydrationErrorMessage: null,
    getHydrationErrorStackInfo: null,
    isHydrationError: null,
    isReactHydrationErrorMessage: null,
    testReactHydrationWarning: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NEXTJS_HYDRATION_ERROR_LINK: function() {
        return NEXTJS_HYDRATION_ERROR_LINK;
    },
    REACT_HYDRATION_ERROR_LINK: function() {
        return REACT_HYDRATION_ERROR_LINK;
    },
    getDefaultHydrationErrorMessage: function() {
        return getDefaultHydrationErrorMessage;
    },
    getHydrationErrorStackInfo: function() {
        return getHydrationErrorStackInfo;
    },
    isHydrationError: function() {
        return isHydrationError;
    },
    isReactHydrationErrorMessage: function() {
        return isReactHydrationErrorMessage;
    },
    testReactHydrationWarning: function() {
        return testReactHydrationWarning;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
const hydrationErrorRegex = /hydration failed|while hydrating|content does not match|did not match|HTML didn't match/i;
const reactUnifiedMismatchWarning = "Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:";
const reactHydrationStartMessages = [
    reactUnifiedMismatchWarning,
    "A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:"
];
const REACT_HYDRATION_ERROR_LINK = 'https://react.dev/link/hydration-mismatch';
const NEXTJS_HYDRATION_ERROR_LINK = 'https://nextjs.org/docs/messages/react-hydration-error';
const getDefaultHydrationErrorMessage = ()=>{
    return reactUnifiedMismatchWarning;
};
function isHydrationError(error) {
    return (0, _iserror.default)(error) && hydrationErrorRegex.test(error.message);
}
function isReactHydrationErrorMessage(msg) {
    return reactHydrationStartMessages.some((prefix)=>msg.startsWith(prefix));
}
const hydrationWarningRegexes = [
    /^In HTML, (.+?) cannot be a child of <(.+?)>\.(.*)\nThis will cause a hydration error\.(.*)/,
    /^In HTML, (.+?) cannot be a descendant of <(.+?)>\.\nThis will cause a hydration error\.(.*)/,
    /^In HTML, text nodes cannot be a child of <(.+?)>\.\nThis will cause a hydration error\./,
    /^In HTML, whitespace text nodes cannot be a child of <(.+?)>\. Make sure you don't have any extra whitespace between tags on each line of your source code\.\nThis will cause a hydration error\./,
    /^Expected server HTML to contain a matching <(.+?)> in <(.+?)>\.(.*)/,
    /^Did not expect server HTML to contain a <(.+?)> in <(.+?)>\.(.*)/,
    /^Expected server HTML to contain a matching text node for "(.+?)" in <(.+?)>\.(.*)/,
    /^Did not expect server HTML to contain the text node "(.+?)" in <(.+?)>\.(.*)/,
    /^Text content did not match\. Server: "(.+?)" Client: "(.+?)"(.*)/
];
function testReactHydrationWarning(msg) {
    if (typeof msg !== 'string' || !msg) return false;
    // React 18 has the `Warning: ` prefix.
    // React 19 does not.
    if (msg.startsWith('Warning: ')) {
        msg = msg.slice('Warning: '.length);
    }
    return hydrationWarningRegexes.some((regex)=>regex.test(msg));
}
function getHydrationErrorStackInfo(rawMessage) {
    rawMessage = rawMessage.replace(/^Error: /, '');
    rawMessage = rawMessage.replace('Warning: ', '');
    const isReactHydrationWarning = testReactHydrationWarning(rawMessage);
    if (!isReactHydrationErrorMessage(rawMessage) && !isReactHydrationWarning) {
        return {
            message: null,
            stack: rawMessage,
            diff: ''
        };
    }
    if (isReactHydrationWarning) {
        const [message, diffLog] = rawMessage.split('\n\n');
        return {
            message: message.trim(),
            stack: '',
            diff: (diffLog || '').trim()
        };
    }
    const firstLineBreak = rawMessage.indexOf('\n');
    rawMessage = rawMessage.slice(firstLineBreak + 1).trim();
    const [message, trailing] = rawMessage.split("" + REACT_HYDRATION_ERROR_LINK);
    const trimmedMessage = message.trim();
    // React built-in hydration diff starts with a newline, checking if length is > 1
    if (trailing && trailing.length > 1) {
        const stacks = [];
        const diffs = [];
        trailing.split('\n').forEach((line)=>{
            if (line.trim() === '') return;
            if (line.trim().startsWith('at ')) {
                stacks.push(line);
            } else {
                diffs.push(line);
            }
        });
        return {
            message: trimmedMessage,
            diff: diffs.join('\n'),
            stack: stacks.join('\n')
        };
    } else {
        return {
            message: trimmedMessage,
            stack: trailing
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-hydration-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/parse-stack.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseStack", {
    enumerable: true,
    get: function() {
        return parseStack;
    }
});
const _stacktraceparser = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [client] (ecmascript)");
const _ishydrationerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)");
const regexNextStatic = /\/_next(\/static\/.+)/;
function parseStack(stack) {
    if (!stack) return [];
    const messageAndStack = stack.replace(/^Error: /, '');
    if ((0, _ishydrationerror.isReactHydrationErrorMessage)(messageAndStack)) {
        const { stack: parsedStack } = (0, _ishydrationerror.getHydrationErrorStackInfo)(messageAndStack);
        if (parsedStack) {
            stack = parsedStack;
        }
    }
    // throw away eval information that stacktrace-parser doesn't support
    // adapted from https://github.com/stacktracejs/error-stack-parser/blob/9f33c224b5d7b607755eb277f9d51fcdb7287e24/error-stack-parser.js#L59C33-L59C62
    stack = stack.split('\n').map((line)=>{
        if (line.includes('(eval ')) {
            line = line.replace(/eval code/g, 'eval').replace(/\(eval at [^()]* \(/, '(file://').replace(/\),.*$/g, ')');
        }
        return line;
    }).join('\n');
    const frames = (0, _stacktraceparser.parse)(stack);
    return frames.map((frame)=>{
        try {
            const url = new URL(frame.file);
            const res = regexNextStatic.exec(url.pathname);
            if (res) {
                var _process_env___NEXT_DIST_DIR_replace, _process_env___NEXT_DIST_DIR;
                const distDir = (_process_env___NEXT_DIST_DIR = ("TURBOPACK compile-time value", "/Users/coshi/coshi-cook/openbbq/build")) == null ? void 0 : (_process_env___NEXT_DIST_DIR_replace = _process_env___NEXT_DIST_DIR.replace(/\\/g, '/')) == null ? void 0 : _process_env___NEXT_DIST_DIR_replace.replace(/\/$/, '');
                if (distDir) {
                    frame.file = 'file://' + distDir.concat(res.pop()) + url.search;
                }
            }
        } catch (e) {}
        return frame;
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parse-stack.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/parse-component-stack.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseComponentStack", {
    enumerable: true,
    get: function() {
        return parseComponentStack;
    }
});
var LocationType = /*#__PURE__*/ function(LocationType) {
    LocationType["FILE"] = "file";
    LocationType["WEBPACK_INTERNAL"] = "webpack-internal";
    LocationType["HTTP"] = "http";
    LocationType["PROTOCOL_RELATIVE"] = "protocol-relative";
    LocationType["UNKNOWN"] = "unknown";
    return LocationType;
}(LocationType || {});
/**
 * Get the type of frame line based on the location
 */ function getLocationType(location) {
    if (location.startsWith('file://')) {
        return "file";
    }
    if (location.includes('webpack-internal://')) {
        return "webpack-internal";
    }
    if (location.startsWith('http://') || location.startsWith('https://')) {
        return "http";
    }
    if (location.startsWith('//')) {
        return "protocol-relative";
    }
    return "unknown";
}
function parseStackFrameLocation(location) {
    const locationType = getLocationType(location);
    const modulePath = location == null ? void 0 : location.replace(/^(webpack-internal:\/\/\/|file:\/\/)(\(.*\)\/)?/, '');
    var _modulePath_match;
    const [, file, lineNumber, column] = (_modulePath_match = modulePath == null ? void 0 : modulePath.match(/^(.+):(\d+):(\d+)/)) != null ? _modulePath_match : [];
    switch(locationType){
        case "file":
        case "webpack-internal":
            return {
                canOpenInEditor: true,
                file,
                lineNumber: lineNumber ? Number(lineNumber) : undefined,
                column: column ? Number(column) : undefined
            };
        // When the location is a URL we only show the file
        // TODO: Resolve http(s) URLs through sourcemaps
        case "http":
        case "protocol-relative":
        case "unknown":
        default:
            {
                return {
                    canOpenInEditor: false
                };
            }
    }
}
function parseComponentStack(componentStack) {
    const componentStackFrames = [];
    for (const line of componentStack.trim().split('\n')){
        // TODO: support safari stack trace
        // Get component and file from the component stack line
        const match = /at ([^ ]+)( \((.*)\))?/.exec(line);
        if (match == null ? void 0 : match[1]) {
            const component = match[1];
            const location = match[3];
            if (!location) {
                componentStackFrames.push({
                    canOpenInEditor: false,
                    component
                });
                continue;
            }
            // Stop parsing the component stack if we reach a Next.js component
            if (location == null ? void 0 : location.includes('next/dist')) {
                break;
            }
            const frameLocation = parseStackFrameLocation(location);
            componentStackFrames.push({
                component,
                ...frameLocation
            });
        }
    }
    return componentStackFrames;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parse-component-stack.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/hydration-error-info.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getHydrationWarningType: null,
    getReactHydrationDiffSegments: null,
    hydrationErrorState: null,
    storeHydrationErrorStateFromConsoleArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getHydrationWarningType: function() {
        return getHydrationWarningType;
    },
    getReactHydrationDiffSegments: function() {
        return getReactHydrationDiffSegments;
    },
    hydrationErrorState: function() {
        return hydrationErrorState;
    },
    storeHydrationErrorStateFromConsoleArgs: function() {
        return storeHydrationErrorStateFromConsoleArgs;
    }
});
const _ishydrationerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)");
const hydrationErrorState = {};
// https://github.com/facebook/react/blob/main/packages/react-dom/src/__tests__/ReactDOMHydrationDiff-test.js used as a reference
const htmlTagsWarnings = new Set([
    'Warning: In HTML, %s cannot be a child of <%s>.%s\nThis will cause a hydration error.%s',
    'Warning: In HTML, %s cannot be a descendant of <%s>.\nThis will cause a hydration error.%s',
    'Warning: In HTML, text nodes cannot be a child of <%s>.\nThis will cause a hydration error.',
    "Warning: In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.\nThis will cause a hydration error.",
    'Warning: Expected server HTML to contain a matching <%s> in <%s>.%s',
    'Warning: Did not expect server HTML to contain a <%s> in <%s>.%s'
]);
const textAndTagsMismatchWarnings = new Set([
    'Warning: Expected server HTML to contain a matching text node for "%s" in <%s>.%s',
    'Warning: Did not expect server HTML to contain the text node "%s" in <%s>.%s'
]);
const getHydrationWarningType = (message)=>{
    if (typeof message !== 'string') {
        // TODO: Doesn't make sense to treat no message as a hydration error message.
        // We should bail out somewhere earlier.
        return 'text';
    }
    const normalizedMessage = message.startsWith('Warning: ') ? message : "Warning: " + message;
    if (isHtmlTagsWarning(normalizedMessage)) return 'tag';
    if (isTextInTagsMismatchWarning(normalizedMessage)) return 'text-in-tag';
    return 'text';
};
const isHtmlTagsWarning = (message)=>htmlTagsWarnings.has(message);
const isTextInTagsMismatchWarning = (msg)=>textAndTagsMismatchWarnings.has(msg);
const getReactHydrationDiffSegments = (msg)=>{
    if (msg) {
        const { message, diff } = (0, _ishydrationerror.getHydrationErrorStackInfo)(msg);
        if (message) return [
            message,
            diff
        ];
    }
    return undefined;
};
function storeHydrationErrorStateFromConsoleArgs() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    let [msg, firstContent, secondContent, ...rest] = args;
    if ((0, _ishydrationerror.testReactHydrationWarning)(msg)) {
        // Some hydration warnings has 4 arguments, some has 3, fallback to the last argument
        // when the 3rd argument is not the component stack but an empty string
        const isReact18 = msg.startsWith('Warning: ');
        // For some warnings, there's only 1 argument for template.
        // The second argument is the diff or component stack.
        if (args.length === 3) {
            secondContent = '';
        }
        const warning = [
            // remove the last %s from the message
            msg,
            firstContent,
            secondContent
        ];
        const lastArg = (rest[rest.length - 1] || '').trim();
        if (!isReact18) {
            hydrationErrorState.reactOutputComponentDiff = lastArg;
        } else {
            hydrationErrorState.reactOutputComponentDiff = generateHydrationDiffReact18(msg, firstContent, secondContent, lastArg);
        }
        hydrationErrorState.warning = warning;
        hydrationErrorState.serverContent = firstContent;
        hydrationErrorState.clientContent = secondContent;
    }
}
/*
 * Some hydration errors in React 18 does not have the diff in the error message.
 * Instead it has the error stack trace which is component stack that we can leverage.
 * Will parse the diff from the error stack trace
 *  e.g.
 *  Warning: Expected server HTML to contain a matching <div> in <p>.
 *    at div
 *    at p
 *    at div
 *    at div
 *    at Page
 *  output:
 *    <Page>
 *      <div>
 *        <p>
 *  >       <div>
 *
 */ function generateHydrationDiffReact18(message, firstContent, secondContent, lastArg) {
    const componentStack = lastArg;
    let firstIndex = -1;
    let secondIndex = -1;
    const hydrationWarningType = getHydrationWarningType(message);
    // at div\n at Foo\n at Bar (....)\n -> [div, Foo]
    const components = componentStack.split('\n') // .reverse()
    .map((line, index)=>{
        // `<space>at <component> (<location>)` -> `at <component> (<location>)`
        line = line.trim();
        // extract `<space>at <component>` to `<<component>>`
        // e.g. `  at Foo` -> `<Foo>`
        const [, component, location] = /at (\w+)( \((.*)\))?/.exec(line) || [];
        // If there's no location then it's user-land stack frame
        if (!location) {
            if (component === firstContent && firstIndex === -1) {
                firstIndex = index;
            } else if (component === secondContent && secondIndex === -1) {
                secondIndex = index;
            }
        }
        return location ? '' : component;
    }).filter(Boolean).reverse();
    let diff = '';
    for(let i = 0; i < components.length; i++){
        const component = components[i];
        const matchFirstContent = hydrationWarningType === 'tag' && i === components.length - firstIndex - 1;
        const matchSecondContent = hydrationWarningType === 'tag' && i === components.length - secondIndex - 1;
        if (matchFirstContent || matchSecondContent) {
            const spaces = ' '.repeat(Math.max(i * 2 - 2, 0) + 2);
            diff += "> " + spaces + "<" + component + ">\n";
        } else {
            const spaces = ' '.repeat(i * 2 + 2);
            diff += spaces + "<" + component + ">\n";
        }
    }
    if (hydrationWarningType === 'text') {
        const spaces = ' '.repeat(components.length * 2);
        diff += "+ " + spaces + '"' + firstContent + '"\n';
        diff += "- " + spaces + '"' + secondContent + '"\n';
    } else if (hydrationWarningType === 'text-in-tag') {
        const spaces = ' '.repeat(components.length * 2);
        diff += "> " + spaces + "<" + secondContent + ">\n";
        diff += ">   " + spaces + '"' + firstContent + '"\n';
    }
    return diff;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hydration-error-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/attach-hydration-error-state.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "attachHydrationErrorState", {
    enumerable: true,
    get: function() {
        return attachHydrationErrorState;
    }
});
const _ishydrationerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)");
const _hydrationerrorinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/hydration-error-info.js [client] (ecmascript)");
function attachHydrationErrorState(error) {
    let parsedHydrationErrorState = {};
    const isHydrationWarning = (0, _ishydrationerror.testReactHydrationWarning)(error.message);
    const isHydrationRuntimeError = (0, _ishydrationerror.isHydrationError)(error);
    // If it's not hydration warnings or errors, skip
    if (!(isHydrationRuntimeError || isHydrationWarning)) {
        return;
    }
    const reactHydrationDiffSegments = (0, _hydrationerrorinfo.getReactHydrationDiffSegments)(error.message);
    // If the reactHydrationDiffSegments exists
    // and the diff (reactHydrationDiffSegments[1]) exists
    // e.g. the hydration diff log error.
    if (reactHydrationDiffSegments) {
        const diff = reactHydrationDiffSegments[1];
        parsedHydrationErrorState = {
            ...error.details,
            ..._hydrationerrorinfo.hydrationErrorState,
            // If diff is present in error, we don't need to pick up the console logged warning.
            // - if hydration error has diff, and is not hydration diff log, then it's a normal hydration error.
            // - if hydration error no diff, then leverage the one from the hydration diff log.
            warning: (diff && !isHydrationWarning ? null : _hydrationerrorinfo.hydrationErrorState.warning) || [
                (0, _ishydrationerror.getDefaultHydrationErrorMessage)()
            ],
            // When it's hydration diff log, do not show notes section.
            // This condition is only for the 1st squashed error.
            notes: isHydrationWarning ? '' : reactHydrationDiffSegments[0],
            reactOutputComponentDiff: diff
        };
        // Cache the `reactOutputComponentDiff` into hydrationErrorState.
        // This is only required for now when we still squashed the hydration diff log into hydration error.
        // Once the all error is logged to dev overlay in order, this will go away.
        if (!_hydrationerrorinfo.hydrationErrorState.reactOutputComponentDiff && diff) {
            _hydrationerrorinfo.hydrationErrorState.reactOutputComponentDiff = diff;
        }
        // If it's hydration runtime error that doesn't contain the diff, combine the diff from the cached hydration diff.
        if (!diff && isHydrationRuntimeError && _hydrationerrorinfo.hydrationErrorState.reactOutputComponentDiff) {
            parsedHydrationErrorState.reactOutputComponentDiff = _hydrationerrorinfo.hydrationErrorState.reactOutputComponentDiff;
        }
    } else {
        // Normal runtime error, where it doesn't contain the hydration diff.
        // If there's any extra information in the error message to display,
        // append it to the error message details property
        if (_hydrationerrorinfo.hydrationErrorState.warning) {
            // The patched console.error found hydration errors logged by React
            // Append the logged warning to the error message
            parsedHydrationErrorState = {
                ...error.details,
                // It contains the warning, component stack, server and client tag names
                ..._hydrationerrorinfo.hydrationErrorState
            };
        }
        // Consume the cached hydration diff.
        // This is only required for now when we still squashed the hydration diff log into hydration error.
        // Once the all error is logged to dev overlay in order, this will go away.
        if (_hydrationerrorinfo.hydrationErrorState.reactOutputComponentDiff) {
            parsedHydrationErrorState.reactOutputComponentDiff = _hydrationerrorinfo.hydrationErrorState.reactOutputComponentDiff;
        }
    }
    // If it's a hydration error, store the hydration error state into the error object
    ;
    error.details = parsedHydrationErrorState;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=attach-hydration-error-state.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/webpack-module-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatFrameSourceFile: null,
    isWebpackInternalResource: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatFrameSourceFile: function() {
        return formatFrameSourceFile;
    },
    isWebpackInternalResource: function() {
        return isWebpackInternalResource;
    }
});
const replacementRegExes = [
    /^webpack-internal:\/\/\/(\([\w-]+\)\/)?/,
    /^(webpack:\/\/\/|webpack:\/\/(_N_E\/)?)(\([\w-]+\)\/)?/
];
function isWebpackInternalResource(file) {
    for (const regex of replacementRegExes){
        if (regex.test(file)) return true;
        file = file.replace(regex, '');
    }
    return false;
}
function formatFrameSourceFile(file) {
    for (const regex of replacementRegExes){
        file = file.replace(regex, '');
    }
    return file;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=webpack-module-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/stack-frame.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFrameSource: null,
    getOriginalStackFrames: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFrameSource: function() {
        return getFrameSource;
    },
    getOriginalStackFrames: function() {
        return getOriginalStackFrames;
    }
});
const _webpackmodulepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/webpack-module-path.js [client] (ecmascript)");
function getOriginalStackFrame(source, response) {
    var _source_file;
    async function _getOriginalStackFrame() {
        var _body_originalStackFrame;
        if (response.status === 'rejected') {
            throw Object.defineProperty(new Error(response.reason), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
        const body = response.value;
        return {
            error: false,
            reason: null,
            external: false,
            sourceStackFrame: source,
            originalStackFrame: body.originalStackFrame,
            originalCodeFrame: body.originalCodeFrame || null,
            ignored: ((_body_originalStackFrame = body.originalStackFrame) == null ? void 0 : _body_originalStackFrame.ignored) || false
        };
    }
    // TODO: merge this section into ignoredList handling
    if (source.file === 'file://' || ((_source_file = source.file) == null ? void 0 : _source_file.match(/https?:\/\//))) {
        return Promise.resolve({
            error: false,
            reason: null,
            external: true,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null,
            ignored: true
        });
    }
    return _getOriginalStackFrame().catch((err)=>{
        var _err_message, _ref;
        return {
            error: true,
            reason: (_ref = (_err_message = err == null ? void 0 : err.message) != null ? _err_message : err == null ? void 0 : err.toString()) != null ? _ref : 'Unknown Error',
            external: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null,
            ignored: false
        };
    });
}
async function getOriginalStackFrames(frames, type, isAppDir) {
    const req = {
        frames,
        isServer: type === 'server',
        isEdgeServer: type === 'edge-server',
        isAppDirectory: isAppDir
    };
    let res = undefined;
    let reason = undefined;
    try {
        res = await fetch('/__nextjs_original-stack-frames', {
            method: 'POST',
            body: JSON.stringify(req)
        });
    } catch (e) {
        reason = e + '';
    }
    // When fails to fetch the original stack frames, we reject here to be
    // caught at `_getOriginalStackFrame()` and return the stack frames so
    // that the error overlay can render.
    if (res && res.ok && res.status !== 204) {
        const data = await res.json();
        return Promise.all(frames.map((frame, index)=>getOriginalStackFrame(frame, data[index])));
    } else {
        if (res) {
            reason = await res.text();
        }
    }
    return Promise.all(frames.map((frame)=>getOriginalStackFrame(frame, {
            status: 'rejected',
            reason: "Failed to fetch the original stack frames " + (reason ? ": " + reason : '')
        })));
}
function getFrameSource(frame) {
    if (!frame.file) return '';
    const isWebpackFrame = (0, _webpackmodulepath.isWebpackInternalResource)(frame.file);
    let str = '';
    // Skip URL parsing for webpack internal file paths.
    if (isWebpackFrame) {
        str = (0, _webpackmodulepath.formatFrameSourceFile)(frame.file);
    } else {
        try {
            var _globalThis_location;
            const u = new URL(frame.file);
            let parsedPath = '';
            // Strip the origin for same-origin scripts.
            if (((_globalThis_location = globalThis.location) == null ? void 0 : _globalThis_location.origin) !== u.origin) {
                // URLs can be valid without an `origin`, so long as they have a
                // `protocol`. However, `origin` is preferred.
                if (u.origin === 'null') {
                    parsedPath += u.protocol;
                } else {
                    parsedPath += u.origin;
                }
            }
            // Strip query string information as it's typically too verbose to be
            // meaningful.
            parsedPath += u.pathname;
            str = (0, _webpackmodulepath.formatFrameSourceFile)(parsedPath);
        } catch (e) {
            str = (0, _webpackmodulepath.formatFrameSourceFile)(frame.file);
        }
    }
    if (!(0, _webpackmodulepath.isWebpackInternalResource)(frame.file) && frame.lineNumber != null) {
        if (str) {
            if (frame.column != null) {
                str += " (" + frame.lineNumber + ":" + frame.column + ")";
            } else {
                str += " (" + frame.lineNumber + ")";
            }
        }
    }
    return str;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=stack-frame.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/get-error-by-type.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getErrorByType: null,
    useFrames: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getErrorByType: function() {
        return getErrorByType;
    },
    useFrames: function() {
        return useFrames;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _shared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _stackframe = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/stack-frame.js [client] (ecmascript)");
const _errorsource = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const useFrames = (error)=>{
    if ('use' in _react.default) {
        const frames = error.frames;
        if (typeof frames !== 'function') {
            throw Object.defineProperty(new Error('Invariant: frames must be a function when the React version has React.use. This is a bug in Next.js.'), "__NEXT_ERROR_CODE", {
                value: "E636",
                enumerable: false,
                configurable: true
            });
        }
        return _react.default.use(frames());
    } else {
        if (!Array.isArray(error.frames)) {
            throw Object.defineProperty(new Error('Invariant: frames must be an array when the React version does not have React.use. This is a bug in Next.js.'), "__NEXT_ERROR_CODE", {
                value: "E637",
                enumerable: false,
                configurable: true
            });
        }
        return error.frames;
    }
};
async function getErrorByType(ev, isAppDir) {
    const { id, event } = ev;
    switch(event.type){
        case _shared.ACTION_UNHANDLED_ERROR:
        case _shared.ACTION_UNHANDLED_REJECTION:
            {
                const baseError = {
                    id,
                    runtime: true,
                    error: event.reason
                };
                if ('use' in _react.default) {
                    const readyRuntimeError = {
                        ...baseError,
                        // createMemoizedPromise dedups calls to getOriginalStackFrames
                        frames: createMemoizedPromise(async ()=>{
                            return await (0, _stackframe.getOriginalStackFrames)(event.frames, (0, _errorsource.getErrorSource)(event.reason), isAppDir);
                        })
                    };
                    if (event.type === _shared.ACTION_UNHANDLED_ERROR) {
                        readyRuntimeError.componentStackFrames = event.componentStackFrames;
                    }
                    return readyRuntimeError;
                } else {
                    const readyRuntimeError = {
                        ...baseError,
                        // createMemoizedPromise dedups calls to getOriginalStackFrames
                        frames: await (0, _stackframe.getOriginalStackFrames)(event.frames, (0, _errorsource.getErrorSource)(event.reason), isAppDir)
                    };
                    if (event.type === _shared.ACTION_UNHANDLED_ERROR) {
                        readyRuntimeError.componentStackFrames = event.componentStackFrames;
                    }
                    return readyRuntimeError;
                }
            }
        default:
            {
                break;
            }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = event;
    throw Object.defineProperty(new Error('type system invariant violation'), "__NEXT_ERROR_CODE", {
        value: "E335",
        enumerable: false,
        configurable: true
    });
}
function createMemoizedPromise(promiseFactory) {
    const cachedPromise = promiseFactory();
    return function() {
        return cachedPromise;
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-error-by-type.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/node-stack-frames.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFilesystemFrame: null,
    getServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFilesystemFrame: function() {
        return getFilesystemFrame;
    },
    getServerError: function() {
        return getServerError;
    }
});
const _stacktraceparser = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [client] (ecmascript)");
const _errorsource = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
function getFilesystemFrame(frame) {
    const f = {
        ...frame
    };
    if (typeof f.file === 'string') {
        if (f.file.startsWith('/') || // Win32:
        /^[a-z]:\\/i.test(f.file) || // Win32 UNC:
        f.file.startsWith('\\\\')) {
            f.file = "file://" + f.file;
        }
    }
    return f;
}
function getServerError(error, type) {
    if (error.name === 'TurbopackInternalError') {
        // If this is an internal Turbopack error we shouldn't show internal details
        // to the user. These are written to a log file instead.
        const turbopackInternalError = Object.defineProperty(new Error('An unexpected Turbopack error occurred. Please see the output of `next dev` for more details.'), "__NEXT_ERROR_CODE", {
            value: "E167",
            enumerable: false,
            configurable: true
        });
        (0, _errorsource.decorateServerError)(turbopackInternalError, type);
        return turbopackInternalError;
    }
    let n;
    try {
        throw Object.defineProperty(new Error(error.message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    } catch (e) {
        n = e;
    }
    n.name = error.name;
    try {
        n.stack = n.toString() + "\n" + (0, _stacktraceparser.parse)(error.stack).map(getFilesystemFrame).map((f)=>{
            let str = "    at " + f.methodName;
            if (f.file) {
                let loc = f.file;
                if (f.lineNumber) {
                    loc += ":" + f.lineNumber;
                    if (f.column) {
                        loc += ":" + f.column;
                    }
                }
                str += " (" + loc + ")";
            }
            return str;
        }).join('\n');
    } catch (e) {
        n.stack = error.stack;
    }
    (0, _errorsource.decorateServerError)(n, type);
    return n;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=node-stack-frames.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getErrorByType: null,
    getServerError: null,
    onBeforeRefresh: null,
    onBuildError: null,
    onBuildOk: null,
    onDevIndicator: null,
    onRefresh: null,
    onStaticIndicator: null,
    onVersionInfo: null,
    register: null,
    unregister: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getErrorByType: function() {
        return _geterrorbytype.getErrorByType;
    },
    getServerError: function() {
        return _nodestackframes.getServerError;
    },
    onBeforeRefresh: function() {
        return onBeforeRefresh;
    },
    onBuildError: function() {
        return onBuildError;
    },
    onBuildOk: function() {
        return onBuildOk;
    },
    onDevIndicator: function() {
        return onDevIndicator;
    },
    onRefresh: function() {
        return onRefresh;
    },
    onStaticIndicator: function() {
        return onStaticIndicator;
    },
    onVersionInfo: function() {
        return onVersionInfo;
    },
    register: function() {
        return register;
    },
    unregister: function() {
        return unregister;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _bus = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/bus.js [client] (ecmascript)"));
const _parsestack = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/parse-stack.js [client] (ecmascript)");
const _parsecomponentstack = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/parse-component-stack.js [client] (ecmascript)");
const _hydrationerrorinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/hydration-error-info.js [client] (ecmascript)");
const _shared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _attachhydrationerrorstate = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/attach-hydration-error-state.js [client] (ecmascript)");
const _geterrorbytype = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/get-error-by-type.js [client] (ecmascript)");
const _nodestackframes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/node-stack-frames.js [client] (ecmascript)");
let isRegistered = false;
let stackTraceLimit = undefined;
function handleError(error) {
    if (!error || !(error instanceof Error) || typeof error.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    (0, _attachhydrationerrorstate.attachHydrationErrorState)(error);
    const componentStackTrace = error._componentStack || _hydrationerrorinfo.hydrationErrorState.componentStack;
    const componentStackFrames = typeof componentStackTrace === 'string' ? (0, _parsecomponentstack.parseComponentStack)(componentStackTrace) : undefined;
    // Skip ModuleBuildError and ModuleNotFoundError, as it will be sent through onBuildError callback.
    // This is to avoid same error as different type showing up on client to cause flashing.
    if (error.name !== 'ModuleBuildError' && error.name !== 'ModuleNotFoundError') {
        _bus.emit({
            type: _shared.ACTION_UNHANDLED_ERROR,
            reason: error,
            frames: (0, _parsestack.parseStack)(error.stack),
            componentStackFrames
        });
    }
}
let origConsoleError = console.error;
function nextJsHandleConsoleError() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    // See https://github.com/facebook/react/blob/d50323eb845c5fde0d720cae888bf35dedd05506/packages/react-reconciler/src/ReactFiberErrorLogger.js#L78
    const error = ("TURBOPACK compile-time truthy", 1) ? args[1] : ("TURBOPACK unreachable", undefined);
    (0, _hydrationerrorinfo.storeHydrationErrorStateFromConsoleArgs)(...args);
    handleError(error);
    origConsoleError.apply(window.console, args);
}
function onUnhandledError(event) {
    const error = event == null ? void 0 : event.error;
    handleError(error);
}
function onUnhandledRejection(ev) {
    const reason = ev == null ? void 0 : ev.reason;
    if (!reason || !(reason instanceof Error) || typeof reason.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    const e = reason;
    _bus.emit({
        type: _shared.ACTION_UNHANDLED_REJECTION,
        reason: reason,
        frames: (0, _parsestack.parseStack)(e.stack)
    });
}
function register() {
    if (isRegistered) {
        return;
    }
    isRegistered = true;
    try {
        const limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 50;
        stackTraceLimit = limit;
    } catch (e) {}
    window.addEventListener('error', onUnhandledError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);
    window.console.error = nextJsHandleConsoleError;
}
function unregister() {
    if (!isRegistered) {
        return;
    }
    isRegistered = false;
    if (stackTraceLimit !== undefined) {
        try {
            Error.stackTraceLimit = stackTraceLimit;
        } catch (e) {}
        stackTraceLimit = undefined;
    }
    window.removeEventListener('error', onUnhandledError);
    window.removeEventListener('unhandledrejection', onUnhandledRejection);
    window.console.error = origConsoleError;
}
function onBuildOk() {
    _bus.emit({
        type: _shared.ACTION_BUILD_OK
    });
}
function onBuildError(message) {
    _bus.emit({
        type: _shared.ACTION_BUILD_ERROR,
        message
    });
}
function onRefresh() {
    _bus.emit({
        type: _shared.ACTION_REFRESH
    });
}
function onBeforeRefresh() {
    _bus.emit({
        type: _shared.ACTION_BEFORE_REFRESH
    });
}
function onVersionInfo(versionInfo) {
    _bus.emit({
        type: _shared.ACTION_VERSION_INFO,
        versionInfo
    });
}
function onStaticIndicator(isStatic) {
    _bus.emit({
        type: _shared.ACTION_STATIC_INDICATOR,
        staticIndicator: isStatic
    });
}
function onDevIndicator(devIndicatorsState) {
    _bus.emit({
        type: _shared.ACTION_DEV_INDICATOR,
        devIndicator: devIndicatorsState
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/get-socket-url.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSocketUrl", {
    enumerable: true,
    get: function() {
        return getSocketUrl;
    }
});
const _normalizedassetprefix = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/normalized-asset-prefix.js [client] (ecmascript)");
function getSocketProtocol(assetPrefix) {
    let protocol = window.location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (e) {}
    return protocol === 'http:' ? 'ws:' : 'wss:';
}
function getSocketUrl(assetPrefix) {
    const prefix = (0, _normalizedassetprefix.normalizedAssetPrefix)(assetPrefix);
    const protocol = getSocketProtocol(assetPrefix || '');
    if (URL.canParse(prefix)) {
        // since normalized asset prefix is ensured to be a URL format,
        // we can safely replace the protocol
        return prefix.replace(/^http/, 'ws');
    }
    const { hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : '') + prefix;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-socket-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    addMessageListener: null,
    connectHMR: null,
    sendMessage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addMessageListener: function() {
        return addMessageListener;
    },
    connectHMR: function() {
        return connectHMR;
    },
    sendMessage: function() {
        return sendMessage;
    }
});
const _hotreloadertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _getsocketurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/get-socket-url.js [client] (ecmascript)");
let source;
const eventCallbacks = [];
function addMessageListener(callback) {
    eventCallbacks.push(callback);
}
function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}
let reconnections = 0;
let reloading = false;
let serverSessionId = null;
function connectHMR(options) {
    function init() {
        if (source) source.close();
        function handleOnline() {
            reconnections = 0;
            window.console.log('[HMR] connected');
        }
        function handleMessage(event) {
            // While the page is reloading, don't respond to any more messages.
            // On reconnect, the server may send an empty list of changes if it was restarted.
            if (reloading) {
                return;
            }
            // Coerce into HMR_ACTION_TYPES as that is the format.
            const msg = JSON.parse(event.data);
            if ('action' in msg && msg.action === _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED) {
                if (serverSessionId !== null && serverSessionId !== msg.data.sessionId) {
                    // Either the server's session id has changed and it's a new server, or
                    // it's been too long since we disconnected and we should reload the page.
                    // There could be 1) unhandled server errors and/or 2) stale content.
                    // Perform a hard reload of the page.
                    window.location.reload();
                    reloading = true;
                    return;
                }
                serverSessionId = msg.data.sessionId;
            }
            for (const eventCallback of eventCallbacks){
                eventCallback(msg);
            }
        }
        let timer;
        function handleDisconnect() {
            source.onerror = null;
            source.onclose = null;
            source.close();
            reconnections++;
            // After 25 reconnects we'll want to reload the page as it indicates the dev server is no longer running.
            if (reconnections > 25) {
                reloading = true;
                window.location.reload();
                return;
            }
            clearTimeout(timer);
            // Try again after 5 seconds
            timer = setTimeout(init, reconnections > 5 ? 5000 : 1000);
        }
        const url = (0, _getsocketurl.getSocketUrl)(options.assetPrefix);
        source = new window.WebSocket("" + url + options.path);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onclose = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=websocket.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/format-webpack-messages.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
MIT License

Copyright (c) 2015-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return formatWebpackMessages;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)"));
// This file is based on https://github.com/facebook/create-react-app/blob/7b1a32be6ec9f99a6c9a3c66813f3ac09c4736b9/packages/react-dev-utils/formatWebpackMessages.js
// It's been edited to remove chalk and CRA-specific logic
const friendlySyntaxErrorLabel = 'Syntax error:';
const WEBPACK_BREAKING_CHANGE_POLYFILLS = '\n\nBREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.';
function isLikelyASyntaxError(message) {
    return (0, _stripansi.default)(message).includes(friendlySyntaxErrorLabel);
}
let hadMissingSassError = false;
// Cleans up webpack error messages.
function formatMessage(message, verbose, importTraceNote) {
    // TODO: Replace this once webpack 5 is stable
    if (typeof message === 'object' && message.message) {
        const filteredModuleTrace = message.moduleTrace && message.moduleTrace.filter((trace)=>!/next-(middleware|client-pages|route|edge-function)-loader\.js/.test(trace.originName));
        let body = message.message;
        const breakingChangeIndex = body.indexOf(WEBPACK_BREAKING_CHANGE_POLYFILLS);
        if (breakingChangeIndex >= 0) {
            body = body.slice(0, breakingChangeIndex);
        }
        message = (message.moduleName ? (0, _stripansi.default)(message.moduleName) + '\n' : '') + (message.file ? (0, _stripansi.default)(message.file) + '\n' : '') + body + (message.details && verbose ? '\n' + message.details : '') + (filteredModuleTrace && filteredModuleTrace.length ? (importTraceNote || '\n\nImport trace for requested module:') + filteredModuleTrace.map((trace)=>"\n" + trace.moduleName).join('') : '') + (message.stack && verbose ? '\n' + message.stack : '');
    }
    let lines = message.split('\n');
    // Strip Webpack-added headers off errors/warnings
    // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js
    lines = lines.filter((line)=>!/Module [A-z ]+\(from/.test(line));
    // Transform parsing error into syntax error
    // TODO: move this to our ESLint formatter?
    lines = lines.map((line)=>{
        const parsingError = /Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(line);
        if (!parsingError) {
            return line;
        }
        const [, errorLine, errorColumn, errorMessage] = parsingError;
        return friendlySyntaxErrorLabel + " " + errorMessage + " (" + errorLine + ":" + errorColumn + ")";
    });
    message = lines.join('\n');
    // Smoosh syntax errors (commonly found in CSS)
    message = message.replace(/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g, "" + friendlySyntaxErrorLabel + " $3 ($1:$2)\n");
    // Clean up export errors
    message = message.replace(/^.*export '(.+?)' was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$2'.");
    message = message.replace(/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$2' does not contain a default export (imported as '$1').");
    message = message.replace(/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$3' (imported as '$2').");
    lines = message.split('\n');
    // Remove leading newline
    if (lines.length > 2 && lines[1].trim() === '') {
        lines.splice(1, 1);
    }
    // Cleans up verbose "module not found" messages for files and packages.
    if (lines[1] && lines[1].startsWith('Module not found: ')) {
        lines = [
            lines[0],
            lines[1].replace('Error: ', '').replace('Module not found: Cannot find file:', 'Cannot find file:'),
            ...lines.slice(2)
        ];
    }
    // Add helpful message for users trying to use Sass for the first time
    if (lines[1] && lines[1].match(/Cannot find module.+sass/)) {
        // ./file.module.scss (<<loader info>>) => ./file.module.scss
        const firstLine = lines[0].split('!');
        lines[0] = firstLine[firstLine.length - 1];
        lines[1] = "To use Next.js' built-in Sass support, you first need to install `sass`.\n";
        lines[1] += 'Run `npm i sass` or `yarn add sass` inside your workspace.\n';
        lines[1] += '\nLearn more: https://nextjs.org/docs/messages/install-sass';
        // dispose of unhelpful stack trace
        lines = lines.slice(0, 2);
        hadMissingSassError = true;
    } else if (hadMissingSassError && message.match(/(sass-loader|resolve-url-loader: CSS error)/)) {
        // dispose of unhelpful stack trace following missing sass module
        lines = [];
    }
    if (!verbose) {
        message = lines.join('\n');
        // Internal stacks are generally useless so we strip them... with the
        // exception of stacks containing `webpack:` because they're normally
        // from user code generated by Webpack. For more information see
        // https://github.com/facebook/create-react-app/pull/1050
        message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, '') // at ... ...:x:y
        ;
        message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, '') // at <anonymous>
        ;
        message = message.replace(/File was processed with these loaders:\n(.+[\\/](next[\\/]dist[\\/].+|@next[\\/]react-refresh-utils[\\/]loader)\.js\n)*You may need an additional loader to handle the result of these loaders.\n/g, '');
        lines = message.split('\n');
    }
    // Remove duplicated newlines
    lines = lines.filter((line, index, arr)=>index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim());
    // Reassemble the message
    message = lines.join('\n');
    return message.trim();
}
function formatWebpackMessages(json, verbose) {
    const formattedErrors = json.errors.map((message)=>{
        const isUnknownNextFontError = message.message.includes('An error occurred in `next/font`.');
        return formatMessage(message, isUnknownNextFontError || verbose);
    });
    const formattedWarnings = json.warnings.map((message)=>{
        return formatMessage(message, verbose);
    });
    // Reorder errors to put the most relevant ones first.
    let reactServerComponentsError = -1;
    for(let i = 0; i < formattedErrors.length; i++){
        const error = formattedErrors[i];
        if (error.includes('ReactServerComponentsError')) {
            reactServerComponentsError = i;
            break;
        }
    }
    // Move the reactServerComponentsError to the top if it exists
    if (reactServerComponentsError !== -1) {
        const error = formattedErrors.splice(reactServerComponentsError, 1);
        formattedErrors.unshift(error[0]);
    }
    const result = {
        ...json,
        errors: formattedErrors,
        warnings: formattedWarnings
    };
    if (!verbose && result.errors.some(isLikelyASyntaxError)) {
        // If there are any syntax errors, show just them.
        result.errors = result.errors.filter(isLikelyASyntaxError);
        result.warnings = [];
    }
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=format-webpack-messages.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/runtime-error-handler.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RuntimeErrorHandler", {
    enumerable: true,
    get: function() {
        return RuntimeErrorHandler;
    }
});
const RuntimeErrorHandler = {
    hadRuntimeError: false
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=runtime-error-handler.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// TODO: Remove use of `any` type. Fix no-use-before-define violations.
/* eslint-disable @typescript-eslint/no-use-before-define */ /**
 * MIT License
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ // This file is a modified version of the Create React App HMR dev client that
// can be found here:
// https://github.com/facebook/create-react-app/blob/v3.4.1/packages/react-dev-utils/webpackHotDevClient.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleStaticIndicator: null,
    performFullReload: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return connect;
    },
    handleStaticIndicator: function() {
        return handleStaticIndicator;
    },
    performFullReload: function() {
        return performFullReload;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)");
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)"));
const _websocket = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
const _formatwebpackmessages = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/format-webpack-messages.js [client] (ecmascript)"));
const _hotreloadertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _extractmodulesfromturbopackmessage = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/dev/extract-modules-from-turbopack-message.js [client] (ecmascript)");
const _shared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _runtimeerrorhandler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/runtime-error-handler.js [client] (ecmascript)");
window.__nextDevClientId = Math.round(Math.random() * 100 + Date.now());
let customHmrEventHandler;
let turbopackMessageListeners = [];
let MODE = 'webpack';
function connect(mode) {
    MODE = mode;
    (0, _client.register)();
    (0, _websocket.addMessageListener)((payload)=>{
        if (!('action' in payload)) {
            return;
        }
        try {
            processMessage(payload);
        } catch (err) {
            var _err_stack;
            console.warn('[HMR] Invalid message: ' + JSON.stringify(payload) + '\n' + ((_err_stack = err == null ? void 0 : err.stack) != null ? _err_stack : ''));
        }
    });
    return {
        subscribeToHmrEvent (handler) {
            customHmrEventHandler = handler;
        },
        onUnrecoverableError () {
            _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError = true;
        },
        addTurbopackMessageListener (cb) {
            turbopackMessageListeners.push(cb);
        },
        sendTurbopackMessage (msg) {
            (0, _websocket.sendMessage)(msg);
        },
        handleUpdateError (err) {
            performFullReload(err);
        }
    };
}
// Remember some state related to hot module replacement.
var isFirstCompilation = true;
var mostRecentCompilationHash = null;
var hasCompileErrors = false;
function clearOutdatedErrors() {
    // Clean up outdated compile errors, if any.
    if (typeof console !== 'undefined' && typeof console.clear === 'function') {
        if (hasCompileErrors) {
            console.clear();
        }
    }
}
// Successful compilation.
function handleSuccess() {
    clearOutdatedErrors();
    if (MODE === 'webpack') {
        const isHotUpdate = !isFirstCompilation || window.__NEXT_DATA__.page !== '/_error' && isUpdateAvailable();
        isFirstCompilation = false;
        hasCompileErrors = false;
        // Attempt to apply hot updates or reload.
        if (isHotUpdate) {
            tryApplyUpdates(onBeforeFastRefresh, onFastRefresh);
        }
    } else {
        reportHmrLatency([
            ...turbopackUpdatedModules
        ]);
        (0, _client.onBuildOk)();
    }
}
// Compilation with warnings (e.g. ESLint).
function handleWarnings(warnings) {
    clearOutdatedErrors();
    const isHotUpdate = !isFirstCompilation;
    isFirstCompilation = false;
    hasCompileErrors = false;
    function printWarnings() {
        // Print warnings to the console.
        const formatted = (0, _formatwebpackmessages.default)({
            warnings: warnings,
            errors: []
        });
        if (typeof console !== 'undefined' && typeof console.warn === 'function') {
            var _formatted_warnings;
            for(let i = 0; i < ((_formatted_warnings = formatted.warnings) == null ? void 0 : _formatted_warnings.length); i++){
                if (i === 5) {
                    console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
                    break;
                }
                console.warn((0, _stripansi.default)(formatted.warnings[i]));
            }
        }
    }
    printWarnings();
    // Attempt to apply hot updates or reload.
    if (isHotUpdate) {
        tryApplyUpdates(onBeforeFastRefresh, onFastRefresh);
    }
}
// Compilation with errors (e.g. syntax error or missing modules).
function handleErrors(errors) {
    clearOutdatedErrors();
    isFirstCompilation = false;
    hasCompileErrors = true;
    // "Massage" webpack messages.
    var formatted = (0, _formatwebpackmessages.default)({
        errors: errors,
        warnings: []
    });
    // Only show the first error.
    (0, _client.onBuildError)(formatted.errors[0]);
    // Also log them to the console.
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
        for(var i = 0; i < formatted.errors.length; i++){
            console.error((0, _stripansi.default)(formatted.errors[i]));
        }
    }
    // Do not attempt to reload now.
    // We will reload on next success instead.
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
}
let startLatency = null;
let turbopackLastUpdateLatency = null;
let turbopackUpdatedModules = new Set();
let isrManifest = {};
function onBeforeFastRefresh(updatedModules) {
    if (updatedModules.length > 0) {
        // Only trigger a pending state if we have updates to apply
        // (cf. onFastRefresh)
        (0, _client.onBeforeRefresh)();
    }
}
function onFastRefresh(updatedModules) {
    if (updatedModules === void 0) updatedModules = [];
    (0, _client.onBuildOk)();
    if (updatedModules.length === 0) {
        return;
    }
    (0, _client.onRefresh)();
    reportHmrLatency();
}
function reportHmrLatency(updatedModules) {
    if (updatedModules === void 0) updatedModules = [];
    if (!startLatency) return;
    // turbopack has a debounce for the BUILT event which we don't want to
    // incorrectly show in this number, use the last TURBOPACK_MESSAGE time
    let endLatency = turbopackLastUpdateLatency != null ? turbopackLastUpdateLatency : Date.now();
    const latency = endLatency - startLatency;
    console.log("[Fast Refresh] done in " + latency + "ms");
    (0, _websocket.sendMessage)(JSON.stringify({
        event: 'client-hmr-latency',
        id: window.__nextDevClientId,
        startTime: startLatency,
        endTime: endLatency,
        page: window.location.pathname,
        updatedModules,
        // Whether the page (tab) was hidden at the time the event occurred.
        // This can impact the accuracy of the event's timing.
        isPageHidden: document.visibilityState === 'hidden'
    }));
    if (self.__NEXT_HMR_LATENCY_CB) {
        self.__NEXT_HMR_LATENCY_CB(latency);
    }
}
// There is a newer version of the code available.
function handleAvailableHash(hash) {
    // Update last known compilation hash.
    mostRecentCompilationHash = hash;
}
function handleStaticIndicator() {
    if ("TURBOPACK compile-time truthy", 1) {
        var _window_next_router_components__app;
        const routeInfo = window.next.router.components[window.next.router.pathname];
        const pageComponent = routeInfo == null ? void 0 : routeInfo.Component;
        const appComponent = (_window_next_router_components__app = window.next.router.components['/_app']) == null ? void 0 : _window_next_router_components__app.Component;
        const isDynamicPage = Boolean(pageComponent == null ? void 0 : pageComponent.getInitialProps) || Boolean(routeInfo.__N_SSP);
        const hasAppGetInitialProps = Boolean(appComponent == null ? void 0 : appComponent.getInitialProps) && (appComponent == null ? void 0 : appComponent.getInitialProps) !== (appComponent == null ? void 0 : appComponent.origGetInitialProps);
        const isPageStatic = window.location.pathname in isrManifest || !isDynamicPage && !hasAppGetInitialProps;
        (0, _client.onStaticIndicator)(isPageStatic);
    }
}
/** Handles messages from the sevrer for the Pages Router. */ function processMessage(obj) {
    if (!('action' in obj)) {
        return;
    }
    // Use turbopack message for analytics, (still need built for webpack)
    switch(obj.action){
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.ISR_MANIFEST:
            {
                isrManifest = obj.data;
                handleStaticIndicator();
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
            {
                startLatency = Date.now();
                turbopackLastUpdateLatency = null;
                turbopackUpdatedModules.clear();
                console.log('[Fast Refresh] rebuilding');
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
            {
                if (obj.hash) handleAvailableHash(obj.hash);
                const { errors, warnings } = obj;
                // Is undefined when it's a 'built' event
                if ('versionInfo' in obj) (0, _client.onVersionInfo)(obj.versionInfo);
                if ('devIndicator' in obj) (0, _client.onDevIndicator)(obj.devIndicator);
                const hasErrors = Boolean(errors && errors.length);
                if (hasErrors) {
                    (0, _websocket.sendMessage)(JSON.stringify({
                        event: 'client-error',
                        errorCount: errors.length,
                        clientId: window.__nextDevClientId
                    }));
                    return handleErrors(errors);
                }
                const hasWarnings = Boolean(warnings && warnings.length);
                if (hasWarnings) {
                    (0, _websocket.sendMessage)(JSON.stringify({
                        event: 'client-warning',
                        warningCount: warnings.length,
                        clientId: window.__nextDevClientId
                    }));
                    return handleWarnings(warnings);
                }
                (0, _websocket.sendMessage)(JSON.stringify({
                    event: 'client-success',
                    clientId: window.__nextDevClientId
                }));
                return handleSuccess();
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_COMPONENT_CHANGES:
            {
                if (hasCompileErrors || _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    window.location.reload();
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ERROR:
            {
                const { errorJSON } = obj;
                if (errorJSON) {
                    const { message, stack } = JSON.parse(errorJSON);
                    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                        value: "E394",
                        enumerable: false,
                        configurable: true
                    });
                    error.stack = stack;
                    handleErrors([
                        error
                    ]);
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED:
            {
                for (const listener of turbopackMessageListeners){
                    listener({
                        type: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED,
                        data: obj.data
                    });
                }
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE:
            {
                const updatedModules = (0, _extractmodulesfromturbopackmessage.extractModulesFromTurbopackMessage)(obj.data);
                onBeforeFastRefresh([
                    ...updatedModules
                ]);
                for (const listener of turbopackMessageListeners){
                    listener({
                        type: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE,
                        data: obj.data
                    });
                }
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                    performFullReload(null);
                }
                (0, _client.onRefresh)();
                for (const module1 of updatedModules){
                    turbopackUpdatedModules.add(module1);
                }
                turbopackLastUpdateLatency = Date.now();
                break;
            }
        default:
            {
                if (customHmrEventHandler) {
                    customHmrEventHandler(obj);
                    break;
                }
                break;
            }
    }
}
// Is there a newer version of this code available?
function isUpdateAvailable() {
    /* globals __webpack_hash__ */ // __webpack_hash__ is the hash of the current compilation.
    // It's a global variable injected by Webpack.
    return mostRecentCompilationHash !== __webpack_hash__;
}
// Webpack disallows updates in other states.
function canApplyUpdates() {
    // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
    return module.hot.status() === 'idle';
}
function afterApplyUpdates(fn) {
    if (canApplyUpdates()) {
        fn();
    } else {
        function handler(status) {
            if (status === 'idle') {
                // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
                module.hot.removeStatusHandler(handler);
                fn();
            }
        }
        // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
        module.hot.addStatusHandler(handler);
    }
}
// Attempt to update code on the fly, fall back to a hard reload.
function tryApplyUpdates(onBeforeHotUpdate, onHotUpdateSuccess) {
    // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
    if (!module.hot) {
        // HotModuleReplacementPlugin is not in Webpack configuration.
        console.error('HotModuleReplacementPlugin is not in Webpack configuration.');
        // window.location.reload();
        return;
    }
    if (!isUpdateAvailable() || !canApplyUpdates()) {
        (0, _client.onBuildOk)();
        return;
    }
    function handleApplyUpdates(err, updatedModules) {
        if (err || _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError || !updatedModules) {
            if (err) {
                console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
            } else if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                console.warn('[Fast Refresh] performing full reload because your application had an unrecoverable error');
            }
            performFullReload(err);
            return;
        }
        if (typeof onHotUpdateSuccess === 'function') {
            // Maybe we want to do something.
            onHotUpdateSuccess(updatedModules);
        }
        if (isUpdateAvailable()) {
            // While we were updating, there was a new update! Do it again.
            // However, this time, don't trigger a pending refresh state.
            tryApplyUpdates(updatedModules.length > 0 ? undefined : onBeforeHotUpdate, updatedModules.length > 0 ? _client.onBuildOk : onHotUpdateSuccess);
        } else {
            (0, _client.onBuildOk)();
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
        }
    }
    // https://webpack.js.org/api/hot-module-replacement/#check
    // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
    module.hot.check(/* autoApply */ false).then((updatedModules)=>{
        if (!updatedModules) {
            return null;
        }
        if (typeof onBeforeHotUpdate === 'function') {
            onBeforeHotUpdate(updatedModules);
        }
        // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
        return module.hot.apply();
    }).then((updatedModules)=>{
        handleApplyUpdates(null, updatedModules);
    }, (err)=>{
        handleApplyUpdates(err, null);
    });
}
function performFullReload(err) {
    const stackTrace = err && (err.stack && err.stack.split('\n').slice(0, 5).join('\n') || err.message || err + '');
    (0, _websocket.sendMessage)(JSON.stringify({
        event: 'client-full-reload',
        stackTrace,
        hadRuntimeError: !!_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError,
        dependencyChain: err ? err.dependencyChain : undefined
    }));
    window.location.reload();
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hot-reloader-client.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/hooks.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "usePagesDevOverlay", {
    enumerable: true,
    get: function() {
        return usePagesDevOverlay;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _bus = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/bus.js [client] (ecmascript)"));
const _shared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _router = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/router.js [client] (ecmascript)");
const usePagesDevOverlay = ()=>{
    const [state, dispatch] = (0, _shared.useErrorOverlayReducer)('pages');
    _react.default.useEffect({
        "usePagesDevOverlay.useEffect": ()=>{
            _bus.on(dispatch);
            const { handleStaticIndicator } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)");
            _router.Router.events.on('routeChangeComplete', handleStaticIndicator);
            return ({
                "usePagesDevOverlay.useEffect": function() {
                    _router.Router.events.off('routeChangeComplete', handleStaticIndicator);
                    _bus.off(dispatch);
                }
            })["usePagesDevOverlay.useEffect"];
        }
    }["usePagesDevOverlay.useEffect"], [
        dispatch
    ]);
    const onComponentError = _react.default.useCallback({
        "usePagesDevOverlay.useCallback[onComponentError]": (_error, _componentStack)=>{
        // TODO: special handling
        }
    }["usePagesDevOverlay.useCallback[onComponentError]"], []);
    return {
        state,
        onComponentError
    };
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/css.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "css", {
    enumerable: true,
    get: function() {
        return css;
    }
});
function css(strings) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    const lastIndex = strings.length - 1;
    const str = strings.slice(0, lastIndex).reduce((p, s, i)=>p + s + keys[i], '') + strings[lastIndex];
    return str // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove whitespace, tabs, and newlines
    .replace(/\s+/g, ' ') // Remove spaces before and after semicolons, and spaces after commas
    .replace(/\s*([:;,{}])\s*/g, '$1') // Remove extra semicolons
    .replace(/;+}/g, '}') // Trim leading and trailing whitespaces
    .trim();
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=css.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/font/font-styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FontStyles", {
    enumerable: true,
    get: function() {
        return FontStyles;
    }
});
const _tagged_template_literal_loose = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _css = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/css.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n      /* latin-ext */\n      @font-face {\n        font-family: '__nextjs-Geist';\n        font-style: normal;\n        font-weight: 400 600;\n        font-display: swap;\n        src: url(/__nextjs_font/geist-latin-ext.woff2) format('woff2');\n        unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7,\n          U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F,\n          U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,\n          U+A720-A7FF;\n      }\n      /* latin-ext */\n      @font-face {\n        font-family: '__nextjs-Geist Mono';\n        font-style: normal;\n        font-weight: 400 600;\n        font-display: swap;\n        src: url(/__nextjs_font/geist-mono-latin-ext.woff2) format('woff2');\n        unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7,\n          U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F,\n          U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F,\n          U+A720-A7FF;\n      }\n      /* latin */\n      @font-face {\n        font-family: '__nextjs-Geist';\n        font-style: normal;\n        font-weight: 400 600;\n        font-display: swap;\n        src: url(/__nextjs_font/geist-latin.woff2) format('woff2');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,\n          U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122,\n          U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      /* latin */\n      @font-face {\n        font-family: '__nextjs-Geist Mono';\n        font-style: normal;\n        font-weight: 400 600;\n        font-display: swap;\n        src: url(/__nextjs_font/geist-mono-latin.woff2) format('woff2');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,\n          U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122,\n          U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const FontStyles = ()=>{
    (0, _react.useInsertionEffect)(()=>{
        const style = document.createElement('style');
        style.textContent = (0, _css.css)(_templateObject());
        document.head.appendChild(style);
        return ()=>{
            document.head.removeChild(style);
        };
    }, []);
    return null;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=font-styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/shadow-portal.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ShadowPortal", {
    enumerable: true,
    get: function() {
        return ShadowPortal;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _reactdom = __turbopack_context__.r("[project]/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js [client] (ecmascript)");
const _shared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
function ShadowPortal(param) {
    let { children } = param;
    let portalNode = _react.useRef(null);
    let shadowNode = _react.useRef(null);
    let [, forceUpdate] = _react.useState();
    _react.useLayoutEffect({
        "ShadowPortal.useLayoutEffect": ()=>{
            const ownerDocument = document;
            portalNode.current = ownerDocument.createElement('nextjs-portal');
            // load default color preference from localstorage
            if (typeof localStorage !== 'undefined') {
                const theme = localStorage.getItem(_shared.STORAGE_KEY_THEME);
                if (theme === 'dark') {
                    portalNode.current.classList.add('dark');
                    portalNode.current.classList.remove('light');
                } else if (theme === 'light') {
                    portalNode.current.classList.remove('dark');
                    portalNode.current.classList.add('light');
                }
            }
            shadowNode.current = portalNode.current.attachShadow({
                mode: 'open'
            });
            ownerDocument.body.appendChild(portalNode.current);
            forceUpdate({});
            return ({
                "ShadowPortal.useLayoutEffect": ()=>{
                    if (portalNode.current && portalNode.current.ownerDocument) {
                        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
                    }
                }
            })["ShadowPortal.useLayoutEffect"];
        }
    }["ShadowPortal.useLayoutEffect"], []);
    return shadowNode.current ? /*#__PURE__*/ (0, _reactdom.createPortal)(children, shadowNode.current) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=shadow-portal.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/styles/base.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Base", {
    enumerable: true,
    get: function() {
        return Base;
    }
});
const _tagged_template_literal_loose = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _css = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/css.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        :host {\n          /* \n           * Although the style applied to the shadow host is isolated,\n           * the element that attached the shadow host (i.e. \"nextjs-portal\")\n           * is still affected by the parent's style (e.g. \"body\"). This may\n           * occur style conflicts like \"display: flex\", with other children\n           * elements therefore give the shadow host an absolute position.\n           */\n          position: absolute;\n\n          --color-font: #757575;\n          --color-backdrop: rgba(250, 250, 250, 0.8);\n          --color-border-shadow: rgba(0, 0, 0, 0.145);\n\n          --color-title-color: #1f1f1f;\n          --color-stack-notes: #777;\n\n          --color-accents-1: #808080;\n          --color-accents-2: #222222;\n          --color-accents-3: #404040;\n\n          --font-stack-monospace: '__nextjs-Geist Mono', 'Geist Mono',\n            'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,\n            monospace;\n          --font-stack-sans: '__nextjs-Geist', 'Geist', -apple-system,\n            'Source Sans Pro', sans-serif;\n\n          font-family: var(--font-stack-sans);\n\n          /* TODO: Remove replaced ones. */\n          --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n          --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),\n            0 1px 2px -1px rgb(0 0 0 / 0.1);\n          --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1),\n            0 2px 4px -2px rgb(0 0 0 / 0.1);\n          --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),\n            0 4px 6px -4px rgb(0 0 0 / 0.1);\n          --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1),\n            0 8px 10px -6px rgb(0 0 0 / 0.1);\n          --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n          --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);\n          --shadow-none: 0 0 #0000;\n\n          --shadow-small: 0px 2px 2px rgba(0, 0, 0, 0.04);\n          --shadow-menu: 0px 1px 1px rgba(0, 0, 0, 0.02),\n            0px 4px 8px -4px rgba(0, 0, 0, 0.04),\n            0px 16px 24px -8px rgba(0, 0, 0, 0.06);\n\n          --focus-color: var(--color-blue-800);\n          --focus-ring: 2px solid var(--focus-color);\n\n          --timing-swift: cubic-bezier(0.23, 0.88, 0.26, 0.92);\n          --timing-overlay: cubic-bezier(0.175, 0.885, 0.32, 1.1);\n\n          --rounded-none: 0px;\n          --rounded-sm: 2px;\n          --rounded-md: 4px;\n          --rounded-md-2: 6px;\n          --rounded-lg: 8px;\n          --rounded-xl: 12px;\n          --rounded-2xl: 16px;\n          --rounded-3xl: 24px;\n          --rounded-4xl: 32px;\n          --rounded-full: 9999px;\n\n          /* \n            Suffix N of --size-N as px value when the base font size is 16px.\n            Example: --size-1 is 1px, --size-2 is 2px, --size-3 is 3px, etc.\n          */\n          --size-1: 0.0625rem; /* 1px */\n          --size-2: 0.125rem; /* 2px */\n          --size-3: 0.1875rem; /* 3px */\n          --size-4: 0.25rem; /* ...and more */\n          --size-5: 0.3125rem;\n          --size-6: 0.375rem;\n          --size-7: 0.4375rem;\n          --size-8: 0.5rem;\n          --size-9: 0.5625rem;\n          --size-10: 0.625rem;\n          --size-11: 0.6875rem;\n          --size-12: 0.75rem;\n          --size-13: 0.8125rem;\n          --size-14: 0.875rem;\n          --size-15: 0.9375rem;\n          /* If the base font size of the dev overlay changes e.g. 18px, \n          just slide the window and make --size-18 as 1rem. */\n          --size-16: 1rem;\n          --size-17: 1.0625rem;\n          --size-18: 1.125rem;\n          --size-20: 1.25rem;\n          --size-22: 1.375rem;\n          --size-24: 1.5rem;\n          --size-26: 1.625rem;\n          --size-28: 1.75rem;\n          --size-30: 1.875rem;\n          --size-32: 2rem;\n          --size-34: 2.125rem;\n          --size-36: 2.25rem;\n          --size-38: 2.375rem;\n          --size-40: 2.5rem;\n          --size-42: 2.625rem;\n          --size-44: 2.75rem;\n          --size-46: 2.875rem;\n          --size-48: 3rem;\n\n          @media print {\n            display: none;\n          }\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-bottom: 8px;\n          font-weight: 500;\n          line-height: 1.5;\n        }\n\n        a {\n          color: var(--color-blue-900);\n          &:hover {\n            color: var(--color-blue-900);\n          }\n          &:focus {\n            outline: var(--focus-ring);\n          }\n        }\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function Base() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _css.css)(_templateObject())
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=base.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/hot-linked-text/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HotlinkedText", {
    enumerable: true,
    get: function() {
        return HotlinkedText;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _magicidentifier = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/magic-identifier.js [client] (ecmascript)");
const linkRegex = /https?:\/\/[^\s/$.?#].[^\s)'"]*/i;
const splitRegexp = new RegExp("(" + _magicidentifier.MAGIC_IDENTIFIER_REGEX.source + "|\\s+)");
const HotlinkedText = function HotlinkedText(props) {
    const { text, matcher } = props;
    const wordsAndWhitespaces = text.split(splitRegexp);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: wordsAndWhitespaces.map((word, index)=>{
            if (linkRegex.test(word)) {
                const link = linkRegex.exec(word);
                const href = link[0];
                // If link matcher is present but the link doesn't match, don't turn it into a link
                if (typeof matcher === 'function' && !matcher(href)) {
                    return word;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.default.Fragment, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                        href: href,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: word
                    })
                }, "link-" + index);
            }
            try {
                const decodedWord = (0, _magicidentifier.decodeMagicIdentifier)(word);
                if (decodedWord !== word) {
                    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("i", {
                        children: [
                            '{',
                            decodedWord,
                            '}'
                        ]
                    }, "ident-" + index);
                }
            } catch (e) {
                return /*#__PURE__*/ (0, _jsxruntime.jsxs)("i", {
                    children: [
                        '{',
                        word,
                        " (decoding failed: ",
                        '' + e,
                        ")",
                        '}'
                    ]
                }, "ident-" + index);
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.default.Fragment, {
                children: word
            }, "text-" + index);
        })
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/use-open-in-editor.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useOpenInEditor", {
    enumerable: true,
    get: function() {
        return useOpenInEditor;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
function useOpenInEditor(param) {
    let { file, lineNumber, column } = param === void 0 ? {} : param;
    const openInEditor = (0, _react.useCallback)(()=>{
        if (file == null || lineNumber == null || column == null) return;
        const params = new URLSearchParams();
        params.append('file', file);
        params.append('lineNumber', String(lineNumber));
        params.append('column', String(column));
        self.fetch((("TURBOPACK compile-time value", "") || '') + "/__nextjs_launch-editor?" + params.toString()).then(()=>{}, (cause)=>{
            console.error('Failed to open file "' + file + " (" + lineNumber + ":" + column + ')" in your editor. Cause:', cause);
        });
    }, [
        file,
        lineNumber,
        column
    ]);
    return openInEditor;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-open-in-editor.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/external.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ExternalIcon: null,
    SourceMappingErrorIcon: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ExternalIcon: function() {
        return ExternalIcon;
    },
    SourceMappingErrorIcon: function() {
        return SourceMappingErrorIcon;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function ExternalIcon(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "currentColor",
            d: "M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z"
        })
    });
}
function SourceMappingErrorIcon(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "16",
        strokeLinejoin: "round",
        viewBox: "-4 -4 24 24",
        width: "16",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.55846 2H7.44148L1.88975 13.5H14.1102L8.55846 2ZM9.90929 1.34788C9.65902 0.829456 9.13413 0.5 8.55846 0.5H7.44148C6.86581 0.5 6.34092 0.829454 6.09065 1.34787L0.192608 13.5653C-0.127943 14.2293 0.355835 15 1.09316 15H14.9068C15.6441 15 16.1279 14.2293 15.8073 13.5653L9.90929 1.34788ZM8.74997 4.75V5.5V8V8.75H7.24997V8V5.5V4.75H8.74997ZM7.99997 12C8.55226 12 8.99997 11.5523 8.99997 11C8.99997 10.4477 8.55226 10 7.99997 10C7.44769 10 6.99997 10.4477 6.99997 11C6.99997 11.5523 7.44769 12 7.99997 12Z",
            fill: "currentColor"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=external.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/file.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FileIcon", {
    enumerable: true,
    get: function() {
        return FileIcon;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function FileIcon(param) {
    let { lang } = param;
    if (!lang) return /*#__PURE__*/ (0, _jsxruntime.jsx)(File, {});
    switch(lang.toLowerCase()){
        case 'jsx':
        case 'tsx':
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(React, {});
        case 'ts':
        case 'typescript':
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(Ts, {});
        case 'javascript':
        case 'js':
        case 'mjs':
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(Js, {});
        case 'json':
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(Json, {});
        default:
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(File, {});
    }
}
function Json() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        clipRule: "evenodd",
        fillRule: "evenodd",
        height: "16",
        viewBox: "0 0 1321.45 1333.33",
        width: "16",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M221.37 618.44h757.94V405.15H755.14c-23.5 0-56.32-12.74-71.82-28.24-15.5-15.5-25-43.47-25-66.97V82.89H88.39c-1.99 0-3.49 1-4.49 2-1.5 1-2 2.5-2 4.5v1155.04c0 1.5 1 3.5 2 4.5 1 1.49 3 1.99 4.49 1.99H972.8c2 0 1.89-.99 2.89-1.99 1.5-1 3.61-3 3.61-4.5v-121.09H221.36c-44.96 0-82-36.9-82-81.99V700.44c0-45.1 36.9-82 82-82zm126.51 117.47h75.24v146.61c0 30.79-2.44 54.23-7.33 70.31-4.92 16.03-14.8 29.67-29.65 40.85-14.86 11.12-33.91 16.72-57.05 16.72-24.53 0-43.51-3.71-56.94-11.06-13.5-7.36-23.89-18.1-31.23-32.3-7.35-14.14-11.69-31.67-12.99-52.53l71.5-10.81c.11 11.81 1.07 20.61 2.81 26.33 1.76 5.78 4.75 10.37 9 13.95 2.87 2.33 6.94 3.46 12.25 3.46 8.4 0 14.58-3.46 18.53-10.37 3.9-6.92 5.87-18.6 5.87-35V735.92zm112.77 180.67l71.17-4.97c1.54 12.81 4.69 22.62 9.44 29.28 7.74 10.88 18.74 16.34 33.09 16.34 10.68 0 18.93-2.76 24.68-8.36 5.81-5.58 8.7-12.07 8.7-19.41 0-6.97-2.71-13.26-8.2-18.79-5.47-5.53-18.23-10.68-38.28-15.65-32.89-8.17-56.27-19.1-70.26-32.74-14.12-13.57-21.18-30.92-21.18-52.03 0-13.83 3.61-26.89 10.85-39.21 7.22-12.38 18.07-22.06 32.59-29.09 14.52-7.04 34.4-10.56 59.65-10.56 31 0 54.62 6.41 70.88 19.29 16.28 12.81 25.92 33.24 29.04 61.27l-70.5 4.65c-1.87-12.25-5.81-21.17-11.81-26.7-6.05-5.6-14.35-8.36-24.9-8.36-8.71 0-15.31 2.07-19.73 6.16-4.4 4.09-6.59 9.12-6.59 15.02 0 4.27 1.81 8.11 5.37 11.57 3.45 3.59 11.8 6.85 25.02 9.93 32.75 7.86 56.2 15.84 70.31 23.87 14.18 8.05 24.52 17.98 30.96 29.92 6.44 11.88 9.66 25.2 9.66 39.96 0 17.29-4.3 33.24-12.88 47.89-8.63 14.58-20.61 25.7-36.08 33.24-15.41 7.54-34.85 11.31-58.33 11.31-41.24 0-69.81-8.86-85.68-26.52-15.88-17.65-24.85-40.09-26.96-67.3zm248.74-45.5c0-44.05 11.02-78.36 33.09-102.87 22.09-24.57 52.82-36.82 92.24-36.82 40.38 0 71.5 12.07 93.34 36.13 21.86 24.13 32.77 57.94 32.77 101.37 0 31.54-4.75 57.36-14.3 77.54-9.54 20.18-23.37 35.89-41.4 47.13-18.07 11.24-40.55 16.84-67.48 16.84-27.33 0-49.99-4.83-67.94-14.52-17.92-9.74-32.49-25.07-43.62-46.06-11.13-20.92-16.72-47.19-16.72-78.74zm74.89.19c0 27.21 4.57 46.81 13.68 58.68 9.13 11.88 21.57 17.85 37.26 17.85 16.1 0 28.65-5.84 37.45-17.47 8.87-11.68 13.28-32.54 13.28-62.77 0-25.39-4.63-43.92-13.84-55.61-9.26-11.76-21.75-17.6-37.56-17.6-15.13 0-27.34 5.97-36.49 17.85-9.21 11.88-13.78 31.61-13.78 59.07zm209.08-135.36h69.99l90.98 149.05V735.91h70.83v269.96h-70.83l-90.48-148.24v148.24h-70.49V735.91zm67.71-117.47h178.37c45.1 0 82 37.04 82 82v340.91c0 44.96-37.03 81.99-82 81.99h-178.37v147c0 17.5-6.99 32.99-18.5 44.5-11.5 11.49-27 18.5-44.5 18.5H62.97c-17.5 0-32.99-7-44.5-18.5-11.49-11.5-18.5-27-18.5-44.5V63.49c0-17.5 7-33 18.5-44.5S45.97.49 62.97.49H700.1c1.5-.5 3-.5 4.5-.5 7 0 14 3 19 7.49h1c1 .5 1.5 1 2.5 2l325.46 329.47c5.5 5.5 9.5 13 9.5 21.5 0 2.5-.5 4.5-1 7v250.98zM732.61 303.47V96.99l232.48 235.47H761.6c-7.99 0-14.99-3.5-20.5-8.49-4.99-5-8.49-12.5-8.49-20.5z",
            fill: "currentColor"
        })
    });
}
function Js() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        height: "16",
        viewBox: "0 0 50 50",
        width: "16",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z",
            fill: "currentColor"
        })
    });
}
function Ts() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        fill: "none",
        height: "14",
        viewBox: "0 0 512 512",
        width: "14",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                fill: "currentColor",
                height: "512",
                rx: "50",
                width: "512"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                fill: "currentColor",
                height: "512",
                rx: "50",
                width: "512"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                clipRule: "evenodd",
                d: "m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z",
                fill: "var(--color-background-100)",
                fillRule: "evenodd"
            })
        ]
    });
}
function File() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "16",
        height: "17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.5 7v7a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 14V.5h7.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V7zM13 7v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2h5v5h5zM9.5 2.621V5.5h2.879L9.5 2.621z",
            fill: "currentColor"
        })
    });
}
function React() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        height: "16",
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: "16",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                clipPath: "url(#file_react_clip0_872_3183)",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.5 1.93782C4.70129 1.82161 4.99472 1.7858 5.41315 1.91053C5.83298 2.03567 6.33139 2.31073 6.87627 2.73948C7.01136 2.84578 7.14803 2.96052 7.28573 3.08331C6.86217 3.53446 6.44239 4.04358 6.03752 4.60092C5.35243 4.67288 4.70164 4.78186 4.09916 4.92309C4.06167 4.74244 4.03064 4.56671 4.00612 4.39656C3.90725 3.71031 3.91825 3.14114 4.01979 2.71499C4.12099 2.29025 4.29871 2.05404 4.5 1.93782ZM7.49466 1.95361C7.66225 2.08548 7.83092 2.22804 7.99999 2.38067C8.16906 2.22804 8.33773 2.08548 8.50532 1.95361C9.10921 1.47842 9.71982 1.12549 10.3012 0.952202C10.8839 0.778496 11.4838 0.7738 12 1.0718C12.5161 1.3698 12.812 1.89169 12.953 2.48322C13.0936 3.07333 13.0932 3.77858 12.9836 4.53917C12.9532 4.75024 12.9141 4.9676 12.8665 5.19034C13.0832 5.26044 13.291 5.33524 13.489 5.41444C14.2025 5.69983 14.8134 6.05217 15.2542 6.46899C15.696 6.8868 16 7.404 16 8C16 8.596 15.696 9.11319 15.2542 9.53101C14.8134 9.94783 14.2025 10.3002 13.489 10.5856C13.291 10.6648 13.0832 10.7396 12.8665 10.8097C12.9141 11.0324 12.9532 11.2498 12.9837 11.4608C13.0932 12.2214 13.0936 12.9267 12.953 13.5168C12.812 14.1083 12.5161 14.6302 12 14.9282C11.4839 15.2262 10.8839 15.2215 10.3012 15.0478C9.71984 14.8745 9.10923 14.5216 8.50534 14.0464C8.33775 13.9145 8.16906 13.7719 7.99999 13.6193C7.83091 13.7719 7.66223 13.9145 7.49464 14.0464C6.89075 14.5216 6.28014 14.8745 5.69879 15.0478C5.11605 15.2215 4.51613 15.2262 3.99998 14.9282C3.48383 14.6302 3.18794 14.1083 3.047 13.5168C2.9064 12.9267 2.90674 12.2214 3.01632 11.4608C3.04673 11.2498 3.08586 11.0324 3.13351 10.8097C2.91679 10.7395 2.709 10.6648 2.511 10.5856C1.79752 10.3002 1.18658 9.94783 0.745833 9.53101C0.304028 9.11319 0 8.596 0 8C0 7.404 0.304028 6.8868 0.745833 6.46899C1.18658 6.05217 1.79752 5.69983 2.511 5.41444C2.709 5.33524 2.9168 5.26044 3.13352 5.19034C3.08587 4.9676 3.04675 4.75024 3.01634 4.53917C2.90676 3.77858 2.90642 3.07332 3.04702 2.48321C3.18796 1.89169 3.48385 1.3698 4 1.0718C4.51615 0.773798 5.11607 0.778495 5.69881 0.952201C6.28016 1.12549 6.89077 1.47841 7.49466 1.95361ZM7.36747 4.51025C7.57735 4.25194 7.78881 4.00927 7.99999 3.78356C8.21117 4.00927 8.42263 4.25194 8.63251 4.51025C8.42369 4.50346 8.21274 4.5 8 4.5C7.78725 4.5 7.5763 4.50345 7.36747 4.51025ZM8.71425 3.08331C9.13781 3.53447 9.55759 4.04358 9.96246 4.60092C10.6475 4.67288 11.2983 4.78186 11.9008 4.92309C11.9383 4.74244 11.9693 4.56671 11.9939 4.39657C12.0927 3.71031 12.0817 3.14114 11.9802 2.71499C11.879 2.29025 11.7013 2.05404 11.5 1.93782C11.2987 1.82161 11.0053 1.7858 10.5868 1.91053C10.167 2.03568 9.66859 2.31073 9.12371 2.73948C8.98862 2.84578 8.85196 2.96052 8.71425 3.08331ZM8 5.5C8.48433 5.5 8.95638 5.51885 9.41188 5.55456C9.67056 5.93118 9.9229 6.33056 10.1651 6.75C10.4072 7.16944 10.6269 7.58766 10.8237 7.99998C10.6269 8.41232 10.4072 8.83055 10.165 9.25C9.92288 9.66944 9.67053 10.0688 9.41185 10.4454C8.95636 10.4812 8.48432 10.5 8 10.5C7.51567 10.5 7.04363 10.4812 6.58813 10.4454C6.32945 10.0688 6.0771 9.66944 5.83494 9.25C5.59277 8.83055 5.37306 8.41232 5.17624 7.99998C5.37306 7.58765 5.59275 7.16944 5.83492 6.75C6.07708 6.33056 6.32942 5.93118 6.5881 5.55456C7.04361 5.51884 7.51566 5.5 8 5.5ZM11.0311 6.25C11.1375 6.43423 11.2399 6.61864 11.3385 6.80287C11.4572 6.49197 11.5616 6.18752 11.6515 5.89178C11.3505 5.82175 11.0346 5.75996 10.706 5.70736C10.8163 5.8848 10.9247 6.06576 11.0311 6.25ZM11.0311 9.75C11.1374 9.56576 11.2399 9.38133 11.3385 9.19709C11.4572 9.50801 11.5617 9.81246 11.6515 10.1082C11.3505 10.1782 11.0346 10.24 10.7059 10.2926C10.8162 10.1152 10.9247 9.93424 11.0311 9.75ZM11.9249 7.99998C12.2051 8.62927 12.4362 9.24738 12.6151 9.83977C12.7903 9.78191 12.958 9.72092 13.1176 9.65708C13.7614 9.39958 14.2488 9.10547 14.5671 8.80446C14.8843 8.50445 15 8.23243 15 8C15 7.76757 14.8843 7.49555 14.5671 7.19554C14.2488 6.89453 13.7614 6.60042 13.1176 6.34292C12.958 6.27907 12.7903 6.21808 12.6151 6.16022C12.4362 6.7526 12.2051 7.37069 11.9249 7.99998ZM9.96244 11.3991C10.6475 11.3271 11.2983 11.2181 11.9008 11.0769C11.9383 11.2576 11.9694 11.4333 11.9939 11.6034C12.0928 12.2897 12.0817 12.8589 11.9802 13.285C11.879 13.7098 11.7013 13.946 11.5 14.0622C11.2987 14.1784 11.0053 14.2142 10.5868 14.0895C10.167 13.9643 9.66861 13.6893 9.12373 13.2605C8.98863 13.1542 8.85196 13.0395 8.71424 12.9167C9.1378 12.4655 9.55758 11.9564 9.96244 11.3991ZM8.63249 11.4898C8.42262 11.7481 8.21116 11.9907 7.99999 12.2164C7.78881 11.9907 7.57737 11.7481 7.36749 11.4897C7.57631 11.4965 7.78726 11.5 8 11.5C8.21273 11.5 8.42367 11.4965 8.63249 11.4898ZM4.96891 9.75C5.07528 9.93424 5.18375 10.1152 5.29404 10.2926C4.9654 10.24 4.64951 10.1782 4.34844 10.1082C4.43833 9.81246 4.54276 9.508 4.66152 9.19708C4.76005 9.38133 4.86254 9.56575 4.96891 9.75ZM6.03754 11.3991C5.35244 11.3271 4.70163 11.2181 4.09914 11.0769C4.06165 11.2576 4.03062 11.4333 4.0061 11.6034C3.90723 12.2897 3.91823 12.8589 4.01977 13.285C4.12097 13.7098 4.29869 13.946 4.49998 14.0622C4.70127 14.1784 4.9947 14.2142 5.41313 14.0895C5.83296 13.9643 6.33137 13.6893 6.87625 13.2605C7.01135 13.1542 7.14802 13.0395 7.28573 12.9167C6.86217 12.4655 6.4424 11.9564 6.03754 11.3991ZM4.07507 7.99998C3.79484 8.62927 3.56381 9.24737 3.38489 9.83977C3.20969 9.78191 3.042 9.72092 2.88239 9.65708C2.23864 9.39958 1.75123 9.10547 1.43294 8.80446C1.11571 8.50445 1 8.23243 1 8C1 7.76757 1.11571 7.49555 1.43294 7.19554C1.75123 6.89453 2.23864 6.60042 2.88239 6.34292C3.042 6.27907 3.2097 6.21808 3.3849 6.16022C3.56383 6.75261 3.79484 7.37069 4.07507 7.99998ZM4.66152 6.80287C4.54277 6.49197 4.43835 6.18752 4.34846 5.89178C4.64952 5.82175 4.96539 5.75996 5.29402 5.70736C5.18373 5.8848 5.07526 6.06576 4.96889 6.25C4.86253 6.43423 4.76005 6.61864 4.66152 6.80287ZM9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30965 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30965 9.25 8Z",
                    fill: "currentColor"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("defs", {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("clipPath", {
                    id: "file_react_clip0_872_3183",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "16",
                        height: "16",
                        fill: "white"
                    })
                })
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=file.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/code-frame/code-frame.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    CODE_FRAME_STYLES: null,
    CodeFrame: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CODE_FRAME_STYLES: function() {
        return CODE_FRAME_STYLES;
    },
    CodeFrame: function() {
        return CodeFrame;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _anser = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/anser/index.js [client] (ecmascript)"));
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)"));
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _hotlinkedtext = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/hot-linked-text/index.js [client] (ecmascript)");
const _stackframe = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/stack-frame.js [client] (ecmascript)");
const _useopenineditor = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/use-open-in-editor.js [client] (ecmascript)");
const _external = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/external.js [client] (ecmascript)");
const _file = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/file.js [client] (ecmascript)");
function CodeFrame(param) {
    let { stackFrame, codeFrame } = param;
    var _stackFrame_file;
    // Strip leading spaces out of the code frame:
    const formattedFrame = (0, _react.useMemo)(()=>{
        const lines = codeFrame.split(/\r?\n/g);
        // Find the minimum length of leading spaces after `|` in the code frame
        const miniLeadingSpacesLength = lines.map((line)=>/^>? +\d+ +\| [ ]+/.exec((0, _stripansi.default)(line)) === null ? null : /^>? +\d+ +\| ( *)/.exec((0, _stripansi.default)(line))).filter(Boolean).map((v)=>v.pop()).reduce((c, n)=>isNaN(c) ? n.length : Math.min(c, n.length), NaN);
        // When the minimum length of leading spaces is greater than 1, remove them
        // from the code frame to help the indentation looks better when there's a lot leading spaces.
        if (miniLeadingSpacesLength > 1) {
            return lines.map((line, a)=>~(a = line.indexOf('|')) ? line.substring(0, a) + line.substring(a).replace("^\\ {" + miniLeadingSpacesLength + "}", '') : line).join('\n');
        }
        return lines.join('\n');
    }, [
        codeFrame
    ]);
    const decoded = (0, _react.useMemo)(()=>{
        return _anser.default.ansiToJson(formattedFrame, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [
        formattedFrame
    ]);
    const open = (0, _useopenineditor.useOpenInEditor)({
        file: stackFrame.file,
        lineNumber: stackFrame.lineNumber,
        column: stackFrame.column
    });
    const fileExtension = stackFrame == null ? void 0 : (_stackFrame_file = stackFrame.file) == null ? void 0 : _stackFrame_file.split('.').pop();
    // TODO: make the caret absolute
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-codeframe": true,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "code-frame-header",
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                    className: "code-frame-link",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            className: "code-frame-icon",
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_file.FileIcon, {
                                lang: fileExtension
                            })
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                            "data-text": true,
                            children: [
                                (0, _stackframe.getFrameSource)(stackFrame),
                                " @",
                                ' ',
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                                    text: stackFrame.methodName
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                            "aria-label": "Open in editor",
                            "data-with-open-in-editor-link-source-file": true,
                            onClick: open,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                className: "code-frame-icon",
                                "data-icon": "right",
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_external.ExternalIcon, {
                                    width: 16,
                                    height: 16
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("pre", {
                className: "code-frame-pre",
                children: decoded.map((entry, index)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        style: {
                            color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                            ...entry.decoration === 'bold' ? // above 600, hence a temporary fix is to use 500 for bold.
                            {
                                fontWeight: 500
                            } : entry.decoration === 'italic' ? {
                                fontStyle: 'italic'
                            } : undefined
                        },
                        children: entry.content
                    }, "frame-" + index))
            })
        ]
    });
}
const CODE_FRAME_STYLES = "\n  [data-nextjs-codeframe] {\n    background-color: var(--color-background-200);\n    overflow: hidden;\n    color: var(--color-gray-1000);\n    text-overflow: ellipsis;\n    border: 1px solid var(--color-gray-400);\n    border-radius: 8px;\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-12);\n    line-height: var(--size-16);\n    margin: 8px 0;\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n  }\n\n  .code-frame-link,\n  .code-frame-pre {\n    padding: 12px;\n  }\n\n  .code-frame-link svg {\n    flex-shrink: 0;\n  }\n\n  .code-frame-link [data-text] {\n    display: inline-flex;\n    text-align: left;\n    margin: auto 6px;\n  }\n\n  .code-frame-pre {\n    white-space: pre-wrap;\n  }\n\n  .code-frame-header {\n    width: 100%;\n    transition: background 100ms ease-out;\n    border-radius: 8px 8px 0 0;\n    border-bottom: 1px solid var(--color-gray-400);\n  }\n\n  [data-with-open-in-editor-link-source-file] {\n    padding: 4px;\n    margin: -4px 0 -4px auto;\n    border-radius: var(--rounded-full);\n    margin-left: auto;\n\n    &:focus-visible {\n      outline: var(--focus-ring);\n      outline-offset: -2px;\n    }\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n  }\n\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n\n  [data-nextjs-codeframe] *:not(a) {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n  }\n\n  .code-frame-link {\n    display: flex;\n    margin: 0;\n    outline: 0;\n  }\n  .code-frame-link [data-icon='right'] {\n    margin-left: auto;\n  }\n\n  [data-nextjs-codeframe] div > pre {\n    overflow: hidden;\n    display: inline-block;\n  }\n\n  [data-nextjs-codeframe] svg {\n    color: var(--color-gray-900);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=code-frame.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/hooks/use-on-click-outside.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useOnClickOutside", {
    enumerable: true,
    get: function() {
        return useOnClickOutside;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
function useOnClickOutside(el, cssSelectorsToExclude, handler) {
    _react.useEffect({
        "useOnClickOutside.useEffect": ()=>{
            if (el == null || handler == null) {
                return;
            }
            const listener = {
                "useOnClickOutside.useEffect.listener": (e)=>{
                    // Do nothing if clicking ref's element or descendent elements
                    if (!el || el.contains(e.target)) {
                        return;
                    }
                    if (cssSelectorsToExclude.some({
                        "useOnClickOutside.useEffect.listener": (cssSelector)=>e.target.closest(cssSelector)
                    }["useOnClickOutside.useEffect.listener"])) {
                        return;
                    }
                    handler(e);
                }
            }["useOnClickOutside.useEffect.listener"];
            const root = el.getRootNode();
            root.addEventListener('mouseup', listener);
            root.addEventListener('touchend', listener, {
                passive: false
            });
            return ({
                "useOnClickOutside.useEffect": function() {
                    root.removeEventListener('mouseup', listener);
                    root.removeEventListener('touchend', listener);
                }
            })["useOnClickOutside.useEffect"];
        }
    }["useOnClickOutside.useEffect"], [
        handler,
        el,
        cssSelectorsToExclude
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-on-click-outside.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/hooks/use-measure-height.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMeasureHeight", {
    enumerable: true,
    get: function() {
        return useMeasureHeight;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
function useMeasureHeight(ref) {
    const [pristine, setPristine] = (0, _react.useState)(true);
    const [height, setHeight] = (0, _react.useState)(0);
    (0, _react.useEffect)(()=>{
        const el = ref.current;
        if (!el) {
            return;
        }
        const observer = new ResizeObserver(()=>{
            const { height: h } = el.getBoundingClientRect();
            setHeight((prevHeight)=>{
                if (prevHeight !== 0) {
                    setPristine(false);
                }
                return h;
            });
        });
        observer.observe(el);
        return ()=>{
            observer.disconnect();
            setPristine(true);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return [
        height,
        pristine
    ];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-measure-height.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Dialog", {
    enumerable: true,
    get: function() {
        return Dialog;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _useonclickoutside = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/hooks/use-on-click-outside.js [client] (ecmascript)");
const _usemeasureheight = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/hooks/use-measure-height.js [client] (ecmascript)");
const CSS_SELECTORS_TO_EXCLUDE_ON_CLICK_OUTSIDE = [
    '[data-next-mark]',
    '[data-issues-open]',
    '#nextjs-dev-tools-menu',
    '[data-nextjs-error-overlay-nav]',
    '[data-info-popover]'
];
const Dialog = function Dialog(param) {
    let { children, type, className, onClose, 'aria-labelledby': ariaLabelledBy, 'aria-describedby': ariaDescribedBy, dialogResizerRef, ...props } = param;
    const [dialog, setDialog] = _react.useState(null);
    const [role, setRole] = _react.useState(typeof document !== 'undefined' && document.hasFocus() ? 'dialog' : undefined);
    const ref = _react.useRef(null);
    const [height, pristine] = (0, _usemeasureheight.useMeasureHeight)(ref);
    const onDialog = _react.useCallback({
        "Dialog.useCallback[onDialog]": (node)=>{
            setDialog(node);
        }
    }["Dialog.useCallback[onDialog]"], []);
    (0, _useonclickoutside.useOnClickOutside)(dialog, CSS_SELECTORS_TO_EXCLUDE_ON_CLICK_OUTSIDE, (e)=>{
        e.preventDefault();
        return onClose == null ? void 0 : onClose();
    });
    _react.useEffect({
        "Dialog.useEffect": ()=>{
            if (dialog == null) {
                return;
            }
            function handleFocus() {
                // safari will force itself as the active application when a background page triggers any sort of autofocus
                // this is a workaround to only set the dialog role if the document has focus
                setRole(document.hasFocus() ? 'dialog' : undefined);
            }
            window.addEventListener('focus', handleFocus);
            window.addEventListener('blur', handleFocus);
            return ({
                "Dialog.useEffect": ()=>{
                    window.removeEventListener('focus', handleFocus);
                    window.removeEventListener('blur', handleFocus);
                }
            })["Dialog.useEffect"];
        }
    }["Dialog.useEffect"], [
        dialog
    ]);
    _react.useEffect({
        "Dialog.useEffect": ()=>{
            const root = dialog == null ? void 0 : dialog.getRootNode();
            const activeElement = root instanceof ShadowRoot ? root == null ? void 0 : root.activeElement : null;
            // Trap focus within the dialog
            dialog == null ? void 0 : dialog.focus();
            return ({
                "Dialog.useEffect": ()=>{
                    // Blur first to avoid getting stuck, in case `activeElement` is missing
                    dialog == null ? void 0 : dialog.blur();
                    // Restore focus to the previously active element
                    activeElement == null ? void 0 : activeElement.focus();
                }
            })["Dialog.useEffect"];
        }
    }["Dialog.useEffect"], [
        dialog
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        ref: onDialog,
        "data-nextjs-dialog": true,
        tabIndex: 1,
        role: role,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        "aria-modal": "true",
        className: className,
        onKeyDown: (e)=>{
            if (e.key === 'Escape') {
                onClose == null ? void 0 : onClose();
            }
        },
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            ref: dialogResizerRef,
            "data-nextjs-dialog-sizer": true,
            // [x] Don't animate on initial load
            // [x] No duplicate elements
            // [x] Responds to content growth
            style: {
                height,
                transition: pristine ? undefined : 'height 250ms var(--timing-swift)'
            },
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                ref: ref,
                children: children
            })
        })
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dialog.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog-body.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogBody", {
    enumerable: true,
    get: function() {
        return DialogBody;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const DialogBody = function DialogBody(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-nextjs-dialog-body": true,
        className: className,
        children: children
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dialog-body.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog-content.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogContent", {
    enumerable: true,
    get: function() {
        return DialogContent;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const DialogContent = function DialogContent(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-nextjs-dialog-content": true,
        className: className,
        children: children
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dialog-content.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog-header.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogHeader", {
    enumerable: true,
    get: function() {
        return DialogHeader;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const DialogHeader = function DialogHeader(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-nextjs-dialog-header": true,
        className: className,
        children: children
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dialog-header.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog-footer.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogFooter", {
    enumerable: true,
    get: function() {
        return DialogFooter;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function DialogFooter(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-nextjs-dialog-footer": true,
        className: className,
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dialog-footer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const styles = "\n  [data-nextjs-dialog-root] {\n    --next-dialog-radius: var(--rounded-xl);\n    --next-dialog-footer-height: var(--size-48);\n    --next-dialog-max-width: 960px;\n    --next-dialog-row-padding: 16px;\n    --next-dialog-container-padding: 12px;\n\n    display: flex;\n    flex-direction: column-reverse;\n    width: 100%;\n    max-height: calc(100% - 56px);\n    max-width: var(--next-dialog-max-width);\n    margin-right: auto;\n    margin-left: auto;\n    scale: 0.98;\n    opacity: 0;\n    transition-property: scale, opacity;\n    transition-duration: var(--transition-duration);\n    transition-timing-function: var(--timing-overlay);\n\n    &[data-rendered='true'] {\n      opacity: 1;\n      scale: 1;\n    }\n  }\n\n  [data-nextjs-dialog] {\n    outline: none;\n    overflow: hidden;\n  }\n  [data-nextjs-dialog]::-webkit-scrollbar {\n    width: 6px;\n    border-radius: 0 0 1rem 1rem;\n    margin-bottom: 1rem;\n  }\n  [data-nextjs-dialog]::-webkit-scrollbar-button {\n    display: none;\n  }\n  [data-nextjs-dialog]::-webkit-scrollbar-track {\n    border-radius: 0 0 1rem 1rem;\n    background-color: var(--color-background-100);\n  }\n  [data-nextjs-dialog]::-webkit-scrollbar-thumb {\n    border-radius: 1rem;\n    background-color: var(--color-gray-500);\n  }\n\n  \n  [data-nextjs-dialog-sizer] {\n    overflow: hidden;\n    border-radius: inherit;\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    opacity: 0;\n    transition: opacity var(--transition-duration) var(--timing-overlay);\n  }\n\n  [data-nextjs-dialog-overlay][data-rendered='true']\n    [data-nextjs-dialog-backdrop] {\n    opacity: 1;\n  }\n\n  [data-nextjs-dialog-content] {\n    overflow-y: auto;\n    border: none;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    padding: 16px 12px;\n  }\n\n  /* Account for the footer height, when present */\n  [data-nextjs-dialog][data-has-footer='true'] [data-nextjs-dialog-body] {\n    margin-bottom: var(--next-dialog-footer-height);\n  }\n\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {\n    flex-shrink: 0;\n    margin-bottom: 8px;\n  }\n\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {\n    position: relative;\n    flex: 1 1 auto;\n  }\n\n  [data-nextjs-dialog-footer] {\n    /* Subtract border width */\n    width: calc(100% - 2px);\n    /* \n      We make this element fixed to anchor it to the bottom during the height transition.\n      If you make this relative it will jump during the transition and not collapse or expand smoothly.\n      If you make this absolute it will remain stuck at its initial position when scrolling the dialog.\n    */\n    position: fixed;\n    bottom: 1px;\n    min-height: var(--next-dialog-footer-height);\n    border-radius: 0 0 var(--next-dialog-radius) var(--next-dialog-radius);\n    overflow: hidden;\n\n    > * {\n      min-height: var(--next-dialog-footer-height);\n    }\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      max-height: calc(100% - 15px);\n    }\n  }\n\n  @media (min-width: 576px) {\n    [data-nextjs-dialog-root] {\n      --next-dialog-max-width: 540px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    [data-nextjs-dialog-root] {\n      --next-dialog-max-width: 720px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    [data-nextjs-dialog-root] {\n      --next-dialog-max-width: 960px;\n    }\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Dialog: null,
    DialogBody: null,
    DialogContent: null,
    DialogFooter: null,
    DialogHeader: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Dialog: function() {
        return _dialog.Dialog;
    },
    DialogBody: function() {
        return _dialogbody.DialogBody;
    },
    DialogContent: function() {
        return _dialogcontent.DialogContent;
    },
    DialogFooter: function() {
        return _dialogfooter.DialogFooter;
    },
    DialogHeader: function() {
        return _dialogheader.DialogHeader;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _dialog = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog.js [client] (ecmascript)");
const _dialogbody = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog-body.js [client] (ecmascript)");
const _dialogcontent = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog-content.js [client] (ecmascript)");
const _dialogheader = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog-header.js [client] (ecmascript)");
const _dialogfooter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog-footer.js [client] (ecmascript)");
const _styles = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/styles.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/cx.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Merge multiple args to a single string with spaces. Useful for merging class names.
 * @example
 * cx('foo', 'bar') // 'foo bar'
 * cx('foo', null, 'bar', undefined, 'baz', false) // 'foo bar baz'
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cx", {
    enumerable: true,
    get: function() {
        return cx;
    }
});
function cx() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return args.filter(Boolean).join(' ');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cx.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/copy-button/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    COPY_BUTTON_STYLES: null,
    CopyButton: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    COPY_BUTTON_STYLES: function() {
        return COPY_BUTTON_STYLES;
    },
    CopyButton: function() {
        return CopyButton;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _cx = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/cx.js [client] (ecmascript)");
function useCopyLegacy(content) {
    // This would be simpler with useActionState but we need to support React 18 here.
    // React 18 also doesn't have async transitions.
    const [copyState, dispatch] = _react.useReducer({
        "useCopyLegacy.useReducer": (state, action)=>{
            if (action.type === 'reset') {
                return {
                    state: 'initial'
                };
            }
            if (action.type === 'copied') {
                return {
                    state: 'success'
                };
            }
            if (action.type === 'copying') {
                return {
                    state: 'pending'
                };
            }
            if (action.type === 'error') {
                return {
                    state: 'error',
                    error: action.error
                };
            }
            return state;
        }
    }["useCopyLegacy.useReducer"], {
        state: 'initial'
    });
    function copy() {
        if (isPending) {
            return;
        }
        if (!navigator.clipboard) {
            dispatch({
                type: 'error',
                error: Object.defineProperty(new Error('Copy to clipboard is not supported in this browser'), "__NEXT_ERROR_CODE", {
                    value: "E376",
                    enumerable: false,
                    configurable: true
                })
            });
        } else {
            dispatch({
                type: 'copying'
            });
            navigator.clipboard.writeText(content).then(()=>{
                dispatch({
                    type: 'copied'
                });
            }, (error)=>{
                dispatch({
                    type: 'error',
                    error
                });
            });
        }
    }
    const reset = _react.useCallback({
        "useCopyLegacy.useCallback[reset]": ()=>{
            dispatch({
                type: 'reset'
            });
        }
    }["useCopyLegacy.useCallback[reset]"], []);
    const isPending = copyState.state === 'pending';
    return [
        copyState,
        copy,
        reset,
        isPending
    ];
}
function useCopyModern(content) {
    const [copyState, dispatch, isPending] = _react.useActionState({
        "useCopyModern.useActionState": (state, action)=>{
            if (action === 'reset') {
                return {
                    state: 'initial'
                };
            }
            if (action === 'copy') {
                if (!navigator.clipboard) {
                    return {
                        state: 'error',
                        error: Object.defineProperty(new Error('Copy to clipboard is not supported in this browser'), "__NEXT_ERROR_CODE", {
                            value: "E376",
                            enumerable: false,
                            configurable: true
                        })
                    };
                }
                return navigator.clipboard.writeText(content).then({
                    "useCopyModern.useActionState": ()=>{
                        return {
                            state: 'success'
                        };
                    }
                }["useCopyModern.useActionState"], {
                    "useCopyModern.useActionState": (error)=>{
                        return {
                            state: 'error',
                            error
                        };
                    }
                }["useCopyModern.useActionState"]);
            }
            return state;
        }
    }["useCopyModern.useActionState"], {
        state: 'initial'
    });
    function copy() {
        _react.startTransition(()=>{
            dispatch('copy');
        });
    }
    const reset = _react.useCallback({
        "useCopyModern.useCallback[reset]": ()=>{
            dispatch('reset');
        }
    }["useCopyModern.useCallback[reset]"], [
        // TODO: `dispatch` from `useActionState` is not reactive.
        // Remove from dependencies once https://github.com/facebook/react/pull/29665 is released.
        dispatch
    ]);
    return [
        copyState,
        copy,
        reset,
        isPending
    ];
}
const useCopy = typeof _react.useActionState === 'function' ? useCopyModern : useCopyLegacy;
function CopyButton(param) {
    let { actionLabel, successLabel, content, icon, disabled, ...props } = param;
    const [copyState, copy, reset, isPending] = useCopy(content);
    const error = copyState.state === 'error' ? copyState.error : null;
    _react.useEffect({
        "CopyButton.useEffect": ()=>{
            if (error !== null) {
                // Additional console.error to get the stack.
                console.error(error);
            }
        }
    }["CopyButton.useEffect"], [
        error
    ]);
    _react.useEffect({
        "CopyButton.useEffect": ()=>{
            if (copyState.state === 'success') {
                const timeoutId = setTimeout({
                    "CopyButton.useEffect.timeoutId": ()=>{
                        reset();
                    }
                }["CopyButton.useEffect.timeoutId"], 2000);
                return ({
                    "CopyButton.useEffect": ()=>{
                        clearTimeout(timeoutId);
                    }
                })["CopyButton.useEffect"];
            }
        }
    }["CopyButton.useEffect"], [
        isPending,
        copyState.state,
        reset
    ]);
    const isDisabled = isPending || disabled;
    const label = copyState.state === 'success' ? successLabel : actionLabel;
    // Assign default icon
    const renderedIcon = copyState.state === 'success' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(CopySuccessIcon, {}) : icon || /*#__PURE__*/ (0, _jsxruntime.jsx)(CopyIcon, {
        width: 14,
        height: 14,
        className: "error-overlay-toolbar-button-icon"
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
        ...props,
        type: "button",
        title: label,
        "aria-label": label,
        "aria-disabled": isDisabled,
        disabled: isDisabled,
        "data-nextjs-copy-button": true,
        className: (0, _cx.cx)(props.className, 'nextjs-data-copy-button', "nextjs-data-copy-button--" + copyState.state),
        onClick: ()=>{
            if (!isDisabled) {
                copy();
            }
        },
        children: [
            renderedIcon,
            copyState.state === 'error' ? " " + copyState.error : null
        ]
    });
}
function CopyIcon(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.406.438c-.845 0-1.531.685-1.531 1.53v6.563c0 .846.686 1.531 1.531 1.531H3.937V8.75H2.406a.219.219 0 0 1-.219-.219V1.97c0-.121.098-.219.22-.219h4.812c.12 0 .218.098.218.219v.656H8.75v-.656c0-.846-.686-1.532-1.531-1.532H2.406zm4.375 3.5c-.845 0-1.531.685-1.531 1.53v6.563c0 .846.686 1.531 1.531 1.531h4.813c.845 0 1.531-.685 1.531-1.53V5.468c0-.846-.686-1.532-1.531-1.532H6.78zm-.218 1.53c0-.12.097-.218.218-.218h4.813c.12 0 .219.098.219.219v6.562c0 .121-.098.219-.22.219H6.782a.219.219 0 0 1-.218-.219V5.47z",
            fill: "currentColor"
        })
    });
}
function CopySuccessIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        height: "16",
        xlinkTitle: "copied",
        viewBox: "0 0 16 16",
        width: "16",
        stroke: "currentColor",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
        })
    });
}
const COPY_BUTTON_STYLES = "\n  .nextjs-data-copy-button {\n    color: inherit;\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n  }\n  .nextjs-data-copy-button--initial:hover {\n    cursor: pointer;\n  }\n  .nextjs-data-copy-button--error,\n  .nextjs-data-copy-button--error:hover {\n    color: var(--color-ansi-red);\n  }\n  .nextjs-data-copy-button--success {\n    color: var(--color-ansi-green);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-toolbar/nodejs-inspector-button.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NodejsInspectorButton", {
    enumerable: true,
    get: function() {
        return NodejsInspectorButton;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _copybutton = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/copy-button/index.js [client] (ecmascript)");
// Inline this helper to avoid widely used across the codebase,
// as for this feature the Chrome detector doesn't need to be super accurate.
function isChrome() {
    if (typeof window === 'undefined') return false;
    const isChromium = 'chrome' in window && window.chrome;
    const vendorName = window.navigator.vendor;
    return isChromium !== null && isChromium !== undefined && vendorName === 'Google Inc.';
}
const isChromeBrowser = isChrome();
function NodeJsIcon(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("mask", {
                id: "nodejs_icon_mask_a",
                style: {
                    maskType: 'luminance'
                },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "14",
                height: "14",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                    d: "M6.67.089 1.205 3.256a.663.663 0 0 0-.33.573v6.339c0 .237.126.455.33.574l5.466 3.17a.66.66 0 0 0 .66 0l5.465-3.17a.664.664 0 0 0 .329-.574V3.829a.663.663 0 0 0-.33-.573L7.33.089a.663.663 0 0 0-.661 0",
                    fill: "#fff"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                mask: "url(#nodejs_icon_mask_a)",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                    d: "M18.648 2.717 3.248-4.86-4.648 11.31l15.4 7.58 7.896-16.174z",
                    fill: "url(#nodejs_icon_linear_gradient_b)"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("mask", {
                id: "nodejs_icon_mask_c",
                style: {
                    maskType: 'luminance'
                },
                maskUnits: "userSpaceOnUse",
                x: "1",
                y: "0",
                width: "12",
                height: "14",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                    d: "M1.01 10.57a.663.663 0 0 0 .195.17l4.688 2.72.781.45a.66.66 0 0 0 .51.063l5.764-10.597a.653.653 0 0 0-.153-.122L9.216 1.18 7.325.087a.688.688 0 0 0-.171-.07L1.01 10.57z",
                    fill: "#fff"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                mask: "url(#nodejs_icon_mask_c)",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                    d: "M-5.647 4.958 5.226 19.734l14.38-10.667L8.734-5.71-5.647 4.958z",
                    fill: "url(#nodejs_icon_linear_gradient_d)"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("mask", {
                        id: "nodejs_icon_mask_e",
                        style: {
                            maskType: 'luminance'
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "1",
                        y: "0",
                        width: "13",
                        height: "14",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                            d: "M6.934.004A.665.665 0 0 0 6.67.09L1.22 3.247l5.877 10.746a.655.655 0 0 0 .235-.08l5.465-3.17a.665.665 0 0 0 .319-.453L7.126.015a.684.684 0 0 0-.189-.01",
                            fill: "#fff"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                        mask: "url(#nodejs_icon_mask_e)",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                            d: "M1.22.002v13.992h11.894V.002H1.22z",
                            fill: "url(#nodejs_icon_linear_gradient_f)"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        id: "nodejs_icon_linear_gradient_b",
                        x1: "10.943",
                        y1: "-1.084",
                        x2: "2.997",
                        y2: "15.062",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".3",
                                stopColor: "#3E863D"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".5",
                                stopColor: "#55934F"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".8",
                                stopColor: "#5AAD45"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        id: "nodejs_icon_linear_gradient_d",
                        x1: "-.145",
                        y1: "12.431",
                        x2: "14.277",
                        y2: "1.818",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".57",
                                stopColor: "#3E863D"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".72",
                                stopColor: "#619857"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#76AC64"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        id: "nodejs_icon_linear_gradient_f",
                        x1: "1.225",
                        y1: "6.998",
                        x2: "13.116",
                        y2: "6.998",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".16",
                                stopColor: "#6BBF47"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".38",
                                stopColor: "#79B461"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".47",
                                stopColor: "#75AC64"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".7",
                                stopColor: "#659E5A"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".9",
                                stopColor: "#3E863D"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function NodeJsDisabledIcon(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("mask", {
                id: "nodejs_icon_mask_a",
                style: {
                    maskType: 'luminance'
                },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "14",
                height: "14",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                    d: "M6.67.089 1.205 3.256a.663.663 0 0 0-.33.573v6.339c0 .237.126.455.33.574l5.466 3.17a.66.66 0 0 0 .66 0l5.465-3.17a.664.664 0 0 0 .329-.574V3.829a.663.663 0 0 0-.33-.573L7.33.089a.663.663 0 0 0-.661 0",
                    fill: "#fff"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                mask: "url(#nodejs_icon_mask_a)",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                    d: "M18.648 2.717 3.248-4.86-4.646 11.31l15.399 7.58 7.896-16.174z",
                    fill: "url(#nodejs_icon_linear_gradient_b)"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("mask", {
                id: "nodejs_icon_mask_c",
                style: {
                    maskType: 'luminance'
                },
                maskUnits: "userSpaceOnUse",
                x: "1",
                y: "0",
                width: "12",
                height: "15",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                    d: "M1.01 10.571a.66.66 0 0 0 .195.172l4.688 2.718.781.451a.66.66 0 0 0 .51.063l5.764-10.597a.653.653 0 0 0-.153-.122L9.216 1.181 7.325.09a.688.688 0 0 0-.171-.07L1.01 10.572z",
                    fill: "#fff"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                mask: "url(#nodejs_icon_mask_c)",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                    d: "M-5.647 4.96 5.226 19.736 19.606 9.07 8.734-5.707-5.647 4.96z",
                    fill: "url(#nodejs_icon_linear_gradient_d)"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("mask", {
                        id: "nodejs_icon_mask_e",
                        style: {
                            maskType: 'luminance'
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "1",
                        y: "0",
                        width: "13",
                        height: "14",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                            d: "M6.935.003a.665.665 0 0 0-.264.085l-5.45 3.158 5.877 10.747a.653.653 0 0 0 .235-.082l5.465-3.17a.665.665 0 0 0 .319-.452L7.127.014a.684.684 0 0 0-.189-.01",
                            fill: "#fff"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                        mask: "url(#nodejs_icon_mask_e)",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                            d: "M1.222.001v13.992h11.893V0H1.222z",
                            fill: "url(#nodejs_icon_linear_gradient_f)"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        id: "nodejs_icon_linear_gradient_b",
                        x1: "10.944",
                        y1: "-1.084",
                        x2: "2.997",
                        y2: "15.062",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".3",
                                stopColor: "#676767"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".5",
                                stopColor: "#858585"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".8",
                                stopColor: "#989A98"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        id: "nodejs_icon_linear_gradient_d",
                        x1: "-.145",
                        y1: "12.433",
                        x2: "14.277",
                        y2: "1.819",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".57",
                                stopColor: "#747474"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".72",
                                stopColor: "#707070"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#929292"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        id: "nodejs_icon_linear_gradient_f",
                        x1: "1.226",
                        y1: "6.997",
                        x2: "13.117",
                        y2: "6.997",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".16",
                                stopColor: "#878787"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".38",
                                stopColor: "#A9A9A9"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".47",
                                stopColor: "#A5A5A5"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".7",
                                stopColor: "#8F8F8F"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: ".9",
                                stopColor: "#626262"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const label = 'Learn more about enabling Node.js inspector for server code with Chrome DevTools';
function NodejsInspectorButton(param) {
    let { devtoolsFrontendUrl } = param;
    const content = devtoolsFrontendUrl || '';
    const disabled = !content || !isChromeBrowser;
    if (disabled) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            title: label,
            "aria-label": label,
            className: "nodejs-inspector-button",
            href: "https://nextjs.org/docs/app/building-your-application/configuring/debugging#server-side-code",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(NodeJsDisabledIcon, {
                className: "error-overlay-toolbar-button-icon",
                width: 14,
                height: 14
            })
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_copybutton.CopyButton, {
        "data-nextjs-data-runtime-error-copy-devtools-url": true,
        className: "nodejs-inspector-button",
        actionLabel: 'Copy Chrome DevTools URL',
        successLabel: "Copied",
        content: content,
        icon: /*#__PURE__*/ (0, _jsxruntime.jsx)(NodeJsIcon, {
            className: "error-overlay-toolbar-button-icon",
            width: 14,
            height: 14
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=nodejs-inspector-button.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-toolbar/copy-stack-trace-button.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CopyStackTraceButton", {
    enumerable: true,
    get: function() {
        return CopyStackTraceButton;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _copybutton = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/copy-button/index.js [client] (ecmascript)");
function CopyStackTraceButton(param) {
    let { error } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_copybutton.CopyButton, {
        "data-nextjs-data-runtime-error-copy-stack": true,
        className: "copy-stack-trace-button",
        actionLabel: "Copy Stack Trace",
        successLabel: "Stack Trace Copied",
        content: error.stack || '',
        disabled: !error.stack
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=copy-stack-trace-button.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/parse-url-from-text.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseUrlFromText", {
    enumerable: true,
    get: function() {
        return parseUrlFromText;
    }
});
function parseUrlFromText(text, matcherFunc) {
    const linkRegex = /https?:\/\/[^\s/$.?#].[^\s)'"]*/gi;
    const links = Array.from(text.matchAll(linkRegex), (match)=>match[0]);
    if (matcherFunc) {
        return links.filter((link)=>matcherFunc(link));
    }
    return links;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parse-url-from-text.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-toolbar/docs-link-button.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DocsLinkButton", {
    enumerable: true,
    get: function() {
        return DocsLinkButton;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _ishydrationerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)");
const _parseurlfromtext = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/parse-url-from-text.js [client] (ecmascript)");
const docsURLAllowlist = [
    'https://nextjs.org',
    'https://react.dev'
];
function docsLinkMatcher(text) {
    return docsURLAllowlist.some((url)=>text.startsWith(url));
}
function getDocsURLFromErrorMessage(text) {
    const urls = (0, _parseurlfromtext.parseUrlFromText)(text, docsLinkMatcher);
    if (urls.length === 0) {
        return null;
    }
    const href = urls[0];
    // Replace react hydration error link with nextjs hydration error link
    if (href === _ishydrationerror.REACT_HYDRATION_ERROR_LINK) {
        return _ishydrationerror.NEXTJS_HYDRATION_ERROR_LINK;
    }
    return href;
}
function DocsLinkButton(param) {
    let { errorMessage } = param;
    const docsURL = getDocsURLFromErrorMessage(errorMessage);
    if (!docsURL) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
            title: "No related documentation found",
            "aria-label": "No related documentation found",
            className: "docs-link-button",
            disabled: true,
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(DocsIcon, {
                className: "error-overlay-toolbar-button-icon",
                width: 14,
                height: 14
            })
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
        title: "Go to related documentation",
        "aria-label": "Go to related documentation",
        className: "docs-link-button",
        href: docsURL,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(DocsIcon, {
            className: "error-overlay-toolbar-button-icon",
            width: 14,
            height: 14
        })
    });
}
function DocsIcon(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0 .875h4.375C5.448.875 6.401 1.39 7 2.187A3.276 3.276 0 0 1 9.625.875H14v11.156H9.4c-.522 0-1.023.208-1.392.577l-.544.543h-.928l-.544-.543c-.369-.37-.87-.577-1.392-.577H0V.875zm6.344 3.281a1.969 1.969 0 0 0-1.969-1.968H1.312v8.53H4.6c.622 0 1.225.177 1.744.502V4.156zm1.312 7.064V4.156c0-1.087.882-1.968 1.969-1.968h3.063v8.53H9.4c-.622 0-1.225.177-1.744.502z",
            fill: "currentColor"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=docs-link-button.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-toolbar/error-overlay-toolbar.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorOverlayToolbar: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorOverlayToolbar: function() {
        return ErrorOverlayToolbar;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _nodejsinspectorbutton = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-toolbar/nodejs-inspector-button.js [client] (ecmascript)");
const _copystacktracebutton = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-toolbar/copy-stack-trace-button.js [client] (ecmascript)");
const _docslinkbutton = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-toolbar/docs-link-button.js [client] (ecmascript)");
function ErrorOverlayToolbar(param) {
    let { error, debugInfo } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
        className: "error-overlay-toolbar",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_copystacktracebutton.CopyStackTraceButton, {
                error: error
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_docslinkbutton.DocsLinkButton, {
                errorMessage: error.message
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_nodejsinspectorbutton.NodejsInspectorButton, {
                devtoolsFrontendUrl: debugInfo == null ? void 0 : debugInfo.devtoolsFrontendUrl
            })
        ]
    });
}
const styles = "\n  .error-overlay-toolbar {\n    display: flex;\n    gap: 6px;\n  }\n\n  .nodejs-inspector-button,\n  .copy-stack-trace-button,\n  .docs-link-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: var(--size-28);\n    height: var(--size-28);\n    background: var(--color-background-100);\n    background-clip: padding-box;\n    border: 1px solid var(--color-gray-alpha-400);\n    box-shadow: var(--shadow-small);\n    border-radius: var(--rounded-full);\n\n    svg {\n      width: var(--size-14);\n      height: var(--size-14);\n    }\n\n    &:focus {\n      outline: var(--focus-ring);\n    }\n\n    &:not(:disabled):hover {\n      background: var(--color-gray-alpha-100);\n    }\n\n    &:not(:disabled):active {\n      background: var(--color-gray-alpha-200);\n    }\n\n    &:disabled {\n      background-color: var(--color-gray-100);\n      cursor: not-allowed;\n    }\n  }\n\n  .error-overlay-toolbar-button-icon {\n    color: var(--color-gray-900);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-overlay-toolbar.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/thumbs/thumbs-up.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ThumbsUp", {
    enumerable: true,
    get: function() {
        return ThumbsUp;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function ThumbsUp(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "thumbs-up-icon",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
            id: "thumb-up-16",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                id: "Union",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.89531 2.23959C6.72984 2.1214 6.5 2.23968 6.5 2.44303V5.24989C6.5 6.21639 5.7165 6.99989 4.75 6.99989H2.5V13.4999H12.1884C12.762 13.4999 13.262 13.1095 13.4011 12.5531L14.4011 8.55306C14.5984 7.76412 14.0017 6.99989 13.1884 6.99989H9.25H8.5V6.24989V3.51446C8.5 3.43372 8.46101 3.35795 8.39531 3.31102L6.89531 2.23959ZM5 2.44303C5 1.01963 6.6089 0.191656 7.76717 1.01899L9.26717 2.09042C9.72706 2.41892 10 2.94929 10 3.51446V5.49989H13.1884C14.9775 5.49989 16.2903 7.18121 15.8563 8.91686L14.8563 12.9169C14.5503 14.1411 13.4503 14.9999 12.1884 14.9999H1.75H1V14.2499V6.24989V5.49989H1.75H4.75C4.88807 5.49989 5 5.38796 5 5.24989V2.44303Z",
                fill: "currentColor"
            })
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=thumbs-up.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/thumbs/thumbs-down.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ThumbsDown", {
    enumerable: true,
    get: function() {
        return ThumbsDown;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function ThumbsDown(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "thumbs-down-icon",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.89531 12.7603C5.72984 12.8785 5.5 12.7602 5.5 12.5569V9.75C5.5 8.7835 4.7165 8 3.75 8H1.5V1.5H11.1884C11.762 1.5 12.262 1.89037 12.4011 2.44683L13.4011 6.44683C13.5984 7.23576 13.0017 8 12.1884 8H8.25H7.5V8.75V11.4854C7.5 11.5662 7.46101 11.6419 7.39531 11.6889L5.89531 12.7603ZM4 12.5569C4 13.9803 5.6089 14.8082 6.76717 13.9809L8.26717 12.9095C8.72706 12.581 9 12.0506 9 11.4854V9.5H12.1884C13.9775 9.5 15.2903 7.81868 14.8563 6.08303L13.8563 2.08303C13.5503 0.858816 12.4503 0 11.1884 0H0.75H0V0.75V8.75V9.5H0.75H3.75C3.88807 9.5 4 9.61193 4 9.75V12.5569Z",
            fill: "currentColor"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=thumbs-down.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-footer/error-feedback/error-feedback.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorFeedback: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorFeedback: function() {
        return ErrorFeedback;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _thumbsup = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/thumbs/thumbs-up.js [client] (ecmascript)");
const _thumbsdown = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/thumbs/thumbs-down.js [client] (ecmascript)");
const _cx = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/cx.js [client] (ecmascript)");
function ErrorFeedback(param) {
    let { errorCode, className } = param;
    const [votedMap, setVotedMap] = (0, _react.useState)({});
    const voted = votedMap[errorCode];
    const hasVoted = voted !== undefined;
    const disabled = ("TURBOPACK compile-time value", false);
    const handleFeedback = (0, _react.useCallback)(async (wasHelpful)=>{
        // Optimistically set feedback state without loading/error states to keep implementation simple
        setVotedMap((prev)=>({
                ...prev,
                [errorCode]: wasHelpful
            }));
        try {
            const response = await fetch((("TURBOPACK compile-time value", "") || '') + "/__nextjs_error_feedback?" + new URLSearchParams({
                errorCode,
                wasHelpful: wasHelpful.toString()
            }));
            if (!response.ok) {
                // Handle non-2xx HTTP responses here if needed
                console.error('Failed to record feedback on the server.');
            }
        } catch (error) {
            console.error('Failed to record feedback:', error);
        }
    }, [
        errorCode
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: (0, _cx.cx)('error-feedback', className),
        role: "region",
        "aria-label": "Error feedback",
        children: hasVoted ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
            className: "error-feedback-thanks",
            role: "status",
            "aria-live": "polite",
            children: "Thanks for your feedback!"
        }) : /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                        href: "https://nextjs.org/telemetry#error-feedback",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        children: "Was this helpful?"
                    })
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                    "aria-disabled": ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : undefined,
                    "aria-label": "Mark as helpful",
                    onClick: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : ()=>handleFeedback(true),
                    className: (0, _cx.cx)('feedback-button', voted === true && 'voted'),
                    title: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : undefined,
                    type: "button",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_thumbsup.ThumbsUp, {
                        "aria-hidden": "true"
                    })
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                    "aria-disabled": ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : undefined,
                    "aria-label": "Mark as not helpful",
                    onClick: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : ()=>handleFeedback(false),
                    className: (0, _cx.cx)('feedback-button', voted === false && 'voted'),
                    title: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : undefined,
                    type: "button",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_thumbsdown.ThumbsDown, {
                        "aria-hidden": "true",
                        // Optical alignment
                        style: {
                            translate: '1px 1px'
                        }
                    })
                })
            ]
        })
    });
}
const styles = "\n  .error-feedback {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    white-space: nowrap;\n    color: var(--color-gray-900);\n  }\n\n  .error-feedback-thanks {\n    height: var(--size-24);\n    display: flex;\n    align-items: center;\n    padding-right: 4px; /* To match the 4px inner padding of the thumbs up and down icons */\n  }\n\n  .feedback-button {\n    background: none;\n    border: none;\n    border-radius: var(--rounded-md);\n    width: var(--size-24);\n    height: var(--size-24);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n\n    &:focus {\n      outline: var(--focus-ring);\n    }\n\n    &:hover {\n      background: var(--color-gray-alpha-100);\n    }\n\n    &:active {\n      background: var(--color-gray-alpha-200);\n    }\n  }\n\n  .feedback-button[aria-disabled='true'] {\n    opacity: 0.7;\n    cursor: not-allowed;\n  }\n\n  .feedback-button.voted {\n    background: var(--color-gray-alpha-200);\n  }\n\n  .thumbs-up-icon,\n  .thumbs-down-icon {\n    color: var(--color-gray-900);\n    width: var(--size-16);\n    height: var(--size-16);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-feedback.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-footer/error-overlay-footer.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorOverlayFooter: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorOverlayFooter: function() {
        return ErrorOverlayFooter;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _errorfeedback = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-footer/error-feedback/error-feedback.js [client] (ecmascript)");
function ErrorOverlayFooter(param) {
    let { errorCode, footerMessage } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("footer", {
        className: "error-overlay-footer",
        children: [
            footerMessage ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                className: "error-overlay-footer-message",
                children: footerMessage
            }) : null,
            errorCode ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorfeedback.ErrorFeedback, {
                className: "error-feedback",
                errorCode: errorCode
            }) : null
        ]
    });
}
const styles = "\n  .error-overlay-footer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n\n    gap: 8px;\n    padding: 12px;\n    background: var(--color-background-200);\n    border-top: 1px solid var(--color-gray-400);\n  }\n\n  .error-feedback {\n    margin-left: auto;\n\n    p {\n      font-size: var(--size-14);\n      font-weight: 500;\n      margin: 0;\n    }\n  }\n\n  .error-overlay-footer-message {\n    color: var(--color-gray-900);\n    margin: 0;\n    font-size: var(--size-14);\n    font-weight: 400;\n    line-height: var(--size-20);\n  }\n\n  " + _errorfeedback.styles + "\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-overlay-footer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-message/error-message.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorMessage: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorMessage: function() {
        return ErrorMessage;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
function ErrorMessage(param) {
    let { errorMessage } = param;
    const [isExpanded, setIsExpanded] = (0, _react.useState)(false);
    const [shouldTruncate, setShouldTruncate] = (0, _react.useState)(false);
    const messageRef = (0, _react.useRef)(null);
    (0, _react.useLayoutEffect)(()=>{
        if (messageRef.current) {
            setShouldTruncate(messageRef.current.scrollHeight > 200);
        }
    }, [
        errorMessage
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        className: "nextjs__container_errors_wrapper",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                ref: messageRef,
                id: "nextjs__container_errors_desc",
                className: "nextjs__container_errors_desc " + (shouldTruncate && !isExpanded ? 'truncated' : ''),
                children: errorMessage
            }),
            shouldTruncate && !isExpanded && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "nextjs__container_errors_gradient_overlay"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                        onClick: ()=>setIsExpanded(true),
                        className: "nextjs__container_errors_expand_button",
                        "aria-expanded": isExpanded,
                        "aria-controls": "nextjs__container_errors_desc",
                        children: "Show More"
                    })
                ]
            })
        ]
    });
}
const styles = "\n  .nextjs__container_errors_wrapper {\n    position: relative;\n  }\n\n  .nextjs__container_errors_desc {\n    margin: 0;\n    margin-left: 4px;\n    color: var(--color-red-900);\n    font-weight: 500;\n    font-size: var(--size-16);\n    letter-spacing: -0.32px;\n    line-height: var(--size-24);\n    overflow-wrap: break-word;\n    white-space: pre-wrap;\n  }\n\n  .nextjs__container_errors_desc.truncated {\n    max-height: 200px;\n    overflow: hidden;\n  }\n\n  .nextjs__container_errors_gradient_overlay {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 85px;\n    background: linear-gradient(\n      180deg,\n      rgba(250, 250, 250, 0) 0%,\n      var(--color-background-200) 100%\n    );\n  }\n\n  .nextjs__container_errors_expand_button {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    align-items: center;\n    padding: 6px 8px;\n    background: var(--color-background-100);\n    border: 1px solid var(--color-gray-alpha-400);\n    border-radius: 999px;\n    box-shadow:\n      0px 2px 2px var(--color-gray-alpha-100),\n      0px 8px 8px -8px var(--color-gray-alpha-100);\n    font-size: var(--size-13);\n    cursor: pointer;\n    color: var(--color-gray-900);\n    font-weight: 500;\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-message.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-type-label/error-type-label.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorTypeLabel: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorTypeLabel: function() {
        return ErrorTypeLabel;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function ErrorTypeLabel(param) {
    let { errorType } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
        id: "nextjs__container_errors_label",
        className: "nextjs__container_errors_label",
        children: errorType
    });
}
const styles = "\n  .nextjs__container_errors_label {\n    padding: 2px 6px;\n    margin: 0;\n    border-radius: var(--rounded-md-2);\n    background: var(--color-red-100);\n    font-weight: 600;\n    font-size: var(--size-12);\n    color: var(--color-red-900);\n    font-family: var(--font-stack-monospace);\n    line-height: var(--size-20);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-type-label.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/left-arrow.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeftArrow", {
    enumerable: true,
    get: function() {
        return LeftArrow;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function LeftArrow(param) {
    let { title, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": title,
        className: className,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.24996 12.0608L8.71963 11.5304L5.89641 8.70722C5.50588 8.3167 5.50588 7.68353 5.89641 7.29301L8.71963 4.46978L9.24996 3.93945L10.3106 5.00011L9.78029 5.53044L7.31062 8.00011L9.78029 10.4698L10.3106 11.0001L9.24996 12.0608Z",
            fill: "currentColor"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=left-arrow.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/right-arrow.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RightArrow", {
    enumerable: true,
    get: function() {
        return RightArrow;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function RightArrow(param) {
    let { title, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        "aria-label": title,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.75011 3.93945L7.28044 4.46978L10.1037 7.29301C10.4942 7.68353 10.4942 8.3167 10.1037 8.70722L7.28044 11.5304L6.75011 12.0608L5.68945 11.0001L6.21978 10.4698L8.68945 8.00011L6.21978 5.53044L5.68945 5.00011L6.75011 3.93945Z",
            fill: "currentColor"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=right-arrow.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-pagination/error-overlay-pagination.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorOverlayPagination: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorOverlayPagination: function() {
        return ErrorOverlayPagination;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _leftarrow = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/left-arrow.js [client] (ecmascript)");
const _rightarrow = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/right-arrow.js [client] (ecmascript)");
function ErrorOverlayPagination(param) {
    let { runtimeErrors, activeIdx, onActiveIndexChange } = param;
    const handlePrevious = (0, _react.useCallback)(()=>(0, _react.startTransition)(()=>{
            if (activeIdx > 0) {
                onActiveIndexChange(Math.max(0, activeIdx - 1));
            }
        }), [
        activeIdx,
        onActiveIndexChange
    ]);
    const handleNext = (0, _react.useCallback)(()=>(0, _react.startTransition)(()=>{
            if (activeIdx < runtimeErrors.length - 1) {
                onActiveIndexChange(Math.max(0, Math.min(runtimeErrors.length - 1, activeIdx + 1)));
            }
        }), [
        activeIdx,
        runtimeErrors.length,
        onActiveIndexChange
    ]);
    const buttonLeft = (0, _react.useRef)(null);
    const buttonRight = (0, _react.useRef)(null);
    const [nav, setNav] = (0, _react.useState)(null);
    const onNav = (0, _react.useCallback)((el)=>{
        setNav(el);
    }, []);
    (0, _react.useEffect)(()=>{
        if (nav == null) {
            return;
        }
        const root = nav.getRootNode();
        const d = self.document;
        function handler(e) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                e.stopPropagation();
                handlePrevious && handlePrevious();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                e.stopPropagation();
                handleNext && handleNext();
            }
        }
        root.addEventListener('keydown', handler);
        if (root !== d) {
            d.addEventListener('keydown', handler);
        }
        return function() {
            root.removeEventListener('keydown', handler);
            if (root !== d) {
                d.removeEventListener('keydown', handler);
            }
        };
    }, [
        nav,
        handleNext,
        handlePrevious
    ]);
    // Unlock focus for browsers like Firefox, that break all user focus if the
    // currently focused item becomes disabled.
    (0, _react.useEffect)(()=>{
        if (nav == null) {
            return;
        }
        const root = nav.getRootNode();
        // Always true, but we do this for TypeScript:
        if (root instanceof ShadowRoot) {
            const a = root.activeElement;
            if (activeIdx === 0) {
                if (buttonLeft.current && a === buttonLeft.current) {
                    buttonLeft.current.blur();
                }
            } else if (activeIdx === runtimeErrors.length - 1) {
                if (buttonRight.current && a === buttonRight.current) {
                    buttonRight.current.blur();
                }
            }
        }
    }, [
        nav,
        activeIdx,
        runtimeErrors.length
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("nav", {
        className: "error-overlay-pagination dialog-exclude-closing-from-outside-click",
        ref: onNav,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                ref: buttonLeft,
                type: "button",
                disabled: activeIdx === 0,
                "aria-disabled": activeIdx === 0,
                onClick: handlePrevious,
                "data-nextjs-dialog-error-previous": true,
                className: "error-overlay-pagination-button",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_leftarrow.LeftArrow, {
                    title: "previous",
                    className: "error-overlay-pagination-button-icon"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "error-overlay-pagination-count",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                        "data-nextjs-dialog-error-index": activeIdx,
                        children: [
                            activeIdx + 1,
                            "/"
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        "data-nextjs-dialog-header-total-count": true,
                        children: runtimeErrors.length || 1
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                ref: buttonRight,
                type: "button",
                // If no errors or the last error is active, disable the button.
                disabled: activeIdx >= runtimeErrors.length - 1,
                "aria-disabled": activeIdx >= runtimeErrors.length - 1,
                onClick: handleNext,
                "data-nextjs-dialog-error-next": true,
                className: "error-overlay-pagination-button",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_rightarrow.RightArrow, {
                    title: "next",
                    className: "error-overlay-pagination-button-icon"
                })
            })
        ]
    });
}
const styles = "\n  .error-overlay-pagination {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    width: fit-content;\n  }\n\n  .error-overlay-pagination-count {\n    color: var(--color-gray-900);\n    text-align: center;\n    font-size: var(--size-14);\n    font-weight: 500;\n    line-height: var(--size-16);\n    font-variant-numeric: tabular-nums;\n  }\n\n  .error-overlay-pagination-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: var(--size-24);\n    height: var(--size-24);\n    background: var(--color-gray-300);\n    flex-shrink: 0;\n\n    border: none;\n    border-radius: var(--rounded-full);\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n\n    &:focus-visible {\n      outline: var(--focus-ring);\n    }\n\n    &:not(:disabled):active {\n      background: var(--color-gray-500);\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  .error-overlay-pagination-button-icon {\n    color: var(--color-gray-1000);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-overlay-pagination.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/version-staleness-info/version-staleness-info.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VersionStalenessInfo: null,
    getStaleness: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VersionStalenessInfo: function() {
        return VersionStalenessInfo;
    },
    getStaleness: function() {
        return getStaleness;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _cx = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/cx.js [client] (ecmascript)");
function VersionStalenessInfo(param) {
    let { versionInfo, isTurbopack } = param;
    const { staleness } = versionInfo;
    let { text, indicatorClass, title } = getStaleness(versionInfo);
    const shouldBeLink = staleness.startsWith('stale');
    if (shouldBeLink) {
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)("a", {
            className: (0, _cx.cx)('nextjs-container-build-error-version-status', 'dialog-exclude-closing-from-outside-click', isTurbopack && 'turbopack-border'),
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://nextjs.org/docs/messages/version-staleness",
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Eclipse, {
                    className: (0, _cx.cx)('version-staleness-indicator', indicatorClass)
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    "data-nextjs-version-checker": true,
                    title: title,
                    children: text
                }),
                isTurbopack && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    className: "turbopack-text",
                    children: "Turbopack"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
        className: "nextjs-container-build-error-version-status dialog-exclude-closing-from-outside-click",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(Eclipse, {
                className: (0, _cx.cx)('version-staleness-indicator', indicatorClass)
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                "data-nextjs-version-checker": true,
                title: title,
                children: text
            }),
            isTurbopack && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "turbopack-text",
                children: "Turbopack"
            })
        ]
    });
}
function getStaleness(param) {
    let { installed, staleness, expected } = param;
    let text = '';
    let title = '';
    let indicatorClass = '';
    const versionLabel = "Next.js " + installed;
    switch(staleness){
        case 'newer-than-npm':
        case 'fresh':
            text = versionLabel;
            title = "Latest available version is detected (" + installed + ").";
            indicatorClass = 'fresh';
            break;
        case 'stale-patch':
        case 'stale-minor':
            text = "" + versionLabel + " (stale)";
            title = "There is a newer version (" + expected + ") available, upgrade recommended! ";
            indicatorClass = 'stale';
            break;
        case 'stale-major':
            {
                text = "" + versionLabel + " (outdated)";
                title = "An outdated version detected (latest is " + expected + "), upgrade is highly recommended!";
                indicatorClass = 'outdated';
                break;
            }
        case 'stale-prerelease':
            {
                text = "" + versionLabel + " (stale)";
                title = "There is a newer canary version (" + expected + ") available, please upgrade! ";
                indicatorClass = 'stale';
                break;
            }
        case 'unknown':
            text = "" + versionLabel + " (unknown)";
            title = 'No Next.js version data was found.';
            indicatorClass = 'unknown';
            break;
        default:
            break;
    }
    return {
        text,
        indicatorClass,
        title
    };
}
const styles = "\n  .nextjs-container-build-error-version-status {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n\n    height: var(--size-26);\n    padding: 6px 8px 6px 6px;\n    background: var(--color-background-100);\n    background-clip: padding-box;\n    border: 1px solid var(--color-gray-alpha-400);\n    box-shadow: var(--shadow-small);\n    border-radius: var(--rounded-full);\n\n    color: var(--color-gray-900);\n    font-size: var(--size-12);\n    font-weight: 500;\n    line-height: var(--size-16);\n  }\n\n  a.nextjs-container-build-error-version-status {\n    text-decoration: none;\n    color: var(--color-gray-900);\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n\n    &:focus {\n      outline: var(--focus-ring);\n    }\n  }\n\n  .version-staleness-indicator.fresh {\n    fill: var(--color-green-800);\n    stroke: var(--color-green-300);\n  }\n  .version-staleness-indicator.stale {\n    fill: var(--color-amber-800);\n    stroke: var(--color-amber-300);\n  }\n  .version-staleness-indicator.outdated {\n    fill: var(--color-red-800);\n    stroke: var(--color-red-300);\n  }\n  .version-staleness-indicator.unknown {\n    fill: var(--color-gray-800);\n    stroke: var(--color-gray-300);\n  }\n\n  .nextjs-container-build-error-version-status > .turbopack-text {\n    background: linear-gradient(\n      to right,\n      var(--color-turbopack-text-red) 0%,\n      var(--color-turbopack-text-blue) 100%\n    );\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n";
function Eclipse(param) {
    let { className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("circle", {
            className: className,
            cx: "7",
            cy: "7",
            r: "5.5",
            strokeWidth: "3"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=version-staleness-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-nav/error-overlay-nav.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorOverlayNav: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorOverlayNav: function() {
        return ErrorOverlayNav;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _erroroverlaypagination = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-pagination/error-overlay-pagination.js [client] (ecmascript)");
const _versionstalenessinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/version-staleness-info/version-staleness-info.js [client] (ecmascript)");
function ErrorOverlayNav(param) {
    let { runtimeErrors, activeIdx, setActiveIndex, versionInfo, isTurbopack } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-error-overlay-nav": true,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(Notch, {
                side: "left",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_erroroverlaypagination.ErrorOverlayPagination, {
                    runtimeErrors: runtimeErrors != null ? runtimeErrors : [],
                    activeIdx: activeIdx != null ? activeIdx : 0,
                    onActiveIndexChange: setActiveIndex != null ? setActiveIndex : ()=>{}
                })
            }),
            versionInfo && /*#__PURE__*/ (0, _jsxruntime.jsx)(Notch, {
                side: "right",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_versionstalenessinfo.VersionStalenessInfo, {
                    versionInfo: versionInfo,
                    isTurbopack: isTurbopack
                })
            })
        ]
    });
}
const styles = "\n  [data-nextjs-error-overlay-nav] {\n    --notch-height: 2.625rem; /* 42px */\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    width: 100%;\n\n    outline: none;\n    translate: 1px 1px;\n    max-width: var(--next-dialog-max-width);\n\n    .error-overlay-notch {\n      --stroke-color: var(--color-gray-400);\n      --background-color: var(--color-background-100);\n\n      translate: -1px 0;\n      width: auto;\n      height: var(--notch-height);\n      padding: 12px;\n      background: var(--background-color);\n      border: 1px solid var(--stroke-color);\n      border-bottom: none;\n      position: relative;\n\n      &[data-side='left'] {\n        padding-right: 0;\n        border-radius: var(--rounded-xl) 0 0 0;\n\n        .error-overlay-notch-tail {\n          right: -54px;\n        }\n\n        > *:not(.error-overlay-notch-tail) {\n          margin-right: -10px;\n        }\n      }\n\n      &[data-side='right'] {\n        padding-left: 0;\n        border-radius: 0 var(--rounded-xl) 0 0;\n\n        .error-overlay-notch-tail {\n          left: -54px;\n          transform: rotateY(180deg);\n        }\n\n        > *:not(.error-overlay-notch-tail) {\n          margin-left: -12px;\n        }\n      }\n\n      .error-overlay-notch-tail {\n        position: absolute;\n        top: -1px;\n        pointer-events: none;\n        z-index: -1;\n        height: calc(100% + 1px);\n      }\n    }\n  }\n";
function Notch(param) {
    let { children, side = 'left' } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        className: "error-overlay-notch",
        "data-side": side,
        children: [
            children,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(Tail, {})
        ]
    });
}
function Tail() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "60",
        height: "42",
        viewBox: "0 0 60 42",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "error-overlay-notch-tail",
        preserveAspectRatio: "none",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("mask", {
                id: "error_overlay_nav_mask0_2667_14687",
                style: {
                    maskType: 'alpha'
                },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "-1",
                width: "60",
                height: "43",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("mask", {
                        id: "error_overlay_nav_path_1_outside_1_2667_14687",
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "-1",
                        width: "60",
                        height: "43",
                        fill: "black",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                                fill: "white",
                                y: "-1",
                                width: "60",
                                height: "43"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                d: "M1 0L8.0783 0C15.772 0 22.7836 4.41324 26.111 11.3501L34.8889 29.6498C38.2164 36.5868 45.228 41 52.9217 41H60H1L1 0Z"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M1 0L8.0783 0C15.772 0 22.7836 4.41324 26.111 11.3501L34.8889 29.6498C38.2164 36.5868 45.228 41 52.9217 41H60H1L1 0Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M1 0V-1H0V0L1 0ZM1 41H0V42H1V41ZM34.8889 29.6498L33.9873 30.0823L34.8889 29.6498ZM26.111 11.3501L27.0127 10.9177L26.111 11.3501ZM1 1H8.0783V-1H1V1ZM60 40H1V42H60V40ZM2 41V0L0 0L0 41H2ZM25.2094 11.7826L33.9873 30.0823L35.7906 29.2174L27.0127 10.9177L25.2094 11.7826ZM52.9217 42H60V40H52.9217V42ZM33.9873 30.0823C37.4811 37.3661 44.8433 42 52.9217 42V40C45.6127 40 38.9517 35.8074 35.7906 29.2174L33.9873 30.0823ZM8.0783 1C15.3873 1 22.0483 5.19257 25.2094 11.7826L27.0127 10.9177C23.5188 3.6339 16.1567 -1 8.0783 -1V1Z",
                        fill: "black",
                        mask: "url(#error_overlay_nav_path_1_outside_1_2667_14687)"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                mask: "url(#error_overlay_nav_mask0_2667_14687)",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("mask", {
                        id: "error_overlay_nav_path_3_outside_2_2667_14687",
                        maskUnits: "userSpaceOnUse",
                        x: "-1",
                        y: "0.0244141",
                        width: "60",
                        height: "43",
                        fill: "black",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                                fill: "white",
                                x: "-1",
                                y: "0.0244141",
                                width: "60",
                                height: "43"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                d: "M0 1.02441H7.0783C14.772 1.02441 21.7836 5.43765 25.111 12.3746L33.8889 30.6743C37.2164 37.6112 44.228 42.0244 51.9217 42.0244H59H0L0 1.02441Z"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M0 1.02441H7.0783C14.772 1.02441 21.7836 5.43765 25.111 12.3746L33.8889 30.6743C37.2164 37.6112 44.228 42.0244 51.9217 42.0244H59H0L0 1.02441Z",
                        fill: "var(--background-color)"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M0 1.02441L0 0.0244141H-1V1.02441H0ZM0 42.0244H-1V43.0244H0L0 42.0244ZM33.8889 30.6743L32.9873 31.1068L33.8889 30.6743ZM25.111 12.3746L26.0127 11.9421L25.111 12.3746ZM0 2.02441H7.0783V0.0244141H0L0 2.02441ZM59 41.0244H0L0 43.0244H59V41.0244ZM1 42.0244L1 1.02441H-1L-1 42.0244H1ZM24.2094 12.8071L32.9873 31.1068L34.7906 30.2418L26.0127 11.9421L24.2094 12.8071ZM51.9217 43.0244H59V41.0244H51.9217V43.0244ZM32.9873 31.1068C36.4811 38.3905 43.8433 43.0244 51.9217 43.0244V41.0244C44.6127 41.0244 37.9517 36.8318 34.7906 30.2418L32.9873 31.1068ZM7.0783 2.02441C14.3873 2.02441 21.0483 6.21699 24.2094 12.8071L26.0127 11.9421C22.5188 4.65831 15.1567 0.0244141 7.0783 0.0244141V2.02441Z",
                        fill: "var(--stroke-color)",
                        mask: "url(#error_overlay_nav_path_3_outside_2_2667_14687)"
                    })
                ]
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-overlay-nav.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dialog/dialog.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DIALOG_STYLES: null,
    ErrorOverlayDialog: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DIALOG_STYLES: function() {
        return DIALOG_STYLES;
    },
    ErrorOverlayDialog: function() {
        return ErrorOverlayDialog;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _dialog = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog.js [client] (ecmascript)");
function ErrorOverlayDialog(param) {
    let { children, onClose, ...props } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_dialog.Dialog, {
        type: "error",
        "aria-labelledby": "nextjs__container_errors_label",
        "aria-describedby": "nextjs__container_errors_desc",
        onClose: onClose,
        className: "error-overlay-dialog",
        ...props,
        children: children
    });
}
const DIALOG_STYLES = "\n  .error-overlay-dialog {\n    overflow-y: auto;\n    -webkit-font-smoothing: antialiased;\n    background: var(--color-background-100);\n    background-clip: padding-box;\n    border: 1px solid var(--color-gray-400);\n    border-radius: var(--rounded-xl);\n    box-shadow: var(--shadow-menu);\n    position: relative;\n\n    &:has(\n        ~ [data-nextjs-error-overlay-nav] .error-overlay-notch[data-side='left']\n      ) {\n      border-top-left-radius: 0;\n    }\n\n    &:has(\n        ~ [data-nextjs-error-overlay-nav]\n          .error-overlay-notch[data-side='right']\n      ) {\n      border-top-right-radius: 0;\n    }\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dialog.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dialog/header.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DIALOG_HEADER_STYLES: null,
    ErrorOverlayDialogHeader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DIALOG_HEADER_STYLES: function() {
        return DIALOG_HEADER_STYLES;
    },
    ErrorOverlayDialogHeader: function() {
        return ErrorOverlayDialogHeader;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _dialogheader = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/dialog-header.js [client] (ecmascript)");
function ErrorOverlayDialogHeader(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_dialogheader.DialogHeader, {
        className: "nextjs-container-errors-header",
        children: children
    });
}
const DIALOG_HEADER_STYLES = "\n  .nextjs-container-errors-header {\n    position: relative;\n  }\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-20);\n    line-height: var(--size-24);\n    font-weight: bold;\n    margin: calc(16px * 1.5) 0;\n    color: var(--color-title-h1);\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-14);\n    color: var(--color-accents-1);\n    margin-left: 16px;\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: 4px;\n  }\n  .nextjs-container-errors-header > p > a {\n    color: inherit;\n    font-weight: bold;\n  }\n  .nextjs-container-errors-header\n    > .nextjs-container-build-error-version-status {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=header.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dialog/body.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DIALOG_BODY_STYLES: null,
    ErrorOverlayDialogBody: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DIALOG_BODY_STYLES: function() {
        return DIALOG_BODY_STYLES;
    },
    ErrorOverlayDialogBody: function() {
        return ErrorOverlayDialogBody;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _dialog = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/index.js [client] (ecmascript)");
function ErrorOverlayDialogBody(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_dialog.DialogBody, {
        className: "nextjs-container-errors-body",
        children: children
    });
}
const DIALOG_BODY_STYLES = "";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=body.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/call-stack-frame/call-stack-frame.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    CALL_STACK_FRAME_STYLES: null,
    CallStackFrame: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CALL_STACK_FRAME_STYLES: function() {
        return CALL_STACK_FRAME_STYLES;
    },
    CallStackFrame: function() {
        return CallStackFrame;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _hotlinkedtext = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/hot-linked-text/index.js [client] (ecmascript)");
const _external = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/external.js [client] (ecmascript)");
const _stackframe = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/stack-frame.js [client] (ecmascript)");
const _useopenineditor = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/use-open-in-editor.js [client] (ecmascript)");
const CallStackFrame = function CallStackFrame(param) {
    let { frame, index } = param;
    var _frame_originalStackFrame;
    // TODO: ability to expand resolved frames
    const f = (_frame_originalStackFrame = frame.originalStackFrame) != null ? _frame_originalStackFrame : frame.sourceStackFrame;
    const hasSource = Boolean(frame.originalCodeFrame);
    const open = (0, _useopenineditor.useOpenInEditor)(hasSource ? {
        file: f.file,
        lineNumber: f.lineNumber,
        column: f.column
    } : undefined);
    // Format method to strip out the webpack layer prefix.
    // e.g. (app-pages-browser)/./app/page.tsx -> ./app/page.tsx
    const formattedMethod = f.methodName.replace(/^\([\w-]+\)\//, '');
    // Formatted file source could be empty. e.g. <anonymous> will be formatted to empty string,
    // we'll skip rendering the frame in this case.
    const fileSource = (0, _stackframe.getFrameSource)(f);
    if (!fileSource) {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-call-stack-frame": true,
        "data-nextjs-call-stack-frame-ignored": !hasSource,
        style: {
            '--index': index
        },
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                "data-nextjs-frame-expanded": !frame.ignored,
                className: "call-stack-frame-method-name",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                        text: formattedMethod
                    }),
                    hasSource && /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                        onClick: open,
                        className: "open-in-editor-button",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_external.ExternalIcon, {
                            width: 16,
                            height: 16
                        })
                    }),
                    frame.error ? /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                        className: "source-mapping-error-button",
                        onClick: ()=>console.error(frame.reason),
                        title: "Sourcemapping failed. Click to log cause of error.",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_external.SourceMappingErrorIcon, {
                            width: 16,
                            height: 16
                        })
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "call-stack-frame-file-source",
                "data-has-source": hasSource,
                children: fileSource
            })
        ]
    });
};
const CALL_STACK_FRAME_STYLES = "\n  [data-nextjs-call-stack-frame-ignored] {\n    padding: 6px 8px;\n    margin-bottom: 4px;\n\n    border-radius: var(--rounded-lg);\n  }\n\n  [data-nextjs-call-stack-frame-ignored]:last-child {\n    margin-bottom: 0;\n  }\n\n  [data-nextjs-call-stack-frame] {\n    user-select: text;\n    display: block;\n    box-sizing: border-box;\n\n    user-select: text;\n    -webkit-user-select: text;\n    -moz-user-select: text;\n    -ms-user-select: text;\n\n    padding: 6px 8px;\n\n    border-radius: var(--rounded-lg);\n  }\n\n  .call-stack-frame-method-name {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n\n    margin-bottom: 4px;\n    font-family: var(--font-stack-monospace);\n\n    color: var(--color-gray-1000);\n    font-size: var(--size-14);\n    font-weight: 500;\n    line-height: var(--size-20);\n\n    svg {\n      width: var(--size-16px);\n      height: var(--size-16px);\n    }\n  }\n\n  .open-in-editor-button, .source-mapping-error-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: var(--rounded-full);\n    padding: 4px;\n    color: var(--color-font);\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n\n    &:focus-visible {\n      outline: var(--focus-ring);\n      outline-offset: -2px;\n    }\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n  }\n\n  .call-stack-frame-file-source {\n    color: var(--color-gray-900);\n    font-size: var(--size-14);\n    line-height: var(--size-20);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=call-stack-frame.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/call-stack/call-stack.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    CALL_STACK_STYLES: null,
    CallStack: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CALL_STACK_STYLES: function() {
        return CALL_STACK_STYLES;
    },
    CallStack: function() {
        return CallStack;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _callstackframe = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/call-stack-frame/call-stack-frame.js [client] (ecmascript)");
function CallStack(param) {
    let { frames, dialogResizerRef } = param;
    const initialDialogHeight = (0, _react.useRef)(NaN);
    const [isIgnoreListOpen, setIsIgnoreListOpen] = (0, _react.useState)(false);
    const { visibleFrames, ignoredFrames, ignoreListLength } = (0, _react.useMemo)(()=>{
        const visible = [];
        const ignored = [];
        for (const frame of frames){
            if (!frame.ignored) {
                visible.push(frame);
            }
            if (frame.ignored) {
                ignored.push(frame);
            }
        }
        return {
            visibleFrames: visible,
            ignoredFrames: ignored,
            ignoreListLength: ignored.length
        };
    }, [
        frames
    ]);
    function onToggleIgnoreList() {
        const dialog = dialogResizerRef == null ? void 0 : dialogResizerRef.current;
        if (!dialog) {
            return;
        }
        const { height: currentHeight } = dialog == null ? void 0 : dialog.getBoundingClientRect();
        if (!initialDialogHeight.current) {
            initialDialogHeight.current = currentHeight;
        }
        if (isIgnoreListOpen) {
            function onTransitionEnd() {
                dialog.removeEventListener('transitionend', onTransitionEnd);
                setIsIgnoreListOpen(false);
            }
            dialog.style.height = "" + initialDialogHeight.current + "px";
            dialog.addEventListener('transitionend', onTransitionEnd);
        } else {
            setIsIgnoreListOpen(true);
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        className: "error-overlay-call-stack-container",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "error-overlay-call-stack-header",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                        className: "error-overlay-call-stack-title",
                        children: [
                            "Call Stack",
                            ' ',
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                className: "error-overlay-call-stack-count",
                                children: frames.length
                            })
                        ]
                    }),
                    ignoreListLength > 0 && /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
                        "data-expand-ignore-button": isIgnoreListOpen,
                        className: "error-overlay-call-stack-ignored-list-toggle-button",
                        onClick: onToggleIgnoreList,
                        children: [
                            (isIgnoreListOpen ? 'Hide' : 'Show') + " " + ignoreListLength + " ignore-listed frames",
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(ChevronUpDown, {})
                        ]
                    })
                ]
            }),
            visibleFrames.map((frame, frameIndex)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_callstackframe.CallStackFrame, {
                    frame: frame,
                    index: frameIndex
                }, "call-stack-leading-" + frameIndex)),
            isIgnoreListOpen && /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: ignoredFrames.map((frame, frameIndex)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_callstackframe.CallStackFrame, {
                        frame: frame,
                        index: frameIndex
                    }, "call-stack-ignored-" + frameIndex))
            })
        ]
    });
}
function ChevronUpDown() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.70722 2.39641C8.3167 2.00588 7.68353 2.00588 7.29301 2.39641L4.46978 5.21963L3.93945 5.74996L5.00011 6.81062L5.53044 6.28029L8.00011 3.81062L10.4698 6.28029L11.0001 6.81062L12.0608 5.74996L11.5304 5.21963L8.70722 2.39641ZM5.53044 9.71963L5.00011 9.1893L3.93945 10.25L4.46978 10.7803L7.29301 13.6035C7.68353 13.994 8.3167 13.994 8.70722 13.6035L11.5304 10.7803L12.0608 10.25L11.0001 9.1893L10.4698 9.71963L8.00011 12.1893L5.53044 9.71963Z",
            fill: "currentColor"
        })
    });
}
const CALL_STACK_STYLES = "\n  .error-overlay-call-stack-container {\n    position: relative;\n    margin-top: 8px;\n  }\n\n  .error-overlay-call-stack-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: var(--size-28);\n    padding: 8px 8px 12px 4px;\n    width: 100%;\n  }\n\n  .error-overlay-call-stack-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 8px;\n\n    margin: 0;\n\n    color: var(--color-gray-1000);\n    font-size: var(--size-16);\n    font-weight: 500;\n  }\n\n  .error-overlay-call-stack-count {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: var(--size-20);\n    height: var(--size-20);\n    gap: 4px;\n\n    color: var(--color-gray-1000);\n    text-align: center;\n    font-size: var(--size-11);\n    font-weight: 500;\n    line-height: var(--size-16);\n\n    border-radius: var(--rounded-full);\n    background: var(--color-gray-300);\n  }\n\n  .error-overlay-call-stack-ignored-list-toggle-button {\n    all: unset;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    color: var(--color-gray-900);\n    font-size: var(--size-14);\n    line-height: var(--size-20);\n    border-radius: 6px;\n    padding: 4px 6px;\n    margin-right: -6px;\n    transition: background 150ms ease;\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n\n    &:focus {\n      outline: var(--focus-ring);\n    }\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=call-stack.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/maintain--tab-focus.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/* eslint-disable */ // @ts-nocheck
// Copied from https://github.com/medialize/ally.js
// License: MIT
// Copyright (c) 2015 Rodney Rehm
//
// Entrypoint: ally.js/maintain/tab-focus
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _platform = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/platform/platform.js [client] (ecmascript)"));
const _cssescape = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/css.escape/css.escape.js [client] (ecmascript)"));
// input may be undefined, selector-tring, Node, NodeList, HTMLCollection, array of Nodes
// yes, to some extent this is a bad replica of jQuery's constructor function
function nodeArray(input) {
    if (!input) {
        return [];
    }
    if (Array.isArray(input)) {
        return input;
    }
    // instanceof Node - does not work with iframes
    if (input.nodeType !== undefined) {
        return [
            input
        ];
    }
    if (typeof input === 'string') {
        input = document.querySelectorAll(input);
    }
    if (input.length !== undefined) {
        return [].slice.call(input, 0);
    }
    throw Object.defineProperty(new TypeError('unexpected input ' + String(input)), "__NEXT_ERROR_CODE", {
        value: "E545",
        enumerable: false,
        configurable: true
    });
}
function contextToElement(_ref) {
    var context = _ref.context, _ref$label = _ref.label, label = _ref$label === undefined ? 'context-to-element' : _ref$label, resolveDocument = _ref.resolveDocument, defaultToDocument = _ref.defaultToDocument;
    var element = nodeArray(context)[0];
    if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
        element = element.documentElement;
    }
    if (!element && defaultToDocument) {
        return document.documentElement;
    }
    if (!element) {
        throw Object.defineProperty(new TypeError(label + ' requires valid options.context'), "__NEXT_ERROR_CODE", {
            value: "E604",
            enumerable: false,
            configurable: true
        });
    }
    if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        throw Object.defineProperty(new TypeError(label + ' requires options.context to be an Element'), "__NEXT_ERROR_CODE", {
            value: "E554",
            enumerable: false,
            configurable: true
        });
    }
    return element;
}
function getShadowHost() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var element = contextToElement({
        label: 'get/shadow-host',
        context: context
    });
    // walk up to the root
    var container = null;
    while(element){
        container = element;
        element = element.parentNode;
    }
    // https://developer.mozilla.org/docs/Web/API/Node.nodeType
    // NOTE: Firefox 34 does not expose ShadowRoot.host (but 37 does)
    if (container.nodeType === container.DOCUMENT_FRAGMENT_NODE && container.host) {
        // the root is attached to a fragment node that has a host
        return container.host;
    }
    return null;
}
function getDocument(node) {
    if (!node) {
        return document;
    }
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return node;
    }
    return node.ownerDocument || document;
}
function isActiveElement(context) {
    var element = contextToElement({
        label: 'is/active-element',
        resolveDocument: true,
        context: context
    });
    var _document = getDocument(element);
    if (_document.activeElement === element) {
        return true;
    }
    var shadowHost = getShadowHost({
        context: element
    });
    if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
        return true;
    }
    return false;
}
// [elem, elem.parent, elem.parent.parent, …, html]
// will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost
function getParents() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var list = [];
    var element = contextToElement({
        label: 'get/parents',
        context: context
    });
    while(element){
        list.push(element);
        // IE does know support parentElement on SVGElement
        element = element.parentNode;
        if (element && element.nodeType !== Node.ELEMENT_NODE) {
            element = null;
        }
    }
    return list;
}
// Element.prototype.matches may be available at a different name
// https://developer.mozilla.org/en/docs/Web/API/Element/matches
var names = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector'
];
var name = null;
function findMethodName(element) {
    names.some(function(_name) {
        if (!element[_name]) {
            return false;
        }
        name = _name;
        return true;
    });
}
function elementMatches(element, selector) {
    if (!name) {
        findMethodName(element);
    }
    return element[name](selector);
}
// deep clone of original platform
var platform = JSON.parse(JSON.stringify(_platform.default));
// operating system
var os = platform.os.family || '';
var ANDROID = os === 'Android';
var WINDOWS = os.slice(0, 7) === 'Windows';
var OSX = os === 'OS X';
var IOS = os === 'iOS';
// layout
var BLINK = platform.layout === 'Blink';
var GECKO = platform.layout === 'Gecko';
var TRIDENT = platform.layout === 'Trident';
var EDGE = platform.layout === 'EdgeHTML';
var WEBKIT = platform.layout === 'WebKit';
// browser version (not layout engine version!)
var version = parseFloat(platform.version);
var majorVersion = Math.floor(version);
platform.majorVersion = majorVersion;
platform.is = {
    // operating system
    ANDROID: ANDROID,
    WINDOWS: WINDOWS,
    OSX: OSX,
    IOS: IOS,
    // layout
    BLINK: BLINK,
    GECKO: GECKO,
    TRIDENT: TRIDENT,
    EDGE: EDGE,
    WEBKIT: WEBKIT,
    // INTERNET EXPLORERS
    IE9: TRIDENT && majorVersion === 9,
    IE10: TRIDENT && majorVersion === 10,
    IE11: TRIDENT && majorVersion === 11
};
function before() {
    var data = {
        // remember what had focus to restore after test
        activeElement: document.activeElement,
        // remember scroll positions to restore after test
        windowScrollTop: window.scrollTop,
        windowScrollLeft: window.scrollLeft,
        bodyScrollTop: document.body.scrollTop,
        bodyScrollLeft: document.body.scrollLeft
    };
    // wrap tests in an element hidden from screen readers to prevent them
    // from announcing focus, which can be quite irritating to the user
    var iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;');
    iframe.setAttribute('aria-live', 'off');
    iframe.setAttribute('aria-busy', 'true');
    iframe.setAttribute('aria-hidden', 'true');
    document.body.appendChild(iframe);
    var _window = iframe.contentWindow;
    var _document = _window.document;
    _document.open();
    _document.close();
    var wrapper = _document.createElement('div');
    _document.body.appendChild(wrapper);
    data.iframe = iframe;
    data.wrapper = wrapper;
    data.window = _window;
    data.document = _document;
    return data;
}
// options.element:
//  {string} element name
//  {function} callback(wrapper, document) to generate an element
// options.mutate: (optional)
//  {function} callback(element, wrapper, document) to manipulate element prior to focus-test.
//             Can return DOMElement to define focus target (default: element)
// options.validate: (optional)
//  {function} callback(element, focusTarget, document) to manipulate test-result
function test(data, options) {
    // make sure we operate on a clean slate
    data.wrapper.innerHTML = '';
    // create dummy element to test focusability of
    var element = typeof options.element === 'string' ? data.document.createElement(options.element) : options.element(data.wrapper, data.document);
    // allow callback to further specify dummy element
    // and optionally define element to focus
    var focus = options.mutate && options.mutate(element, data.wrapper, data.document);
    if (!focus && focus !== false) {
        focus = element;
    }
    // element needs to be part of the DOM to be focusable
    !element.parentNode && data.wrapper.appendChild(element);
    // test if the element with invalid tabindex can be focused
    focus && focus.focus && focus.focus();
    // validate test's result
    return options.validate ? options.validate(element, focus, data.document) : data.document.activeElement === focus;
}
function after(data) {
    // restore focus to what it was before test and cleanup
    if (data.activeElement === document.body) {
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
        if (platform.is.IE10) {
            // IE10 does not redirect focus to <body> when the activeElement is removed
            document.body.focus();
        }
    } else {
        data.activeElement && data.activeElement.focus && data.activeElement.focus();
    }
    document.body.removeChild(data.iframe);
    // restore scroll position
    window.scrollTop = data.windowScrollTop;
    window.scrollLeft = data.windowScrollLeft;
    document.body.scrollTop = data.bodyScrollTop;
    document.body.scrollLeft = data.bodyScrollLeft;
}
function detectFocus(tests) {
    var data = before();
    var results = {};
    Object.keys(tests).map(function(key) {
        results[key] = test(data, tests[key]);
    });
    after(data);
    return results;
}
// this file is overwritten by `npm run build:pre`
var version$1 = '1.4.1';
/*
    Facility to cache test results in localStorage.

    USAGE:
      cache.get('key');
      cache.set('key', 'value');
 */ function readLocalStorage(key) {
    // allow reading from storage to retrieve previous support results
    // even while the document does not have focus
    var data = void 0;
    try {
        data = window.localStorage && window.localStorage.getItem(key);
        data = data ? JSON.parse(data) : {};
    } catch (e) {
        data = {};
    }
    return data;
}
function writeLocalStorage(key, value) {
    if (!document.hasFocus()) {
        // if the document does not have focus when tests are executed, focus() may
        // not be handled properly and events may not be dispatched immediately.
        // This can happen when a document is reloaded while Developer Tools have focus.
        try {
            window.localStorage && window.localStorage.removeItem(key);
        } catch (e) {
        // ignore
        }
        return;
    }
    try {
        window.localStorage && window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    // ignore
    }
}
var userAgent = typeof window !== 'undefined' && window.navigator.userAgent || '';
var cacheKey = 'ally-supports-cache';
var cache = readLocalStorage(cacheKey);
// update the cache if ally or the user agent changed (newer version, etc)
if (cache.userAgent !== userAgent || cache.version !== version$1) {
    cache = {};
}
cache.userAgent = userAgent;
cache.version = version$1;
var cache$1 = {
    get: function get() {
        return cache;
    },
    set: function set(values) {
        Object.keys(values).forEach(function(key) {
            cache[key] = values[key];
        });
        cache.time = new Date().toISOString();
        writeLocalStorage(cacheKey, cache);
    }
};
function cssShadowPiercingDeepCombinator() {
    var combinator = void 0;
    // see https://dev.w3.org/csswg/css-scoping-1/#deep-combinator
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
    // https://code.google.com/p/chromium/issues/detail?id=446051
    try {
        document.querySelector('html >>> :first-child');
        combinator = '>>>';
    } catch (noArrowArrowArrow) {
        try {
            // old syntax supported at least up to Chrome 41
            // https://code.google.com/p/chromium/issues/detail?id=446051
            document.querySelector('html /deep/ :first-child');
            combinator = '/deep/';
        } catch (noDeep) {
            combinator = '';
        }
    }
    return combinator;
}
var gif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaImgTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + gif + '">';
        return element.querySelector('area');
    }
};
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" alt="" src="' + gif + '">';
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // fixes https://github.com/medialize/ally.js/issues/35
            // Firefox loads the DataURI asynchronously, causing a false-negative
            return true;
        }
        var focus = element.querySelector('area');
        focus.focus();
        return _document.activeElement === focus;
    }
};
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaWithoutHref = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-area-href-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-area-href-test" alt="" src="' + gif + '">';
        return element.querySelector('area');
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // fixes https://github.com/medialize/ally.js/issues/35
            // Firefox loads the DataURI asynchronously, causing a false-negative
            return true;
        }
        return _document.activeElement === focusTarget;
    }
};
var focusAudioWithoutControls = {
    name: 'can-focus-audio-without-controls',
    element: 'audio',
    mutate: function mutate(element) {
        try {
            // invalid media file can trigger warning in console, data-uri to prevent HTTP request
            element.setAttribute('src', gif);
        } catch (e) {
        // IE9 may throw "Error: Not implemented"
        }
    }
};
var invalidGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ';
// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusBrokenImageMap = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + invalidGif + '">';
        return element.querySelector('area');
    }
};
// Children of focusable elements with display:flex are focusable in IE10-11
var focusChildrenOfFocusableFlexbox = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '-1');
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
        return element.querySelector('span');
    }
};
// fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
// @specification https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
// @browser-issue Chromium https://crbug.com/453847
// @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
var focusFieldsetDisabled = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
    }
};
var focusFieldset = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><p>content</p>';
    }
};
// elements with display:flex are focusable in IE10-11
var focusFlexboxContainer = {
    element: 'span',
    mutate: function mutate(element) {
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
    }
};
// form[tabindex=0][disabled] should be focusable as the
// specification doesn't know the disabled attribute on the form element
// @specification https://www.w3.org/TR/html5/forms.html#the-form-element
var focusFormDisabled = {
    element: 'form',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
    }
};
// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-ismap
var focusImgIsmap = {
    element: 'a',
    mutate: function mutate(element) {
        element.href = '#void';
        element.innerHTML = '<img ismap src="' + gif + '" alt="">';
        return element.querySelector('img');
    }
};
// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusImgUsemapTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="' + gif + '">';
        return element.querySelector('img');
    }
};
var focusInHiddenIframe = {
    element: function element(wrapper, _document) {
        var iframe = _document.createElement('iframe');
        // iframe must be part of the DOM before accessing the contentWindow is possible
        wrapper.appendChild(iframe);
        // create the iframe's default document (<html><head></head><body></body></html>)
        var iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.close();
        return iframe;
    },
    mutate: function mutate(iframe) {
        iframe.style.visibility = 'hidden';
        var iframeDocument = iframe.contentWindow.document;
        var input = iframeDocument.createElement('input');
        iframeDocument.body.appendChild(input);
        return input;
    },
    validate: function validate(iframe) {
        var iframeDocument = iframe.contentWindow.document;
        var focus = iframeDocument.querySelector('input');
        return iframeDocument.activeElement === focus;
    }
};
var result = !platform.is.WEBKIT;
function focusInZeroDimensionObject() {
    return result;
}
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusInvalidTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 'invalid-value');
    }
};
var focusLabelTabindex = {
    element: 'label',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '-1');
    },
    validate: function validate(element, focusTarget, _document) {
        // force layout in Chrome 49, otherwise the element won't be focusable
        /* eslint-disable no-unused-vars */ var variableToPreventDeadCodeElimination = element.offsetHeight;
        /* eslint-enable no-unused-vars */ element.focus();
        return _document.activeElement === element;
    }
};
var svg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb' + 'G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ' + 'zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==';
// Note: IE10 on BrowserStack does not like this test
var focusObjectSvgHidden = {
    element: 'object',
    mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', svg);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
        element.style.visibility = 'hidden';
    }
};
// Note: IE10 on BrowserStack does not like this test
var focusObjectSvg = {
    name: 'can-focus-object-svg',
    element: 'object',
    mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', svg);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
            // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
            return true;
        }
        return _document.activeElement === element;
    }
};
// Every Environment except IE9 considers SWF objects focusable
var result$1 = !platform.is.IE9;
function focusObjectSwf() {
    return result$1;
}
var focusRedirectImgUsemap = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + gif + '">';
        // focus the <img>, not the <div>
        return element.querySelector('img');
    },
    validate: function validate(element, focusTarget, _document) {
        var target = element.querySelector('area');
        return _document.activeElement === target;
    }
};
// see https://jsbin.com/nenirisage/edit?html,js,console,output
var focusRedirectLegend = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
        // take care of focus in validate();
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        var focusable = element.querySelector('input[tabindex="-1"]');
        var tabbable = element.querySelector('input[tabindex="0"]');
        // Firefox requires this test to focus the <fieldset> first, while this is not necessary in
        // https://jsbin.com/nenirisage/edit?html,js,console,output
        element.focus();
        element.querySelector('legend').focus();
        return _document.activeElement === focusable && 'focusable' || _document.activeElement === tabbable && 'tabbable' || '';
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollBody = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
        return element.querySelector('div');
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollContainerWithoutOverflow = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollContainer = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
var focusSummary = {
    element: 'details',
    mutate: function mutate(element) {
        element.innerHTML = '<summary>foo</summary><p>content</p>';
        return element.firstElementChild;
    }
};
function makeFocusableForeignObject() {
    // Constructs <foreignObject width="30" height="30"><input type="text"/></foreignObject>
    // without raising a Trusted Types violation
    var foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    foreignObject.width.baseVal.value = 30;
    foreignObject.height.baseVal.value = 30;
    foreignObject.appendChild(document.createElement('input'));
    foreignObject.lastChild.type = 'text';
    return foreignObject;
}
function focusSvgForeignObjectHack(element) {
    // Edge13, Edge14: foreignObject focus hack
    // https://jsbin.com/kunehinugi/edit?html,js,output
    // https://jsbin.com/fajagi/3/edit?html,js,output
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
    if (!isSvgElement) {
        return false;
    }
    // inject and focus an <input> element into the SVG element to receive focus
    var foreignObject = makeFocusableForeignObject();
    element.appendChild(foreignObject);
    var input = foreignObject.querySelector('input');
    input.focus();
    // upon disabling the activeElement, IE and Edge
    // will not shift focus to <body> like all the other
    // browsers, but instead find the first focusable
    // ancestor and shift focus to that
    input.disabled = true;
    // clean up
    element.removeChild(foreignObject);
    return true;
}
function generate(element) {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + element + '</svg>';
}
function focus(element) {
    if (element.focus) {
        return;
    }
    try {
        HTMLElement.prototype.focus.call(element);
    } catch (e) {
        focusSvgForeignObjectHack(element);
    }
}
function validate(element, focusTarget, _document) {
    focus(focusTarget);
    return _document.activeElement === focusTarget;
}
var focusSvgFocusableAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text focusable="true">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgTabindexAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="0">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgNegativeTabindexAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="-1">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgUseTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate([
            '<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>',
            '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'
        ].join(''));
        return element.querySelector('use');
    },
    validate: validate
};
var focusSvgForeignobjectTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
        // Safari 8's querySelector() can't identify foreignObject, but getElementsByTagName() can
        return element.querySelector('foreignObject') || element.getElementsByTagName('foreignObject')[0];
    },
    validate: validate
};
// Firefox seems to be handling the SVG-document-in-iframe creation asynchronously
// and thereby produces a false negative test result. Thus the test is pointless
// and we resort to UA sniffing once again.
// see http://jsbin.com/vunadohoko/1/edit?js,console,output
var result$2 = Boolean(platform.is.GECKO && typeof SVGElement !== 'undefined' && SVGElement.prototype.focus);
function focusSvgInIframe() {
    return result$2;
}
var focusSvg = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('');
        return element.firstChild;
    },
    validate: validate
};
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusTabindexTrailingCharacters = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '3x');
    }
};
var focusTable = {
    element: 'table',
    mutate: function mutate(element, wrapper, _document) {
        // IE9 has a problem replacing TBODY contents with innerHTML.
        // https://stackoverflow.com/a/8097055/515124
        // element.innerHTML = '<tr><td>cell</td></tr>';
        var fragment = _document.createDocumentFragment();
        fragment.innerHTML = '<tr><td>cell</td></tr>';
        element.appendChild(fragment);
    }
};
var focusVideoWithoutControls = {
    element: 'video',
    mutate: function mutate(element) {
        try {
            // invalid media file can trigger warning in console, data-uri to prevent HTTP request
            element.setAttribute('src', gif);
        } catch (e) {
        // IE9 may throw "Error: Not implemented"
        }
    }
};
// https://jsbin.com/vafaba/3/edit?html,js,console,output
var result$3 = platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE;
function tabsequenceAreaAtImgPosition() {
    return result$3;
}
var testCallbacks = {
    cssShadowPiercingDeepCombinator: cssShadowPiercingDeepCombinator,
    focusInZeroDimensionObject: focusInZeroDimensionObject,
    focusObjectSwf: focusObjectSwf,
    focusSvgInIframe: focusSvgInIframe,
    tabsequenceAreaAtImgPosition: tabsequenceAreaAtImgPosition
};
var testDescriptions = {
    focusAreaImgTabindex: focusAreaImgTabindex,
    focusAreaTabindex: focusAreaTabindex,
    focusAreaWithoutHref: focusAreaWithoutHref,
    focusAudioWithoutControls: focusAudioWithoutControls,
    focusBrokenImageMap: focusBrokenImageMap,
    focusChildrenOfFocusableFlexbox: focusChildrenOfFocusableFlexbox,
    focusFieldsetDisabled: focusFieldsetDisabled,
    focusFieldset: focusFieldset,
    focusFlexboxContainer: focusFlexboxContainer,
    focusFormDisabled: focusFormDisabled,
    focusImgIsmap: focusImgIsmap,
    focusImgUsemapTabindex: focusImgUsemapTabindex,
    focusInHiddenIframe: focusInHiddenIframe,
    focusInvalidTabindex: focusInvalidTabindex,
    focusLabelTabindex: focusLabelTabindex,
    focusObjectSvg: focusObjectSvg,
    focusObjectSvgHidden: focusObjectSvgHidden,
    focusRedirectImgUsemap: focusRedirectImgUsemap,
    focusRedirectLegend: focusRedirectLegend,
    focusScrollBody: focusScrollBody,
    focusScrollContainerWithoutOverflow: focusScrollContainerWithoutOverflow,
    focusScrollContainer: focusScrollContainer,
    focusSummary: focusSummary,
    focusSvgFocusableAttribute: focusSvgFocusableAttribute,
    focusSvgTabindexAttribute: focusSvgTabindexAttribute,
    focusSvgNegativeTabindexAttribute: focusSvgNegativeTabindexAttribute,
    focusSvgUseTabindex: focusSvgUseTabindex,
    focusSvgForeignobjectTabindex: focusSvgForeignobjectTabindex,
    focusSvg: focusSvg,
    focusTabindexTrailingCharacters: focusTabindexTrailingCharacters,
    focusTable: focusTable,
    focusVideoWithoutControls: focusVideoWithoutControls
};
function executeTests() {
    var results = detectFocus(testDescriptions);
    Object.keys(testCallbacks).forEach(function(key) {
        results[key] = testCallbacks[key]();
    });
    return results;
}
var supportsCache = null;
function _supports() {
    if (supportsCache) {
        return supportsCache;
    }
    supportsCache = cache$1.get();
    if (!supportsCache.time) {
        cache$1.set(executeTests());
        supportsCache = cache$1.get();
    }
    return supportsCache;
}
var supports = void 0;
// https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
var validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
var validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;
function isValidTabindex(context) {
    if (!supports) {
        supports = _supports();
    }
    var validIntegerPattern = supports.focusTabindexTrailingCharacters ? validIntegerPatternWithTrailing : validIntegerPatternNoTrailing;
    var element = contextToElement({
        label: 'is/valid-tabindex',
        resolveDocument: true,
        context: context
    });
    // Edge 14 has a capitalization problem on SVG elements,
    // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
    var hasTabindex = element.hasAttribute('tabindex');
    var hasTabIndex = element.hasAttribute('tabIndex');
    if (!hasTabindex && !hasTabIndex) {
        return false;
    }
    // older Firefox and Internet Explorer don't support tabindex on SVG elements
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
    if (isSvgElement && !supports.focusSvgTabindexAttribute) {
        return false;
    }
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    if (supports.focusInvalidTabindex) {
        return true;
    }
    // an element matches the tabindex selector even if its value is invalid
    var tabindex = element.getAttribute(hasTabindex ? 'tabindex' : 'tabIndex');
    // IE11 parses tabindex="" as the value "-32768"
    // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
    if (tabindex === '-32768') {
        return false;
    }
    return Boolean(tabindex && validIntegerPattern.test(tabindex));
}
function tabindexValue(element) {
    if (!isValidTabindex(element)) {
        return null;
    }
    // Edge 14 has a capitalization problem on SVG elements,
    // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
    var hasTabindex = element.hasAttribute('tabindex');
    var attributeName = hasTabindex ? 'tabindex' : 'tabIndex';
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var tabindex = parseInt(element.getAttribute(attributeName), 10);
    return isNaN(tabindex) ? -1 : tabindex;
}
// this is a shared utility file for focus-relevant.js and tabbable.js
// separate testing of this file's functions is not necessary,
// as they're implicitly tested by way of the consumers
function isUserModifyWritable(style) {
    // https://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
    // https://github.com/medialize/ally.js/issues/17
    var userModify = style.webkitUserModify || '';
    return Boolean(userModify && userModify.indexOf('write') !== -1);
}
function hasCssOverflowScroll(style) {
    return [
        style.getPropertyValue('overflow'),
        style.getPropertyValue('overflow-x'),
        style.getPropertyValue('overflow-y')
    ].some(function(overflow) {
        return overflow === 'auto' || overflow === 'scroll';
    });
}
function hasCssDisplayFlex(style) {
    return style.display.indexOf('flex') > -1;
}
function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
    if (nodeName !== 'div' && nodeName !== 'span') {
        // Internet Explorer advances scrollable containers and bodies to focusable
        // only if the scrollable container is <div> or <span> - this does *not*
        // happen for <section>, <article>, …
        return false;
    }
    if (parentNodeName && parentNodeName !== 'div' && parentNodeName !== 'span' && !hasCssOverflowScroll(parentStyle)) {
        return false;
    }
    return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
}
var supports$1 = void 0;
function isFocusRelevantRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false
    } : _ref$except;
    if (!supports$1) {
        supports$1 = _supports();
    }
    var element = contextToElement({
        label: 'is/focus-relevant',
        resolveDocument: true,
        context: context
    });
    if (!except.shadow && element.shadowRoot) {
        // a ShadowDOM host receives focus when the focus moves to its content
        return true;
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'input' && element.type === 'hidden') {
        // input[type="hidden"] supports.cannot be focused
        return false;
    }
    if (nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea') {
        return true;
    }
    if (nodeName === 'legend' && supports$1.focusRedirectLegend) {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'label') {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'area') {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'a' && element.hasAttribute('href')) {
        return true;
    }
    if (nodeName === 'object' && element.hasAttribute('usemap')) {
        // object[usemap] is not focusable in any browser
        return false;
    }
    if (nodeName === 'object') {
        var svgType = element.getAttribute('type');
        if (!supports$1.focusObjectSvg && svgType === 'image/svg+xml') {
            // object[type="image/svg+xml"] is not focusable in Internet Explorer
            return false;
        } else if (!supports$1.focusObjectSwf && svgType === 'application/x-shockwave-flash') {
            // object[type="application/x-shockwave-flash"] is not focusable in Internet Explorer 9
            return false;
        }
    }
    if (nodeName === 'iframe' || nodeName === 'object') {
        // browsing context containers
        return true;
    }
    if (nodeName === 'embed' || nodeName === 'keygen') {
        // embed is considered focus-relevant but not focusable
        // see https://github.com/medialize/ally.js/issues/82
        return true;
    }
    if (element.hasAttribute('contenteditable')) {
        // also see CSS property user-modify below
        return true;
    }
    if (nodeName === 'audio' && (supports$1.focusAudioWithoutControls || element.hasAttribute('controls'))) {
        return true;
    }
    if (nodeName === 'video' && (supports$1.focusVideoWithoutControls || element.hasAttribute('controls'))) {
        return true;
    }
    if (supports$1.focusSummary && nodeName === 'summary') {
        return true;
    }
    var validTabindex = isValidTabindex(element);
    if (nodeName === 'img' && element.hasAttribute('usemap')) {
        // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
        // it appears the tabindex is overruled so focus is still forwarded to the <map>
        return validTabindex && supports$1.focusImgUsemapTabindex || supports$1.focusRedirectImgUsemap;
    }
    if (supports$1.focusTable && (nodeName === 'table' || nodeName === 'td')) {
        // IE10-11 supports.can focus <table> and <td>
        return true;
    }
    if (supports$1.focusFieldset && nodeName === 'fieldset') {
        // IE10-11 supports.can focus <fieldset>
        return true;
    }
    var isSvgElement = nodeName === 'svg';
    var isSvgContent = element.ownerSVGElement;
    var focusableAttribute = element.getAttribute('focusable');
    var tabindex = tabindexValue(element);
    if (nodeName === 'use' && tabindex !== null && !supports$1.focusSvgUseTabindex) {
        // <use> cannot be made focusable by adding a tabindex attribute anywhere but Blink and WebKit
        return false;
    }
    if (nodeName === 'foreignobject') {
        // <use> can only be made focusable in Blink and WebKit
        return tabindex !== null && supports$1.focusSvgForeignobjectTabindex;
    }
    if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
        return true;
    }
    if ((isSvgElement || isSvgContent) && element.focus && !supports$1.focusSvgNegativeTabindexAttribute && tabindex < 0) {
        // Firefox 51 and 52 treat any natively tabbable SVG element with
        // tabindex="-1" as tabbable and everything else as inert
        // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
        return false;
    }
    if (isSvgElement) {
        return validTabindex || supports$1.focusSvg || supports$1.focusSvgInIframe || // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
        Boolean(supports$1.focusSvgFocusableAttribute && focusableAttribute && focusableAttribute === 'true');
    }
    if (isSvgContent) {
        if (supports$1.focusSvgTabindexAttribute && validTabindex) {
            return true;
        }
        if (supports$1.focusSvgFocusableAttribute) {
            // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
            return focusableAttribute === 'true';
        }
    }
    // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    if (validTabindex) {
        return true;
    }
    var style = window.getComputedStyle(element, null);
    if (isUserModifyWritable(style)) {
        return true;
    }
    if (supports$1.focusImgIsmap && nodeName === 'img' && element.hasAttribute('ismap')) {
        // IE10-11 considers the <img> in <a href><img ismap> focusable
        // https://github.com/medialize/ally.js/issues/20
        var hasLinkParent = getParents({
            context: element
        }).some(function(parent) {
            return parent.nodeName.toLowerCase() === 'a' && parent.hasAttribute('href');
        });
        if (hasLinkParent) {
            return true;
        }
    }
    // https://github.com/medialize/ally.js/issues/21
    if (!except.scrollable && supports$1.focusScrollContainer) {
        if (supports$1.focusScrollContainerWithoutOverflow) {
            // Internet Explorer does will consider the scrollable area focusable
            // if the element is a <div> or a <span> and it is in fact scrollable,
            // regardless of the CSS overflow property
            if (isScrollableContainer(element, nodeName)) {
                return true;
            }
        } else if (hasCssOverflowScroll(style)) {
            // Firefox requires proper overflow setting, IE does not necessarily
            // https://developer.mozilla.org/docs/Web/CSS/overflow
            return true;
        }
    }
    if (!except.flexbox && supports$1.focusFlexboxContainer && hasCssDisplayFlex(style)) {
        // elements with display:flex are focusable in IE10-11
        return true;
    }
    var parent = element.parentElement;
    if (!except.scrollable && parent) {
        var parentNodeName = parent.nodeName.toLowerCase();
        var parentStyle = window.getComputedStyle(parent, null);
        if (supports$1.focusScrollBody && isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
            // scrollable bodies are focusable Internet Explorer
            // https://github.com/medialize/ally.js/issues/21
            return true;
        }
        // Children of focusable elements with display:flex are focusable in IE10-11
        if (supports$1.focusChildrenOfFocusableFlexbox) {
            if (hasCssDisplayFlex(parentStyle)) {
                return true;
            }
        }
    }
    // NOTE: elements marked as inert are not focusable,
    // but that property is not exposed to the DOM
    // https://www.w3.org/TR/html5/editing.html#inert
    return false;
}
// bind exceptions to an iterator callback
isFocusRelevantRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusRelevant = function isFocusRelevant(context) {
        return isFocusRelevantRules({
            context: context,
            except: except
        });
    };
    isFocusRelevant.rules = isFocusRelevantRules;
    return isFocusRelevant;
};
// provide isFocusRelevant(context) as default iterator callback
var isFocusRelevant = isFocusRelevantRules.except({});
function findIndex(array, callback) {
    // attempt to use native or polyfilled Array#findIndex first
    if (array.findIndex) {
        return array.findIndex(callback);
    }
    var length = array.length;
    // shortcut if the array is empty
    if (length === 0) {
        return -1;
    }
    // otherwise loop over array
    for(var i = 0; i < length; i++){
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
function getContentDocument(node) {
    try {
        // works on <object> and <iframe>
        return node.contentDocument || // works on <object> and <iframe>
        node.contentWindow && node.contentWindow.document || // works on <object> and <iframe> that contain SVG
        node.getSVGDocument && node.getSVGDocument() || null;
    } catch (e) {
        // SecurityError: Failed to read the 'contentDocument' property from 'HTMLObjectElement'
        // also IE may throw member not found exception e.g. on <object type="image/png">
        return null;
    }
}
function getWindow(node) {
    var _document = getDocument(node);
    return _document.defaultView || window;
}
var shadowPrefix = void 0;
function selectInShadows(selector) {
    if (typeof shadowPrefix !== 'string') {
        var operator = cssShadowPiercingDeepCombinator();
        if (operator) {
            shadowPrefix = ', html ' + operator + ' ';
        }
    }
    if (!shadowPrefix) {
        return selector;
    }
    return selector + shadowPrefix + selector.replace(/\s*,\s*/g, ',').split(',').join(shadowPrefix);
}
var selector = void 0;
function findDocumentHostElement(_window) {
    if (!selector) {
        selector = selectInShadows('object, iframe');
    }
    if (_window._frameElement !== undefined) {
        return _window._frameElement;
    }
    _window._frameElement = null;
    var potentialHosts = _window.parent.document.querySelectorAll(selector);
    [].some.call(potentialHosts, function(element) {
        var _document = getContentDocument(element);
        if (_document !== _window.document) {
            return false;
        }
        _window._frameElement = element;
        return true;
    });
    return _window._frameElement;
}
function getFrameElement(element) {
    var _window = getWindow(element);
    if (!_window.parent || _window.parent === _window) {
        // if there is no parent browsing context,
        // we're not going to get a frameElement either way
        return null;
    }
    try {
        // see https://developer.mozilla.org/docs/Web/API/Window/frameElement
        // does not work within <embed> anywhere, and not within in <object> in IE
        return _window.frameElement || findDocumentHostElement(_window);
    } catch (e) {
        return null;
    }
}
// https://www.w3.org/TR/html5/rendering.html#being-rendered
// <area> is not rendered, but we *consider* it visible to simplfiy this function's usage
var notRenderedElementsPattern = /^(area)$/;
function computedStyle(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}
function notDisplayed(_path) {
    return _path.some(function(element) {
        // display:none is not visible (optimized away at layout)
        return computedStyle(element, 'display') === 'none';
    });
}
function notVisible(_path) {
    // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L109-L114
    // NOTE: a nested element can reverse visibility:hidden|collapse by explicitly setting visibility:visible
    // NOTE: visibility can be ["", "visible", "hidden", "collapse"]
    var hidden = findIndex(_path, function(element) {
        var visibility = computedStyle(element, 'visibility');
        return visibility === 'hidden' || visibility === 'collapse';
    });
    if (hidden === -1) {
        // there is no hidden element
        return false;
    }
    var visible = findIndex(_path, function(element) {
        return computedStyle(element, 'visibility') === 'visible';
    });
    if (visible === -1) {
        // there is no visible element (but a hidden element)
        return true;
    }
    if (hidden < visible) {
        // there is a hidden element and it's closer than the first visible element
        return true;
    }
    // there may be a hidden element, but the closest element is visible
    return false;
}
function collapsedParent(_path) {
    var offset = 1;
    if (_path[0].nodeName.toLowerCase() === 'summary') {
        offset = 2;
    }
    return _path.slice(offset).some(function(element) {
        // "content children" of a closed details element are not visible
        return element.nodeName.toLowerCase() === 'details' && element.open === false;
    });
}
function isVisibleRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        notRendered: false,
        cssDisplay: false,
        cssVisibility: false,
        detailsElement: false,
        browsingContext: false
    } : _ref$except;
    var element = contextToElement({
        label: 'is/visible',
        resolveDocument: true,
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
        return true;
    }
    var _path = getParents({
        context: element
    });
    // in Internet Explorer <audio> has a default display: none, where others have display: inline
    // but IE allows focusing <audio style="display:none">, but not <div display:none><audio>
    // this is irrelevant to other browsers, as the controls attribute is required to make <audio> focusable
    var isAudioWithoutControls = nodeName === 'audio' && !element.hasAttribute('controls');
    if (!except.cssDisplay && notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
        return false;
    }
    if (!except.cssVisibility && notVisible(_path)) {
        return false;
    }
    if (!except.detailsElement && collapsedParent(_path)) {
        return false;
    }
    if (!except.browsingContext) {
        // elements within a browsing context are affected by the
        // browsing context host element's visibility and tabindex
        var frameElement = getFrameElement(element);
        var _isVisible = isVisibleRules.except(except);
        if (frameElement && !_isVisible(frameElement)) {
            return false;
        }
    }
    return true;
}
// bind exceptions to an iterator callback
isVisibleRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isVisible = function isVisible(context) {
        return isVisibleRules({
            context: context,
            except: except
        });
    };
    isVisible.rules = isVisibleRules;
    return isVisible;
};
// provide isVisible(context) as default iterator callback
var isVisible = isVisibleRules.except({});
function getMapByName(name, _document) {
    // apparently getElementsByName() also considers id attribute in IE & opera
    // https://developer.mozilla.org/docs/Web/API/Document/getElementsByName
    var map = _document.querySelector('map[name="' + (0, _cssescape.default)(name) + '"]');
    return map || null;
}
function getImageOfArea(element) {
    var map = element.parentElement;
    if (!map.name || map.nodeName.toLowerCase() !== 'map') {
        return null;
    }
    // NOTE: image maps can also be applied to <object> with image content,
    // but no browser supports this at the moment
    // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
    // <img> and <object> referencing the <map> element, but no browser implements this
    //   https://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
    //   https://developer.mozilla.org/docs/Web/API/HTMLMapElement
    // the image must be valid and loaded for the map to take effect
    var _document = getDocument(element);
    return _document.querySelector('img[usemap="#' + (0, _cssescape.default)(map.name) + '"]') || null;
}
var supports$2 = void 0;
// https://developer.mozilla.org/docs/Web/HTML/Element/map
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
// https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107
function isValidArea(context) {
    if (!supports$2) {
        supports$2 = _supports();
    }
    var element = contextToElement({
        label: 'is/valid-area',
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName !== 'area') {
        return false;
    }
    var hasTabindex = element.hasAttribute('tabindex');
    if (!supports$2.focusAreaTabindex && hasTabindex) {
        // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
        return false;
    }
    var img = getImageOfArea(element);
    if (!img || !isVisible(img)) {
        return false;
    }
    // Firefox only allows fully loaded images to reference image maps
    // https://stereochro.me/ideas/detecting-broken-images-js
    if (!supports$2.focusBrokenImageMap && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
        return false;
    }
    // Firefox supports.can focus area elements even if they don't have an href attribute
    if (!supports$2.focusAreaWithoutHref && !element.href) {
        // Internet explorer supports.can focus area elements without href if either
        // the area element or the image element has a tabindex attribute
        return supports$2.focusAreaTabindex && hasTabindex || supports$2.focusAreaImgTabindex && img.hasAttribute('tabindex');
    }
    // https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
    var childOfInteractive = getParents({
        context: img
    }).slice(1).some(function(_element) {
        var name = _element.nodeName.toLowerCase();
        return name === 'button' || name === 'a';
    });
    if (childOfInteractive) {
        return false;
    }
    return true;
}
var supports$3 = void 0;
// https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
var disabledElementsPattern = void 0;
var disabledElements = {
    input: true,
    select: true,
    textarea: true,
    button: true,
    fieldset: true,
    form: true
};
function isNativeDisabledSupported(context) {
    if (!supports$3) {
        supports$3 = _supports();
        if (supports$3.focusFieldsetDisabled) {
            delete disabledElements.fieldset;
        }
        if (supports$3.focusFormDisabled) {
            delete disabledElements.form;
        }
        disabledElementsPattern = new RegExp('^(' + Object.keys(disabledElements).join('|') + ')$');
    }
    var element = contextToElement({
        label: 'is/native-disabled-supported',
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    return Boolean(disabledElementsPattern.test(nodeName));
}
var supports$4 = void 0;
function isDisabledFieldset(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'fieldset' && element.disabled;
}
function isDisabledForm(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'form' && element.disabled;
}
function isDisabled(context) {
    if (!supports$4) {
        supports$4 = _supports();
    }
    var element = contextToElement({
        label: 'is/disabled',
        context: context
    });
    if (element.hasAttribute('data-ally-disabled')) {
        // treat ally's element/disabled like the DOM native element.disabled
        return true;
    }
    if (!isNativeDisabledSupported(element)) {
        // non-form elements do not support the disabled attribute
        return false;
    }
    if (element.disabled) {
        // the element itself is disabled
        return true;
    }
    var parents = getParents({
        context: element
    });
    if (parents.some(isDisabledFieldset)) {
        // a parental <fieldset> is disabld and inherits the state onto this element
        return true;
    }
    if (!supports$4.focusFormDisabled && parents.some(isDisabledForm)) {
        // a parental <form> is disabld and inherits the state onto this element
        return true;
    }
    return false;
}
function isOnlyTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        onlyFocusableBrowsingContext: false,
        visible: false
    } : _ref$except;
    var element = contextToElement({
        label: 'is/only-tabbable',
        resolveDocument: true,
        context: context
    });
    if (!except.visible && !isVisible(element)) {
        return false;
    }
    if (!except.onlyFocusableBrowsingContext && (platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE)) {
        var frameElement = getFrameElement(element);
        if (frameElement) {
            if (tabindexValue(frameElement) < 0) {
                // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
                // tabbable demotion onto elements of their browsing contexts
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var tabindex = tabindexValue(element);
    if (nodeName === 'label' && platform.is.GECKO) {
        // Firefox cannot focus, but tab to: label[tabindex=0]
        return tabindex !== null && tabindex >= 0;
    }
    // SVG Elements were keyboard focusable but not script focusable before Firefox 51.
    // Firefox 51 added the focus management DOM API (.focus and .blur) to SVGElement,
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=778654
    if (platform.is.GECKO && element.ownerSVGElement && !element.focus) {
        if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
            // any focusable child of <svg> cannot be focused, but tabbed to
            if (platform.is.GECKO) {
                return true;
            }
        }
    }
    return false;
}
// bind exceptions to an iterator callback
isOnlyTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isOnlyTabbable = function isOnlyTabbable(context) {
        return isOnlyTabbableRules({
            context: context,
            except: except
        });
    };
    isOnlyTabbable.rules = isOnlyTabbableRules;
    return isOnlyTabbable;
};
// provide isOnlyTabbable(context) as default iterator callback
var isOnlyTabbable = isOnlyTabbableRules.except({});
var supports$5 = void 0;
function isOnlyFocusRelevant(element) {
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'embed' || nodeName === 'keygen') {
        // embed is considered focus-relevant but not focusable
        // see https://github.com/medialize/ally.js/issues/82
        return true;
    }
    var _tabindex = tabindexValue(element);
    if (element.shadowRoot && _tabindex === null) {
        // ShadowDOM host elements *may* receive focus
        // even though they are not considered focuable
        return true;
    }
    if (nodeName === 'label') {
        // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
        // there's no way to make an element focusable other than by adding a tabindex,
        // and focus behavior of the label element seems hard-wired to ignore tabindex
        // in some browsers (like Gecko, Blink and WebKit)
        return !supports$5.focusLabelTabindex || _tabindex === null;
    }
    if (nodeName === 'legend') {
        return _tabindex === null;
    }
    if (supports$5.focusSvgFocusableAttribute && (element.ownerSVGElement || nodeName === 'svg')) {
        // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
        var focusableAttribute = element.getAttribute('focusable');
        return focusableAttribute && focusableAttribute === 'false';
    }
    if (nodeName === 'img' && element.hasAttribute('usemap')) {
        // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
        // it appears the tabindex is overruled so focus is still forwarded to the <map>
        return _tabindex === null || !supports$5.focusImgUsemapTabindex;
    }
    if (nodeName === 'area') {
        // all <area>s are considered relevant,
        // but only the valid <area>s are focusable
        return !isValidArea(element);
    }
    return false;
}
function isFocusableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        disabled: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$5) {
        supports$5 = _supports();
    }
    var _isOnlyTabbable = isOnlyTabbable.rules.except({
        onlyFocusableBrowsingContext: true,
        visible: except.visible
    });
    var element = contextToElement({
        label: 'is/focusable',
        resolveDocument: true,
        context: context
    });
    var focusRelevant = isFocusRelevant.rules({
        context: element,
        except: except
    });
    if (!focusRelevant || isOnlyFocusRelevant(element)) {
        return false;
    }
    if (!except.disabled && isDisabled(element)) {
        return false;
    }
    if (!except.onlyTabbable && _isOnlyTabbable(element)) {
        // some elements may be keyboard focusable, but not script focusable
        return false;
    }
    // elements that are not rendered, cannot be focused
    if (!except.visible) {
        var visibilityOptions = {
            context: element,
            except: {}
        };
        if (supports$5.focusInHiddenIframe) {
            // WebKit and Blink can focus content in hidden <iframe> and <object>
            visibilityOptions.except.browsingContext = true;
        }
        if (supports$5.focusObjectSvgHidden) {
            // Blink allows focusing the object element, even if it has visibility: hidden;
            // @browser-issue Blink https://code.google.com/p/chromium/issues/detail?id=586191
            var _nodeName2 = element.nodeName.toLowerCase();
            if (_nodeName2 === 'object') {
                visibilityOptions.except.cssVisibility = true;
            }
        }
        if (!isVisible.rules(visibilityOptions)) {
            return false;
        }
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        var _nodeName = frameElement.nodeName.toLowerCase();
        if (_nodeName === 'object' && !supports$5.focusInZeroDimensionObject) {
            if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
                // WebKit can not focus content in <object> if it doesn't have dimensions
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'svg' && supports$5.focusSvgInIframe && !frameElement && element.getAttribute('tabindex') === null) {
        return false;
    }
    return true;
}
// bind exceptions to an iterator callback
isFocusableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusable = function isFocusable(context) {
        return isFocusableRules({
            context: context,
            except: except
        });
    };
    isFocusable.rules = isFocusableRules;
    return isFocusable;
};
// provide isFocusRelevant(context) as default iterator callback
var isFocusable = isFocusableRules.except({});
function createFilter(condition) {
    // see https://developer.mozilla.org/docs/Web/API/NodeFilter
    var filter = function filter(node) {
        if (node.shadowRoot) {
            // return ShadowRoot elements regardless of them being focusable,
            // so they can be walked recursively later
            return NodeFilter.FILTER_ACCEPT;
        }
        if (condition(node)) {
            // finds elements that could have been found by document.querySelectorAll()
            return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
    };
    // IE requires a function, Browsers require {acceptNode: function}
    // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
    filter.acceptNode = filter;
    return filter;
}
var PossiblyFocusableFilter = createFilter(isFocusRelevant);
function queryFocusableStrict() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!context) {
        context = document.documentElement;
    }
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var _document = getDocument(context);
    // see https://developer.mozilla.org/docs/Web/API/Document/createTreeWalker
    var walker = _document.createTreeWalker(context, NodeFilter.SHOW_ELEMENT, strategy === 'all' ? PossiblyFocusableFilter : createFilter(_isFocusable), false);
    var list = [];
    while(walker.nextNode()){
        if (walker.currentNode.shadowRoot) {
            if (_isFocusable(walker.currentNode)) {
                list.push(walker.currentNode);
            }
            list = list.concat(queryFocusableStrict({
                context: walker.currentNode.shadowRoot,
                includeOnlyTabbable: includeOnlyTabbable,
                strategy: strategy
            }));
        } else {
            list.push(walker.currentNode);
        }
    }
    // add context if requested and focusable
    if (includeContext) {
        if (strategy === 'all') {
            if (isFocusRelevant(context)) {
                list.unshift(context);
            }
        } else if (_isFocusable(context)) {
            list.unshift(context);
        }
    }
    return list;
}
// NOTE: this selector MUST *never* be used directly,
var supports$6 = void 0;
var selector$1 = void 0;
function selector$2() {
    if (!supports$6) {
        supports$6 = _supports();
    }
    if (typeof selector$1 === 'string') {
        return selector$1;
    }
    // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    selector$1 = '' + // IE11 supports.can focus <table> and <td>
    (supports$6.focusTable ? 'table, td,' : '') + // IE11 supports.can focus <fieldset>
    (supports$6.focusFieldset ? 'fieldset,' : '') + // Namespace problems of [xlink:href] explained in https://stackoverflow.com/a/23047888/515124
    // svg a[*|href] does not match in IE9, but since we're filtering
    // through is/focusable we can include all <a> from SVG
    'svg a,' + // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
    // navigational elements
    'a[href],' + // validity determined by is/valid-area.js
    'area[href],' + // validity determined by is/disabled.js
    'input, select, textarea, button,' + // browsing context containers
    'iframe, object, embed,' + // interactive content
    'keygen,' + (supports$6.focusAudioWithoutControls ? 'audio,' : 'audio[controls],') + (supports$6.focusVideoWithoutControls ? 'video,' : 'video[controls],') + (supports$6.focusSummary ? 'summary,' : '') + // validity determined by is/valid-tabindex.js
    '[tabindex],' + // editing hosts
    '[contenteditable]';
    // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
    selector$1 = selectInShadows(selector$1);
    return selector$1;
}
function queryFocusableQuick() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable;
    var _selector = selector$2();
    var elements = context.querySelectorAll(_selector);
    // the selector potentially matches more than really is focusable
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var result = [].filter.call(elements, _isFocusable);
    // add context if requested and focusable
    if (includeContext && _isFocusable(context)) {
        result.unshift(context);
    }
    return result;
}
function queryFocusable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, _ref$strategy = _ref.strategy, strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy;
    var element = contextToElement({
        label: 'query/focusable',
        resolveDocument: true,
        defaultToDocument: true,
        context: context
    });
    var options = {
        context: element,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    };
    if (strategy === 'quick') {
        return queryFocusableQuick(options);
    } else if (strategy === 'strict' || strategy === 'all') {
        return queryFocusableStrict(options);
    }
    throw Object.defineProperty(new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]'), "__NEXT_ERROR_CODE", {
        value: "E594",
        enumerable: false,
        configurable: true
    });
}
var supports$7 = void 0;
// Internet Explorer 11 considers fieldset, table, td focusable, but not tabbable
// Internet Explorer 11 considers body to have [tabindex=0], but does not allow tabbing to it
var focusableElementsPattern = /^(fieldset|table|td|body)$/;
function isTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$7) {
        supports$7 = _supports();
    }
    var element = contextToElement({
        label: 'is/tabbable',
        resolveDocument: true,
        context: context
    });
    if (platform.is.BLINK && platform.is.ANDROID && platform.majorVersion > 42) {
        // External keyboard support worked fine in CHrome 42, but stopped working in Chrome 45.
        // The on-screen keyboard does not provide a way to focus the next input element (like iOS does).
        // That leaves us with no option to advance focus by keyboard, ergo nothing is tabbable (keyboard focusable).
        return false;
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        if (platform.is.WEBKIT && platform.is.IOS) {
            // iOS only does not consider anything from another browsing context keyboard focusable
            return false;
        }
        // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
        // tabbable demotion onto elements of their browsing contexts
        if (tabindexValue(frameElement) < 0) {
            return false;
        }
        if (!except.visible && (platform.is.BLINK || platform.is.WEBKIT) && !isVisible(frameElement)) {
            // Blink and WebKit consider elements in hidden browsing contexts focusable, but not tabbable
            return false;
        }
        // Webkit and Blink don't consider anything in <object> tabbable
        // Blink fixed that fixed in Chrome 54, Opera 41
        var frameNodeName = frameElement.nodeName.toLowerCase();
        if (frameNodeName === 'object') {
            var isFixedBlink = platform.name === 'Chrome' && platform.majorVersion >= 54 || platform.name === 'Opera' && platform.majorVersion >= 41;
            if (platform.is.WEBKIT || platform.is.BLINK && !isFixedBlink) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var _tabindex = tabindexValue(element);
    var tabindex = _tabindex === null ? null : _tabindex >= 0;
    if (platform.is.EDGE && platform.majorVersion >= 14 && frameElement && element.ownerSVGElement && _tabindex < 0) {
        // Edge 14+ considers <a xlink:href="…" tabindex="-1"> keyboard focusable
        // if the element is in a nested browsing context
        return true;
    }
    var hasTabbableTabindexOrNone = tabindex !== false;
    var hasTabbableTabindex = _tabindex !== null && _tabindex >= 0;
    // NOTE: Firefox 31 considers [contenteditable] to have [tabindex=-1], but allows tabbing to it
    // fixed in Firefox 40 the latest - https://bugzilla.mozilla.org/show_bug.cgi?id=1185657
    if (element.hasAttribute('contenteditable')) {
        // tabbing can still be disabled by explicitly providing [tabindex="-1"]
        return hasTabbableTabindexOrNone;
    }
    if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
        return false;
    }
    if (platform.is.WEBKIT && platform.is.IOS) {
        // iOS only considers a hand full of elements tabbable (keyboard focusable)
        // this holds true even with external keyboards
        var potentiallyTabbable = nodeName === 'input' && element.type === 'text' || element.type === 'password' || nodeName === 'select' || nodeName === 'textarea' || element.hasAttribute('contenteditable');
        if (!potentiallyTabbable) {
            var style = window.getComputedStyle(element, null);
            potentiallyTabbable = isUserModifyWritable(style);
        }
        if (!potentiallyTabbable) {
            return false;
        }
    }
    if (nodeName === 'use' && _tabindex !== null) {
        if (platform.is.BLINK || platform.is.WEBKIT && platform.majorVersion === 9) {
            // In Chrome and Safari 9 the <use> element is keyboard focusable even for tabindex="-1"
            return true;
        }
    }
    if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
        if (hasTabbableTabindexOrNone) {
            // in Trident and Gecko SVGElement does not handle the tabIndex property properly
            return true;
        }
        if (element.focus && !supports$7.focusSvgNegativeTabindexAttribute) {
            // Firefox 51 and 52 treat any natively tabbable SVG element with
            // tabindex="-1" as tabbable and everything else as inert
            // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
            return true;
        }
    }
    if (nodeName === 'svg' && supports$7.focusSvgInIframe && hasTabbableTabindexOrNone) {
        return true;
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        if (nodeName === 'svg') {
            if (supports$7.focusSvg) {
                // older Internet Explorers consider <svg> keyboard focusable
                // unless they have focsable="false", but then they wouldn't
                // be focusable and thus not even reach this filter
                return true;
            }
            // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
            return element.hasAttribute('focusable') || hasTabbableTabindex;
        }
        if (element.ownerSVGElement) {
            if (supports$7.focusSvgTabindexAttribute && hasTabbableTabindex) {
                return true;
            }
            // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
            return element.hasAttribute('focusable');
        }
    }
    if (element.tabIndex === undefined) {
        return Boolean(except.onlyTabbable);
    }
    if (nodeName === 'audio') {
        if (!element.hasAttribute('controls')) {
            // In Internet Explorer the <audio> element is focusable, but not tabbable, and tabIndex property is wrong
            return false;
        } else if (platform.is.BLINK) {
            // In Chrome <audio controls tabindex="-1"> remains keyboard focusable
            return true;
        }
    }
    if (nodeName === 'video') {
        if (!element.hasAttribute('controls')) {
            if (platform.is.TRIDENT || platform.is.EDGE) {
                // In Internet Explorer and Edge the <video> element is focusable, but not tabbable, and tabIndex property is wrong
                return false;
            }
        } else if (platform.is.BLINK || platform.is.GECKO) {
            // In Chrome and Firefox <video controls tabindex="-1"> remains keyboard focusable
            return true;
        }
    }
    if (nodeName === 'object') {
        if (platform.is.BLINK || platform.is.WEBKIT) {
            // In all Blink and WebKit based browsers <embed> and <object> are never keyboard focusable, even with tabindex="0" set
            return false;
        }
    }
    if (nodeName === 'iframe') {
        // In Internet Explorer all iframes are only focusable
        // In WebKit, Blink and Gecko iframes may be tabbable depending on content.
        // Since we can't reliably investigate iframe documents because of the
        // SameOriginPolicy, we're declaring everything only focusable.
        return false;
    }
    if (!except.scrollable && platform.is.GECKO) {
        // Firefox considers scrollable containers keyboard focusable,
        // even though their tabIndex property is -1
        var _style = window.getComputedStyle(element, null);
        if (hasCssOverflowScroll(_style)) {
            return hasTabbableTabindexOrNone;
        }
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        // IE and Edge degrade <area> to script focusable, if the image
        // using the <map> has been given tabindex="-1"
        if (nodeName === 'area') {
            var img = getImageOfArea(element);
            if (img && tabindexValue(img) < 0) {
                return false;
            }
        }
        var _style2 = window.getComputedStyle(element, null);
        if (isUserModifyWritable(_style2)) {
            // prevent being swallowed by the overzealous isScrollableContainer() below
            return element.tabIndex >= 0;
        }
        if (!except.flexbox && hasCssDisplayFlex(_style2)) {
            if (_tabindex !== null) {
                return hasTabbableTabindex;
            }
            return isFocusRelevantWithoutFlexbox(element) && isTabbableWithoutFlexbox(element);
        }
        // IE considers scrollable containers script focusable only,
        // even though their tabIndex property is 0
        if (isScrollableContainer(element, nodeName)) {
            return false;
        }
        var parent = element.parentElement;
        if (parent) {
            var parentNodeName = parent.nodeName.toLowerCase();
            var parentStyle = window.getComputedStyle(parent, null);
            // IE considers scrollable bodies script focusable only,
            if (isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
                return false;
            }
            // Children of focusable elements with display:flex are focusable in IE10-11,
            // even though their tabIndex property suggests otherwise
            if (hasCssDisplayFlex(parentStyle)) {
                // value of tabindex takes precedence
                return hasTabbableTabindex;
            }
        }
    }
    // https://www.w3.org/WAI/PF/aria-practices/#focus_tabindex
    return element.tabIndex >= 0;
}
// bind exceptions to an iterator callback
isTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isTabbable = function isTabbable(context) {
        return isTabbableRules({
            context: context,
            except: except
        });
    };
    isTabbable.rules = isTabbableRules;
    return isTabbable;
};
var isFocusRelevantWithoutFlexbox = isFocusRelevant.rules.except({
    flexbox: true
});
var isTabbableWithoutFlexbox = isTabbableRules.except({
    flexbox: true
});
// provide isTabbable(context) as default iterator callback
var isTabbable = isTabbableRules.except({});
function queryTabbable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    var _isTabbable = isTabbable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    return queryFocusable({
        context: context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    }).filter(_isTabbable);
}
// sorts a list of elements according to their order in the DOM
function compareDomPosition(a, b) {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
function sortDomOrder(elements) {
    return elements.sort(compareDomPosition);
}
function getFirstSuccessorOffset(list, target) {
    // find the first element that comes AFTER the target element
    return findIndex(list, function(element) {
        return target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING;
    });
}
function findInsertionOffsets(list, elements, resolveElement) {
    // instead of mutating the elements list directly, remember position and map
    // to inject later, when we can do this more efficiently
    var insertions = [];
    elements.forEach(function(element) {
        var replace = true;
        var offset = list.indexOf(element);
        if (offset === -1) {
            // element is not in target list
            offset = getFirstSuccessorOffset(list, element);
            replace = false;
        }
        if (offset === -1) {
            // there is no successor in the tabsequence,
            // meaning the image must be the last element
            offset = list.length;
        }
        // allow the consumer to replace the injected element
        var injections = nodeArray(resolveElement ? resolveElement(element) : element);
        if (!injections.length) {
            // we can't inject zero elements
            return;
        }
        insertions.push({
            offset: offset,
            replace: replace,
            elements: injections
        });
    });
    return insertions;
}
function insertElementsAtOffsets(list, insertions) {
    // remember the number of elements we have already injected
    // so we account for the caused index offset
    var inserted = 0;
    // make sure that we insert the elements in sequence,
    // otherwise the offset compensation won't work
    insertions.sort(function(a, b) {
        return a.offset - b.offset;
    });
    insertions.forEach(function(insertion) {
        // array.splice has an annoying function signature :(
        var remove = insertion.replace ? 1 : 0;
        var args = [
            insertion.offset + inserted,
            remove
        ].concat(insertion.elements);
        list.splice.apply(list, args);
        inserted += insertion.elements.length - remove;
    });
}
function mergeInDomOrder() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, list = _ref.list, elements = _ref.elements, resolveElement = _ref.resolveElement;
    // operate on a copy so we don't mutate the original array
    var _list = list.slice(0);
    // make sure the elements we're injecting are provided in DOM order
    var _elements = nodeArray(elements).slice(0);
    sortDomOrder(_elements);
    // find the offsets within the target array (list) at which to inject
    // each individual element (from elements)
    var insertions = findInsertionOffsets(_list, _elements, resolveElement);
    // actually inject the elements into the target array at the identified positions
    insertElementsAtOffsets(_list, insertions);
    return _list;
}
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw Object.defineProperty(new TypeError('Cannot call a class as a function'), "__NEXT_ERROR_CODE", {
            value: "E601",
            enumerable: false,
            configurable: true
        });
    }
}
var Maps = function() {
    function Maps(context) {
        _classCallCheck(this, Maps);
        this._document = getDocument(context);
        this.maps = {};
    }
    _createClass(Maps, [
        {
            key: 'getAreasFor',
            value: function getAreasFor(name) {
                if (!this.maps[name]) {
                    // the map is not defined within the context, so we
                    // have to go find it elsewhere in the document
                    this.addMapByName(name);
                }
                return this.maps[name];
            }
        },
        {
            key: 'addMapByName',
            value: function addMapByName(name) {
                var map = getMapByName(name, this._document);
                if (!map) {
                    // if there is no map, the img[usemap] wasn't doing anything anyway
                    return;
                }
                this.maps[map.name] = queryTabbable({
                    context: map
                });
            }
        },
        {
            key: 'extractAreasFromList',
            value: function extractAreasFromList(elements) {
                // remove all <area> elements from the elements list,
                // but put them the map for later retrieval
                return elements.filter(function(element) {
                    var nodeName = element.nodeName.toLowerCase();
                    if (nodeName !== 'area') {
                        return true;
                    }
                    var map = element.parentNode;
                    if (!this.maps[map.name]) {
                        this.maps[map.name] = [];
                    }
                    this.maps[map.name].push(element);
                    return false;
                }, this);
            }
        }
    ]);
    return Maps;
}();
function sortArea(elements, context) {
    // images - unless they are focusable themselves, likely not
    // part of the elements list, so we'll have to find them and
    // sort them into the elements list manually
    var usemaps = context.querySelectorAll('img[usemap]');
    var maps = new Maps(context);
    // remove all <area> elements from the elements list,
    // but put them the map for later retrieval
    var _elements = maps.extractAreasFromList(elements);
    if (!usemaps.length) {
        // the context does not contain any <area>s so no need
        // to replace anything, just remove any maps
        return _elements;
    }
    return mergeInDomOrder({
        list: _elements,
        elements: usemaps,
        resolveElement: function resolveElement(image) {
            var name = image.getAttribute('usemap').slice(1);
            return maps.getAreasFor(name);
        }
    });
}
var _createClass$1 = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw Object.defineProperty(new TypeError('Cannot call a class as a function'), "__NEXT_ERROR_CODE", {
            value: "E601",
            enumerable: false,
            configurable: true
        });
    }
}
var Shadows = function() {
    function Shadows(context, sortElements) {
        _classCallCheck$1(this, Shadows);
        // document context we're working with
        this.context = context;
        // callback that sorts an array of elements
        this.sortElements = sortElements;
        // reference to create unique IDs for each ShadowHost
        this.hostCounter = 1;
        // reference map for child-ShadowHosts of a ShadowHost
        this.inHost = {};
        // reference map for child-ShadowHost of the document
        this.inDocument = [];
        // reference map for ShadowHosts
        this.hosts = {};
        // reference map for tabbable elements of a ShadowHost
        this.elements = {};
    }
    // remember which hosts we have to sort within later
    _createClass$1(Shadows, [
        {
            key: '_registerHost',
            value: function _registerHost(host) {
                if (host._sortingId) {
                    return;
                }
                // make the ShadowHost identifiable (see cleanup() for undo)
                host._sortingId = 'shadow-' + this.hostCounter++;
                this.hosts[host._sortingId] = host;
                // hosts may contain other hosts
                var parentHost = getShadowHost({
                    context: host
                });
                if (parentHost) {
                    this._registerHost(parentHost);
                    this._registerHostParent(host, parentHost);
                } else {
                    this.inDocument.push(host);
                }
            }
        },
        {
            key: '_registerHostParent',
            value: function _registerHostParent(host, parent) {
                if (!this.inHost[parent._sortingId]) {
                    this.inHost[parent._sortingId] = [];
                }
                this.inHost[parent._sortingId].push(host);
            }
        },
        {
            key: '_registerElement',
            value: function _registerElement(element, host) {
                if (!this.elements[host._sortingId]) {
                    this.elements[host._sortingId] = [];
                }
                this.elements[host._sortingId].push(element);
            }
        },
        {
            key: 'extractElements',
            value: function extractElements(elements) {
                return elements.filter(function(element) {
                    var host = getShadowHost({
                        context: element
                    });
                    if (!host) {
                        return true;
                    }
                    this._registerHost(host);
                    this._registerElement(element, host);
                    return false;
                }, this);
            }
        },
        {
            key: 'sort',
            value: function sort(elements) {
                var _elements = this._injectHosts(elements);
                _elements = this._replaceHosts(_elements);
                this._cleanup();
                return _elements;
            }
        },
        {
            key: '_injectHosts',
            value: function _injectHosts(elements) {
                Object.keys(this.hosts).forEach(function(_sortingId) {
                    var _list = this.elements[_sortingId];
                    var _elements = this.inHost[_sortingId];
                    var _context = this.hosts[_sortingId].shadowRoot;
                    this.elements[_sortingId] = this._merge(_list, _elements, _context);
                }, this);
                return this._merge(elements, this.inDocument, this.context);
            }
        },
        {
            key: '_merge',
            value: function _merge(list, elements, context) {
                var merged = mergeInDomOrder({
                    list: list,
                    elements: elements
                });
                return this.sortElements(merged, context);
            }
        },
        {
            key: '_replaceHosts',
            value: function _replaceHosts(elements) {
                return mergeInDomOrder({
                    list: elements,
                    elements: this.inDocument,
                    resolveElement: this._resolveHostElement.bind(this)
                });
            }
        },
        {
            key: '_resolveHostElement',
            value: function _resolveHostElement(host) {
                var merged = mergeInDomOrder({
                    list: this.elements[host._sortingId],
                    elements: this.inHost[host._sortingId],
                    resolveElement: this._resolveHostElement.bind(this)
                });
                var _tabindex = tabindexValue(host);
                if (_tabindex !== null && _tabindex > -1) {
                    return [
                        host
                    ].concat(merged);
                }
                return merged;
            }
        },
        {
            key: '_cleanup',
            value: function _cleanup() {
                // remove those identifers we put on the ShadowHost to avoid using Map()
                Object.keys(this.hosts).forEach(function(key) {
                    delete this.hosts[key]._sortingId;
                }, this);
            }
        }
    ]);
    return Shadows;
}();
function sortShadowed(elements, context, sortElements) {
    var shadows = new Shadows(context, sortElements);
    var _elements = shadows.extractElements(elements);
    if (_elements.length === elements.length) {
        // no shadowed content found, no need to continue
        return sortElements(elements);
    }
    return shadows.sort(_elements);
}
function sortTabindex(elements) {
    // https://developer.mozilla.org/docs/Web/API/HTMLElement.tabIndex
    // elements with tabIndex "0" (including tabbableElements without tabIndex) should be navigated in the order they appear.
    // elements with a positive tabIndex:
    //   Elements that have identical tabIndexes should be navigated in the order they appear.
    //   Navigation proceeds from the lowest tabIndex to the highest tabIndex.
    // NOTE: sort implementation may be unstable and thus mess up DOM order,
    // that's why we build a map that's being sorted instead. If we were able to rely
    // on a stable sorting algorithm, sortTabindex() could be as simple as
    // elements.sort(function(a, b) { return a.tabIndex - b.tabIndex; });
    // at this time Chrome does not use a stable sorting algorithm
    // see http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html#stability
    // NOTE: compareDocumentPosition seemed like more overhead than just sorting this with buckets
    // https://developer.mozilla.org/docs/Web/API/Node.compareDocumentPosition
    var map = {};
    var indexes = [];
    var normal = elements.filter(function(element) {
        // in Trident and Gecko SVGElement does not know about the tabIndex property
        var tabIndex = element.tabIndex;
        if (tabIndex === undefined) {
            tabIndex = tabindexValue(element);
        }
        // extract elements that don't need sorting
        if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
            return true;
        }
        if (!map[tabIndex]) {
            // create sortable bucket for dom-order-preservation of elements with the same tabIndex
            map[tabIndex] = [];
            // maintain a list of unique tabIndexes
            indexes.push(tabIndex);
        }
        // sort element into the proper bucket
        map[tabIndex].push(element);
        // element moved to sorting map, so not "normal" anymore
        return false;
    });
    // sort the tabindex ascending,
    // then resolve them to their appropriate buckets,
    // then flatten the array of arrays to an array
    var _elements = indexes.sort().map(function(tabIndex) {
        return map[tabIndex];
    }).reduceRight(function(previous, current) {
        return current.concat(previous);
    }, normal);
    return _elements;
}
var supports$8 = void 0;
function moveContextToBeginning(elements, context) {
    var pos = elements.indexOf(context);
    if (pos > 0) {
        var tmp = elements.splice(pos, 1);
        return tmp.concat(elements);
    }
    return elements;
}
function sortElements(elements, _context) {
    if (supports$8.tabsequenceAreaAtImgPosition) {
        // Some browsers sort <area> in DOM order, some place the <area>s
        // where the <img> referecing them would've been in DOM order.
        // https://github.com/medialize/ally.js/issues/5
        elements = sortArea(elements, _context);
    }
    elements = sortTabindex(elements);
    return elements;
}
function queryTabsequence() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!supports$8) {
        supports$8 = _supports();
    }
    var _context = nodeArray(context)[0] || document.documentElement;
    var elements = queryTabbable({
        context: _context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    });
    if (document.body.createShadowRoot && platform.is.BLINK) {
        // sort tabindex localized to shadow dom
        // see https://github.com/medialize/ally.js/issues/6
        elements = sortShadowed(elements, _context, sortElements);
    } else {
        elements = sortElements(elements, _context);
    }
    if (includeContext) {
        // if we include the context itself, it has to be the first
        // element of the sequence
        elements = moveContextToBeginning(elements, _context);
    }
    return elements;
}
// codes mostly cloned from https://github.com/keithamus/jwerty/blob/master/jwerty.js
// deliberately not exposing characters like <,.-#* because they vary *wildly*
// across keyboard layouts and may cause various problems
// (e.g. "*" is "Shift +" on a German Mac keyboard)
// (e.g. "@" is "Alt L" on a German Mac keyboard)
var keycode = {
    // Element Focus
    tab: 9,
    // Navigation
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pageUp: 33,
    'page-up': 33,
    pageDown: 34,
    'page-down': 34,
    end: 35,
    home: 36,
    // Action
    enter: 13,
    escape: 27,
    space: 32,
    // Modifier
    shift: 16,
    capsLock: 20,
    'caps-lock': 20,
    ctrl: 17,
    alt: 18,
    meta: 91,
    // in firefox: 224
    // on mac (chrome): meta-left=91, meta-right=93
    // on win (IE11): meta-left=91, meta-right=92
    pause: 19,
    // Content Manipulation
    insert: 45,
    delete: 46,
    backspace: 8,
    // the same logical key may be identified through different keyCodes
    _alias: {
        91: [
            92,
            93,
            224
        ]
    }
};
// Function keys (112 - 137)
// NOTE: not every keyboard knows F13+
for(var n = 1; n < 26; n++){
    keycode['f' + n] = n + 111;
}
// Number keys (48-57, numpad 96-105)
// NOTE: not every keyboard knows num-0+
for(var _n = 0; _n < 10; _n++){
    var code = _n + 48;
    var numCode = _n + 96;
    keycode[_n] = code;
    keycode['num-' + _n] = numCode;
    keycode._alias[code] = [
        numCode
    ];
}
// Latin characters (65 - 90)
for(var _n2 = 0; _n2 < 26; _n2++){
    var _code = _n2 + 65;
    var name$1 = String.fromCharCode(_code).toLowerCase();
    keycode[name$1] = _code;
}
var modifier = {
    alt: 'altKey',
    ctrl: 'ctrlKey',
    meta: 'metaKey',
    shift: 'shiftKey'
};
var modifierSequence = Object.keys(modifier).map(function(name) {
    return modifier[name];
});
function createExpectedModifiers(ignoreModifiers) {
    var value = ignoreModifiers ? null : false;
    return {
        altKey: value,
        ctrlKey: value,
        metaKey: value,
        shiftKey: value
    };
}
function resolveModifiers(modifiers) {
    var ignoreModifiers = modifiers.indexOf('*') !== -1;
    var expected = createExpectedModifiers(ignoreModifiers);
    modifiers.forEach(function(token) {
        if (token === '*') {
            // we've already covered the all-in operator
            return;
        }
        // we want the modifier pressed
        var value = true;
        var operator = token.slice(0, 1);
        if (operator === '?') {
            // we don't care if the modifier is pressed
            value = null;
        } else if (operator === '!') {
            // we do not want the modifier pressed
            value = false;
        }
        if (value !== true) {
            // compensate for the modifier's operator
            token = token.slice(1);
        }
        var propertyName = modifier[token];
        if (!propertyName) {
            throw Object.defineProperty(new TypeError('Unknown modifier "' + token + '"'), "__NEXT_ERROR_CODE", {
                value: "E530",
                enumerable: false,
                configurable: true
            });
        }
        expected[propertyName] = value;
    });
    return expected;
}
function resolveKey(key) {
    var code = keycode[key] || parseInt(key, 10);
    if (!code || typeof code !== 'number' || isNaN(code)) {
        throw Object.defineProperty(new TypeError('Unknown key "' + key + '"'), "__NEXT_ERROR_CODE", {
            value: "E536",
            enumerable: false,
            configurable: true
        });
    }
    return [
        code
    ].concat(keycode._alias[code] || []);
}
function matchModifiers(expected, event) {
    // returns true on match
    return !modifierSequence.some(function(prop) {
        // returns true on mismatch
        return typeof expected[prop] === 'boolean' && Boolean(event[prop]) !== expected[prop];
    });
}
function keyBinding(text) {
    return text.split(/\s+/).map(function(_text) {
        var tokens = _text.split('+');
        var _modifiers = resolveModifiers(tokens.slice(0, -1));
        var _keyCodes = resolveKey(tokens.slice(-1));
        return {
            keyCodes: _keyCodes,
            modifiers: _modifiers,
            matchModifiers: matchModifiers.bind(null, _modifiers)
        };
    });
}
// Node.compareDocumentPosition is available since IE9
// see https://developer.mozilla.org/docs/Web/API/Node.compareDocumentPosition
// callback returns true when element is contained by parent or is the parent suited for use with Array.some()
/*
  USAGE:
    var isChildOf = getParentComparator({parent: someNode});
    listOfElements.some(isChildOf)
*/ function getParentComparator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, parent = _ref.parent, element = _ref.element, includeSelf = _ref.includeSelf;
    if (parent) {
        return function isChildOf(node) {
            return Boolean(includeSelf && node === parent || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    } else if (element) {
        return function isParentOf(node) {
            return Boolean(includeSelf && element === node || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    }
    throw Object.defineProperty(new TypeError('util/compare-position#getParentComparator required either options.parent or options.element'), "__NEXT_ERROR_CODE", {
        value: "E578",
        enumerable: false,
        configurable: true
    });
}
// Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933
function whenKey() {
    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var bindings = {};
    var context = nodeArray(map.context)[0] || document.documentElement;
    delete map.context;
    var filter = nodeArray(map.filter);
    delete map.filter;
    var mapKeys = Object.keys(map);
    if (!mapKeys.length) {
        throw Object.defineProperty(new TypeError('when/key requires at least one option key'), "__NEXT_ERROR_CODE", {
            value: "E566",
            enumerable: false,
            configurable: true
        });
    }
    var registerBinding = function registerBinding(event) {
        event.keyCodes.forEach(function(code) {
            if (!bindings[code]) {
                bindings[code] = [];
            }
            bindings[code].push(event);
        });
    };
    mapKeys.forEach(function(text) {
        if (typeof map[text] !== 'function') {
            throw Object.defineProperty(new TypeError('when/key requires option["' + text + '"] to be a function'), "__NEXT_ERROR_CODE", {
                value: "E595",
                enumerable: false,
                configurable: true
            });
        }
        var addCallback = function addCallback(event) {
            event.callback = map[text];
            return event;
        };
        keyBinding(text).map(addCallback).forEach(registerBinding);
    });
    var handleKeyDown = function handleKeyDown(event) {
        if (event.defaultPrevented) {
            return;
        }
        if (filter.length) {
            // ignore elements within the exempted sub-trees
            var isParentOfElement = getParentComparator({
                element: event.target,
                includeSelf: true
            });
            if (filter.some(isParentOfElement)) {
                return;
            }
        }
        var key = event.keyCode || event.which;
        if (!bindings[key]) {
            return;
        }
        bindings[key].forEach(function(_event) {
            if (!_event.matchModifiers(event)) {
                return;
            }
            _event.callback.call(context, event, disengage);
        });
    };
    context.addEventListener('keydown', handleKeyDown, false);
    var disengage = function disengage() {
        context.removeEventListener('keydown', handleKeyDown, false);
    };
    return {
        disengage: disengage
    };
}
function _default(param) {
    let { context } = param === void 0 ? {} : param;
    if (!context) {
        context = document.documentElement;
    }
    // Make sure the supports tests are run before intercepting the Tab key,
    // or IE10 and IE11 will fail to process the first Tab key event. Not
    // limiting this warm-up to IE because it may be a problem elsewhere, too.
    queryTabsequence();
    return whenKey({
        // Safari on OSX may require ALT+TAB to reach links,
        // see https://github.com/medialize/ally.js/issues/146
        '?alt+?shift+tab': function altShiftTab(event) {
            // we're completely taking over the Tab key handling
            event.preventDefault();
            var sequence = queryTabsequence({
                context: context
            });
            var backward = event.shiftKey;
            var first = sequence[0];
            var last = sequence[sequence.length - 1];
            // wrap around first to last, last to first
            var source = backward ? first : last;
            var target = backward ? last : first;
            if (isActiveElement(source)) {
                target.focus();
                return;
            }
            // find current position in tabsequence
            var currentIndex = void 0;
            var found = sequence.some(function(element, index) {
                if (!isActiveElement(element)) {
                    return false;
                }
                currentIndex = index;
                return true;
            });
            if (!found) {
                // redirect to first as we're not in our tabsequence
                first.focus();
                return;
            }
            // shift focus to previous/next element in the sequence
            var offset = backward ? -1 : 1;
            sequence[currentIndex + offset].focus();
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=maintain--tab-focus.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/body-locker.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    lock: null,
    unlock: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    lock: function() {
        return lock;
    },
    unlock: function() {
        return unlock;
    }
});
let previousBodyPaddingRight;
let previousBodyOverflowSetting;
let activeLocks = 0;
function lock() {
    setTimeout(()=>{
        if (activeLocks++ > 0) {
            return;
        }
        const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarGap > 0) {
            previousBodyPaddingRight = document.body.style.paddingRight;
            document.body.style.paddingRight = "" + scrollBarGap + "px";
        }
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    });
}
function unlock() {
    setTimeout(()=>{
        if (activeLocks === 0 || --activeLocks !== 0) {
            return;
        }
        if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;
            previousBodyPaddingRight = undefined;
        }
        if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;
            previousBodyOverflowSetting = undefined;
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=body-locker.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/overlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return Overlay;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _maintaintabfocus = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/maintain--tab-focus.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _bodylocker = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/body-locker.js [client] (ecmascript)");
const Overlay = function Overlay(param) {
    let { className, children, fixed, ...props } = param;
    _react.useEffect({
        "Overlay.useEffect": ()=>{
            (0, _bodylocker.lock)();
            return ({
                "Overlay.useEffect": ()=>{
                    (0, _bodylocker.unlock)();
                }
            })["Overlay.useEffect"];
        }
    }["Overlay.useEffect"], []);
    const [overlay, setOverlay] = _react.useState(null);
    const onOverlay = _react.useCallback({
        "Overlay.useCallback[onOverlay]": (el)=>{
            setOverlay(el);
        }
    }["Overlay.useCallback[onOverlay]"], []);
    _react.useEffect({
        "Overlay.useEffect": ()=>{
            if (overlay == null) {
                return;
            }
            const handle2 = (0, _maintaintabfocus.default)({
                context: overlay
            });
            return ({
                "Overlay.useEffect": ()=>{
                    handle2.disengage();
                }
            })["Overlay.useEffect"];
        }
    }["Overlay.useEffect"], [
        overlay
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-dialog-overlay": true,
        className: className,
        ref: onOverlay,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "data-nextjs-dialog-backdrop": true,
                "data-nextjs-dialog-backdrop-fixed": fixed ? true : undefined
            }),
            children
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=overlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/overlay/overlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorOverlayOverlay: null,
    OVERLAY_STYLES: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorOverlayOverlay: function() {
        return ErrorOverlayOverlay;
    },
    OVERLAY_STYLES: function() {
        return OVERLAY_STYLES;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _overlay = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/overlay.js [client] (ecmascript)");
function ErrorOverlayOverlay(param) {
    let { children, ...props } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_overlay.Overlay, {
        ...props,
        children: children
    });
}
const OVERLAY_STYLES = "\n  [data-nextjs-dialog-overlay] {\n    padding: initial;\n    top: 10vh;\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=overlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-bottom-stack/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorOverlayBottomStack: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorOverlayBottomStack: function() {
        return ErrorOverlayBottomStack;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function ErrorOverlayBottomStack(param) {
    let { errorCount, activeIdx } = param;
    // If there are more than 2 errors to navigate, the stack count should remain at 2.
    const stackCount = Math.min(errorCount - activeIdx - 1, 2);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "aria-hidden": true,
        className: "error-overlay-bottom-stack",
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: "error-overlay-bottom-stack-stack",
            "data-stack-count": stackCount,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    className: "error-overlay-bottom-stack-layer error-overlay-bottom-stack-layer-1",
                    children: "1"
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    className: "error-overlay-bottom-stack-layer error-overlay-bottom-stack-layer-2",
                    children: "2"
                })
            ]
        })
    });
}
const styles = "\n  .error-overlay-bottom-stack-layer {\n    width: 100%;\n    height: var(--stack-layer-height);\n    position: relative;\n    border: 1px solid var(--color-gray-400);\n    border-radius: var(--rounded-xl);\n    background: var(--color-background-200);\n    transition:\n      translate 350ms var(--timing-swift),\n      box-shadow 350ms var(--timing-swift);\n  }\n\n  .error-overlay-bottom-stack-layer-1 {\n    width: calc(100% - var(--size-24));\n  }\n\n  .error-overlay-bottom-stack-layer-2 {\n    width: calc(100% - var(--size-48));\n    z-index: -1;\n  }\n\n  .error-overlay-bottom-stack {\n    width: 100%;\n    position: absolute;\n    bottom: -1px;\n    height: 0;\n    overflow: visible;\n  }\n\n  .error-overlay-bottom-stack-stack {\n    --stack-layer-height: 44px;\n    --stack-layer-height-half: calc(var(--stack-layer-height) / 2);\n    --stack-layer-trim: 13px;\n    --shadow: 0px 0.925px 0.925px 0px rgba(0, 0, 0, 0.02),\n      0px 3.7px 7.4px -3.7px rgba(0, 0, 0, 0.04),\n      0px 14.8px 22.2px -7.4px rgba(0, 0, 0, 0.06);\n\n    display: grid;\n    place-items: center center;\n    width: 100%;\n    position: fixed;\n    overflow: hidden;\n    z-index: -1;\n    max-width: var(--next-dialog-max-width);\n\n    .error-overlay-bottom-stack-layer {\n      grid-area: 1 / 1;\n      /* Hide */\n      translate: 0 calc(var(--stack-layer-height) * -1);\n    }\n\n    &[data-stack-count='1'],\n    &[data-stack-count='2'] {\n      .error-overlay-bottom-stack-layer-1 {\n        translate: 0\n          calc(var(--stack-layer-height-half) * -1 - var(--stack-layer-trim));\n      }\n    }\n\n    &[data-stack-count='2'] {\n      .error-overlay-bottom-stack-layer-2 {\n        translate: 0 calc(var(--stack-layer-trim) * -1 * 2);\n      }\n    }\n\n    /* Only the bottom stack should have the shadow */\n    &[data-stack-count='1'] .error-overlay-bottom-stack-layer-1 {\n      box-shadow: var(--shadow);\n    }\n\n    &[data-stack-count='2'] {\n      .error-overlay-bottom-stack-layer-2 {\n        box-shadow: var(--shadow);\n      }\n    }\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/environment-name-label/environment-name-label.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ENVIRONMENT_NAME_LABEL_STYLES: null,
    EnvironmentNameLabel: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ENVIRONMENT_NAME_LABEL_STYLES: function() {
        return ENVIRONMENT_NAME_LABEL_STYLES;
    },
    EnvironmentNameLabel: function() {
        return EnvironmentNameLabel;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function EnvironmentNameLabel(param) {
    let { environmentName } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
        "data-nextjs-environment-name-label": true,
        children: environmentName
    });
}
const ENVIRONMENT_NAME_LABEL_STYLES = "\n  [data-nextjs-environment-name-label] {\n    padding: 2px 6px;\n    margin: 0;\n    border-radius: var(--rounded-md-2);\n    background: var(--color-gray-100);\n    font-weight: 600;\n    font-size: var(--size-12);\n    color: var(--color-gray-900);\n    font-family: var(--font-stack-monospace);\n    line-height: var(--size-20);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=environment-name-label.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-layout/error-overlay-layout.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorOverlayLayout: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorOverlayLayout: function() {
        return ErrorOverlayLayout;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _dialog = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/index.js [client] (ecmascript)");
const _erroroverlaytoolbar = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-toolbar/error-overlay-toolbar.js [client] (ecmascript)");
const _erroroverlayfooter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-footer/error-overlay-footer.js [client] (ecmascript)");
const _errormessage = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-message/error-message.js [client] (ecmascript)");
const _errortypelabel = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-type-label/error-type-label.js [client] (ecmascript)");
const _erroroverlaynav = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-nav/error-overlay-nav.js [client] (ecmascript)");
const _dialog1 = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dialog/dialog.js [client] (ecmascript)");
const _header = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dialog/header.js [client] (ecmascript)");
const _body = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dialog/body.js [client] (ecmascript)");
const _callstack = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/call-stack/call-stack.js [client] (ecmascript)");
const _overlay = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/overlay/overlay.js [client] (ecmascript)");
const _erroroverlaybottomstack = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-bottom-stack/index.js [client] (ecmascript)");
const _environmentnamelabel = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/environment-name-label/environment-name-label.js [client] (ecmascript)");
function ErrorOverlayLayout(param) {
    let { errorMessage, errorType, children, errorCode, error, debugInfo, isBuildError, onClose, versionInfo, runtimeErrors, activeIdx, setActiveIndex, footerMessage, isTurbopack, dialogResizerRef, // If it's not being passed, we should just render the component as it is being
    // used without the context of a parent component that controls its state (e.g. Storybook).
    rendered = true, transitionDurationMs } = param;
    const animationProps = {
        'data-rendered': rendered,
        style: {
            '--transition-duration': "" + transitionDurationMs + "ms"
        }
    };
    const hasFooter = Boolean(footerMessage || errorCode);
    var _runtimeErrors_length;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_overlay.ErrorOverlayOverlay, {
        fixed: isBuildError,
        ...animationProps,
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            "data-nextjs-dialog-root": true,
            ...animationProps,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsxs)(_dialog1.ErrorOverlayDialog, {
                    onClose: onClose,
                    dialogResizerRef: dialogResizerRef,
                    "data-has-footer": hasFooter,
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)(_dialog.DialogContent, {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsxs)(_header.ErrorOverlayDialogHeader, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                            className: "nextjs__container_errors__error_title",
                                            // allow assertion in tests before error rating is implemented
                                            "data-nextjs-error-code": errorCode,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                                                    "data-nextjs-error-label-group": true,
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxruntime.jsx)(_errortypelabel.ErrorTypeLabel, {
                                                            errorType: errorType
                                                        }),
                                                        error.environmentName && /*#__PURE__*/ (0, _jsxruntime.jsx)(_environmentnamelabel.EnvironmentNameLabel, {
                                                            environmentName: error.environmentName
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_erroroverlaytoolbar.ErrorOverlayToolbar, {
                                                    error: error,
                                                    debugInfo: debugInfo
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)(_errormessage.ErrorMessage, {
                                            errorMessage: errorMessage
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_body.ErrorOverlayDialogBody, {
                                    children: children
                                })
                            ]
                        }),
                        hasFooter && /*#__PURE__*/ (0, _jsxruntime.jsx)(_dialog.DialogFooter, {
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_erroroverlayfooter.ErrorOverlayFooter, {
                                footerMessage: footerMessage,
                                errorCode: errorCode
                            })
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(_erroroverlaybottomstack.ErrorOverlayBottomStack, {
                            errorCount: (_runtimeErrors_length = runtimeErrors == null ? void 0 : runtimeErrors.length) != null ? _runtimeErrors_length : 0,
                            activeIdx: activeIdx != null ? activeIdx : 0
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_erroroverlaynav.ErrorOverlayNav, {
                    runtimeErrors: runtimeErrors,
                    activeIdx: activeIdx,
                    setActiveIndex: setActiveIndex,
                    versionInfo: versionInfo,
                    isTurbopack: isTurbopack
                })
            ]
        })
    });
}
const styles = "\n  " + _overlay.OVERLAY_STYLES + "\n  " + _dialog1.DIALOG_STYLES + "\n  " + _header.DIALOG_HEADER_STYLES + "\n  " + _body.DIALOG_BODY_STYLES + "\n\n  " + _erroroverlaynav.styles + "\n  " + _errortypelabel.styles + "\n  " + _errormessage.styles + "\n  " + _erroroverlaytoolbar.styles + "\n  " + _callstack.CALL_STACK_STYLES + "\n\n  [data-nextjs-error-label-group] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-overlay-layout.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const styles = "\n  [data-nextjs-dialog-overlay] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 9000;\n\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 10vh 15px 0;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      padding: 15px 15px 0;\n    }\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: var(--color-backdrop);\n    backdrop-filter: blur(10px);\n    pointer-events: all;\n    z-index: -1;\n  }\n\n  [data-nextjs-dialog-backdrop-fixed] {\n    cursor: not-allowed;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/terminal/editor-link.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    EDITOR_LINK_STYLES: null,
    EditorLink: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EDITOR_LINK_STYLES: function() {
        return EDITOR_LINK_STYLES;
    },
    EditorLink: function() {
        return EditorLink;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _useopenineditor = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/use-open-in-editor.js [client] (ecmascript)");
function EditorLink(param) {
    let { file, location } = param;
    var _location_line, _location_column;
    const open = (0, _useopenineditor.useOpenInEditor)({
        file,
        lineNumber: (_location_line = location == null ? void 0 : location.line) != null ? _location_line : 1,
        column: (_location_column = location == null ? void 0 : location.column) != null ? _location_column : 0
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-with-open-in-editor-link": true,
        "data-with-open-in-editor-link-import-trace": true,
        tabIndex: 10,
        role: 'link',
        onClick: open,
        title: 'Click to open in your editor',
        children: [
            file,
            location ? ":" + location.line + ":" + location.column : null,
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("polyline", {
                        points: "15 3 21 3 21 9"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                        x1: "10",
                        y1: "14",
                        x2: "21",
                        y2: "3"
                    })
                ]
            })
        ]
    });
}
const EDITOR_LINK_STYLES = "\n  [data-with-open-in-editor-link] svg {\n    width: auto;\n    height: var(--size-14);\n    margin-left: 8px;\n  }\n  [data-with-open-in-editor-link] {\n    cursor: pointer;\n  }\n  [data-with-open-in-editor-link]:hover {\n    text-decoration: underline dotted;\n  }\n  [data-with-open-in-editor-link-import-trace] {\n    margin-left: 16px;\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=editor-link.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/terminal/terminal.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    TERMINAL_STYLES: null,
    Terminal: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    TERMINAL_STYLES: function() {
        return TERMINAL_STYLES;
    },
    Terminal: function() {
        return Terminal;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _anser = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/anser/index.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _hotlinkedtext = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/hot-linked-text/index.js [client] (ecmascript)");
const _editorlink = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/terminal/editor-link.js [client] (ecmascript)");
const _external = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/external.js [client] (ecmascript)");
const _stackframe = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/stack-frame.js [client] (ecmascript)");
const _useopenineditor = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/use-open-in-editor.js [client] (ecmascript)");
const _file = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/file.js [client] (ecmascript)");
function getFile(lines) {
    const contentFileName = lines.shift();
    if (!contentFileName) return null;
    const [fileName, line, column] = contentFileName.split(':', 3);
    const parsedLine = Number(line);
    const parsedColumn = Number(column);
    const hasLocation = !Number.isNaN(parsedLine) && !Number.isNaN(parsedColumn);
    return {
        fileName: hasLocation ? fileName : contentFileName,
        location: hasLocation ? {
            line: parsedLine,
            column: parsedColumn
        } : undefined
    };
}
function getImportTraceFiles(lines) {
    if (lines.some((line)=>/ReactServerComponentsError:/.test(line)) || lines.some((line)=>/Import trace for requested module:/.test(line))) {
        // Grab the lines at the end containing the files
        const files = [];
        while(/.+\..+/.test(lines[lines.length - 1]) && !lines[lines.length - 1].includes(':')){
            const file = lines.pop().trim();
            files.unshift(file);
        }
        return files;
    }
    return [];
}
function getEditorLinks(content) {
    const lines = content.split('\n');
    const file = getFile(lines);
    const importTraceFiles = getImportTraceFiles(lines);
    return {
        file,
        source: lines.join('\n'),
        importTraceFiles
    };
}
const Terminal = function Terminal(param) {
    let { content } = param;
    var _file_location, _file_location1, _file_location2, _file_location3, _stackFrame_file;
    const { file, source, importTraceFiles } = _react.useMemo({
        "Terminal.useMemo": ()=>getEditorLinks(content)
    }["Terminal.useMemo"], [
        content
    ]);
    const decoded = _react.useMemo({
        "Terminal.useMemo[decoded]": ()=>{
            return _anser.default.ansiToJson(source, {
                json: true,
                use_classes: true,
                remove_empty: true
            });
        }
    }["Terminal.useMemo[decoded]"], [
        source
    ]);
    var _file_location_line, _file_location_column;
    const open = (0, _useopenineditor.useOpenInEditor)({
        file: file == null ? void 0 : file.fileName,
        lineNumber: (_file_location_line = file == null ? void 0 : (_file_location = file.location) == null ? void 0 : _file_location.line) != null ? _file_location_line : 1,
        column: (_file_location_column = file == null ? void 0 : (_file_location1 = file.location) == null ? void 0 : _file_location1.column) != null ? _file_location_column : 0
    });
    var _file_fileName, _file_location_line1, _file_location_column1;
    const stackFrame = {
        file: (_file_fileName = file == null ? void 0 : file.fileName) != null ? _file_fileName : null,
        methodName: '',
        arguments: [],
        lineNumber: (_file_location_line1 = file == null ? void 0 : (_file_location2 = file.location) == null ? void 0 : _file_location2.line) != null ? _file_location_line1 : null,
        column: (_file_location_column1 = file == null ? void 0 : (_file_location3 = file.location) == null ? void 0 : _file_location3.column) != null ? _file_location_column1 : null
    };
    const fileExtension = stackFrame == null ? void 0 : (_stackFrame_file = stackFrame.file) == null ? void 0 : _stackFrame_file.split('.').pop();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-codeframe": true,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "code-frame-header",
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "code-frame-link",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            className: "code-frame-icon",
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_file.FileIcon, {
                                lang: fileExtension
                            })
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-text": true,
                            children: (0, _stackframe.getFrameSource)(stackFrame)
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                            "aria-label": "Open in editor",
                            "data-with-open-in-editor-link-source-file": true,
                            onClick: open,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                className: "code-frame-icon",
                                "data-icon": "right",
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_external.ExternalIcon, {
                                    width: 16,
                                    height: 16
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("pre", {
                className: "code-frame-pre",
                children: [
                    decoded.map((entry, index)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            style: {
                                color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                                ...entry.decoration === 'bold' ? // above 600, hence a temporary fix is to use 500 for bold.
                                {
                                    fontWeight: 500
                                } : entry.decoration === 'italic' ? {
                                    fontStyle: 'italic'
                                } : undefined
                            },
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                                text: entry.content
                            })
                        }, "terminal-entry-" + index)),
                    importTraceFiles.map((importTraceFile)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_editorlink.EditorLink, {
                            isSourceFile: false,
                            file: importTraceFile
                        }, importTraceFile))
                ]
            })
        ]
    });
};
const TERMINAL_STYLES = "\n  [data-nextjs-terminal]::selection,\n  [data-nextjs-terminal] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n\n  [data-nextjs-terminal] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-terminal] > div > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    margin: 0;\n  }\n  [data-nextjs-terminal] > div > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-terminal] div > pre {\n    overflow: hidden;\n    display: inline-block;\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=terminal.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/toast/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const styles = "\n  .nextjs-toast {\n    position: fixed;\n    bottom: 16px;\n    left: 16px;\n    max-width: 420px;\n    z-index: 9000;\n    box-shadow: 0px 16px 32px\n      rgba(0, 0, 0, 0.25);\n  }\n\n  @media (max-width: 440px) {\n    .nextjs-toast {\n      max-width: 90vw;\n      left: 5vw;\n    }\n  }\n\n  .nextjs-toast-errors-parent {\n    padding: 16px;\n    border-radius: var(--rounded-4xl);\n    font-weight: 500;\n    color: var(--color-ansi-bright-white);\n    background-color: var(--color-ansi-red);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/toast/toast.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Toast", {
    enumerable: true,
    get: function() {
        return Toast;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _cx = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/cx.js [client] (ecmascript)");
const Toast = function Toast(param) {
    let { onClick, children, className, ...props } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        ...props,
        onClick: (e)=>{
            if (!e.target.closest('a')) {
                e.preventDefault();
            }
            return onClick == null ? void 0 : onClick();
        },
        className: (0, _cx.cx)('nextjs-toast', className),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            "data-nextjs-toast-wrapper": true,
            children: children
        })
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=toast.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/toast/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Toast: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Toast: function() {
        return _toast.Toast;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _styles = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/toast/styles.js [client] (ecmascript)");
const _toast = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/toast/toast.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/terminal/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return _terminal.Terminal;
    }
});
const _terminal = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/terminal/terminal.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/build-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BuildError: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BuildError: function() {
        return BuildError;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)"));
const _terminal = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/terminal/index.js [client] (ecmascript)");
const _erroroverlaylayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-layout/error-overlay-layout.js [client] (ecmascript)");
const getErrorTextFromBuildErrorMessage = (multiLineMessage)=>{
    const lines = multiLineMessage.split('\n');
    // The multi-line build error message looks like:
    // <file path>:<line number>:<column number>
    // <error message>
    // <error code frame of compiler or bundler>
    // e.g.
    // ./path/to/file.js:1:1
    // SyntaxError: ...
    // > 1 | con st foo =
    // ...
    return (0, _stripansi.default)(lines[1] || '');
};
const BuildError = function BuildError(param) {
    let { message, ...props } = param;
    const noop = (0, _react.useCallback)(()=>{}, []);
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    const formattedMessage = (0, _react.useMemo)(()=>getErrorTextFromBuildErrorMessage(message) || 'Failed to compile', [
        message
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_erroroverlaylayout.ErrorOverlayLayout, {
        errorType: "Build Error",
        errorMessage: formattedMessage,
        onClose: noop,
        error: error,
        footerMessage: "This error occurred during the build process and can only be dismissed by fixing the error.",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_terminal.Terminal, {
            content: message
        })
    });
};
const styles = "";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=build-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return _overlay.Overlay;
    }
});
const _overlay = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/overlay.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/collapse-icon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CollapseIcon", {
    enumerable: true,
    get: function() {
        return CollapseIcon;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function CollapseIcon(param) {
    let { collapsed } = param === void 0 ? {} : param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        "data-nextjs-call-stack-chevron-icon": true,
        "data-collapsed": collapsed,
        width: "16",
        height: "16",
        fill: "none",
        ...typeof collapsed === 'boolean' ? {
            style: {
                transform: collapsed ? undefined : 'rotate(90deg)'
            }
        } : {},
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            style: {
                fill: 'var(--color-font)'
            },
            fillRule: "evenodd",
            d: "m6.75 3.94.53.53 2.824 2.823a1 1 0 0 1 0 1.414L7.28 11.53l-.53.53L5.69 11l.53-.53L8.69 8 6.22 5.53 5.69 5l1.06-1.06Z",
            clipRule: "evenodd"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=collapse-icon.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/hydration-diff/diff-view.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PseudoHtmlDiff", {
    enumerable: true,
    get: function() {
        return PseudoHtmlDiff;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _collapseicon = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/collapse-icon.js [client] (ecmascript)");
function PseudoHtmlDiff(param) {
    let { firstContent, secondContent, hydrationMismatchType, reactOutputComponentDiff, ...props } = param;
    const [isDiffCollapsed, toggleCollapseHtml] = (0, _react.useState)(true);
    const htmlComponents = (0, _react.useMemo)(()=>{
        const componentStacks = [];
        const reactComponentDiffLines = reactOutputComponentDiff.split('\n');
        reactComponentDiffLines.forEach((line, index)=>{
            const isDiffLine = line[0] === '+' || line[0] === '-';
            const isHighlightedLine = line[0] === '>';
            const hasSign = isDiffLine || isHighlightedLine;
            const sign = hasSign ? line[0] : '';
            const signIndex = hasSign ? line.indexOf(sign) : -1;
            const [prefix, suffix] = hasSign ? [
                line.slice(0, signIndex),
                line.slice(signIndex + 1)
            ] : [
                line,
                ''
            ];
            if (isDiffLine) {
                componentStacks.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    "data-nextjs-container-errors-pseudo-html-line": true,
                    "data-nextjs-container-errors-pseudo-html--diff": sign === '+' ? 'add' : 'remove',
                    children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                        children: [
                            prefix,
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                "data-nextjs-container-errors-pseudo-html-line-sign": true,
                                children: sign
                            }),
                            suffix,
                            '\n'
                        ]
                    })
                }, 'comp-diff' + index));
            } else {
                // In general, if it's not collapsed, show the whole diff
                componentStacks.push(/*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                    "data-nextjs-container-errors-pseudo-html-line": true,
                    ...isHighlightedLine ? {
                        'data-nextjs-container-errors-pseudo-html--diff': 'error'
                    } : undefined,
                    children: [
                        prefix,
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html-line-sign": true,
                            children: sign
                        }),
                        suffix,
                        '\n'
                    ]
                }, 'comp-diff' + index));
            }
        });
        return componentStacks;
    }, [
        reactOutputComponentDiff
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-container-errors-pseudo-html": true,
        "data-nextjs-container-errors-pseudo-html-collapse": isDiffCollapsed,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                tabIndex: 10,
                "data-nextjs-container-errors-pseudo-html-collapse-button": true,
                onClick: ()=>toggleCollapseHtml(!isDiffCollapsed),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_collapseicon.CollapseIcon, {
                    collapsed: isDiffCollapsed
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("pre", {
                ...props,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                    children: htmlComponents
                })
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=diff-view.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/runtime-error/component-stack-pseudo-html.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PSEUDO_HTML_DIFF_STYLES: null,
    PseudoHtmlDiff: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PSEUDO_HTML_DIFF_STYLES: function() {
        return PSEUDO_HTML_DIFF_STYLES;
    },
    PseudoHtmlDiff: function() {
        return _diffview.PseudoHtmlDiff;
    }
});
const _diffview = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/hydration-diff/diff-view.js [client] (ecmascript)");
const PSEUDO_HTML_DIFF_STYLES = "\n  [data-nextjs-container-errors-pseudo-html] {\n    padding: 8px 0;\n    margin: 8px 0;\n    border: 1px solid var(--color-gray-400);\n    background: var(--color-background-200);\n    color: var(--color-syntax-constant);\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-12);\n    line-height: 1.33em; /* 16px in 12px font size */\n    border-radius: var(--rounded-md-2);\n  }\n  [data-nextjs-container-errors-pseudo-html-line] {\n    display: inline-block;\n    width: 100%;\n    padding-left: 40px;\n    line-height: calc(5 / 3);\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='error'] {\n    background: var(--color-amber-100);\n    font-weight: bold;\n  }\n  [data-nextjs-container-errors-pseudo-html-collapse-button] {\n    all: unset;\n    margin-left: 12px;\n    &:focus {\n      outline: none;\n    }\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='add'] {\n    background: var(--color-green-300);\n  }\n  [data-nextjs-container-errors-pseudo-html-line-sign] {\n    margin-left: calc(24px * -1);\n    margin-right: 24px;\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='add']\n    [data-nextjs-container-errors-pseudo-html-line-sign] {\n    color: var(--color-green-900);\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='remove'] {\n    background: var(--color-red-300);\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='remove']\n    [data-nextjs-container-errors-pseudo-html-line-sign] {\n    color: var(--color-red-900);\n    margin-left: calc(24px * -1);\n    margin-right: 24px;\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='error']\n    [data-nextjs-container-errors-pseudo-html-line-sign] {\n    color: var(--color-amber-900);\n  }\n  \n  [data-nextjs-container-errors-pseudo-html--hint] {\n    display: inline-block;\n    font-size: 0;\n    height: 0;\n  }\n  [data-nextjs-container-errors-pseudo-html--tag-adjacent='false'] {\n    color: var(--color-accents-1);\n  }\n  .nextjs__container_errors__component-stack {\n    margin: 0;\n  }\n  [data-nextjs-container-errors-pseudo-html-collapse='true']\n    .nextjs__container_errors__component-stack\n    code {\n    max-height: 120px;\n    mask-image: linear-gradient(to bottom,rgba(0,0,0,0) 0%,black 10%);\n    padding-bottom: 40px;\n  }\n  .nextjs__container_errors__component-stack code {\n    display: block;\n    width: 100%;\n    white-space: pre-wrap;\n    scroll-snap-type: y mandatory;\n    overflow-y: hidden;\n  }\n  [data-nextjs-container-errors-pseudo-html--diff] {\n    scroll-snap-align: center;\n  }\n  .error-overlay-hydration-error-diff-plus-icon {\n    color: var(--color-green-900);\n  }\n  .error-overlay-hydration-error-diff-minus-icon {\n    color: var(--color-red-900);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=component-stack-pseudo-html.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/runtime-error/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RuntimeError: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RuntimeError: function() {
        return RuntimeError;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _codeframe = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/code-frame/code-frame.js [client] (ecmascript)");
const _callstack = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/call-stack/call-stack.js [client] (ecmascript)");
const _componentstackpseudohtml = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/runtime-error/component-stack-pseudo-html.js [client] (ecmascript)");
const _geterrorbytype = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/get-error-by-type.js [client] (ecmascript)");
function RuntimeError(param) {
    let { error, dialogResizerRef } = param;
    const frames = (0, _geterrorbytype.useFrames)(error);
    const firstFrame = (0, _react.useMemo)(()=>{
        const firstFirstPartyFrameIndex = frames.findIndex((entry)=>!entry.ignored && Boolean(entry.originalCodeFrame) && Boolean(entry.originalStackFrame));
        var _frames_firstFirstPartyFrameIndex;
        return (_frames_firstFirstPartyFrameIndex = frames[firstFirstPartyFrameIndex]) != null ? _frames_firstFirstPartyFrameIndex : null;
    }, [
        frames
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            firstFrame && /*#__PURE__*/ (0, _jsxruntime.jsx)(_codeframe.CodeFrame, {
                stackFrame: firstFrame.originalStackFrame,
                codeFrame: firstFrame.originalCodeFrame
            }),
            frames.length > 0 && /*#__PURE__*/ (0, _jsxruntime.jsx)(_callstack.CallStack, {
                dialogResizerRef: dialogResizerRef,
                frames: frames
            })
        ]
    });
}
const styles = "\n  " + _componentstackpseudohtml.PSEUDO_HTML_DIFF_STYLES + "\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/console-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// To distinguish from React error.digest, we use a different symbol here to determine if the error is from console.error or unhandled promise rejection.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createUnhandledError: null,
    getUnhandledErrorType: null,
    isUnhandledConsoleOrRejection: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createUnhandledError: function() {
        return createUnhandledError;
    },
    getUnhandledErrorType: function() {
        return getUnhandledErrorType;
    },
    isUnhandledConsoleOrRejection: function() {
        return isUnhandledConsoleOrRejection;
    }
});
const digestSym = Symbol.for('next.console.error.digest');
const consoleTypeSym = Symbol.for('next.console.error.type');
function createUnhandledError(message, environmentName) {
    const error = typeof message === 'string' ? Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    }) : message;
    error[digestSym] = 'NEXT_UNHANDLED_ERROR';
    error[consoleTypeSym] = typeof message === 'string' ? 'string' : 'error';
    if (environmentName && !error.environmentName) {
        error.environmentName = environmentName;
    }
    return error;
}
const isUnhandledConsoleOrRejection = (error)=>{
    return error && error[digestSym] === 'NEXT_UNHANDLED_ERROR';
};
const getUnhandledErrorType = (error)=>{
    return error[consoleTypeSym];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=console-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/errors.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Errors: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Errors: function() {
        return Errors;
    },
    styles: function() {
        return styles;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _overlay = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/index.js [client] (ecmascript)");
const _runtimeerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/runtime-error/index.js [client] (ecmascript)");
const _errorsource = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
const _hotlinkedtext = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/hot-linked-text/index.js [client] (ecmascript)");
const _componentstackpseudohtml = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/runtime-error/component-stack-pseudo-html.js [client] (ecmascript)");
const _hydrationerrorinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/hydration-error-info.js [client] (ecmascript)");
const _consoleerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/console-error.js [client] (ecmascript)");
const _errortelemetryutils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/lib/error-telemetry-utils.js [client] (ecmascript)");
const _erroroverlaylayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-layout/error-overlay-layout.js [client] (ecmascript)");
const _ishydrationerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)");
function isNextjsLink(text) {
    return text.startsWith('https://nextjs.org');
}
function ErrorDescription(param) {
    let { error, hydrationWarning } = param;
    const isUnhandledOrReplayError = (0, _consoleerror.isUnhandledConsoleOrRejection)(error);
    const unhandledErrorType = isUnhandledOrReplayError ? (0, _consoleerror.getUnhandledErrorType)(error) : null;
    const isConsoleErrorStringMessage = unhandledErrorType === 'string';
    // If the error is:
    // - hydration warning
    // - captured console error or unhandled rejection
    // skip displaying the error name
    const title = isUnhandledOrReplayError && isConsoleErrorStringMessage || hydrationWarning ? '' : error.name + ': ';
    const environmentName = 'environmentName' in error ? error.environmentName : '';
    const envPrefix = environmentName ? "[ " + environmentName + " ] " : '';
    // The environment name will be displayed as a label, so remove it
    // from the message (e.g. "[ Server ] hello world" -> "hello world").
    let message = error.message;
    if (message.startsWith(envPrefix)) {
        message = message.slice(envPrefix.length);
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            title,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                text: hydrationWarning || message,
                matcher: isNextjsLink
            })
        ]
    });
}
function Errors(param) {
    let { runtimeErrors, debugInfo, onClose, ...props } = param;
    var _activeError_componentStackFrames;
    const dialogResizerRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        // Close the error overlay when pressing escape
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        onClose
    ]);
    const isLoading = (0, _react.useMemo)(()=>{
        return runtimeErrors.length < 1;
    }, [
        runtimeErrors.length
    ]);
    const [activeIdx, setActiveIndex] = (0, _react.useState)(0);
    const activeError = (0, _react.useMemo)(()=>{
        var _runtimeErrors_activeIdx;
        return (_runtimeErrors_activeIdx = runtimeErrors[activeIdx]) != null ? _runtimeErrors_activeIdx : null;
    }, [
        activeIdx,
        runtimeErrors
    ]);
    if (isLoading) {
        // TODO: better loading state
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_overlay.Overlay, {});
    }
    if (!activeError) {
        return null;
    }
    const error = activeError.error;
    const isServerError = [
        'server',
        'edge-server'
    ].includes((0, _errorsource.getErrorSource)(error) || '');
    const isUnhandledError = (0, _consoleerror.isUnhandledConsoleOrRejection)(error);
    const errorDetails = error.details || {};
    const notes = errorDetails.notes || '';
    const [warningTemplate, serverContent, clientContent] = errorDetails.warning || [
        null,
        '',
        ''
    ];
    const hydrationErrorType = (0, _hydrationerrorinfo.getHydrationWarningType)(warningTemplate);
    const hydrationWarning = warningTemplate ? warningTemplate.replace('%s', serverContent).replace('%s', clientContent).replace('%s', '') // remove the %s for stack
    .replace(/%s$/, '') // If there's still a %s at the end, remove it
    .replace(/^Warning: /, '').replace(/^Error: /, '') : null;
    const errorCode = (0, _errortelemetryutils.extractNextErrorCode)(error);
    const footerMessage = isServerError ? 'This error happened while generating the page. Any console logs will be displayed in the terminal window.' : undefined;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_erroroverlaylayout.ErrorOverlayLayout, {
        errorCode: errorCode,
        errorType: isServerError ? 'Runtime Error' : isUnhandledError ? 'Console Error' : 'Unhandled Runtime Error',
        errorMessage: /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorDescription, {
            error: error,
            hydrationWarning: hydrationWarning
        }),
        onClose: isServerError ? undefined : onClose,
        debugInfo: debugInfo,
        error: error,
        runtimeErrors: runtimeErrors,
        activeIdx: activeIdx,
        setActiveIndex: setActiveIndex,
        footerMessage: footerMessage,
        dialogResizerRef: dialogResizerRef,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "error-overlay-notes-container",
                children: [
                    notes ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                            id: "nextjs__container_errors__notes",
                            className: "nextjs__container_errors__notes",
                            children: notes
                        })
                    }) : null,
                    hydrationWarning ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                        id: "nextjs__container_errors__link",
                        className: "nextjs__container_errors__link",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                            text: "See more info here: " + _ishydrationerror.NEXTJS_HYDRATION_ERROR_LINK
                        })
                    }) : null
                ]
            }),
            hydrationWarning && (((_activeError_componentStackFrames = activeError.componentStackFrames) == null ? void 0 : _activeError_componentStackFrames.length) || !!errorDetails.reactOutputComponentDiff) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_componentstackpseudohtml.PseudoHtmlDiff, {
                className: "nextjs__container_errors__component-stack",
                hydrationMismatchType: hydrationErrorType,
                firstContent: serverContent,
                secondContent: clientContent,
                reactOutputComponentDiff: errorDetails.reactOutputComponentDiff || ''
            }) : null,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
                fallback: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    "data-nextjs-error-suspended": true
                }),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_runtimeerror.RuntimeError, {
                    error: activeError,
                    dialogResizerRef: dialogResizerRef
                }, activeError.id.toString())
            })
        ]
    });
}
const styles = "\n  .nextjs-error-with-static {\n    bottom: calc(16px * 4.5);\n  }\n  p.nextjs__container_errors__link {\n    font-size: var(--size-14);\n  }\n  p.nextjs__container_errors__notes {\n    color: var(--color-stack-notes);\n    font-size: var(--size-14);\n    line-height: 1.5;\n  }\n  .nextjs-container-errors-body > h2:not(:first-child) {\n    margin-top: calc(16px + 8px);\n  }\n  .nextjs-container-errors-body > h2 {\n    color: var(--color-title-color);\n    margin-bottom: 8px;\n    font-size: var(--size-20);\n  }\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: 8px;\n  }\n  .nextjs-toast-hide-button {\n    margin-left: 24px;\n    border: none;\n    background: none;\n    color: var(--color-ansi-bright-white);\n    padding: 0;\n    transition: opacity 0.25s ease;\n    opacity: 0.7;\n  }\n  .nextjs-toast-hide-button:hover {\n    opacity: 1;\n  }\n  .nextjs__container_errors_inspect_copy_button {\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--color-ansi-bright-white);\n    font-size: var(--size-24);\n    padding: 0;\n    margin: 0;\n    margin-left: 8px;\n    transition: opacity 0.25s ease;\n  }\n  .nextjs__container_errors__error_title {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 14px;\n  }\n  .error-overlay-notes-container {\n    margin: 8px 2px;\n  }\n  .error-overlay-notes-container p {\n    white-space: pre-wrap;\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/merge-refs.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * A function that merges React refs into one.
 * Supports both functions and ref objects created using createRef() and useRef().
 *
 * Usage:
 * ```tsx
 * <div ref={mergeRefs(ref1, ref2, ref3)} />
 * ```
 *
 * @param {(React.Ref<T> | undefined)[]} inputRefs Array of refs
 * @returns {React.Ref<T> | React.RefCallback<T>} Merged refs
 */ "default", {
    enumerable: true,
    get: function() {
        return mergeRefs;
    }
});
function mergeRefs() {
    for(var _len = arguments.length, inputRefs = new Array(_len), _key = 0; _key < _len; _key++){
        inputRefs[_key] = arguments[_key];
    }
    const filteredInputRefs = inputRefs.filter(Boolean);
    if (filteredInputRefs.length <= 1) {
        const firstRef = filteredInputRefs[0];
        return firstRef || null;
    }
    return function mergedRefs(ref) {
        for (const inputRef of filteredInputRefs){
            if (typeof inputRef === 'function') {
                inputRef(ref);
            } else if (inputRef) {
                ;
                inputRef.current = ref;
            }
        }
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=merge-refs.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/use-minimum-loading-time-multiple.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMinimumLoadingTimeMultiple", {
    enumerable: true,
    get: function() {
        return useMinimumLoadingTimeMultiple;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
function useMinimumLoadingTimeMultiple(isLoadingTrigger, interval) {
    if (interval === void 0) interval = 750;
    const [isLoading, setIsLoading] = (0, _react.useState)(false);
    const loadStartTimeRef = (0, _react.useRef)(null);
    const timeoutIdRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        // Clear any pending timeout to avoid overlap
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
            timeoutIdRef.current = null;
        }
        if (isLoadingTrigger) {
            // If we enter "loading" state, record start time if not already
            if (loadStartTimeRef.current === null) {
                loadStartTimeRef.current = Date.now();
            }
            setIsLoading(true);
        } else {
            // If we're exiting the "loading" state:
            if (loadStartTimeRef.current === null) {
                // No start time was recorded, so just stop loading immediately
                setIsLoading(false);
            } else {
                // How long we've been "loading"
                const timeDiff = Date.now() - loadStartTimeRef.current;
                // Next multiple of `interval` after `timeDiff`
                const nextMultiple = interval * Math.ceil(timeDiff / interval);
                // Remaining time needed to reach that multiple
                const remainingTime = nextMultiple - timeDiff;
                if (remainingTime > 0) {
                    // If not yet at that multiple, schedule the final step
                    timeoutIdRef.current = setTimeout(()=>{
                        setIsLoading(false);
                        loadStartTimeRef.current = null;
                    }, remainingTime);
                } else {
                    // We're already past the multiple boundary
                    setIsLoading(false);
                    loadStartTimeRef.current = null;
                }
            }
        }
        // Cleanup when effect is about to re-run or component unmounts
        return ()=>{
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, [
        isLoadingTrigger,
        interval
    ]);
    return isLoading;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-minimum-loading-time-multiple.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/next-logo.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Cross: null,
    NextLogo: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Cross: function() {
        return Cross;
    },
    NextLogo: function() {
        return NextLogo;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _css = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/css.js [client] (ecmascript)");
const _mergerefs = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/utils/merge-refs.js [client] (ecmascript)"));
const _useminimumloadingtimemultiple = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/use-minimum-loading-time-multiple.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n          [data-next-badge-root] {\n            --timing: cubic-bezier(0.23, 0.88, 0.26, 0.92);\n            --duration-long: 250ms;\n            --color-outer-border: #171717;\n            --color-inner-border: hsla(0, 0%, 100%, 0.14);\n            --color-hover-alpha-subtle: hsla(0, 0%, 100%, 0.13);\n            --color-hover-alpha-error: hsla(0, 0%, 100%, 0.2);\n            --color-hover-alpha-error-2: hsla(0, 0%, 100%, 0.25);\n            --mark-size: calc(var(--size) - var(--size-2) * 2);\n\n            --focus-color: var(--color-blue-800);\n            --focus-ring: 2px solid var(--focus-color);\n\n            &:has([data-next-badge][data-error='true']) {\n              --focus-color: #fff;\n            }\n          }\n\n          [data-disabled-icon] {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-right: 4px;\n          }\n\n          [data-next-badge] {\n            -webkit-font-smoothing: antialiased;\n            width: var(--size);\n            height: var(--size);\n            display: flex;\n            align-items: center;\n            position: relative;\n            background: rgba(0, 0, 0, 0.8);\n            box-shadow:\n              0 0 0 1px var(--color-outer-border),\n              inset 0 0 0 1px var(--color-inner-border),\n              0px 16px 32px -8px rgba(0, 0, 0, 0.24);\n            backdrop-filter: blur(48px);\n            border-radius: var(--rounded-full);\n            user-select: none;\n            cursor: pointer;\n            scale: 1;\n            overflow: hidden;\n            will-change: scale, box-shadow, width, background;\n            transition:\n              scale var(--duration-short) var(--timing),\n              width var(--duration-long) var(--timing),\n              box-shadow var(--duration-long) var(--timing),\n              background var(--duration-short) ease;\n\n            &:active[data-error='false'] {\n              scale: 0.95;\n            }\n\n            &[data-animate='true']:not(:hover) {\n              scale: 1.02;\n            }\n\n            &[data-error='false']:has([data-next-mark]:focus-visible) {\n              outline: var(--focus-ring);\n              outline-offset: 3px;\n            }\n\n            &[data-error='true'] {\n              background: #ca2a30;\n              --color-inner-border: #e5484d;\n\n              [data-next-mark] {\n                background: var(--color-hover-alpha-error);\n                outline-offset: 0px;\n\n                &:focus-visible {\n                  outline: var(--focus-ring);\n                  outline-offset: -1px;\n                }\n\n                &:hover {\n                  background: var(--color-hover-alpha-error-2);\n                }\n              }\n            }\n\n            &[data-error-expanded='false'][data-error='true'] ~ [data-dot] {\n              scale: 1;\n            }\n\n            > div {\n              display: flex;\n            }\n          }\n\n          [data-issues-collapse]:focus-visible {\n            outline: var(--focus-ring);\n          }\n\n          [data-issues]:has([data-issues-open]:focus-visible) {\n            outline: var(--focus-ring);\n            outline-offset: -1px;\n          }\n\n          [data-dot] {\n            content: '';\n            width: var(--size-8);\n            height: var(--size-8);\n            background: #fff;\n            box-shadow: 0 0 0 1px var(--color-outer-border);\n            border-radius: 50%;\n            position: absolute;\n            top: 2px;\n            right: 0px;\n            scale: 0;\n            pointer-events: none;\n            transition: scale 200ms var(--timing);\n            transition-delay: var(--duration-short);\n          }\n\n          [data-issues] {\n            display: flex;\n            gap: 2px;\n            align-items: center;\n            padding-left: 8px;\n            padding-right: ",
        ";\n            height: var(--size-32);\n            margin: 0 2px;\n            border-radius: var(--rounded-full);\n            transition: background var(--duration-short) ease;\n\n            &:has([data-issues-open]:hover) {\n              background: var(--color-hover-alpha-error);\n            }\n\n            [data-cross] {\n              translate: 0px -1px;\n            }\n          }\n\n          [data-issues-open] {\n            font-size: var(--size-13);\n            color: white;\n            width: fit-content;\n            height: 100%;\n            display: flex;\n            gap: 2px;\n            align-items: center;\n            margin: 0;\n            line-height: var(--size-36);\n            font-weight: 500;\n            z-index: 2;\n            white-space: nowrap;\n\n            &:focus-visible {\n              outline: 0;\n            }\n          }\n\n          [data-issues-collapse] {\n            width: var(--size-24);\n            height: var(--size-24);\n            border-radius: var(--rounded-full);\n            transition: background var(--duration-short) ease;\n\n            &:hover {\n              background: var(--color-hover-alpha-error);\n            }\n          }\n\n          [data-cross] {\n            color: #fff;\n            width: var(--size-12);\n            height: var(--size-12);\n          }\n\n          [data-next-mark] {\n            width: var(--mark-size);\n            height: var(--mark-size);\n            margin-left: 2px;\n            display: flex;\n            align-items: center;\n            border-radius: var(--rounded-full);\n            transition: background var(--duration-long) var(--timing);\n\n            &:focus-visible {\n              outline: 0;\n            }\n\n            &:hover {\n              background: var(--color-hover-alpha-subtle);\n            }\n\n            svg {\n              flex-shrink: 0;\n              width: var(--size-40);\n              height: var(--size-40);\n            }\n          }\n\n          [data-issues-count-animation] {\n            display: grid;\n            place-items: center center;\n            font-variant-numeric: tabular-nums;\n\n            &[data-animate='false'] {\n              [data-issues-count-exit],\n              [data-issues-count-enter] {\n                animation-duration: 0ms;\n              }\n            }\n\n            > * {\n              grid-area: 1 / 1;\n            }\n\n            [data-issues-count-exit] {\n              animation: fadeOut 300ms var(--timing) forwards;\n            }\n\n            [data-issues-count-enter] {\n              animation: fadeIn 300ms var(--timing) forwards;\n            }\n          }\n\n          [data-issues-count-plural] {\n            display: inline-block;\n            animation: fadeIn 300ms var(--timing) forwards;\n          }\n\n          .path0 {\n            animation: draw0 1.5s ease-in-out infinite;\n          }\n\n          .path1 {\n            animation: draw1 1.5s ease-out infinite;\n            animation-delay: 0.3s;\n          }\n\n          .paused {\n            stroke-dashoffset: 0;\n          }\n\n          @keyframes fadeIn {\n            0% {\n              opacity: 0;\n              filter: blur(2px);\n              transform: translateY(8px);\n            }\n            100% {\n              opacity: 1;\n              filter: blur(0px);\n              transform: translateY(0);\n            }\n          }\n\n          @keyframes fadeOut {\n            0% {\n              opacity: 1;\n              filter: blur(0px);\n              transform: translateY(0);\n            }\n            100% {\n              opacity: 0;\n              transform: translateY(-12px);\n              filter: blur(2px);\n            }\n          }\n\n          @keyframes draw0 {\n            0%,\n            25% {\n              stroke-dashoffset: -29.6;\n            }\n            25%,\n            50% {\n              stroke-dashoffset: 0;\n            }\n            50%,\n            75% {\n              stroke-dashoffset: 0;\n            }\n            75%,\n            100% {\n              stroke-dashoffset: 29.6;\n            }\n          }\n\n          @keyframes draw1 {\n            0%,\n            20% {\n              stroke-dashoffset: -11.6;\n            }\n            20%,\n            50% {\n              stroke-dashoffset: 0;\n            }\n            50%,\n            75% {\n              stroke-dashoffset: 0;\n            }\n            75%,\n            100% {\n              stroke-dashoffset: 11.6;\n            }\n          }\n\n          @media (prefers-reduced-motion) {\n            [data-issues-count-exit],\n            [data-issues-count-enter],\n            [data-issues-count-plural] {\n              animation-duration: 0ms !important;\n            }\n          }\n        "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const SIZE = '2.25rem' // 36px in 16px base
;
const SIZE_PX = 36;
const SHORT_DURATION_MS = 150;
/**
 * A hook that creates an animated state based on changes to a dependency.
 * When the dependency changes and passes the shouldSkip check, it triggers
 * an animation state that lasts for the specified duration.
 *
 * @param dep The dependency to watch for changes
 * @param config Configuration object containing:
 *               - shouldSkip: Function to determine if animation should be skipped
 *               - animationDuration: Duration of the animation in milliseconds
 * @returns Boolean indicating if animation is currently active
 */ const useAnimated = (dep, config)=>{
    const { shouldSkip: _shouldSkip, animationDuration } = config;
    const shouldSkipRef = (0, _react.useRef)(_shouldSkip) // ensure stable reference in case it's not
    ;
    const [animatedDep, setAnimatedDep] = (0, _react.useState)(false);
    const isInitialRef = (0, _react.useRef)(true);
    (0, _react.useEffect)(()=>{
        if (isInitialRef.current) {
            isInitialRef.current = false;
            return;
        }
        if (shouldSkipRef.current(dep)) {
            return;
        }
        setAnimatedDep(true);
        const timeoutId = setTimeout(()=>{
            setAnimatedDep(false);
        }, animationDuration);
        return ()=>clearTimeout(timeoutId);
    }, [
        dep,
        animationDuration
    ]);
    return animatedDep;
};
const NextLogo = /*#__PURE__*/ (0, _react.forwardRef)(function NextLogo(param, propRef) {
    let { disabled, issueCount, isDevBuilding, isDevRendering, isBuildError, onTriggerClick, toggleErrorOverlay, ...props } = param;
    const hasError = issueCount > 0;
    const [isErrorExpanded, setIsErrorExpanded] = (0, _react.useState)(hasError);
    const newErrorDetected = useAnimated(issueCount, {
        shouldSkip: {
            "NextLogo.NextLogo.useAnimated[newErrorDetected]": (count)=>count === 0
        }["NextLogo.NextLogo.useAnimated[newErrorDetected]"],
        animationDuration: SHORT_DURATION_MS
    });
    const [dismissed, setDismissed] = (0, _react.useState)(false);
    const triggerRef = (0, _react.useRef)(null);
    const ref = (0, _react.useRef)(null);
    const width = useMeasureWidth(ref);
    const isLoading = (0, _useminimumloadingtimemultiple.useMinimumLoadingTimeMultiple)(isDevBuilding || isDevRendering);
    (0, _react.useEffect)(()=>{
        setIsErrorExpanded(hasError);
    }, [
        hasError
    ]);
    const isExpanded = isErrorExpanded || disabled;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-next-badge-root": true,
        style: {
            '--size': SIZE,
            '--duration-short': "" + SHORT_DURATION_MS + "ms",
            // if the indicator is disabled, hide the badge
            // also allow the "disabled" state be dismissed, as long as there are no build errors
            display: disabled && (!hasError || dismissed) ? 'none' : 'block'
        },
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
                children: (0, _css.css)(_templateObject(), isBuildError ? '8px' : 'calc(2px * 2)')
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "data-next-badge": true,
                "data-error": hasError,
                "data-error-expanded": isExpanded,
                "data-animate": newErrorDetected,
                style: {
                    width: hasError && width > SIZE_PX ? width : SIZE
                },
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    ref: ref,
                    children: [
                        !disabled && /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                            ref: (0, _mergerefs.default)(triggerRef, propRef),
                            "data-next-mark": true,
                            "data-next-mark-loading": isLoading,
                            onClick: onTriggerClick,
                            ...props,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(NextMark, {
                                isLoading: isLoading,
                                isDevBuilding: isDevBuilding
                            })
                        }),
                        isExpanded && /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            "data-issues": true,
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
                                    "data-issues-open": true,
                                    "aria-label": "Open issues overlay",
                                    onClick: toggleErrorOverlay,
                                    children: [
                                        disabled && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                            "data-disabled-icon": true,
                                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Warning, {})
                                        }),
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)(AnimateCount, {
                                            animate: newErrorDetected,
                                            "data-issues-count-animation": true,
                                            children: issueCount
                                        }, issueCount),
                                        ' ',
                                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                            children: [
                                                "Issue",
                                                issueCount > 1 && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                    "aria-hidden": true,
                                                    "data-issues-count-plural": true,
                                                    children: "s"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                !isBuildError && /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                                    "data-issues-collapse": true,
                                    "aria-label": "Collapse issues badge",
                                    onClick: ()=>{
                                        var _triggerRef_current;
                                        if (disabled) {
                                            setDismissed(true);
                                        } else {
                                            setIsErrorExpanded(false);
                                        }
                                        (_triggerRef_current = triggerRef.current) == null ? void 0 : _triggerRef_current.focus();
                                    },
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Cross, {
                                        "data-cross": true
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "aria-hidden": true,
                "data-dot": true
            })
        ]
    });
});
function AnimateCount(param) {
    let { children: count, animate = true, ...props } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        ...props,
        "data-animate": animate,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "aria-hidden": true,
                "data-issues-count-exit": true,
                children: count - 1
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "data-issues-count": true,
                "data-issues-count-enter": true,
                children: count
            })
        ]
    });
}
function useMeasureWidth(ref) {
    const [width, setWidth] = (0, _react.useState)(0);
    (0, _react.useEffect)(()=>{
        const el = ref.current;
        if (!el) {
            return;
        }
        const observer = new ResizeObserver(()=>{
            const { width: w } = el.getBoundingClientRect();
            setWidth(w);
        });
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        ref
    ]);
    return width;
}
function NextMark(param) {
    let { isLoading, isDevBuilding } = param;
    const strokeColor = isDevBuilding ? 'rgba(255,255,255,0.7)' : 'white';
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        "data-next-mark-loading": isLoading,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                transform: "translate(8.5, 13)",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        className: isLoading ? 'path0' : 'paused',
                        d: "M13.3 15.2 L2.34 1 V12.6",
                        fill: "none",
                        stroke: "url(#next_logo_paint0_linear_1357_10853)",
                        strokeWidth: "1.86",
                        mask: "url(#next_logo_mask0)",
                        strokeDasharray: "29.6",
                        strokeDashoffset: "29.6"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        className: isLoading ? 'path1' : 'paused',
                        d: "M11.825 1.5 V13.1",
                        strokeWidth: "1.86",
                        stroke: "url(#next_logo_paint1_linear_1357_10853)",
                        strokeDasharray: "11.6",
                        strokeDashoffset: "11.6"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        id: "next_logo_paint0_linear_1357_10853",
                        x1: "9.95555",
                        y1: "11.1226",
                        x2: "15.4778",
                        y2: "17.9671",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: strokeColor
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: "0.604072",
                                stopColor: strokeColor,
                                stopOpacity: "0"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: "1",
                                stopColor: strokeColor,
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        id: "next_logo_paint1_linear_1357_10853",
                        x1: "11.8222",
                        y1: "1.40039",
                        x2: "11.791",
                        y2: "9.62542",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: strokeColor
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                offset: "1",
                                stopColor: strokeColor,
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("mask", {
                        id: "next_logo_mask0",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                                width: "100%",
                                height: "100%",
                                fill: "white"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                                width: "5",
                                height: "1.5",
                                fill: "black"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function Warning() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.98071 1.125L1.125 3.98071L1.125 8.01929L3.98071 10.875H8.01929L10.875 8.01929V3.98071L8.01929 1.125H3.98071ZM3.82538 0C3.62647 0 3.4357 0.0790176 3.29505 0.21967L0.21967 3.29505C0.0790176 3.4357 0 3.62647 0 3.82538V8.17462C0 8.37353 0.0790178 8.5643 0.21967 8.70495L3.29505 11.7803C3.4357 11.921 3.62647 12 3.82538 12H8.17462C8.37353 12 8.5643 11.921 8.70495 11.7803L11.7803 8.70495C11.921 8.5643 12 8.37353 12 8.17462V3.82538C12 3.62647 11.921 3.4357 11.7803 3.29505L8.70495 0.21967C8.5643 0.0790177 8.37353 0 8.17462 0H3.82538ZM6.5625 2.8125V3.375V6V6.5625H5.4375V6V3.375V2.8125H6.5625ZM6 9C6.41421 9 6.75 8.66421 6.75 8.25C6.75 7.83579 6.41421 7.5 6 7.5C5.58579 7.5 5.25 7.83579 5.25 8.25C5.25 8.66421 5.58579 9 6 9Z",
            fill: "#EAEAEA"
        })
    });
}
function Cross(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.08889 11.8384L2.62486 12.3024L1.69678 11.3744L2.16082 10.9103L6.07178 6.99937L2.16082 3.08841L1.69678 2.62437L2.62486 1.69629L3.08889 2.16033L6.99986 6.07129L10.9108 2.16033L11.3749 1.69629L12.3029 2.62437L11.8389 3.08841L7.92793 6.99937L11.8389 10.9103L12.3029 11.3744L11.3749 12.3024L10.9108 11.8384L6.99986 7.92744L3.08889 11.8384Z",
            fill: "currentColor"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=next-logo.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "devBuildIndicator", {
    enumerable: true,
    get: function() {
        return devBuildIndicator;
    }
});
const _initialize = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/internal/initialize.js [client] (ecmascript)");
const NOOP = ()=>{};
const devBuildIndicator = {
    /** Shows build indicator when Next.js is compiling. Requires initialize() first. */ show: NOOP,
    /** Hides build indicator when Next.js finishes compiling. Requires initialize() first. */ hide: NOOP,
    /** Sets up the build indicator UI component. Call this before using show/hide. */ initialize: _initialize.initialize
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-build-indicator.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/internal/initialize.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/*
 * Singleton store to track whether the app is currently being built
 * Used by the dev tools indicator of the new overlay to show build status
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    initialize: null,
    useIsDevBuilding: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    initialize: function() {
        return initialize;
    },
    useIsDevBuilding: function() {
        return useIsDevBuilding;
    }
});
const _devbuildindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
let isVisible = false;
let listeners = [];
const subscribe = (listener)=>{
    listeners.push(listener);
    return ()=>{
        listeners = listeners.filter((l)=>l !== listener);
    };
};
const getSnapshot = ()=>isVisible;
function useIsDevBuilding() {
    return (0, _react.useSyncExternalStore)(subscribe, getSnapshot);
}
function initialize() {
    _devbuildindicator.devBuildIndicator.show = ()=>{
        isVisible = true;
        listeners.forEach((listener)=>listener());
    };
    _devbuildindicator.devBuildIndicator.hide = ()=>{
        isVisible = false;
        listeners.forEach((listener)=>listener());
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=initialize.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/dev-indicator/dev-render-indicator.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/*
 * Singleton store to track whether the app is currently being rendered
 * Used by the dev tools indicator to show render status
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    devRenderIndicator: null,
    useIsDevRendering: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    devRenderIndicator: function() {
        return devRenderIndicator;
    },
    useIsDevRendering: function() {
        return useIsDevRendering;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
let isVisible = false;
let listeners = [];
const subscribe = (listener)=>{
    listeners.push(listener);
    return ()=>{
        listeners = listeners.filter((l)=>l !== listener);
    };
};
const getSnapshot = ()=>isVisible;
const show = ()=>{
    isVisible = true;
    listeners.forEach((listener)=>listener());
};
const hide = ()=>{
    isVisible = false;
    listeners.forEach((listener)=>listener());
};
function useIsDevRendering() {
    return (0, _react.useSyncExternalStore)(subscribe, getSnapshot);
}
const devRenderIndicator = {
    show,
    hide
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-render-indicator.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/hooks/use-delayed-render.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useDelayedRender", {
    enumerable: true,
    get: function() {
        return useDelayedRender;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
function useDelayedRender(active, options) {
    if (active === void 0) active = false;
    if (options === void 0) options = {};
    const [mounted, setMounted] = (0, _react.useState)(active);
    const [rendered, setRendered] = (0, _react.useState)(false);
    const renderTimerRef = (0, _react.useRef)(null);
    const unmountTimerRef = (0, _react.useRef)(null);
    const clearTimers = (0, _react.useCallback)(()=>{
        if (renderTimerRef.current !== null) {
            window.clearTimeout(renderTimerRef.current);
            renderTimerRef.current = null;
        }
        if (unmountTimerRef.current !== null) {
            window.clearTimeout(unmountTimerRef.current);
            unmountTimerRef.current = null;
        }
    }, []);
    (0, _react.useEffect)(()=>{
        const { enterDelay = 1, exitDelay = 0 } = options;
        clearTimers();
        if (active) {
            setMounted(true);
            if (enterDelay <= 0) {
                setRendered(true);
            } else {
                renderTimerRef.current = window.setTimeout(()=>{
                    setRendered(true);
                }, enterDelay);
            }
        } else {
            setRendered(false);
            if (exitDelay <= 0) {
                setMounted(false);
            } else {
                unmountTimerRef.current = window.setTimeout(()=>{
                    setMounted(false);
                }, exitDelay);
            }
        }
        return clearTimers;
    }, [
        active,
        options,
        clearTimers
    ]);
    return {
        mounted,
        rendered
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-delayed-render.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/utils.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MENU_CURVE: null,
    MENU_DURATION_MS: null,
    useClickOutside: null,
    useFocusTrap: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MENU_CURVE: function() {
        return MENU_CURVE;
    },
    MENU_DURATION_MS: function() {
        return MENU_DURATION_MS;
    },
    useClickOutside: function() {
        return useClickOutside;
    },
    useFocusTrap: function() {
        return useFocusTrap;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
function useFocusTrap(rootRef, triggerRef, active, onOpenFocus) {
    (0, _react.useEffect)(()=>{
        let rootNode = null;
        function onTab(e) {
            if (e.key !== 'Tab' || rootNode === null) {
                return;
            }
            const [firstFocusableNode, lastFocusableNode] = getFocusableNodes(rootNode);
            const activeElement = getActiveElement(rootNode);
            if (e.shiftKey) {
                if (activeElement === firstFocusableNode) {
                    lastFocusableNode == null ? void 0 : lastFocusableNode.focus();
                    e.preventDefault();
                }
            } else {
                if (activeElement === lastFocusableNode) {
                    firstFocusableNode == null ? void 0 : firstFocusableNode.focus();
                    e.preventDefault();
                }
            }
        }
        const id = setTimeout(()=>{
            // Grab this on next tick to ensure the content is mounted
            rootNode = rootRef.current;
            if (active) {
                if (onOpenFocus) {
                    onOpenFocus();
                } else {
                    rootNode == null ? void 0 : rootNode.focus();
                }
                rootNode == null ? void 0 : rootNode.addEventListener('keydown', onTab);
            } else {
                const activeElement = getActiveElement(rootNode);
                // Only restore focus if the focus was previously on the content.
                // This avoids us accidentally focusing on mount when the
                // user could want to interact with their own app instead.
                if (rootNode == null ? void 0 : rootNode.contains(activeElement)) {
                    var _triggerRef_current;
                    (_triggerRef_current = triggerRef.current) == null ? void 0 : _triggerRef_current.focus();
                }
            }
        });
        return ()=>{
            clearTimeout(id);
            rootNode == null ? void 0 : rootNode.removeEventListener('keydown', onTab);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        active
    ]);
}
function getActiveElement(node) {
    const root = node == null ? void 0 : node.getRootNode();
    return root instanceof ShadowRoot ? root == null ? void 0 : root.activeElement : null;
}
function getFocusableNodes(node) {
    const focusableElements = node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusableElements) return [];
    return [
        focusableElements[0],
        focusableElements[focusableElements.length - 1]
    ];
}
function useClickOutside(rootRef, triggerRef, active, close) {
    (0, _react.useEffect)(()=>{
        if (!active) {
            return;
        }
        function handleClickOutside(event) {
            var _rootRef_current, _triggerRef_current;
            if (!(((_rootRef_current = rootRef.current) == null ? void 0 : _rootRef_current.getBoundingClientRect()) ? event.clientX >= rootRef.current.getBoundingClientRect().left && event.clientX <= rootRef.current.getBoundingClientRect().right && event.clientY >= rootRef.current.getBoundingClientRect().top && event.clientY <= rootRef.current.getBoundingClientRect().bottom : false) && !(((_triggerRef_current = triggerRef.current) == null ? void 0 : _triggerRef_current.getBoundingClientRect()) ? event.clientX >= triggerRef.current.getBoundingClientRect().left && event.clientX <= triggerRef.current.getBoundingClientRect().right && event.clientY >= triggerRef.current.getBoundingClientRect().top && event.clientY <= triggerRef.current.getBoundingClientRect().bottom : false)) {
                close();
            }
        }
        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                close();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        active
    ]);
}
const MENU_DURATION_MS = 200;
const MENU_CURVE = 'cubic-bezier(0.175, 0.885, 0.32, 1.1)';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/dev-tools-info.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEV_TOOLS_INFO_STYLES: null,
    DevToolsInfo: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEV_TOOLS_INFO_STYLES: function() {
        return DEV_TOOLS_INFO_STYLES;
    },
    DevToolsInfo: function() {
        return DevToolsInfo;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/utils.js [client] (ecmascript)");
const _usedelayedrender = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/hooks/use-delayed-render.js [client] (ecmascript)");
function DevToolsInfo(param) {
    let { title, children, learnMoreLink, isOpen, triggerRef, close, ...props } = param;
    const ref = (0, _react.useRef)(null);
    const closeButtonRef = (0, _react.useRef)(null);
    const { mounted, rendered } = (0, _usedelayedrender.useDelayedRender)(isOpen, {
        // Intentionally no fade in, makes the UI feel more immediate
        enterDelay: 0,
        // Graceful fade out to confirm that the UI did not break
        exitDelay: _utils.MENU_DURATION_MS
    });
    (0, _utils.useFocusTrap)(ref, triggerRef, isOpen, ()=>{
        var _closeButtonRef_current;
        (_closeButtonRef_current = closeButtonRef.current) == null ? void 0 : _closeButtonRef_current.focus();
    });
    (0, _utils.useClickOutside)(ref, triggerRef, isOpen, close);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        tabIndex: -1,
        role: "dialog",
        ref: ref,
        "data-info-popover": true,
        ...props,
        "data-rendered": rendered,
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: "dev-tools-info-container",
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                    className: "dev-tools-info-title",
                    children: title
                }),
                children,
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "dev-tools-info-button-container",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                            ref: closeButtonRef,
                            className: "dev-tools-info-close-button",
                            onClick: close,
                            children: "Close"
                        }),
                        learnMoreLink && /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                            className: "dev-tools-info-learn-more-button",
                            href: learnMoreLink,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "Learn More"
                        })
                    ]
                })
            ]
        })
    });
}
const DEV_TOOLS_INFO_STYLES = "\n  [data-info-popover] {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    background: var(--color-background-100);\n    border: 1px solid var(--color-gray-alpha-400);\n    background-clip: padding-box;\n    box-shadow: var(--shadow-menu);\n    border-radius: var(--rounded-xl);\n    position: absolute;\n    font-family: var(--font-stack-sans);\n    z-index: 1000;\n    overflow: hidden;\n    opacity: 0;\n    outline: 0;\n    min-width: 350px;\n    transition: opacity var(--animate-out-duration-ms)\n      var(--animate-out-timing-function);\n\n    &[data-rendered='true'] {\n      opacity: 1;\n      scale: 1;\n    }\n\n    button:focus-visible {\n      outline: var(--focus-ring);\n    }\n  }\n\n  .dev-tools-info-container {\n    padding: 12px;\n  }\n\n  .dev-tools-info-title {\n    padding: 8px 6px;\n    color: var(--color-gray-1000);\n    font-size: var(--size-16);\n    font-weight: 600;\n    line-height: var(--size-20);\n    margin: 0;\n  }\n\n  .dev-tools-info-article {\n    padding: 8px 6px;\n    color: var(--color-gray-1000);\n    font-size: var(--size-14);\n    line-height: var(--size-20);\n    margin: 0;\n  }\n  .dev-tools-info-paragraph {\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  .dev-tools-info-button-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 8px 6px;\n  }\n\n  .dev-tools-info-close-button {\n    padding: 0 8px;\n    height: var(--size-28);\n    font-size: var(--size-14);\n    font-weight: 500;\n    line-height: var(--size-20);\n    transition: background var(--duration-short) ease;\n    color: var(--color-gray-1000);\n    border-radius: var(--rounded-md-2);\n    border: 1px solid var(--color-gray-alpha-400);\n    background: var(--color-background-200);\n  }\n\n  .dev-tools-info-close-button:hover {\n    background: var(--color-gray-400);\n  }\n\n  .dev-tools-info-learn-more-button {\n    align-content: center;\n    padding: 0 8px;\n    height: var(--size-28);\n    font-size: var(--size-14);\n    font-weight: 500;\n    line-height: var(--size-20);\n    transition: background var(--duration-short) ease;\n    color: var(--color-background-100);\n    border-radius: var(--rounded-md-2);\n    background: var(--color-gray-1000);\n  }\n\n  .dev-tools-info-learn-more-button:hover {\n    text-decoration: none;\n    color: var(--color-background-100);\n    opacity: 0.9;\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-tools-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/turbopack-info.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEV_TOOLS_INFO_TURBOPACK_INFO_STYLES: null,
    TurbopackInfo: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEV_TOOLS_INFO_TURBOPACK_INFO_STYLES: function() {
        return DEV_TOOLS_INFO_TURBOPACK_INFO_STYLES;
    },
    TurbopackInfo: function() {
        return TurbopackInfo;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _devtoolsinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/dev-tools-info.js [client] (ecmascript)");
const _copybutton = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/copy-button/index.js [client] (ecmascript)");
function TurbopackInfo(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_devtoolsinfo.DevToolsInfo, {
        title: "Turbopack",
        learnMoreLink: "https://nextjs.org/docs/app/api-reference/turbopack",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("article", {
                className: "dev-tools-info-article",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                        className: "dev-tools-info-paragraph",
                        children: [
                            "Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js. Turbopack can be used in Next.js in both the",
                            ' ',
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                                className: "dev-tools-info-code",
                                children: "pages"
                            }),
                            " and",
                            ' ',
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                                className: "dev-tools-info-code",
                                children: "app"
                            }),
                            " directories for faster local development."
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                        className: "dev-tools-info-paragraph",
                        children: [
                            "To enable Turbopack, use the",
                            ' ',
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                                className: "dev-tools-info-code",
                                children: "--turbopack"
                            }),
                            " flag when running the Next.js development server."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "dev-tools-info-code-block-container",
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "dev-tools-info-code-block",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(_copybutton.CopyButton, {
                            actionLabel: "Copy Next.js Turbopack Command",
                            successLabel: "Next.js Turbopack Command Copied",
                            content: '--turbopack',
                            className: "dev-tools-info-copy-button"
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("pre", {
                            className: "dev-tools-info-code-block-pre",
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("code", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                        className: "dev-tools-info-code-block-line",
                                        children: '  '
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                        className: "dev-tools-info-code-block-line",
                                        children: '{'
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                        className: "dev-tools-info-code-block-line",
                                        children: [
                                            '  ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                className: "dev-tools-info-code-block-json-key",
                                                children: '"scripts"'
                                            }),
                                            ": ",
                                            '{'
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                        className: "dev-tools-info-code-block-line dev-tools-info-highlight",
                                        children: [
                                            '    ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                className: "dev-tools-info-code-block-json-key",
                                                children: '"dev"'
                                            }),
                                            ":",
                                            ' ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                className: "dev-tools-info-code-block-json-value",
                                                children: '"next dev --turbopack"'
                                            }),
                                            ","
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                        className: "dev-tools-info-code-block-line",
                                        children: [
                                            '    ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                className: "dev-tools-info-code-block-json-key",
                                                children: '"build"'
                                            }),
                                            ":",
                                            ' ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                className: "dev-tools-info-code-block-json-value",
                                                children: '"next build"'
                                            }),
                                            ","
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                        className: "dev-tools-info-code-block-line",
                                        children: [
                                            '    ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                className: "dev-tools-info-code-block-json-key",
                                                children: '"start"'
                                            }),
                                            ":",
                                            ' ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                className: "dev-tools-info-code-block-json-value",
                                                children: '"next start"'
                                            }),
                                            ","
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                        className: "dev-tools-info-code-block-line",
                                        children: [
                                            '    ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                className: "dev-tools-info-code-block-json-key",
                                                children: '"lint"'
                                            }),
                                            ":",
                                            ' ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                className: "dev-tools-info-code-block-json-value",
                                                children: '"next lint"'
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                        className: "dev-tools-info-code-block-line",
                                        children: '  }'
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                        className: "dev-tools-info-code-block-line",
                                        children: '}'
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                        className: "dev-tools-info-code-block-line",
                                        children: '  '
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
const DEV_TOOLS_INFO_TURBOPACK_INFO_STYLES = "\n  .dev-tools-info-code {\n    background: var(--color-gray-400);\n    color: var(--color-gray-1000);\n    font-family: var(--font-stack-monospace);\n    padding: 2px 4px;\n    margin: 0;\n    font-size: var(--size-13);\n    white-space: break-spaces;\n    border-radius: var(--rounded-md-2);\n  }\n\n  .dev-tools-info-code-block-container {\n    padding: 6px;\n  }\n\n  .dev-tools-info-code-block {\n    position: relative;\n    background: var(--color-background-200);\n    border: 1px solid var(--color-gray-alpha-400);\n    border-radius: var(--rounded-md-2);\n    min-width: 326px;\n  }\n\n  .dev-tools-info-code-block-pre {\n    margin: 0;\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-12);\n  }\n\n  .dev-tools-info-copy-button {\n    position: absolute;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    right: 8px;\n    top: 8px;\n    padding: 4px;\n    height: var(--size-24);\n    width: var(--size-24);\n    border-radius: var(--rounded-md-2);\n    border: 1px solid var(--color-gray-alpha-400);\n    background: var(--color-background-100);\n  }\n\n  .dev-tools-info-code-block-line {\n    display: block;\n    line-height: 1.5;\n    padding: 0 16px;\n  }\n\n  .dev-tools-info-code-block-line.dev-tools-info-highlight {\n    border-left: 2px solid var(--color-blue-900);\n    background: var(--color-blue-400);\n  }\n\n  .dev-tools-info-code-block-json-key {\n    color: var(--color-syntax-keyword);\n  }\n\n  .dev-tools-info-code-block-json-value {\n    color: var(--color-syntax-link);\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=turbopack-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/route-info.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEV_TOOLS_INFO_ROUTE_INFO_STYLES: null,
    RouteInfo: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEV_TOOLS_INFO_ROUTE_INFO_STYLES: function() {
        return DEV_TOOLS_INFO_ROUTE_INFO_STYLES;
    },
    RouteInfo: function() {
        return RouteInfo;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _devtoolsinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/dev-tools-info.js [client] (ecmascript)");
function StaticRouteContent(param) {
    let { routerType } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("article", {
        className: "dev-tools-info-article",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                className: "dev-tools-info-paragraph",
                children: [
                    "The path",
                    ' ',
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                        className: "dev-tools-info-code",
                        children: window.location.pathname
                    }),
                    ' ',
                    'is marked as "static" since it will be prerendered during the build time.'
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                className: "dev-tools-info-paragraph",
                children: [
                    "With Static Rendering, routes are rendered at build time, or in the background after",
                    ' ',
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                        className: "dev-tools-info-link",
                        href: routerType === 'pages' ? 'https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration' : "https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "data revalidation"
                    }),
                    "."
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                className: "dev-tools-info-paragraph",
                children: "Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page."
            })
        ]
    });
}
function DynamicRouteContent(param) {
    let { routerType } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("article", {
        className: "dev-tools-info-article",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                className: "dev-tools-info-paragraph",
                children: [
                    "The path",
                    ' ',
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                        className: "dev-tools-info-code",
                        children: window.location.pathname
                    }),
                    ' ',
                    'is marked as "dynamic" since it will be rendered for each user at',
                    ' ',
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("strong", {
                        children: "request time"
                    }),
                    "."
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                className: "dev-tools-info-paragraph",
                children: "Dynamic rendering is useful when a route has data that is personalized to the user or has information that can only be known at request time, such as cookies or the URL's search params."
            }),
            routerType === 'pages' ? /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                className: "dev-tools-info-pagraph",
                children: [
                    "Exporting the",
                    ' ',
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                        className: "dev-tools-info-link",
                        href: "https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "getServerSideProps"
                    }),
                    ' ',
                    "function will opt the route into dynamic rendering. This function will be called by the server on every request."
                ]
            }) : /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                className: "dev-tools-info-paragraph",
                children: [
                    "During rendering, if a",
                    ' ',
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                        className: "dev-tools-info-link",
                        href: "https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-apis",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Dynamic API"
                    }),
                    ' ',
                    "or a",
                    ' ',
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                        className: "dev-tools-info-link",
                        href: "https://nextjs.org/docs/app/api-reference/functions/fetch",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "fetch"
                    }),
                    ' ',
                    "option of",
                    ' ',
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                        className: "dev-tools-info-code",
                        children: "{ cache: 'no-store' }"
                    }),
                    ' ',
                    "is discovered, Next.js will switch to dynamically rendering the whole route."
                ]
            })
        ]
    });
}
const learnMoreLink = {
    pages: {
        static: 'https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation',
        dynamic: 'https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering'
    },
    app: {
        static: 'https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default',
        dynamic: 'https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering'
    }
};
function RouteInfo(param) {
    let { routeType, routerType, ...props } = param;
    const isStaticRoute = routeType === 'Static';
    const learnMore = isStaticRoute ? learnMoreLink[routerType].static : learnMoreLink[routerType].dynamic;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_devtoolsinfo.DevToolsInfo, {
        title: "" + routeType + " Route",
        learnMoreLink: learnMore,
        ...props,
        children: isStaticRoute ? /*#__PURE__*/ (0, _jsxruntime.jsx)(StaticRouteContent, {
            routerType: routerType
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(DynamicRouteContent, {
            routerType: routerType
        })
    });
}
const DEV_TOOLS_INFO_ROUTE_INFO_STYLES = "";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/gear-icon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GearIcon;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function GearIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 20 20",
        fill: "none",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "m9.7 3.736.045-.236h.51l.044.236a2.024 2.024 0 0 0 1.334 1.536c.19.066.375.143.554.23.618.301 1.398.29 2.03-.143l.199-.136.36.361-.135.199a2.024 2.024 0 0 0-.143 2.03c.087.179.164.364.23.554.224.65.783 1.192 1.536 1.334l.236.044v.51l-.236.044a2.024 2.024 0 0 0-1.536 1.334 4.95 4.95 0 0 1-.23.554 2.024 2.024 0 0 0 .143 2.03l.136.199-.361.36-.199-.135a2.024 2.024 0 0 0-2.03-.143c-.179.087-.364.164-.554.23a2.024 2.024 0 0 0-1.334 1.536l-.044.236h-.51l-.044-.236a2.024 2.024 0 0 0-1.334-1.536 4.952 4.952 0 0 1-.554-.23 2.024 2.024 0 0 0-2.03.143l-.199.136-.36-.361.135-.199a2.024 2.024 0 0 0 .143-2.03 4.958 4.958 0 0 1-.23-.554 2.024 2.024 0 0 0-1.536-1.334l-.236-.044v-.51l.236-.044a2.024 2.024 0 0 0 1.536-1.334 4.96 4.96 0 0 1 .23-.554 2.024 2.024 0 0 0-.143-2.03l-.136-.199.361-.36.199.135a2.024 2.024 0 0 0 2.03.143c.179-.087.364-.164.554-.23a2.024 2.024 0 0 0 1.334-1.536ZM8.5 2h3l.274 1.46c.034.185.17.333.348.394.248.086.49.186.722.3.17.082.37.074.526-.033l1.226-.839 2.122 2.122-.84 1.226a.524.524 0 0 0-.032.526c.114.233.214.474.3.722.061.177.21.314.394.348L18 8.5v3l-1.46.274a.524.524 0 0 0-.394.348 6.47 6.47 0 0 1-.3.722.524.524 0 0 0 .033.526l.839 1.226-2.122 2.122-1.226-.84a.524.524 0 0 0-.526-.032 6.477 6.477 0 0 1-.722.3.524.524 0 0 0-.348.394L11.5 18h-3l-.274-1.46a.524.524 0 0 0-.348-.394 6.477 6.477 0 0 1-.722-.3.524.524 0 0 0-.526.033l-1.226.839-2.122-2.122.84-1.226a.524.524 0 0 0 .032-.526 6.453 6.453 0 0 1-.3-.722.524.524 0 0 0-.394-.348L2 11.5v-3l1.46-.274a.524.524 0 0 0 .394-.348c.086-.248.186-.49.3-.722a.524.524 0 0 0-.033-.526l-.839-1.226 2.122-2.122 1.226.84a.524.524 0 0 0 .526.032 6.46 6.46 0 0 1 .722-.3.524.524 0 0 0 .348-.394L8.5 2Zm3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm1.5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
            clipRule: "evenodd"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=gear-icon.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/eye-icon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EyeIcon;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function EyeIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "none",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "m.191 2.063.56.498 13.5 12 .561.498.997-1.121-.56-.498-1.81-1.608 2.88-3.342v-.98l-3.204-3.72C10.645.923 6.365.686 3.594 3.08L1.748 1.44 1.188.94.19 2.063ZM14.761 8l-2.442 2.836-1.65-1.466a3.001 3.001 0 0 0-4.342-3.86l-1.6-1.422a5.253 5.253 0 0 1 7.251.682L14.76 8ZM7.526 6.576l1.942 1.727a1.499 1.499 0 0 0-1.942-1.727Zm-7.845.935 1.722-2 1.137.979L1.24 8l2.782 3.23A5.25 5.25 0 0 0 9.9 12.703l.54 1.4a6.751 6.751 0 0 1-7.555-1.892L-.318 8.49v-.98Z",
            clipRule: "evenodd"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=eye-icon.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/light-icon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LightIcon;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function LightIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                clipPath: "url(#light_icon_clip_path)",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M8.75.75V0h-1.5v2h1.5V.75ZM3.26 4.32l-.53-.53-.354-.353-.53-.53 1.06-1.061.53.53.354.354.53.53-1.06 1.06Zm8.42-1.06.53-.53.353-.354.53-.53 1.061 1.06-.53.53-.354.354-.53.53-1.06-1.06ZM8 11.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm0 1.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5Zm6-5.5h2v1.5h-2v-1.5Zm-13.25 0H0v1.5h2v-1.5H.75Zm1.62 5.32-.53.53 1.06 1.06.53-.53.354-.353.53-.53-1.06-1.061-.53.53-.354.354Zm10.2 1.06.53.53 1.06-1.06-.53-.53-.354-.354-.53-.53-1.06 1.06.53.53.353.354ZM8.75 14v2h-1.5v-2h1.5Z",
                    clipRule: "evenodd"
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("defs", {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("clipPath", {
                    id: "light_icon_clip_path",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        fill: "currentColor",
                        d: "M0 0h16v16H0z"
                    })
                })
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=light-icon.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/dark-icon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DarkIcon;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function DarkIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        "data-testid": "geist-icon",
        height: "16",
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: "16",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z",
            fill: "currentColor"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dark-icon.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/system-icon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SystemIcon;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function SystemIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "16",
        height: "16",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H8.75v3h1.75V16h-5v-1.5h1.75v-3H1a1 1 0 0 1-1-1V2Zm1.5.5V10h13V2.5h-13Z",
            clipRule: "evenodd"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=system-icon.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/user-preferences.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEV_TOOLS_INFO_USER_PREFERENCES_STYLES: null,
    UserPreferences: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEV_TOOLS_INFO_USER_PREFERENCES_STYLES: function() {
        return DEV_TOOLS_INFO_USER_PREFERENCES_STYLES;
    },
    UserPreferences: function() {
        return UserPreferences;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _css = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/css.js [client] (ecmascript)");
const _eyeicon = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/eye-icon.js [client] (ecmascript)"));
const _shared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _lighticon = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/light-icon.js [client] (ecmascript)"));
const _darkicon = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/dark-icon.js [client] (ecmascript)"));
const _systemicon = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/system-icon.js [client] (ecmascript)"));
const _devtoolsinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/dev-tools-info.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .preferences-container {\n    padding: 8px 6px;\n    width: 100%;\n  }\n\n  @media (min-width: 576px) {\n    .preferences-container {\n      width: 480px;\n    }\n  }\n\n  .preference-section:first-child {\n    padding-top: 0;\n  }\n\n  .preference-section {\n    padding: 12px 0;\n    border-bottom: 1px solid var(--color-gray-400);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 24px;\n  }\n\n  .preference-section:last-child {\n    border-bottom: none;\n  }\n\n  .preference-header {\n    margin-bottom: 0;\n    flex: 1;\n  }\n\n  .preference-header label {\n    font-size: var(--size-14);\n    font-weight: 500;\n    color: var(--color-gray-1000);\n    margin: 0;\n  }\n\n  .preference-description {\n    color: var(--color-gray-900);\n    font-size: var(--size-14);\n    margin: 0;\n  }\n\n  .preference-icon {\n    display: flex;\n    align-items: center;\n    width: 16px;\n    height: 16px;\n  }\n\n  .select-button,\n  .action-button {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    background: var(--color-background-100);\n    border: 1px solid var(--color-gray-400);\n    border-radius: var(--rounded-lg);\n    font-weight: 400;\n    font-size: var(--size-14);\n    color: var(--color-gray-1000);\n    padding: 6px 8px;\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n  }\n\n  .preference-control-select {\n    padding: 6px 8px;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    border-radius: var(--rounded-lg);\n    border: 1px solid var(--color-gray-400);\n\n    &:hover {\n      background: var(--color-gray-100);\n    }\n\n    &:focus-within {\n      outline: var(--focus-ring);\n    }\n  }\n\n  .preference-control-select select {\n    font-size: var(--size-14);\n    font-weight: 400;\n    border: none;\n    padding: 0 6px 0 0;\n    border-radius: 0;\n    outline: none;\n    background: none;\n  }\n\n  :global(.icon) {\n    width: 18px;\n    height: 18px;\n    color: #666;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function getInitialPreference() {
    if (typeof localStorage === 'undefined') {
        return 'system';
    }
    const theme = localStorage.getItem(_shared.STORAGE_KEY_THEME);
    return theme === 'dark' || theme === 'light' ? theme : 'system';
}
function UserPreferences(param) {
    let { setPosition, position, hide, ...props } = param;
    // derive initial theme from system preference
    const [theme, setTheme] = (0, _react.useState)(getInitialPreference());
    const handleThemeChange = (e)=>{
        const portal = document.querySelector('nextjs-portal');
        if (!portal) return;
        setTheme(e.target.value);
        if (e.target.value === 'system') {
            portal.classList.remove('dark');
            portal.classList.remove('light');
            localStorage.removeItem(_shared.STORAGE_KEY_THEME);
            return;
        }
        if (e.target.value === 'dark') {
            portal.classList.add('dark');
            portal.classList.remove('light');
            localStorage.setItem(_shared.STORAGE_KEY_THEME, 'dark');
        } else {
            portal.classList.remove('dark');
            portal.classList.add('light');
            localStorage.setItem(_shared.STORAGE_KEY_THEME, 'light');
        }
    };
    function handlePositionChange(e) {
        setPosition(e.target.value);
        localStorage.setItem(_shared.STORAGE_KEY_POSITION, e.target.value);
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_devtoolsinfo.DevToolsInfo, {
        title: "Preferences",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: "preferences-container",
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "preference-section",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            className: "preference-header",
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("label", {
                                    htmlFor: "theme",
                                    children: "Theme"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    className: "preference-description",
                                    children: "Select your theme preference."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            className: "preference-control-select",
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                    className: "preference-icon",
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ThemeIcon, {
                                        theme: theme
                                    })
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsxs)("select", {
                                    id: "theme",
                                    name: "theme",
                                    className: "select-button",
                                    value: theme,
                                    onChange: handleThemeChange,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)("option", {
                                            value: "system",
                                            children: "System"
                                        }),
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)("option", {
                                            value: "light",
                                            children: "Light"
                                        }),
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)("option", {
                                            value: "dark",
                                            children: "Dark"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "preference-section",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            className: "preference-header",
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("label", {
                                    htmlFor: "position",
                                    children: "Position"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    className: "preference-description",
                                    children: "Adjust the placement of your dev tools."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "preference-control-select",
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("select", {
                                id: "position",
                                name: "position",
                                className: "select-button",
                                value: position,
                                onChange: handlePositionChange,
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("option", {
                                        value: "bottom-left",
                                        children: "Bottom Left"
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("option", {
                                        value: "bottom-right",
                                        children: "Bottom Right"
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("option", {
                                        value: "top-left",
                                        children: "Top Left"
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("option", {
                                        value: "top-right",
                                        children: "Top Right"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "preference-section",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            className: "preference-header",
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("label", {
                                    htmlFor: "hide-dev-tools",
                                    children: "Hide Dev Tools for this session"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    className: "preference-description",
                                    children: "Hide Dev Tools until you restart your dev server, or 1 day."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "preference-control",
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
                                id: "hide-dev-tools",
                                name: "hide-dev-tools",
                                "data-hide-dev-tools": true,
                                className: "action-button",
                                onClick: hide,
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                        className: "preference-icon",
                                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_eyeicon.default, {})
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                        children: "Hide"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    className: "preference-section",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                        className: "preference-header",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("label", {
                                children: "Disable Dev Tools for this project"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                                className: "preference-description",
                                children: [
                                    "To disable this UI completely, set",
                                    ' ',
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                                        className: "dev-tools-info-code",
                                        children: "devIndicators: false"
                                    }),
                                    ' ',
                                    "in your ",
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                                        className: "dev-tools-info-code",
                                        children: "next.config"
                                    }),
                                    ' ',
                                    "file."
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function ThemeIcon(param) {
    let { theme } = param;
    switch(theme){
        case 'system':
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_systemicon.default, {});
        case 'dark':
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_darkicon.default, {});
        case 'light':
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_lighticon.default, {});
        default:
            return null;
    }
}
const DEV_TOOLS_INFO_USER_PREFERENCES_STYLES = (0, _css.css)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=user-preferences.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-indicator.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEV_TOOLS_INDICATOR_STYLES: null,
    DevToolsIndicator: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEV_TOOLS_INDICATOR_STYLES: function() {
        return DEV_TOOLS_INDICATOR_STYLES;
    },
    DevToolsIndicator: function() {
        return DevToolsIndicator;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _shared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _toast = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/toast/index.js [client] (ecmascript)");
const _nextlogo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/next-logo.js [client] (ecmascript)");
const _initialize = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/internal/initialize.js [client] (ecmascript)");
const _devrenderindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/dev-indicator/dev-render-indicator.js [client] (ecmascript)");
const _usedelayedrender = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/hooks/use-delayed-render.js [client] (ecmascript)");
const _turbopackinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/turbopack-info.js [client] (ecmascript)");
const _routeinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/route-info.js [client] (ecmascript)");
const _gearicon = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/icons/gear-icon.js [client] (ecmascript)"));
const _userpreferences = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/user-preferences.js [client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/utils.js [client] (ecmascript)");
// TODO: add E2E tests to cover different scenarios
const INDICATOR_POSITION = ("TURBOPACK compile-time value", "bottom-left") || 'bottom-left';
function DevToolsIndicator(param) {
    let { state, errorCount, isBuildError, setIsErrorOverlayOpen } = param;
    const [isDevToolsIndicatorVisible, setIsDevToolsIndicatorVisible] = (0, _react.useState)(true);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(DevToolsPopover, {
        routerType: state.routerType,
        semver: state.versionInfo.installed,
        issueCount: errorCount,
        isStaticRoute: state.staticIndicator,
        hide: ()=>{
            setIsDevToolsIndicatorVisible(false);
            fetch('/__nextjs_disable_dev_indicator', {
                method: 'POST'
            });
        },
        setIsErrorOverlayOpen: setIsErrorOverlayOpen,
        isTurbopack: !!("TURBOPACK compile-time value", true),
        disabled: state.disableDevIndicator || !isDevToolsIndicatorVisible,
        isBuildError: isBuildError
    });
}
const Context = /*#__PURE__*/ (0, _react.createContext)({});
function getInitialPosition() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem(_shared.STORAGE_KEY_POSITION)) {
        return localStorage.getItem(_shared.STORAGE_KEY_POSITION);
    }
    return INDICATOR_POSITION;
}
const OVERLAYS = {
    Root: 'root',
    Turbo: 'turbo',
    Route: 'route',
    Preferences: 'preferences'
};
function DevToolsPopover(param) {
    let { routerType, disabled, issueCount, isStaticRoute, isTurbopack, isBuildError, hide, setIsErrorOverlayOpen } = param;
    const menuRef = (0, _react.useRef)(null);
    const triggerRef = (0, _react.useRef)(null);
    const [open, setOpen] = (0, _react.useState)(null);
    const [position, setPosition] = (0, _react.useState)(getInitialPosition());
    const [selectedIndex, setSelectedIndex] = (0, _react.useState)(-1);
    const isMenuOpen = open === OVERLAYS.Root;
    const isTurbopackInfoOpen = open === OVERLAYS.Turbo;
    const isRouteInfoOpen = open === OVERLAYS.Route;
    const isPreferencesOpen = open === OVERLAYS.Preferences;
    const { mounted: menuMounted, rendered: menuRendered } = (0, _usedelayedrender.useDelayedRender)(isMenuOpen, {
        // Intentionally no fade in, makes the UI feel more immediate
        enterDelay: 0,
        // Graceful fade out to confirm that the UI did not break
        exitDelay: _utils.MENU_DURATION_MS
    });
    // Features to make the menu accessible
    (0, _utils.useFocusTrap)(menuRef, triggerRef, isMenuOpen);
    (0, _utils.useClickOutside)(menuRef, triggerRef, isMenuOpen, closeMenu);
    (0, _react.useEffect)(()=>{
        if (open === null) {
            // Avoid flashing selected state
            const id = setTimeout(()=>{
                setSelectedIndex(-1);
            }, _utils.MENU_DURATION_MS);
            return ()=>clearTimeout(id);
        }
    }, [
        open
    ]);
    function select(index) {
        var _menuRef_current;
        if (index === 'first') {
            setTimeout(()=>{
                var _menuRef_current;
                const all = (_menuRef_current = menuRef.current) == null ? void 0 : _menuRef_current.querySelectorAll('[role="menuitem"]');
                if (all) {
                    const firstIndex = all[0].getAttribute('data-index');
                    select(Number(firstIndex));
                }
            });
            return;
        }
        if (index === 'last') {
            setTimeout(()=>{
                var _menuRef_current;
                const all = (_menuRef_current = menuRef.current) == null ? void 0 : _menuRef_current.querySelectorAll('[role="menuitem"]');
                if (all) {
                    const lastIndex = all.length - 1;
                    select(lastIndex);
                }
            });
            return;
        }
        const el = (_menuRef_current = menuRef.current) == null ? void 0 : _menuRef_current.querySelector('[data-index="' + index + '"]');
        if (el) {
            setSelectedIndex(index);
            el == null ? void 0 : el.focus();
        }
    }
    function onMenuKeydown(e) {
        e.preventDefault();
        switch(e.key){
            case 'ArrowDown':
                const next = selectedIndex + 1;
                select(next);
                break;
            case 'ArrowUp':
                const prev = selectedIndex - 1;
                select(prev);
                break;
            case 'Home':
                select('first');
                break;
            case 'End':
                select('last');
                break;
            default:
                break;
        }
    }
    function openErrorOverlay() {
        setOpen(null);
        if (issueCount > 0) {
            setIsErrorOverlayOpen(true);
        }
    }
    function toggleErrorOverlay() {
        setIsErrorOverlayOpen((prev)=>!prev);
    }
    function openRootMenu() {
        setOpen((prevOpen)=>{
            if (prevOpen === null) select('first');
            return OVERLAYS.Root;
        });
    }
    function onTriggerClick() {
        if (open === OVERLAYS.Root) {
            setOpen(null);
        } else {
            openRootMenu();
            setTimeout(()=>{
                select('first');
            });
        }
    }
    function closeMenu() {
        // Only close when we were on `Root`,
        // otherwise it will close other overlays
        setOpen((prevOpen)=>{
            if (prevOpen === OVERLAYS.Root) {
                return null;
            }
            return prevOpen;
        });
    }
    function handleHideDevtools() {
        setOpen(null);
        hide();
    }
    const [vertical, horizontal] = position.split('-', 2);
    const popover = {
        [vertical]: 'calc(100% + 8px)',
        [horizontal]: 0
    };
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_toast.Toast, {
        "data-nextjs-toast": true,
        style: {
            '--animate-out-duration-ms': "" + _utils.MENU_DURATION_MS + "ms",
            '--animate-out-timing-function': _utils.MENU_CURVE,
            boxShadow: 'none',
            zIndex: 2147483647,
            // Reset the toast component's default positions.
            bottom: 'initial',
            left: 'initial',
            [vertical]: '10px',
            [horizontal]: '20px'
        },
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_nextlogo.NextLogo, {
                ref: triggerRef,
                "aria-haspopup": "menu",
                "aria-expanded": isMenuOpen,
                "aria-controls": "nextjs-dev-tools-menu",
                "aria-label": "" + (isMenuOpen ? 'Close' : 'Open') + " Next.js Dev Tools",
                "data-nextjs-dev-tools-button": true,
                disabled: disabled,
                issueCount: issueCount,
                onTriggerClick: onTriggerClick,
                toggleErrorOverlay: toggleErrorOverlay,
                isDevBuilding: (0, _initialize.useIsDevBuilding)(),
                isDevRendering: (0, _devrenderindicator.useIsDevRendering)(),
                isBuildError: isBuildError
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_routeinfo.RouteInfo, {
                isOpen: isRouteInfoOpen,
                close: openRootMenu,
                triggerRef: triggerRef,
                style: popover,
                routerType: routerType,
                routeType: isStaticRoute ? 'Static' : 'Dynamic'
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_turbopackinfo.TurbopackInfo, {
                isOpen: isTurbopackInfoOpen,
                close: openRootMenu,
                triggerRef: triggerRef,
                style: popover
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_userpreferences.UserPreferences, {
                isOpen: isPreferencesOpen,
                close: openRootMenu,
                triggerRef: triggerRef,
                style: popover,
                hide: handleHideDevtools,
                setPosition: setPosition,
                position: position
            }),
            menuMounted && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                ref: menuRef,
                id: "nextjs-dev-tools-menu",
                role: "menu",
                dir: "ltr",
                "aria-orientation": "vertical",
                "aria-label": "Next.js Dev Tools Items",
                tabIndex: -1,
                className: "dev-tools-indicator-menu",
                onKeyDown: onMenuKeydown,
                "data-rendered": menuRendered,
                style: popover,
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(Context.Provider, {
                    value: {
                        closeMenu,
                        selectedIndex,
                        setSelectedIndex
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            className: "dev-tools-indicator-inner",
                            children: [
                                issueCount > 0 && /*#__PURE__*/ (0, _jsxruntime.jsx)(MenuItem, {
                                    title: issueCount + " " + (issueCount === 1 ? 'issue' : 'issues') + " found. Click to view details in the dev overlay.",
                                    index: 0,
                                    label: "Issues",
                                    value: /*#__PURE__*/ (0, _jsxruntime.jsx)(IssueCount, {
                                        children: issueCount
                                    }),
                                    onClick: openErrorOverlay
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(MenuItem, {
                                    title: "Current route is " + (isStaticRoute ? 'static' : 'dynamic') + ".",
                                    label: "Route",
                                    index: 1,
                                    value: isStaticRoute ? 'Static' : 'Dynamic',
                                    onClick: ()=>setOpen(OVERLAYS.Route),
                                    "data-nextjs-route-type": isStaticRoute ? 'static' : 'dynamic'
                                }),
                                isTurbopack ? /*#__PURE__*/ (0, _jsxruntime.jsx)(MenuItem, {
                                    title: "Turbopack is enabled.",
                                    label: "Turbopack",
                                    value: "Enabled"
                                }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(MenuItem, {
                                    index: 2,
                                    title: "Learn about Turbopack and how to enable it in your application.",
                                    label: "Try Turbopack",
                                    value: /*#__PURE__*/ (0, _jsxruntime.jsx)(ChevronRight, {}),
                                    onClick: ()=>setOpen(OVERLAYS.Turbo)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "dev-tools-indicator-footer",
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(MenuItem, {
                                "data-preferences": true,
                                label: "Preferences",
                                value: /*#__PURE__*/ (0, _jsxruntime.jsx)(_gearicon.default, {}),
                                onClick: ()=>setOpen(OVERLAYS.Preferences),
                                index: isTurbopack ? 2 : 3
                            })
                        })
                    ]
                })
            })
        ]
    });
}
function ChevronRight() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            fill: "#666",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.50011 1.93945L6.03044 2.46978L10.8537 7.293C11.2442 7.68353 11.2442 8.31669 10.8537 8.70722L6.03044 13.5304L5.50011 14.0608L4.43945 13.0001L4.96978 12.4698L9.43945 8.00011L4.96978 3.53044L4.43945 3.00011L5.50011 1.93945Z"
        })
    });
}
function MenuItem(param) {
    let { index, label, value, onClick, href, ...props } = param;
    const isInteractive = typeof onClick === 'function' || typeof href === 'string';
    const { closeMenu, selectedIndex, setSelectedIndex } = (0, _react.useContext)(Context);
    const selected = selectedIndex === index;
    function click() {
        if (isInteractive) {
            onClick == null ? void 0 : onClick();
            closeMenu();
            if (href) {
                window.open(href, '_blank', 'noopener, noreferrer');
            }
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        className: "dev-tools-indicator-item",
        "data-index": index,
        "data-selected": selected,
        onClick: click,
        // Needs `onMouseMove` instead of enter to work together
        // with keyboard and mouse input
        onMouseMove: ()=>{
            if (isInteractive && index !== undefined && selectedIndex !== index) {
                setSelectedIndex(index);
            }
        },
        onMouseLeave: ()=>setSelectedIndex(-1),
        onKeyDown: (e)=>{
            if (e.key === 'Enter' || e.key === ' ') {
                click();
            }
        },
        role: isInteractive ? 'menuitem' : undefined,
        tabIndex: selected ? 0 : -1,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "dev-tools-indicator-label",
                children: label
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "dev-tools-indicator-value",
                children: value
            })
        ]
    });
}
function IssueCount(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
        className: "dev-tools-indicator-issue-count",
        "data-has-issues": children > 0,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "dev-tools-indicator-issue-count-indicator"
            }),
            children
        ]
    });
}
const DEV_TOOLS_INDICATOR_STYLES = "\n  .dev-tools-indicator-menu {\n    -webkit-font-smoothing: antialiased;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    background: var(--color-background-100);\n    border: 1px solid var(--color-gray-alpha-400);\n    background-clip: padding-box;\n    box-shadow: var(--shadow-menu);\n    border-radius: var(--rounded-xl);\n    position: absolute;\n    font-family: var(--font-stack-sans);\n    z-index: 1000;\n    overflow: hidden;\n    opacity: 0;\n    outline: 0;\n    min-width: 248px;\n    transition: opacity var(--animate-out-duration-ms)\n      var(--animate-out-timing-function);\n\n    &[data-rendered='true'] {\n      opacity: 1;\n      scale: 1;\n    }\n  }\n\n  .dev-tools-indicator-inner {\n    padding: 6px;\n    width: 100%;\n  }\n\n  .dev-tools-indicator-item {\n    display: flex;\n    align-items: center;\n    padding: 8px 6px;\n    height: var(--size-36);\n    border-radius: 6px;\n    text-decoration: none !important;\n    user-select: none;\n    white-space: nowrap;\n\n    svg {\n      width: var(--size-16);\n      height: var(--size-16);\n    }\n\n    &:focus-visible {\n      outline: 0;\n    }\n  }\n\n  .dev-tools-indicator-footer {\n    background: var(--color-background-200);\n    padding: 6px;\n    border-top: 1px solid var(--color-gray-400);\n    width: 100%;\n  }\n\n  .dev-tools-indicator-item[data-selected='true'] {\n    cursor: pointer;\n    background-color: var(--color-gray-200);\n  }\n\n  .dev-tools-indicator-label {\n    font-size: var(--size-14);\n    line-height: var(--size-20);\n    color: var(--color-gray-1000);\n  }\n\n  .dev-tools-indicator-value {\n    font-size: var(--size-14);\n    line-height: var(--size-20);\n    color: var(--color-gray-900);\n    margin-left: auto;\n  }\n\n  .dev-tools-indicator-issue-count {\n    --color-primary: var(--color-gray-800);\n    --color-secondary: var(--color-gray-100);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    min-width: var(--size-40);\n    height: var(--size-24);\n    background: var(--color-background-100);\n    border: 1px solid var(--color-gray-alpha-400);\n    background-clip: padding-box;\n    box-shadow: var(--shadow-small);\n    padding: 2px;\n    color: var(--color-gray-1000);\n    border-radius: 128px;\n    font-weight: 500;\n    font-size: var(--size-13);\n    font-variant-numeric: tabular-nums;\n\n    &[data-has-issues='true'] {\n      --color-primary: var(--color-red-800);\n      --color-secondary: var(--color-red-100);\n    }\n\n    .dev-tools-indicator-issue-count-indicator {\n      width: var(--size-8);\n      height: var(--size-8);\n      background: var(--color-primary);\n      box-shadow: 0 0 0 2px var(--color-secondary);\n      border-radius: 50%;\n    }\n  }\n\n  .dev-tools-indicator-shortcut {\n    display: flex;\n    gap: 4px;\n\n    kbd {\n      width: var(--size-20);\n      height: var(--size-20);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: var(--rounded-md);\n      border: 1px solid var(--color-gray-400);\n      font-family: var(--font-stack-sans);\n      background: var(--color-background-100);\n      color: var(--color-gray-1000);\n      text-align: center;\n      font-size: var(--size-12);\n      line-height: var(--size-16);\n    }\n  }\n";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-tools-indicator.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/styles/component-styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ComponentStyles", {
    enumerable: true,
    get: function() {
        return ComponentStyles;
    }
});
const _tagged_template_literal_loose = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _codeframe = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/code-frame/code-frame.js [client] (ecmascript)");
const _dialog = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/dialog/index.js [client] (ecmascript)");
const _erroroverlaylayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-layout/error-overlay-layout.js [client] (ecmascript)");
const _erroroverlaybottomstack = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-bottom-stack/index.js [client] (ecmascript)");
const _erroroverlaypagination = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-pagination/error-overlay-pagination.js [client] (ecmascript)");
const _styles = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/overlay/styles.js [client] (ecmascript)");
const _erroroverlayfooter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-footer/error-overlay-footer.js [client] (ecmascript)");
const _terminal = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/terminal/terminal.js [client] (ecmascript)");
const _toast = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/toast/index.js [client] (ecmascript)");
const _versionstalenessinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/version-staleness-info/version-staleness-info.js [client] (ecmascript)");
const _builderror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/build-error.js [client] (ecmascript)");
const _errors = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/errors.js [client] (ecmascript)");
const _runtimeerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/runtime-error/index.js [client] (ecmascript)");
const _copybutton = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/copy-button/index.js [client] (ecmascript)");
const _callstackframe = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/call-stack-frame/call-stack-frame.js [client] (ecmascript)");
const _devtoolsindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-indicator.js [client] (ecmascript)");
const _css = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/css.js [client] (ecmascript)");
const _editorlink = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/terminal/editor-link.js [client] (ecmascript)");
const _environmentnamelabel = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/environment-name-label/environment-name-label.js [client] (ecmascript)");
const _devtoolsinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/dev-tools-info.js [client] (ecmascript)");
const _turbopackinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/turbopack-info.js [client] (ecmascript)");
const _routeinfo = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/route-info.js [client] (ecmascript)");
const _userpreferences = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-info/user-preferences.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function ComponentStyles() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _css.css)(_templateObject(), _copybutton.COPY_BUTTON_STYLES, _callstackframe.CALL_STACK_FRAME_STYLES, _environmentnamelabel.ENVIRONMENT_NAME_LABEL_STYLES, _styles.styles, _toast.styles, _dialog.styles, _erroroverlaylayout.styles, _erroroverlayfooter.styles, _erroroverlaybottomstack.styles, _erroroverlaypagination.styles, _codeframe.CODE_FRAME_STYLES, _terminal.TERMINAL_STYLES, _editorlink.EDITOR_LINK_STYLES, _builderror.styles, _errors.styles, _runtimeerror.styles, _versionstalenessinfo.styles, _devtoolsindicator.DEV_TOOLS_INDICATOR_STYLES, _devtoolsinfo.DEV_TOOLS_INFO_STYLES, _turbopackinfo.DEV_TOOLS_INFO_TURBOPACK_INFO_STYLES, _routeinfo.DEV_TOOLS_INFO_ROUTE_INFO_STYLES, _userpreferences.DEV_TOOLS_INFO_USER_PREFERENCES_STYLES)
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=component-styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/styles/css-reset.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CssReset", {
    enumerable: true,
    get: function() {
        return CssReset;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _css = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/css.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        :host {\n          all: initial;\n\n          /* the direction property is not reset by 'all' */\n          direction: ltr;\n        }\n\n        /*!\n         * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n         * Copyright 2011-2019 The Bootstrap Authors\n         * Copyright 2011-2019 Twitter, Inc.\n         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n         * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n         */\n        *,\n        *::before,\n        *::after {\n          box-sizing: border-box;\n        }\n\n        :host {\n          font-family: sans-serif;\n          line-height: 1.15;\n          -webkit-text-size-adjust: 100%;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n\n        article,\n        aside,\n        figcaption,\n        figure,\n        footer,\n        header,\n        hgroup,\n        main,\n        nav,\n        section {\n          display: block;\n        }\n\n        :host {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n            'Noto Color Emoji';\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          color: var(--color-font);\n          text-align: left;\n        }\n\n        :host:not(button) {\n          background-color: #fff;\n        }\n\n        [tabindex='-1']:focus:not(:focus-visible) {\n          outline: 0 !important;\n        }\n\n        hr {\n          box-sizing: content-box;\n          height: 0;\n          overflow: visible;\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-top: 0;\n          margin-bottom: 8px;\n        }\n\n        p {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        abbr[title],\n        abbr[data-original-title] {\n          text-decoration: underline;\n          -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n          cursor: help;\n          border-bottom: 0;\n          -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n        }\n\n        address {\n          margin-bottom: 16px;\n          font-style: normal;\n          line-height: inherit;\n        }\n\n        ol,\n        ul,\n        dl {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        ol ol,\n        ul ul,\n        ol ul,\n        ul ol {\n          margin-bottom: 0;\n        }\n\n        dt {\n          font-weight: 700;\n        }\n\n        dd {\n          margin-bottom: 8px;\n          margin-left: 0;\n        }\n\n        blockquote {\n          margin: 0 0 16px;\n        }\n\n        b,\n        strong {\n          font-weight: bolder;\n        }\n\n        small {\n          font-size: 80%;\n        }\n\n        sub,\n        sup {\n          position: relative;\n          font-size: 75%;\n          line-height: 0;\n          vertical-align: baseline;\n        }\n\n        sub {\n          bottom: -0.25em;\n        }\n\n        sup {\n          top: -0.5em;\n        }\n\n        a {\n          color: #007bff;\n          text-decoration: none;\n          background-color: transparent;\n        }\n\n        a:hover {\n          color: #0056b3;\n          text-decoration: underline;\n        }\n\n        a:not([href]) {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):hover {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        pre,\n        code,\n        kbd,\n        samp {\n          font-family: SFMono-Regular, Menlo, Monaco, Consolas,\n            'Liberation Mono', 'Courier New', monospace;\n          font-size: 1em;\n        }\n\n        pre {\n          margin-top: 0;\n          margin-bottom: 16px;\n          overflow: auto;\n        }\n\n        figure {\n          margin: 0 0 16px;\n        }\n\n        img {\n          vertical-align: middle;\n          border-style: none;\n        }\n\n        svg {\n          overflow: hidden;\n          vertical-align: middle;\n        }\n\n        table {\n          border-collapse: collapse;\n        }\n\n        caption {\n          padding-top: 12px;\n          padding-bottom: 12px;\n          color: #6c757d;\n          text-align: left;\n          caption-side: bottom;\n        }\n\n        th {\n          text-align: inherit;\n        }\n\n        label {\n          display: inline-block;\n          margin-bottom: 8px;\n        }\n\n        button {\n          border-radius: 0;\n          border: 0;\n          padding: 0;\n          margin: 0;\n          background: none;\n          appearance: none;\n          -webkit-appearance: none;\n        }\n\n        button:focus {\n          outline: 1px dotted;\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n\n        button:focus:not(:focus-visible) {\n          outline: none;\n        }\n\n        input,\n        button,\n        select,\n        optgroup,\n        textarea {\n          margin: 0;\n          font-family: inherit;\n          font-size: inherit;\n          line-height: inherit;\n        }\n\n        button,\n        input {\n          overflow: visible;\n        }\n\n        button,\n        select {\n          text-transform: none;\n        }\n\n        select {\n          word-wrap: normal;\n        }\n\n        button,\n        [type='button'],\n        [type='reset'],\n        [type='submit'] {\n          -webkit-appearance: button;\n        }\n\n        button:not(:disabled),\n        [type='button']:not(:disabled),\n        [type='reset']:not(:disabled),\n        [type='submit']:not(:disabled) {\n          cursor: pointer;\n        }\n\n        button::-moz-focus-inner,\n        [type='button']::-moz-focus-inner,\n        [type='reset']::-moz-focus-inner,\n        [type='submit']::-moz-focus-inner {\n          padding: 0;\n          border-style: none;\n        }\n\n        input[type='radio'],\n        input[type='checkbox'] {\n          box-sizing: border-box;\n          padding: 0;\n        }\n\n        input[type='date'],\n        input[type='time'],\n        input[type='datetime-local'],\n        input[type='month'] {\n          -webkit-appearance: listbox;\n        }\n\n        textarea {\n          overflow: auto;\n          resize: vertical;\n        }\n\n        fieldset {\n          min-width: 0;\n          padding: 0;\n          margin: 0;\n          border: 0;\n        }\n\n        legend {\n          display: block;\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin-bottom: 8px;\n          font-size: 24px;\n          line-height: inherit;\n          color: inherit;\n          white-space: normal;\n        }\n\n        progress {\n          vertical-align: baseline;\n        }\n\n        [type='number']::-webkit-inner-spin-button,\n        [type='number']::-webkit-outer-spin-button {\n          height: auto;\n        }\n\n        [type='search'] {\n          outline-offset: -2px;\n          -webkit-appearance: none;\n        }\n\n        [type='search']::-webkit-search-decoration {\n          -webkit-appearance: none;\n        }\n\n        ::-webkit-file-upload-button {\n          font: inherit;\n          -webkit-appearance: button;\n        }\n\n        output {\n          display: inline-block;\n        }\n\n        summary {\n          display: list-item;\n          cursor: pointer;\n        }\n\n        template {\n          display: none;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function CssReset() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _css.css)(_templateObject())
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=css-reset.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/styles/colors.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Colors", {
    enumerable: true,
    get: function() {
        return Colors;
    }
});
const _tagged_template_literal_loose = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _css = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/css.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        '\n        :host {\n          /* \n           * CAUTION: THIS IS A WORKAROUND!\n           * For now, we use @babel/code-frame to parse the code frame which does not support option to change the color.\n           * x-ref: https://github.com/babel/babel/blob/efa52324ff835b794c48080f14877b6caf32cd15/packages/babel-code-frame/src/defs.ts#L40-L54\n           * So, we do a workaround mapping to change the color matching the theme.\n           *\n           * For example, in @babel/code-frame, the "keyword" is mapped to ANSI "cyan".\n           * We want the "keyword" to use the "syntax-keyword" color in the theme.\n           * So, we map the "cyan" to the "syntax-keyword" in the theme.\n           */\n          /* cyan: keyword */\n          --color-ansi-cyan: var(--color-syntax-keyword);\n          /* yellow: capitalized, jsxIdentifier, punctuation */\n          --color-ansi-yellow: var(--color-syntax-function);\n          /* magenta: number, regex */\n          --color-ansi-magenta: var(--color-syntax-keyword);\n          /* green: string */\n          --color-ansi-green: var(--color-syntax-string);\n          /* gray (bright black): comment, gutter */\n          --color-ansi-bright-black: var(--color-syntax-comment);\n\n          /* Ansi - Temporary */\n          --color-ansi-selection: var(--color-gray-alpha-300);\n          --color-ansi-bg: var(--color-background-200);\n          --color-ansi-fg: var(--color-gray-1000);\n\n          --color-ansi-white: var(--color-gray-700);\n          --color-ansi-black: var(--color-gray-200);\n          --color-ansi-blue: var(--color-blue-700);\n          --color-ansi-red: var(--color-red-700);\n          --color-ansi-bright-white: var(--color-gray-1000);\n          --color-ansi-bright-blue: var(--color-blue-800);\n          --color-ansi-bright-cyan: var(--color-blue-800);\n          --color-ansi-bright-green: var(--color-green-800);\n          --color-ansi-bright-magenta: var(--color-blue-800);\n          --color-ansi-bright-red: var(--color-red-800);\n          --color-ansi-bright-yellow: var(--color-amber-900);\n\n          /* Background Light */\n          --color-background-100: #ffffff;\n          --color-background-200: #fafafa;\n\n          /* Syntax Light */\n          --color-syntax-comment: #545454;\n          --color-syntax-constant: #171717;\n          --color-syntax-function: #0054ad;\n          --color-syntax-keyword: #a51850;\n          --color-syntax-link: #066056;\n          --color-syntax-parameter: #8f3e00;\n          --color-syntax-punctuation: #171717;\n          --color-syntax-string: #036157;\n          --color-syntax-string-expression: #066056;\n\n          /* Gray Scale Light */\n          --color-gray-100: #f2f2f2;\n          --color-gray-200: #ebebeb;\n          --color-gray-300: #e6e6e6;\n          --color-gray-400: #eaeaea;\n          --color-gray-500: #c9c9c9;\n          --color-gray-600: #a8a8a8;\n          --color-gray-700: #8f8f8f;\n          --color-gray-800: #7d7d7d;\n          --color-gray-900: #666666;\n          --color-gray-1000: #171717;\n\n          /* Gray Alpha Scale Light */\n          --color-gray-alpha-100: rgba(0, 0, 0, 0.05);\n          --color-gray-alpha-200: rgba(0, 0, 0, 0.081);\n          --color-gray-alpha-300: rgba(0, 0, 0, 0.1);\n          --color-gray-alpha-400: rgba(0, 0, 0, 0.08);\n          --color-gray-alpha-500: rgba(0, 0, 0, 0.21);\n          --color-gray-alpha-600: rgba(0, 0, 0, 0.34);\n          --color-gray-alpha-700: rgba(0, 0, 0, 0.44);\n          --color-gray-alpha-800: rgba(0, 0, 0, 0.51);\n          --color-gray-alpha-900: rgba(0, 0, 0, 0.605);\n          --color-gray-alpha-1000: rgba(0, 0, 0, 0.91);\n\n          /* Blue Scale Light */\n          --color-blue-100: #f0f7ff;\n          --color-blue-200: #edf6ff;\n          --color-blue-300: #e1f0ff;\n          --color-blue-400: #cde7ff;\n          --color-blue-500: #99ceff;\n          --color-blue-600: #52aeff;\n          --color-blue-700: #0070f3;\n          --color-blue-800: #0060d1;\n          --color-blue-900: #0067d6;\n          --color-blue-1000: #0025ad;\n\n          /* Red Scale Light */\n          --color-red-100: #fff0f0;\n          --color-red-200: #ffebeb;\n          --color-red-300: #ffe5e5;\n          --color-red-400: #fdd8d8;\n          --color-red-500: #f8baba;\n          --color-red-600: #f87274;\n          --color-red-700: #e5484d;\n          --color-red-800: #da3036;\n          --color-red-900: #ca2a30;\n          --color-red-1000: #381316;\n\n          /* Amber Scale Light */\n          --color-amber-100: #fff6e5;\n          --color-amber-200: #fff4d5;\n          --color-amber-300: #fef0cd;\n          --color-amber-400: #ffddbf;\n          --color-amber-500: #ffc96b;\n          --color-amber-600: #f5b047;\n          --color-amber-700: #ffb224;\n          --color-amber-800: #ff990a;\n          --color-amber-900: #a35200;\n          --color-amber-1000: #4e2009;\n\n          /* Green Scale Light */\n          --color-green-100: #effbef;\n          --color-green-200: #eafaea;\n          --color-green-300: #dcf6dc;\n          --color-green-400: #c8f1c9;\n          --color-green-500: #99e59f;\n          --color-green-600: #6cda76;\n          --color-green-700: #46a758;\n          --color-green-800: #388e4a;\n          --color-green-900: #297c3b;\n          --color-green-1000: #18311e;\n\n          /* Turbopack Light - Temporary */\n          --color-turbopack-text-red: #ff1e56;\n          --color-turbopack-text-blue: #0096ff;\n          --color-turbopack-border-red: #f0adbe;\n          --color-turbopack-border-blue: #adccea;\n          --color-turbopack-background-red: #fff7f9;\n          --color-turbopack-background-blue: #f6fbff;\n        }\n      '
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function Colors() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _css.css)(_templateObject())
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=colors.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/root-layout-missing-tags-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RootLayoutMissingTagsError", {
    enumerable: true,
    get: function() {
        return RootLayoutMissingTagsError;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _hotlinkedtext = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/hot-linked-text/index.js [client] (ecmascript)");
const _erroroverlaylayout = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay-layout/error-overlay-layout.js [client] (ecmascript)");
function RootLayoutMissingTagsError(param) {
    let { missingTags, ...props } = param;
    const noop = (0, _react.useCallback)(()=>{}, []);
    const error = Object.defineProperty(new Error("The following tags are missing in the Root Layout: " + missingTags.map((tagName)=>"<" + tagName + ">").join(', ') + ".\nRead more at https://nextjs.org/docs/messages/missing-root-layout-tags"), "__NEXT_ERROR_CODE", {
        value: "E638",
        enumerable: false,
        configurable: true
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_erroroverlaylayout.ErrorOverlayLayout, {
        errorType: "Missing Required HTML Tag",
        error: error,
        errorMessage: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
            text: error.message
        }),
        onClose: noop,
        ...props
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=root-layout-missing-tags-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay/error-overlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorOverlay", {
    enumerable: true,
    get: function() {
        return ErrorOverlay;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _builderror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/build-error.js [client] (ecmascript)");
const _errors = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/errors.js [client] (ecmascript)");
const _rootlayoutmissingtagserror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/root-layout-missing-tags-error.js [client] (ecmascript)");
const _usedelayedrender = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/hooks/use-delayed-render.js [client] (ecmascript)");
const transitionDurationMs = 200;
function ErrorOverlay(param) {
    let { state, runtimeErrors, isErrorOverlayOpen, setIsErrorOverlayOpen } = param;
    var _state_rootLayoutMissingTags;
    const isTurbopack = !!("TURBOPACK compile-time value", true);
    // This hook lets us do an exit animation before unmounting the component
    const { mounted, rendered } = (0, _usedelayedrender.useDelayedRender)(isErrorOverlayOpen, {
        exitDelay: transitionDurationMs
    });
    const commonProps = {
        rendered,
        transitionDurationMs,
        isTurbopack,
        versionInfo: state.versionInfo
    };
    if (!!((_state_rootLayoutMissingTags = state.rootLayoutMissingTags) == null ? void 0 : _state_rootLayoutMissingTags.length)) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_rootlayoutmissingtagserror.RootLayoutMissingTagsError, {
            ...commonProps,
            // This is not a runtime error, forcedly display error overlay
            rendered: true,
            missingTags: state.rootLayoutMissingTags
        });
    }
    if (state.buildError !== null) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_builderror.BuildError, {
            ...commonProps,
            message: state.buildError,
            // This is not a runtime error, forcedly display error overlay
            rendered: true
        });
    }
    // No Runtime Errors.
    if (!runtimeErrors.length) {
        // Workaround React quirk that triggers "Switch to client-side rendering" if
        // we return no Suspense boundary here.
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {});
    }
    if (!mounted) {
        // Workaround React quirk that triggers "Switch to client-side rendering" if
        // we return no Suspense boundary here.
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {});
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errors.Errors, {
        ...commonProps,
        debugInfo: state.debugInfo,
        runtimeErrors: runtimeErrors,
        onClose: ()=>{
            setIsErrorOverlayOpen(false);
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-overlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/runtime-error/render-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RenderError", {
    enumerable: true,
    get: function() {
        return RenderError;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _shared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _geterrorbytype = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/get-error-by-type.js [client] (ecmascript)");
function getErrorSignature(ev) {
    const { event } = ev;
    // eslint-disable-next-line default-case -- TypeScript checks this
    switch(event.type){
        case _shared.ACTION_UNHANDLED_ERROR:
        case _shared.ACTION_UNHANDLED_REJECTION:
            {
                return event.reason.name + "::" + event.reason.message + "::" + event.reason.stack;
            }
    }
}
const RenderError = (props)=>{
    var _state_rootLayoutMissingTags;
    const { state } = props;
    const isBuildError = !!((_state_rootLayoutMissingTags = state.rootLayoutMissingTags) == null ? void 0 : _state_rootLayoutMissingTags.length) || !!state.buildError;
    if (isBuildError) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(RenderBuildError, {
            ...props
        });
    } else {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(RenderRuntimeError, {
            ...props
        });
    }
};
const RenderRuntimeError = (param)=>{
    let { children, state, isAppDir } = param;
    const { errors } = state;
    const [lookups, setLookups] = (0, _react.useState)({});
    const [runtimeErrors, nextError] = (0, _react.useMemo)(()=>{
        let ready = [];
        let next = null;
        // Ensure errors are displayed in the order they occurred in:
        for(let idx = 0; idx < errors.length; ++idx){
            const e = errors[idx];
            const { id } = e;
            if (id in lookups) {
                ready.push(lookups[id]);
                continue;
            }
            // Check for duplicate errors
            if (idx > 0) {
                const prev = errors[idx - 1];
                if (getErrorSignature(prev) === getErrorSignature(e)) {
                    continue;
                }
            }
            next = e;
            break;
        }
        return [
            ready,
            next
        ];
    }, [
        errors,
        lookups
    ]);
    (0, _react.useEffect)(()=>{
        if (nextError == null) {
            return;
        }
        let mounted = true;
        (0, _geterrorbytype.getErrorByType)(nextError, isAppDir).then((resolved)=>{
            if (mounted) {
                // We don't care if the desired error changed while we were resolving,
                // thus we're not tracking it using a ref. Once the work has been done,
                // we'll store it.
                setLookups((m)=>({
                        ...m,
                        [resolved.id]: resolved
                    }));
            }
        });
        return ()=>{
            mounted = false;
        };
    }, [
        nextError,
        isAppDir
    ]);
    const totalErrorCount = runtimeErrors.length;
    return children({
        runtimeErrors,
        totalErrorCount
    });
};
const RenderBuildError = (param)=>{
    let { children } = param;
    return children({
        runtimeErrors: [],
        // Build errors and missing root layout tags persist until fixed,
        // so we can set a fixed error count of 1
        totalErrorCount: 1
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/styles/dark-theme.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DarkTheme", {
    enumerable: true,
    get: function() {
        return DarkTheme;
    }
});
const _tagged_template_literal_loose = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _css = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/utils/css.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n      :host(.dark) {\n        ",
        "\n        ",
        "\n      }\n\n      @media (prefers-color-scheme: dark) {\n        :host(:not(.light)) {\n          ",
        "\n          ",
        "\n        }\n      }\n    "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const colors = "\n  /* Background Dark */\n  --color-background-100: #0a0a0a;\n  --color-background-200: #000000;\n\n  /* Syntax Dark */\n  --color-syntax-comment: #a0a0a0;\n  --color-syntax-constant: #ededed;\n  --color-syntax-function: #52a9ff;\n  --color-syntax-keyword: #f76e99;\n  --color-syntax-link: #0ac5b2;\n  --color-syntax-parameter: #f1a10d;\n  --color-syntax-punctuation: #ededed;\n  --color-syntax-string: #0ac5b2;\n  --color-syntax-string-expression: #0ac5b2;\n\n  /* Gray Scale Dark */\n  --color-gray-100: #1a1a1a;\n  --color-gray-200: #1f1f1f;\n  --color-gray-300: #292929;\n  --color-gray-400: #2e2e2e;\n  --color-gray-500: #454545;\n  --color-gray-600: #878787;\n  --color-gray-700: #8f8f8f;\n  --color-gray-800: #7d7d7d;\n  --color-gray-900: #a0a0a0;\n  --color-gray-1000: #ededed;\n\n  /* Gray Alpha Scale Dark */\n  --color-gray-alpha-100: rgba(255, 255, 255, 0.066);\n  --color-gray-alpha-200: rgba(255, 255, 255, 0.087);\n  --color-gray-alpha-300: rgba(255, 255, 255, 0.125);\n  --color-gray-alpha-400: rgba(255, 255, 255, 0.145);\n  --color-gray-alpha-500: rgba(255, 255, 255, 0.239);\n  --color-gray-alpha-600: rgba(255, 255, 255, 0.506);\n  --color-gray-alpha-700: rgba(255, 255, 255, 0.54);\n  --color-gray-alpha-800: rgba(255, 255, 255, 0.47);\n  --color-gray-alpha-900: rgba(255, 255, 255, 0.61);\n  --color-gray-alpha-1000: rgba(255, 255, 255, 0.923);\n\n  /* Blue Scale Dark */\n  --color-blue-100: #0f1b2d;\n  --color-blue-200: #10243e;\n  --color-blue-300: #0f3058;\n  --color-blue-400: #0d3868;\n  --color-blue-500: #0a4481;\n  --color-blue-600: #0091ff;\n  --color-blue-700: #0070f3;\n  --color-blue-800: #0060d1;\n  --color-blue-900: #52a9ff;\n  --color-blue-1000: #eaf6ff;\n\n  /* Red Scale Dark */\n  --color-red-100: #2a1314;\n  --color-red-200: #3d1719;\n  --color-red-300: #551a1e;\n  --color-red-400: #671e22;\n  --color-red-500: #822025;\n  --color-red-600: #e5484d;\n  --color-red-700: #e5484d;\n  --color-red-800: #da3036;\n  --color-red-900: #ff6369;\n  --color-red-1000: #ffecee;\n\n  /* Amber Scale Dark */\n  --color-amber-100: #271700;\n  --color-amber-200: #341c00;\n  --color-amber-300: #4a2900;\n  --color-amber-400: #573300;\n  --color-amber-500: #693f05;\n  --color-amber-600: #e79c13;\n  --color-amber-700: #ffb224;\n  --color-amber-800: #ff990a;\n  --color-amber-900: #f1a10d;\n  --color-amber-1000: #fef3dd;\n\n  /* Green Scale Dark */\n  --color-green-100: #0b2211;\n  --color-green-200: #0f2c17;\n  --color-green-300: #11351b;\n  --color-green-400: #0c461b;\n  --color-green-500: #126427;\n  --color-green-600: #1a9338;\n  --color-green-700: #46a758;\n  --color-green-800: #388e4a;\n  --color-green-900: #63c174;\n  --color-green-1000: #e5fbeb;\n\n  /* Turbopack Dark - Temporary */\n  --color-turbopack-text-red: #ff6d92;\n  --color-turbopack-text-blue: #45b2ff;\n  --color-turbopack-border-red: #6e293b;\n  --color-turbopack-border-blue: #284f80;\n  --color-turbopack-background-red: #250d12;\n  --color-turbopack-background-blue: #0a1723;\n";
const base = "\n  --color-font: white;\n  --color-backdrop: rgba(0, 0, 0, 0.8);\n  --color-border-shadow: rgba(255, 255, 255, 0.145);\n\n  --color-title-color: #fafafa;\n  --color-stack-notes: #a9a9a9;\n";
function DarkTheme() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _css.css)(_templateObject(), base, colors, base, colors)
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dark-theme.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/dev-overlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DevOverlay", {
    enumerable: true,
    get: function() {
        return DevOverlay;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _shadowportal = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/shadow-portal.js [client] (ecmascript)");
const _base = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/styles/base.js [client] (ecmascript)");
const _componentstyles = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/styles/component-styles.js [client] (ecmascript)");
const _cssreset = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/styles/css-reset.js [client] (ecmascript)");
const _colors = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/styles/colors.js [client] (ecmascript)");
const _erroroverlay = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/error-overlay/error-overlay.js [client] (ecmascript)");
const _devtoolsindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/components/errors/dev-tools-indicator/dev-tools-indicator.js [client] (ecmascript)");
const _rendererror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/container/runtime-error/render-error.js [client] (ecmascript)");
const _darktheme = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/styles/dark-theme.js [client] (ecmascript)");
function DevOverlay(param) {
    let { state, isErrorOverlayOpen, setIsErrorOverlayOpen } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_shadowportal.ShadowPortal, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_cssreset.CssReset, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_base.Base, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_colors.Colors, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_componentstyles.ComponentStyles, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_darktheme.DarkTheme, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_rendererror.RenderError, {
                state: state,
                isAppDir: true,
                children: (param)=>{
                    let { runtimeErrors, totalErrorCount } = param;
                    const isBuildError = runtimeErrors.length === 0;
                    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_devtoolsindicator.DevToolsIndicator, {
                                state: state,
                                errorCount: totalErrorCount,
                                isBuildError: isBuildError,
                                setIsErrorOverlayOpen: setIsErrorOverlayOpen
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_erroroverlay.ErrorOverlay, {
                                state: state,
                                runtimeErrors: runtimeErrors,
                                isErrorOverlayOpen: isErrorOverlayOpen,
                                setIsErrorOverlayOpen: setIsErrorOverlayOpen
                            })
                        ]
                    });
                }
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-overlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/pages-dev-overlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PagesDevOverlay", {
    enumerable: true,
    get: function() {
        return PagesDevOverlay;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)");
const _pagesdevoverlayerrorboundary = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/pages-dev-overlay-error-boundary.js [client] (ecmascript)");
const _hooks = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/hooks.js [client] (ecmascript)");
const _fontstyles = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/font/font-styles.js [client] (ecmascript)");
const _devoverlay = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/ui/dev-overlay.js [client] (ecmascript)");
function PagesDevOverlay(param) {
    let { children } = param;
    const { state, onComponentError } = (0, _hooks.usePagesDevOverlay)();
    const [isErrorOverlayOpen, setIsErrorOverlayOpen] = (0, _react.useState)(true);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_pagesdevoverlayerrorboundary.PagesDevOverlayErrorBoundary, {
                onError: onComponentError,
                children: children != null ? children : null
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_fontstyles.FontStyles, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_devoverlay.DevOverlay, {
                state: state,
                isErrorOverlayOpen: isErrorOverlayOpen,
                setIsErrorOverlayOpen: setIsErrorOverlayOpen
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=pages-dev-overlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/tracing/report-to-socket.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return reportToSocket;
    }
});
const _websocket = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
function reportToSocket(span) {
    if (span.state.state !== 'ended') {
        throw Object.defineProperty(new Error('Expected span to be ended'), "__NEXT_ERROR_CODE", {
            value: "E302",
            enumerable: false,
            configurable: true
        });
    }
    (0, _websocket.sendMessage)(JSON.stringify({
        event: 'span-end',
        startTime: span.startTime,
        endTime: span.state.endTime,
        spanName: span.name,
        attributes: span.attributes
    }));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=report-to-socket.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/* global location */ // imports polyfill from `@next/polyfill-module` after build.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    emitter: null,
    hydrate: null,
    initialize: null,
    router: null,
    version: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    emitter: function() {
        return emitter;
    },
    hydrate: function() {
        return hydrate;
    },
    initialize: function() {
        return initialize;
    },
    router: function() {
        return router;
    },
    version: function() {
        return version;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js [client] (ecmascript)");
__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/polyfill-module.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react@18.3.1/node_modules/react/index.js [client] (ecmascript)"));
const _client = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js [client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [client] (ecmascript)");
const _mitt = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/mitt.js [client] (ecmascript)"));
const _routercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [client] (ecmascript)");
const _handlesmoothscroll = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/handle-smooth-scroll.js [client] (ecmascript)");
const _isdynamic = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [client] (ecmascript)");
const _querystring = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
const _runtimeconfigexternal = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/runtime-config.external.js [client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
const _portal = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/portal/index.js [client] (ecmascript)");
const _headmanager = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/head-manager.js [client] (ecmascript)"));
const _pageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/page-loader.js [client] (ecmascript)"));
const _routeannouncer = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/route-announcer.js [client] (ecmascript)");
const _router = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/router.js [client] (ecmascript)");
const _iserror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/lib/is-error.js [client] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [client] (ecmascript)");
const _removebasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/remove-base-path.js [client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [client] (ecmascript)");
const _adapters = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/adapters.js [client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [client] (ecmascript)");
const _onrecoverableerror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [client] (ecmascript)");
const _tracer = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/tracing/tracer.js [client] (ecmascript)"));
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/is-next-router-error.js [client] (ecmascript)");
const version = "15.2.1";
let router;
const emitter = (0, _mitt.default)();
const looseToArray = (input)=>[].slice.call(input);
let initialData;
let defaultLocale = undefined;
let asPath;
let pageLoader;
let appElement;
let headManager;
let initialMatchesMiddleware = false;
let lastAppProps;
let lastRenderReject;
let devClient;
let CachedApp, onPerfEntry;
let CachedComponent;
class Container extends _react.default.Component {
    componentDidCatch(componentErr, info) {
        this.props.fn(componentErr, info);
    }
    componentDidMount() {
        this.scrollToHash();
        // We need to replace the router state if:
        // - the page was (auto) exported and has a query string or search (hash)
        // - it was auto exported and is a dynamic route (to provide params)
        // - if it is a client-side skeleton (fallback render)
        // - if middleware matches the current page (may have rewrite params)
        // - if rewrites in next.config.js match (may have rewrite params)
        if (router.isSsr && (initialData.isFallback || initialData.nextExport && ((0, _isdynamic.isDynamicRoute)(router.pathname) || location.search || ("TURBOPACK compile-time value", false) || initialMatchesMiddleware) || initialData.props && initialData.props.__N_SSG && (location.search || ("TURBOPACK compile-time value", false) || initialMatchesMiddleware))) {
            // update query on mount for exported pages
            router.replace(router.pathname + '?' + String((0, _querystring.assign)((0, _querystring.urlQueryToSearchParams)(router.query), new URLSearchParams(location.search))), asPath, {
                // @ts-ignore
                // WARNING: `_h` is an internal option for handing Next.js
                // client-side hydration. Your app should _never_ use this property.
                // It may change at any time without notice.
                _h: 1,
                // Fallback pages must trigger the data fetch, so the transition is
                // not shallow.
                // Other pages (strictly updating query) happens shallowly, as data
                // requirements would already be present.
                shallow: !initialData.isFallback && !initialMatchesMiddleware
            }).catch((err)=>{
                if (!err.cancelled) throw err;
            });
        }
    }
    componentDidUpdate() {
        this.scrollToHash();
    }
    scrollToHash() {
        let { hash } = location;
        hash = hash && hash.substring(1);
        if (!hash) return;
        const el = document.getElementById(hash);
        if (!el) return;
        // If we call scrollIntoView() in here without a setTimeout
        // it won't scroll properly.
        setTimeout(()=>el.scrollIntoView(), 0);
    }
    render() {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            const { PagesDevOverlay } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/pages-dev-overlay.js [client] (ecmascript)");
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(PagesDevOverlay, {
                children: this.props.children
            });
        }
    }
}
async function initialize(opts) {
    if (opts === void 0) opts = {};
    // This makes sure this specific lines are removed in production
    if ("TURBOPACK compile-time truthy", 1) {
        _tracer.default.onSpanEnd(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/tracing/report-to-socket.js [client] (ecmascript)").default);
        devClient = opts.devClient;
    }
    initialData = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
    window.__NEXT_DATA__ = initialData;
    defaultLocale = initialData.defaultLocale;
    const prefix = initialData.assetPrefix || '';
    self.__next_set_public_path__("" + prefix + "/_next/") //eslint-disable-line
    ;
    // Initialize next/config with the environment configuration
    (0, _runtimeconfigexternal.setConfig)({
        serverRuntimeConfig: {},
        publicRuntimeConfig: initialData.runtimeConfig || {}
    });
    asPath = (0, _utils.getURL)();
    // make sure not to attempt stripping basePath for 404s
    if ((0, _hasbasepath.hasBasePath)(asPath)) {
        asPath = (0, _removebasepath.removeBasePath)(asPath);
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    if (initialData.scriptLoader) {
        const { initScriptLoader } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/script.js [client] (ecmascript)");
        initScriptLoader(initialData.scriptLoader);
    }
    pageLoader = new _pageloader.default(initialData.buildId, prefix);
    const register = (param)=>{
        let [r, f] = param;
        return pageLoader.routeLoader.onEntrypoint(r, f);
    };
    if (window.__NEXT_P) {
        // Defer page registration for another tick. This will increase the overall
        // latency in hydrating the page, but reduce the total blocking time.
        window.__NEXT_P.map((p)=>setTimeout(()=>register(p), 0));
    }
    window.__NEXT_P = [];
    window.__NEXT_P.push = register;
    headManager = (0, _headmanager.default)();
    headManager.getIsSsr = ()=>{
        return router.isSsr;
    };
    appElement = document.getElementById('__next');
    return {
        assetPrefix: prefix
    };
}
function renderApp(App, appProps) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(App, {
        ...appProps
    });
}
function AppContainer(param) {
    let { children } = param;
    // Create a memoized value for next/navigation router context.
    const adaptedForAppRouter = _react.default.useMemo({
        "AppContainer.useMemo[adaptedForAppRouter]": ()=>{
            return (0, _adapters.adaptForAppRouterInstance)(router);
        }
    }["AppContainer.useMemo[adaptedForAppRouter]"], []);
    var _self___NEXT_DATA___autoExport;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Container, {
        fn: (error)=>// eslint-disable-next-line @typescript-eslint/no-use-before-define
            renderError({
                App: CachedApp,
                err: error
            }).catch((err)=>console.error('Error rendering page: ', err)),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.AppRouterContext.Provider, {
            value: adaptedForAppRouter,
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
                value: (0, _adapters.adaptForSearchParams)(router),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_adapters.PathnameContextProviderAdapter, {
                    router: router,
                    isAutoExport: (_self___NEXT_DATA___autoExport = self.__NEXT_DATA__.autoExport) != null ? _self___NEXT_DATA___autoExport : false,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathParamsContext.Provider, {
                        value: (0, _adapters.adaptForPathParams)(router),
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_routercontextsharedruntime.RouterContext.Provider, {
                            value: (0, _router.makePublicRouterInstance)(router),
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_headmanagercontextsharedruntime.HeadManagerContext.Provider, {
                                value: headManager,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_imageconfigcontextsharedruntime.ImageConfigContext.Provider, {
                                    value: ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false,"domains":[],"remotePatterns":[],"output":"export"}')),
                                    children: children
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}
const wrapApp = (App)=>(wrappedAppProps)=>{
        const appProps = {
            ...wrappedAppProps,
            Component: CachedComponent,
            err: initialData.err,
            router
        };
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(AppContainer, {
            children: renderApp(App, appProps)
        });
    };
// This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.
function renderError(renderErrorProps) {
    let { App, err } = renderErrorProps;
    // In development runtime errors are caught by our overlay
    // In production we catch runtime errors using componentDidCatch which will trigger renderError
    if ("TURBOPACK compile-time truthy", 1) {
        // A Next.js rendering runtime error is always unrecoverable
        // FIXME: let's make this recoverable (error in GIP client-transition)
        devClient.onUnrecoverableError();
        // We need to render an empty <App> so that the `<ReactDevOverlay>` can
        // render itself.
        // TODO: Fix disabled eslint rule
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return doRender({
            App: ()=>null,
            props: {},
            Component: ()=>null,
            styleSheets: []
        });
    }
    "TURBOPACK unreachable";
}
// Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.
function Head(param) {
    let { callback } = param;
    // We use `useLayoutEffect` to guarantee the callback is executed
    // as soon as React flushes the update.
    _react.default.useLayoutEffect({
        "Head.useLayoutEffect": ()=>callback()
    }["Head.useLayoutEffect"], [
        callback
    ]);
    return null;
}
const performanceMarks = {
    navigationStart: 'navigationStart',
    beforeRender: 'beforeRender',
    afterRender: 'afterRender',
    afterHydrate: 'afterHydrate',
    routeChange: 'routeChange'
};
const performanceMeasures = {
    hydration: 'Next.js-hydration',
    beforeHydration: 'Next.js-before-hydration',
    routeChangeToRender: 'Next.js-route-change-to-render',
    render: 'Next.js-render'
};
let reactRoot = null;
// On initial render a hydrate should always happen
let shouldHydrate = true;
function clearMarks() {
    ;
    [
        performanceMarks.beforeRender,
        performanceMarks.afterHydrate,
        performanceMarks.afterRender,
        performanceMarks.routeChange
    ].forEach((mark)=>performance.clearMarks(mark));
}
function markHydrateComplete() {
    if (!_utils.ST) return;
    performance.mark(performanceMarks.afterHydrate) // mark end of hydration
    ;
    const hasBeforeRenderMark = performance.getEntriesByName(performanceMarks.beforeRender, 'mark').length;
    if (hasBeforeRenderMark) {
        const beforeHydrationMeasure = performance.measure(performanceMeasures.beforeHydration, performanceMarks.navigationStart, performanceMarks.beforeRender);
        const hydrationMeasure = performance.measure(performanceMeasures.hydration, performanceMarks.beforeRender, performanceMarks.afterHydrate);
        if (("TURBOPACK compile-time value", "development") === 'development' && // Old versions of Safari don't return `PerformanceMeasure`s from `performance.measure()`
        beforeHydrationMeasure && hydrationMeasure) {
            _tracer.default.startSpan('navigation-to-hydration', {
                startTime: performance.timeOrigin + beforeHydrationMeasure.startTime,
                attributes: {
                    pathname: location.pathname,
                    query: location.search
                }
            }).end(performance.timeOrigin + hydrationMeasure.startTime + hydrationMeasure.duration);
        }
    }
    if (onPerfEntry) {
        performance.getEntriesByName(performanceMeasures.hydration).forEach(onPerfEntry);
    }
    clearMarks();
}
function markRenderComplete() {
    if (!_utils.ST) return;
    performance.mark(performanceMarks.afterRender) // mark end of render
    ;
    const navStartEntries = performance.getEntriesByName(performanceMarks.routeChange, 'mark');
    if (!navStartEntries.length) return;
    const hasBeforeRenderMark = performance.getEntriesByName(performanceMarks.beforeRender, 'mark').length;
    if (hasBeforeRenderMark) {
        performance.measure(performanceMeasures.routeChangeToRender, navStartEntries[0].name, performanceMarks.beforeRender);
        performance.measure(performanceMeasures.render, performanceMarks.beforeRender, performanceMarks.afterRender);
        if (onPerfEntry) {
            performance.getEntriesByName(performanceMeasures.render).forEach(onPerfEntry);
            performance.getEntriesByName(performanceMeasures.routeChangeToRender).forEach(onPerfEntry);
        }
    }
    clearMarks();
    [
        performanceMeasures.routeChangeToRender,
        performanceMeasures.render
    ].forEach((measure)=>performance.clearMeasures(measure));
}
function renderReactElement(domEl, fn) {
    // mark start of hydrate/render
    if (_utils.ST) {
        performance.mark(performanceMarks.beforeRender);
    }
    const reactEl = fn(shouldHydrate ? markHydrateComplete : markRenderComplete);
    if (!reactRoot) {
        // Unlike with createRoot, you don't need a separate root.render() call here
        reactRoot = _client.default.hydrateRoot(domEl, reactEl, {
            onRecoverableError: _onrecoverableerror.onRecoverableError
        });
        // TODO: Remove shouldHydrate variable when React 18 is stable as it can depend on `reactRoot` existing
        shouldHydrate = false;
    } else {
        const startTransition = _react.default.startTransition;
        startTransition(()=>{
            reactRoot.render(reactEl);
        });
    }
}
function Root(param) {
    let { callbacks, children } = param;
    // We use `useLayoutEffect` to guarantee the callbacks are executed
    // as soon as React flushes the update
    _react.default.useLayoutEffect({
        "Root.useLayoutEffect": ()=>callbacks.forEach({
                "Root.useLayoutEffect": (callback)=>callback()
            }["Root.useLayoutEffect"])
    }["Root.useLayoutEffect"], [
        callbacks
    ]);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return children;
}
function doRender(input) {
    let { App, Component, props, err } = input;
    let styleSheets = 'initial' in input ? undefined : input.styleSheets;
    Component = Component || lastAppProps.Component;
    props = props || lastAppProps.props;
    const appProps = {
        ...props,
        Component,
        err,
        router
    };
    // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.
    lastAppProps = appProps;
    let canceled = false;
    let resolvePromise;
    const renderPromise = new Promise((resolve, reject)=>{
        if (lastRenderReject) {
            lastRenderReject();
        }
        resolvePromise = ()=>{
            lastRenderReject = null;
            resolve();
        };
        lastRenderReject = ()=>{
            canceled = true;
            lastRenderReject = null;
            const error = Object.defineProperty(new Error('Cancel rendering route'), "__NEXT_ERROR_CODE", {
                value: "E503",
                enumerable: false,
                configurable: true
            });
            error.cancelled = true;
            reject(error);
        };
    });
    // This function has a return type to ensure it doesn't start returning a
    // Promise. It should remain synchronous.
    function onStart() {
        if ("TURBOPACK compile-time truthy", 1) {
            return false;
        }
        "TURBOPACK unreachable";
        const currentStyleTags = undefined;
        const currentHrefs = undefined;
        const noscript = undefined;
        const nonce = undefined;
    }
    function onHeadCommit() {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        if (input.scroll) {
            const { x, y } = input.scroll;
            (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                window.scrollTo(x, y);
            });
        }
    }
    function onRootCommit() {
        resolvePromise();
    }
    onStart();
    const elem = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
                callback: onHeadCommit
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(AppContainer, {
                children: [
                    renderApp(App, appProps),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_portal.Portal, {
                        type: "next-route-announcer",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_routeannouncer.RouteAnnouncer, {})
                    })
                ]
            })
        ]
    });
    // We catch runtime errors using componentDidCatch which will trigger renderError
    renderReactElement(appElement, (callback)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(Root, {
            callbacks: [
                callback,
                onRootCommit
            ],
            children: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : elem
        }));
    return renderPromise;
}
async function render(renderingProps) {
    // if an error occurs in a server-side page (e.g. in getInitialProps),
    // skip re-rendering the error page client-side as data-fetching operations
    // will already have been done on the server and NEXT_DATA contains the correct
    // data for straight-forward hydration of the error page
    if (renderingProps.err && // renderingProps.Component might be undefined if there is a top/module-level error
    (typeof renderingProps.Component === 'undefined' || !renderingProps.isHydratePass)) {
        await renderError(renderingProps);
        return;
    }
    try {
        await doRender(renderingProps);
    } catch (err) {
        const renderErr = (0, _iserror.getProperError)(err);
        // bubble up cancelation errors
        if (renderErr.cancelled) {
            throw renderErr;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            // Ensure this error is displayed in the overlay in development
            setTimeout(()=>{
                throw renderErr;
            });
        }
        await renderError({
            ...renderingProps,
            err: renderErr
        });
    }
}
async function hydrate(opts) {
    let initialErr = initialData.err;
    try {
        const appEntrypoint = await pageLoader.routeLoader.whenEntrypoint('/_app');
        if ('error' in appEntrypoint) {
            throw appEntrypoint.error;
        }
        const { component: app, exports: mod } = appEntrypoint;
        CachedApp = app;
        if (mod && mod.reportWebVitals) {
            onPerfEntry = (param)=>{
                let { id, name, startTime, value, duration, entryType, entries, attribution } = param;
                // Combines timestamp with random number for unique ID
                const uniqueID = Date.now() + "-" + (Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                let perfStartEntry;
                if (entries && entries.length) {
                    perfStartEntry = entries[0].startTime;
                }
                const webVitals = {
                    id: id || uniqueID,
                    name,
                    startTime: startTime || perfStartEntry,
                    value: value == null ? duration : value,
                    label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                };
                if (attribution) {
                    webVitals.attribution = attribution;
                }
                mod.reportWebVitals(webVitals);
            };
        }
        const pageEntrypoint = // error, so we need to skip waiting for the entrypoint.
        ("TURBOPACK compile-time value", "development") === 'development' && initialData.err ? {
            error: initialData.err
        } : await pageLoader.routeLoader.whenEntrypoint(initialData.page);
        if ('error' in pageEntrypoint) {
            throw pageEntrypoint.error;
        }
        CachedComponent = pageEntrypoint.component;
        if ("TURBOPACK compile-time truthy", 1) {
            const { isValidElementType } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react-is/index.js [client] (ecmascript)");
            if (!isValidElementType(CachedComponent)) {
                throw Object.defineProperty(new Error('The default export is not a React Component in page: "' + initialData.page + '"'), "__NEXT_ERROR_CODE", {
                    value: "E286",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    } catch (error) {
        // This catches errors like throwing in the top level of a module
        initialErr = (0, _iserror.getProperError)(error);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const getServerError = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)").getServerError;
        // Server-side runtime errors need to be re-thrown on the client-side so
        // that the overlay is rendered.
        if (initialErr) {
            if (initialErr === initialData.err) {
                setTimeout(()=>{
                    let error;
                    try {
                        // Generate a new error object. We `throw` it because some browsers
                        // will set the `stack` when thrown, and we want to ensure ours is
                        // not overridden when we re-throw it below.
                        throw Object.defineProperty(new Error(initialErr.message), "__NEXT_ERROR_CODE", {
                            value: "E394",
                            enumerable: false,
                            configurable: true
                        });
                    } catch (e) {
                        error = e;
                    }
                    error.name = initialErr.name;
                    error.stack = initialErr.stack;
                    const errSource = initialErr.source;
                    // In development, error the navigation API usage in runtime,
                    // since it's not allowed to be used in pages router as it doesn't contain error boundary like app router.
                    if ((0, _isnextroutererror.isNextRouterError)(initialErr)) {
                        error.message = 'Next.js navigation API is not allowed to be used in Pages Router.';
                    }
                    throw getServerError(error, errSource);
                });
            } else {
                setTimeout(()=>{
                    throw initialErr;
                });
            }
        }
    }
    if (window.__NEXT_PRELOADREADY) {
        await window.__NEXT_PRELOADREADY(initialData.dynamicIds);
    }
    router = (0, _router.createRouter)(initialData.page, initialData.query, asPath, {
        initialProps: initialData.props,
        pageLoader,
        App: CachedApp,
        Component: CachedComponent,
        wrapApp,
        err: initialErr,
        isFallback: Boolean(initialData.isFallback),
        subscription: (info, App, scroll)=>render(Object.assign({}, info, {
                App,
                scroll
            })),
        locale: initialData.locale,
        locales: initialData.locales,
        defaultLocale,
        domainLocales: initialData.domainLocales,
        isPreview: initialData.isPreview
    });
    initialMatchesMiddleware = await router._initialMatchesMiddlewarePromise;
    const renderCtx = {
        App: CachedApp,
        initial: true,
        Component: CachedComponent,
        props: initialData.props,
        err: initialErr,
        isHydratePass: true
    };
    if (opts == null ? void 0 : opts.beforeRender) {
        await opts.beforeRender();
    }
    render(renderCtx);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/hot-middleware-client.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _hotreloaderclient = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)"));
const _websocket = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
let reloading = false;
const _default = (mode)=>{
    const devClient = (0, _hotreloaderclient.default)(mode);
    devClient.subscribeToHmrEvent((obj)=>{
        var _window_next;
        if (reloading) return;
        // Retrieve the router if it's available
        const router = (_window_next = window.next) == null ? void 0 : _window_next.router;
        // Determine if we're on an error page or the router is not initialized
        const isOnErrorPage = !router || router.pathname === '/404' || router.pathname === '/_error';
        switch(obj.action){
            case 'reloadPage':
                {
                    (0, _websocket.sendMessage)(JSON.stringify({
                        event: 'client-reload-page',
                        clientId: window.__nextDevClientId
                    }));
                    reloading = true;
                    return window.location.reload();
                }
            case 'removedPage':
                {
                    const [page] = obj.data;
                    // Check if the removed page is the current page
                    const isCurrentPage = page === (router == null ? void 0 : router.pathname);
                    // We enter here if the removed page is currently being viewed
                    // or if we happen to be on an error page.
                    if (isCurrentPage || isOnErrorPage) {
                        (0, _websocket.sendMessage)(JSON.stringify({
                            event: 'client-removed-page',
                            clientId: window.__nextDevClientId,
                            page
                        }));
                        return window.location.reload();
                    }
                    return;
                }
            case 'addedPage':
                {
                    var _router_components;
                    const [page] = obj.data;
                    // Check if the added page is the current page
                    const isCurrentPage = page === (router == null ? void 0 : router.pathname);
                    // Check if the page component is not yet loaded
                    const isPageNotLoaded = typeof (router == null ? void 0 : (_router_components = router.components) == null ? void 0 : _router_components[page]) === 'undefined';
                    // We enter this block if the newly added page is the one currently being viewed
                    // but hasn't been loaded yet, or if we're on an error page.
                    if (isCurrentPage && isPageNotLoaded || isOnErrorPage) {
                        (0, _websocket.sendMessage)(JSON.stringify({
                            event: 'client-added-page',
                            clientId: window.__nextDevClientId,
                            page
                        }));
                        return window.location.reload();
                    }
                    return;
                }
            case 'serverError':
            case 'devPagesManifestUpdate':
            case 'isrManifest':
            case 'building':
            case 'finishBuilding':
                {
                    return;
                }
            default:
                {
                    throw Object.defineProperty(new Error('Unexpected action ' + obj.action), "__NEXT_ERROR_CODE", {
                        value: "E59",
                        enumerable: false,
                        configurable: true
                    });
                }
        }
    });
    return devClient;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hot-middleware-client.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/on-demand-entries-client.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _router = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/router.js [client] (ecmascript)"));
const _websocket = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
const _default = async (page)=>{
    // Never send pings when using Turbopack as it's not used.
    // Pings were originally used to keep track of active routes in on-demand-entries with webpack.
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    "TURBOPACK unreachable";
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=on-demand-entries-client.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/fouc.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// This wrapper function is used to safely select the best available function
// to schedule removal of the no-FOUC styles workaround. requestAnimationFrame
// is the ideal choice, but when used in iframes, there are no guarantees that
// the callback will actually be called, which could stall the promise returned
// from displayContent.
//
// See: https://www.vector-logic.com/blog/posts/on-request-animation-frame-and-embedded-iframes
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "displayContent", {
    enumerable: true,
    get: function() {
        return displayContent;
    }
});
const safeCallbackQueue = (callback)=>{
    if (window.requestAnimationFrame && window.self === window.top) {
        window.requestAnimationFrame(callback);
    } else {
        window.setTimeout(callback);
    }
};
function displayContent() {
    return new Promise((resolve)=>{
        safeCallbackQueue(function() {
            for(var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;){
                x[i].parentNode.removeChild(x[i]);
            }
            resolve();
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fouc.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/internal/handle-dev-build-indicator-hmr-events.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleDevBuildIndicatorHmrEvents", {
    enumerable: true,
    get: function() {
        return handleDevBuildIndicatorHmrEvents;
    }
});
const _hotreloadertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _devbuildindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [client] (ecmascript)");
const handleDevBuildIndicatorHmrEvents = (obj)=>{
    try {
        if (!('action' in obj)) {
            return;
        }
        // eslint-disable-next-line default-case
        switch(obj.action){
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
                _devbuildindicator.devBuildIndicator.show();
                break;
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
                _devbuildindicator.devBuildIndicator.hide();
                break;
        }
    } catch (e) {}
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-dev-build-indicator-hmr-events.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/initialize-for-page-router.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$1_$40$babel$2b$core$40$7$2e$26$2e$9_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "initializeDevBuildIndicatorForPageRouter", {
    enumerable: true,
    get: function() {
        return initializeDevBuildIndicatorForPageRouter;
    }
});
const _websocket = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
const _devbuildindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [client] (ecmascript)");
const _handledevbuildindicatorhmrevents = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/internal/handle-dev-build-indicator-hmr-events.js [client] (ecmascript)");
const initializeDevBuildIndicatorForPageRouter = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    _devbuildindicator.devBuildIndicator.initialize();
    // Add message listener specifically for Pages Router to handle lifecycle events
    // related to dev builds (building, built, sync)
    (0, _websocket.addMessageListener)(_handledevbuildindicatorhmrevents.handleDevBuildIndicatorHmrEvents);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=initialize-for-page-router.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/page-bootstrap.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pageBootstrap", {
    enumerable: true,
    get: function() {
        return pageBootstrap;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _ = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/index.js [client] (ecmascript)");
const _ondemandentriesclient = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/on-demand-entries-client.js [client] (ecmascript)"));
const _devbuildindicator = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/internal/dev-build-indicator.js [client] (ecmascript)");
const _fouc = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/fouc.js [client] (ecmascript)");
const _websocket = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
const _querystring = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
const _hotreloadertypes = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _runtimeerrorhandler = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/errors/runtime-error-handler.js [client] (ecmascript)");
const _shared = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _hotreloaderclient = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)");
const _initializeforpagerouter = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/dev-build-indicator/initialize-for-page-router.js [client] (ecmascript)");
function pageBootstrap(assetPrefix) {
    (0, _websocket.connectHMR)({
        assetPrefix,
        path: '/_next/webpack-hmr'
    });
    return (0, _.hydrate)({
        beforeRender: _fouc.displayContent
    }).then(()=>{
        (0, _ondemandentriesclient.default)();
        (0, _initializeforpagerouter.initializeDevBuildIndicatorForPageRouter)();
        let reloading = false;
        (0, _websocket.addMessageListener)((payload)=>{
            if (reloading) return;
            if ('action' in payload) {
                switch(payload.action){
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ERROR:
                        {
                            const { stack, message } = JSON.parse(payload.errorJSON);
                            const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                                value: "E394",
                                enumerable: false,
                                configurable: true
                            });
                            error.stack = stack;
                            throw error;
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.RELOAD_PAGE:
                        {
                            reloading = true;
                            window.location.reload();
                            break;
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.DEV_PAGES_MANIFEST_UPDATE:
                        {
                            fetch("" + assetPrefix + "/_next/static/development/_devPagesManifest.json").then((res)=>res.json()).then((manifest)=>{
                                window.__DEV_PAGES_MANIFEST = manifest;
                            }).catch((err)=>{
                                console.log("Failed to fetch devPagesManifest", err);
                            });
                            break;
                        }
                    default:
                        break;
                }
            } else if ('event' in payload) {
                switch(payload.event){
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.MIDDLEWARE_CHANGES:
                        {
                            return window.location.reload();
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.CLIENT_CHANGES:
                        {
                            // This is used in `../server/dev/turbopack-utils.ts`.
                            const isOnErrorPage = window.next.router.pathname === '/_error';
                            // On the error page we want to reload the page when a page was changed
                            if (isOnErrorPage) {
                                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                                    console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                                }
                                reloading = true;
                                (0, _hotreloaderclient.performFullReload)(null);
                            }
                            break;
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ONLY_CHANGES:
                        {
                            if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                                console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                                (0, _hotreloaderclient.performFullReload)(null);
                            }
                            const { pages } = payload;
                            // Make sure to reload when the dev-overlay is showing for an
                            // API route
                            // TODO: Fix `__NEXT_PAGE` type
                            if (pages.includes(_.router.query.__NEXT_PAGE)) {
                                return window.location.reload();
                            }
                            if (!_.router.clc && pages.includes(_.router.pathname)) {
                                console.log('Refreshing page data due to server-side change');
                                _devbuildindicator.devBuildIndicator.show();
                                const clearIndicator = ()=>_devbuildindicator.devBuildIndicator.hide();
                                _.router.replace(_.router.pathname + '?' + String((0, _querystring.assign)((0, _querystring.urlQueryToSearchParams)(_.router.query), new URLSearchParams(location.search))), _.router.asPath, {
                                    scroll: false
                                }).catch(()=>{
                                    // trigger hard reload when failing to refresh data
                                    // to show error overlay properly
                                    location.reload();
                                }).finally(clearIndicator);
                            }
                            break;
                        }
                    default:
                        break;
                }
            }
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=page-bootstrap.js.map
}}),
"[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/next-dev-turbopack.js [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
// TODO: Remove use of `any` type.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _ = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/index.js [client] (ecmascript)");
const _hotmiddlewareclient = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/dev/hot-middleware-client.js [client] (ecmascript)"));
const _pagebootstrap = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/client/page-bootstrap.js [client] (ecmascript)");
const _hmrclientts = __turbopack_context__.r("[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)");
window.next = {
    version: "" + _.version + "-turbo",
    // router is initialized later so it has to be live-binded
    get router () {
        return _.router;
    },
    emitter: _.emitter
};
self.__next_set_public_path__ = ()=>{};
self.__webpack_hash__ = '';
const devClient = (0, _hotmiddlewareclient.default)('turbopack');
(0, _.initialize)({
    devClient
}).then((param)=>{
    let { assetPrefix } = param;
    // for the page loader
    ;
    self.__turbopack_load_page_chunks__ = (page, chunksData)=>{
        const chunkPromises = chunksData.map(("TURBOPACK member replacement", __turbopack_context__.l));
        Promise.all(chunkPromises).catch((err)=>console.error('failed to load chunks for page ' + page, err));
    };
    (0, _hmrclientts.connect)({
        addMessageListener (cb) {
            devClient.addTurbopackMessageListener(cb);
        },
        sendMessage: devClient.sendTurbopackMessage,
        onUpdateError: devClient.handleUpdateError
    });
    return (0, _pagebootstrap.pageBootstrap)(assetPrefix);
}).catch((err)=>{
    console.error('Error was not caught', err);
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=next-dev-turbopack.js.map
}}),
}]);

//# sourceMappingURL=9855d_next_dist_client_ef1c47db._.js.map