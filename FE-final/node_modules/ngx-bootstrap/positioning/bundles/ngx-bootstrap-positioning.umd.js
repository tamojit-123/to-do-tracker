(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-bootstrap/utils'), require('@angular/core'), require('@angular/common'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/positioning', ['exports', 'ngx-bootstrap/utils', '@angular/core', '@angular/common', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].positioning = {}), global.utils, global.ng.core, global.ng.common, global.rxjs));
}(this, (function (exports, utils, i0, common, rxjs) { 'use strict';

    var MapPlacementInToRL;
    (function (MapPlacementInToRL) {
        MapPlacementInToRL["top"] = "top";
        MapPlacementInToRL["bottom"] = "bottom";
        MapPlacementInToRL["left"] = "left";
        MapPlacementInToRL["right"] = "right";
        MapPlacementInToRL["auto"] = "auto";
        MapPlacementInToRL["end"] = "right";
        MapPlacementInToRL["start"] = "left";
        MapPlacementInToRL["top left"] = "top left";
        MapPlacementInToRL["top right"] = "top right";
        MapPlacementInToRL["right top"] = "right top";
        MapPlacementInToRL["right bottom"] = "right bottom";
        MapPlacementInToRL["bottom right"] = "bottom right";
        MapPlacementInToRL["bottom left"] = "bottom left";
        MapPlacementInToRL["left bottom"] = "left bottom";
        MapPlacementInToRL["left top"] = "left top";
        MapPlacementInToRL["top start"] = "top left";
        MapPlacementInToRL["top end"] = "top right";
        MapPlacementInToRL["end top"] = "right top";
        MapPlacementInToRL["end bottom"] = "right bottom";
        MapPlacementInToRL["bottom end"] = "bottom right";
        MapPlacementInToRL["bottom start"] = "bottom left";
        MapPlacementInToRL["start bottom"] = "start bottom";
        MapPlacementInToRL["start top"] = "left top";
    })(MapPlacementInToRL || (MapPlacementInToRL = {}));
    (function (PlacementForBs5) {
        PlacementForBs5["top"] = "top";
        PlacementForBs5["bottom"] = "bottom";
        PlacementForBs5["left"] = "start";
        PlacementForBs5["right"] = "end";
        PlacementForBs5["auto"] = "auto";
        PlacementForBs5["end"] = "end";
        PlacementForBs5["start"] = "start";
        PlacementForBs5["top left"] = "top start";
        PlacementForBs5["top right"] = "top end";
        PlacementForBs5["right top"] = "end top";
        PlacementForBs5["right bottom"] = "end bottom";
        PlacementForBs5["bottom right"] = "bottom end";
        PlacementForBs5["bottom left"] = "bottom start";
        PlacementForBs5["left bottom"] = "start bottom";
        PlacementForBs5["left top"] = "start top";
        PlacementForBs5["top start"] = "top start";
        PlacementForBs5["top end"] = "top end";
        PlacementForBs5["end top"] = "end top";
        PlacementForBs5["end bottom"] = "end bottom";
        PlacementForBs5["bottom end"] = "bottom end";
        PlacementForBs5["bottom start"] = "bottom start";
        PlacementForBs5["start bottom"] = "start bottom";
        PlacementForBs5["start top"] = "start top";
    })(exports.PlacementForBs5 || (exports.PlacementForBs5 = {}));

    function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
            return [];
        }
        // NOTE: 1 DOM access here
        var window = element.ownerDocument.defaultView;
        var css = window === null || window === void 0 ? void 0 : window.getComputedStyle(element, null);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return property ? css && css[property] : css;
    }

    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

    /**
     * Determines if the browser is Internet Explorer
     */
    // todo: valorkin fix and drop IE support :evil:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
    var isIE10 = isBrowser && !!(window.MSInputMethodContext && /MSIE 10/.test(navigator.userAgent));
    function isIE(version) {
        if (version === 11) {
            return isIE11;
        }
        if (version === 10) {
            return isIE10;
        }
        return isIE11 || isIE10;
    }

    /**
     * Returns the offset parent of the given element
     */
    function getOffsetParent(element) {
        if (!element) {
            return document.documentElement;
        }
        var noOffsetParent = isIE(10) ? document.body : null;
        // NOTE: 1 DOM access here
        var offsetParent = element === null || element === void 0 ? void 0 : element.offsetParent;
        // Skip hidden elements which don't have an offsetParent
        var sibling = void 0;
        while (offsetParent === noOffsetParent
            && element.nextElementSibling
            && sibling !== element.nextElementSibling) {
            // todo: valorkin fix
            sibling = element.nextElementSibling;
            offsetParent = sibling.offsetParent;
        }
        var nodeName = offsetParent && offsetParent.nodeName;
        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
            return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
        }
        // .offsetParent will return the closest TH, TD or TABLE in case
        if (offsetParent &&
            ['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
            getStyleComputedProperty(offsetParent, 'position') === 'static') {
            return getOffsetParent(offsetParent);
        }
        return offsetParent;
    }

    // todo: valorkin fix
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isOffsetContainer(element) {
        var nodeName = element.nodeName;
        if (nodeName === 'BODY') {
            return false;
        }
        return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
    }

    /**
     * Finds the root node (document, shadowDOM root) of the given element
     */
    function getRoot(node) {
        if (node.parentNode !== null) {
            return getRoot(node.parentNode);
        }
        return node;
    }

    /**
     * Finds the offset parent common to the two provided nodes
     */
    function findCommonOffsetParent(element1, element2) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
            return document.documentElement;
        }
        // Here we make sure to give as "start" the element that comes first in the DOM
        var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        var start = order ? element1 : element2;
        var end = order ? element2 : element1;
        // Get common ancestor container
        var range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        // todo: valorkin fix
        var commonAncestorContainer = range.commonAncestorContainer;
        // Both nodes are inside #document
        if ((element1 !== commonAncestorContainer &&
            element2 !== commonAncestorContainer) ||
            start.contains(end)) {
            if (isOffsetContainer(commonAncestorContainer)) {
                return commonAncestorContainer;
            }
            return getOffsetParent(commonAncestorContainer);
        }
        // one of the nodes is inside shadowDOM, find which one
        var element1root = getRoot(element1);
        if (element1root.host) {
            return findCommonOffsetParent(element1root.host, element2);
        }
        else {
            return findCommonOffsetParent(element1, getRoot(element2).host);
        }
    }

    /**
     * Finds the first parent of an element that has a transformed property defined
     */
    function getFixedPositionOffsetParent(element) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element || !element.parentElement || isIE()) {
            return document.documentElement;
        }
        var el = element.parentElement;
        while ((el === null || el === void 0 ? void 0 : el.parentElement) && getStyleComputedProperty(el, 'transform') === 'none') {
            el = el.parentElement;
        }
        return el || document.documentElement;
    }

    /**
     * Helper to detect borders of a given element
     */
    function getBordersSize(styles, axis) {
        var sideA = axis === 'x' ? 'Left' : 'Top';
        var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
        return (parseFloat(styles["border" + sideA + "Width"]) +
            parseFloat(styles["border" + sideB + "Width"]));
    }

    function getSize(axis, body, html, computedStyle) {
        var _body = body;
        var _html = html;
        var _computedStyle = computedStyle;
        return Math.max(_body["offset" + axis], _body["scroll" + axis], _html["client" + axis], _html["offset" + axis], _html["scroll" + axis], isIE(10)
            ? (parseInt(_html["offset" + axis], 10) +
                parseInt(_computedStyle["margin" + (axis === 'Height' ? 'Top' : 'Left')], 10) +
                parseInt(_computedStyle["margin" + (axis === 'Height' ? 'Bottom' : 'Right')], 10))
            : 0);
    }
    function getWindowSizes(document) {
        var body = document.body;
        var html = document.documentElement;
        var computedStyle = isIE(10) ? getComputedStyle(html) : void 0;
        return {
            height: getSize('Height', body, html, computedStyle),
            width: getSize('Width', body, html, computedStyle)
        };
    }

    /**
     * Gets the scroll value of the given element in the given side (top and left)
     */
    function getScroll(element, side) {
        if (side === void 0) { side = 'top'; }
        var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
        var nodeName = element.nodeName;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
            var html = element.ownerDocument.documentElement;
            var scrollingElement = element.ownerDocument.scrollingElement || html;
            return scrollingElement[upperSide];
        }
        return element[upperSide];
    }

    function getClientRect(offsets) {
        return Object.assign(Object.assign({}, offsets), { right: (offsets.left || 0) + offsets.width, bottom: (offsets.top || 0) + offsets.height });
    }

    /**
     * Tells if a given input is a number
     */
    function isNumeric(n) {
        return n !== '' && !isNaN(parseFloat(n)) && isFinite(Number(n));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isNumber(value) {
        return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
    }

    /**
     * Get bounding client rect of given element
     */
    function getBoundingClientRect(element) {
        var rect = element.getBoundingClientRect();
        // IE10 10 FIX: Please, don't ask, the element isn't
        // considered in DOM in some circumstances...
        // This isn't reproducible in IE10 compatibility mode of IE11
        try {
            if (isIE(10)) {
                var scrollTop = getScroll(element, 'top');
                var scrollLeft = getScroll(element, 'left');
                if (rect && isNumber(rect.top) && isNumber(rect.left) && isNumber(rect.bottom) && isNumber(rect.right)) {
                    rect.top += scrollTop;
                    rect.left += scrollLeft;
                    rect.bottom += scrollTop;
                    rect.right += scrollLeft;
                }
            }
        }
        catch (e) {
            return rect;
        }
        if (!(rect && isNumber(rect.top) && isNumber(rect.left) && isNumber(rect.bottom) && isNumber(rect.right))) {
            return rect;
        }
        var result = {
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        };
        // subtract scrollbar size from sizes
        var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : undefined;
        var width = (sizes === null || sizes === void 0 ? void 0 : sizes.width) || element.clientWidth
            || isNumber(result.right) && isNumber(result.left) && result.right - result.left || 0;
        var height = (sizes === null || sizes === void 0 ? void 0 : sizes.height) || element.clientHeight
            || isNumber(result.bottom) && isNumber(result.top) && result.bottom - result.top || 0;
        var horizScrollbar = element.offsetWidth - width;
        var vertScrollbar = element.offsetHeight - height;
        // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
        // we make this check conditional for performance reasons
        if (horizScrollbar || vertScrollbar) {
            var styles = getStyleComputedProperty(element);
            horizScrollbar -= getBordersSize(styles, 'x');
            vertScrollbar -= getBordersSize(styles, 'y');
            result.width -= horizScrollbar;
            result.height -= vertScrollbar;
        }
        return getClientRect(result);
    }

    /**
     * Returns the parentNode or the host of the element
     */
    // todo: valorkin fix
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function getParentNode(element) {
        if (element.nodeName === 'HTML') {
            return element;
        }
        return element.parentNode || element.host;
    }

    /**
     * Returns the scrolling parent of the given element
     */
    // todo: valorkin fix
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function getScrollParent(element) {
        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
        if (!element) {
            return document.body;
        }
        switch (element.nodeName) {
            case 'HTML':
            case 'BODY':
                return element.ownerDocument.body;
            case '#document':
                return element.body;
            default:
        }
        // Firefox want us to check `-x` and `-y` variations as well
        var _a = getStyleComputedProperty(element), overflow = _a.overflow, overflowX = _a.overflowX, overflowY = _a.overflowY;
        if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
            return element;
        }
        return getScrollParent(getParentNode(element));
    }

    /**
     * Sum or subtract the element scroll values (left and top) from a given rect object
     */
    function includeScroll(rect, element, subtract) {
        if (subtract === void 0) { subtract = false; }
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        var modifier = subtract ? -1 : 1;
        if (isNumber(rect.top)) {
            rect.top += scrollTop * modifier;
        }
        if (isNumber(rect.bottom)) {
            rect.bottom += scrollTop * modifier;
        }
        if (isNumber(rect.left)) {
            rect.left += scrollLeft * modifier;
        }
        if (isNumber(rect.right)) {
            rect.right += scrollLeft * modifier;
        }
        return rect;
    }

    function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition) {
        if (fixedPosition === void 0) { fixedPosition = false; }
        var _a, _b, _c, _d, _e, _f;
        var isIE10 = isIE(10);
        var isHTML = parent.nodeName === 'HTML';
        var childrenRect = getBoundingClientRect(children);
        var parentRect = getBoundingClientRect(parent);
        var scrollParent = getScrollParent(children);
        var styles = getStyleComputedProperty(parent);
        var borderTopWidth = parseFloat(styles.borderTopWidth);
        var borderLeftWidth = parseFloat(styles.borderLeftWidth);
        // In cases where the parent is fixed, we must ignore negative scroll in offset calc
        if (fixedPosition && isHTML) {
            parentRect.top = Math.max((_a = parentRect.top) !== null && _a !== void 0 ? _a : 0, 0);
            parentRect.left = Math.max((_b = parentRect.left) !== null && _b !== void 0 ? _b : 0, 0);
        }
        var offsets = getClientRect({
            top: ((_c = childrenRect.top) !== null && _c !== void 0 ? _c : 0) - ((_d = parentRect.top) !== null && _d !== void 0 ? _d : 0) - borderTopWidth,
            left: ((_e = childrenRect.left) !== null && _e !== void 0 ? _e : 0) - ((_f = parentRect.left) !== null && _f !== void 0 ? _f : 0) - borderLeftWidth,
            width: childrenRect.width,
            height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0;
        // Subtract margins of documentElement in case it's being used as parent
        // we do this only on HTML because it's the only element that behaves
        // differently when margins are applied to it. The margins are included in
        // the box of the documentElement, in the other cases not.
        if (!isIE10 && isHTML) {
            var marginTop = parseFloat(styles.marginTop);
            var marginLeft = parseFloat(styles.marginLeft);
            if (isNumber(offsets.top)) {
                offsets.top -= borderTopWidth - marginTop;
            }
            if (isNumber(offsets.bottom)) {
                offsets.bottom -= borderTopWidth - marginTop;
            }
            if (isNumber(offsets.left)) {
                offsets.left -= borderLeftWidth - marginLeft;
            }
            if (isNumber(offsets.right)) {
                offsets.right -= borderLeftWidth - marginLeft;
            }
            // Attach marginTop and marginLeft because in some circumstances we may need them
            offsets.marginTop = marginTop;
            offsets.marginLeft = marginLeft;
        }
        if (isIE10 && !fixedPosition
            ? parent.contains(scrollParent)
            : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
            offsets = includeScroll(offsets, parent);
        }
        return offsets;
    }

    function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll) {
        if (excludeScroll === void 0) { excludeScroll = false; }
        var html = element.ownerDocument.documentElement;
        var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        var width = Math.max(html.clientWidth, window.innerWidth || 0);
        var height = Math.max(html.clientHeight, window.innerHeight || 0);
        var scrollTop = !excludeScroll ? getScroll(html) : 0;
        var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
        var offset = {
            top: scrollTop - Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.top) + Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.marginTop),
            left: scrollLeft - Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.left) + Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.marginLeft),
            width: width,
            height: height
        };
        return getClientRect(offset);
    }

    /**
     * Check if the given element is fixed or is inside a fixed parent
     */
    function isFixed(element) {
        var nodeName = element.nodeName;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
            return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
        }
        return isFixed(getParentNode(element));
    }

    function getBoundaries(target, host, padding, boundariesElement, fixedPosition) {
        if (padding === void 0) { padding = 0; }
        if (fixedPosition === void 0) { fixedPosition = false; }
        // NOTE: 1 DOM access here
        var boundaries = { top: 0, left: 0 };
        var offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
        // Handle viewport case
        if (boundariesElement === 'viewport') {
            boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
        }
        else {
            // Handle other cases based on DOM element used as boundaries
            var boundariesNode = void 0;
            if (boundariesElement === 'scrollParent') {
                boundariesNode = getScrollParent(getParentNode(host));
                if (boundariesNode.nodeName === 'BODY') {
                    boundariesNode = target.ownerDocument.documentElement;
                }
            }
            else if (boundariesElement === 'window') {
                boundariesNode = target.ownerDocument.documentElement;
            }
            else {
                boundariesNode = boundariesElement;
            }
            var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
            // In case of HTML, we need a different computation
            if (offsets && boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
                var _a = getWindowSizes(target.ownerDocument), height = _a.height, width = _a.width;
                if (isNumber(boundaries.top) && isNumber(offsets.top) && isNumber(offsets.marginTop)) {
                    boundaries.top += offsets.top - offsets.marginTop;
                }
                if (isNumber(boundaries.top)) {
                    boundaries.bottom = Number(height) + Number(offsets.top);
                }
                if (isNumber(boundaries.left) && isNumber(offsets.left) && isNumber(offsets.marginLeft)) {
                    boundaries.left += offsets.left - offsets.marginLeft;
                }
                if (isNumber(boundaries.top)) {
                    boundaries.right = Number(width) + Number(offsets.left);
                }
            }
            else if (offsets) {
                // for all the other DOM elements, this one is good
                boundaries = offsets;
            }
        }
        // Add paddings
        if (isNumber(boundaries.left)) {
            boundaries.left += padding;
        }
        if (isNumber(boundaries.top)) {
            boundaries.top += padding;
        }
        if (isNumber(boundaries.right)) {
            boundaries.right -= padding;
        }
        if (isNumber(boundaries.bottom)) {
            boundaries.bottom -= padding;
        }
        return boundaries;
    }

    /**
     * Utility used to transform the `auto` placement to the placement with more
     * available space.
     */
    function getArea(_e) {
        var width = _e.width, height = _e.height;
        return width * height;
    }
    function computeAutoPlacement(placement, refRect, target, host, allowedPositions, boundariesElement, padding) {
        if (allowedPositions === void 0) { allowedPositions = ['top', 'bottom', 'right', 'left']; }
        if (boundariesElement === void 0) { boundariesElement = 'viewport'; }
        if (padding === void 0) { padding = 0; }
        var _a, _b, _c, _d;
        if (placement.indexOf('auto') === -1) {
            return placement;
        }
        var boundaries = getBoundaries(target, host, padding, boundariesElement);
        var rects = {
            top: {
                width: (_a = boundaries.width) !== null && _a !== void 0 ? _a : 0,
                height: refRect.top && boundaries.top ? refRect.top - boundaries.top : 0
            },
            right: {
                width: boundaries.right && refRect.right ? boundaries.right - refRect.right : 0,
                height: (_b = boundaries.height) !== null && _b !== void 0 ? _b : 0
            },
            bottom: {
                width: (_c = boundaries.width) !== null && _c !== void 0 ? _c : 0,
                height: boundaries.bottom && refRect.bottom ? boundaries.bottom - refRect.bottom : 0
            },
            left: {
                width: refRect.left && boundaries.left ? refRect.left - boundaries.left : 0,
                height: (_d = boundaries.height) !== null && _d !== void 0 ? _d : 0
            }
        };
        var sortedAreas = Object.keys(rects)
            .map(function (key) { return (Object.assign(Object.assign({ key: key }, rects[key]), { area: getArea(rects[key]) })); })
            .sort(function (a, b) { return b.area - a.area; });
        var filteredAreas = sortedAreas.filter(function (_e) {
            var width = _e.width, height = _e.height;
            return width >= target.clientWidth
                && height >= target.clientHeight;
        });
        filteredAreas = filteredAreas.filter(function (position) {
            return allowedPositions
                .some(function (allowedPosition) {
                return allowedPosition === position.key;
            });
        });
        var computedPlacement = filteredAreas.length > 0
            ? filteredAreas[0].key
            : sortedAreas[0].key;
        var variation = placement.split(' ')[1];
        // for tooltip on auto position
        target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + (utils.getBsVer().isBs5 ? exports.PlacementForBs5[computedPlacement] : computedPlacement));
        return computedPlacement + (variation ? "-" + variation : '');
    }

    function getOffsets(data) {
        var _a, _b, _c, _d;
        return {
            width: data.offsets.target.width,
            height: data.offsets.target.height,
            left: Math.floor((_a = data.offsets.target.left) !== null && _a !== void 0 ? _a : 0),
            top: Math.round((_b = data.offsets.target.top) !== null && _b !== void 0 ? _b : 0),
            bottom: Math.round((_c = data.offsets.target.bottom) !== null && _c !== void 0 ? _c : 0),
            right: Math.floor((_d = data.offsets.target.right) !== null && _d !== void 0 ? _d : 0)
        };
    }

    /**
     * Get the opposite placement of the given one
     */
    function getOppositePlacement(placement) {
        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return placement.replace(/left|right|bottom|top/g, function (matched) { return hash[matched]; });
    }

    /**
     * Get the opposite placement variation of the given one
     */
    function getOppositeVariation(variation) {
        if (variation === 'right') {
            return 'left';
        }
        else if (variation === 'left') {
            return 'right';
        }
        return variation;
    }

    var parse = function (value, def) {
        if (def === void 0) { def = 0; }
        return value ? parseFloat(value) : def;
    };
    var ɵ0 = parse;
    function getOuterSizes(element) {
        var window = element.ownerDocument.defaultView;
        var styles = window === null || window === void 0 ? void 0 : window.getComputedStyle(element);
        var x = parse(styles === null || styles === void 0 ? void 0 : styles.marginTop) + parse(styles === null || styles === void 0 ? void 0 : styles.marginBottom);
        var y = parse(styles === null || styles === void 0 ? void 0 : styles.marginLeft) + parse(styles === null || styles === void 0 ? void 0 : styles.marginRight);
        return {
            width: Number(element.offsetWidth) + y,
            height: Number(element.offsetHeight) + x
        };
    }

    /**
     * Get offsets to the reference element
     */
    function getReferenceOffsets(target, host, fixedPosition) {
        var commonOffsetParent = fixedPosition
            ? getFixedPositionOffsetParent(target)
            : findCommonOffsetParent(target, host);
        return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
    }

    /**
     * Get offsets to the target
     */
    function getTargetOffsets(target, hostOffsets, position) {
        var _a, _b, _c;
        var placement = position.split(' ')[0];
        // Get target node sizes
        var targetRect = getOuterSizes(target);
        // Add position, width and height to our offsets object
        var targetOffsets = {
            width: targetRect.width,
            height: targetRect.height
        };
        // depending by the target placement we have to compute its offsets slightly differently
        var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
        var mainSide = isHoriz ? 'top' : 'left';
        var secondarySide = isHoriz ? 'left' : 'top';
        var measurement = isHoriz ? 'height' : 'width';
        var secondaryMeasurement = !isHoriz ? 'height' : 'width';
        targetOffsets[mainSide] =
            ((_a = hostOffsets[mainSide]) !== null && _a !== void 0 ? _a : 0) +
                hostOffsets[measurement] / 2 -
                targetRect[measurement] / 2;
        targetOffsets[secondarySide] = placement === secondarySide
            ? ((_b = hostOffsets[secondarySide]) !== null && _b !== void 0 ? _b : 0) - targetRect[secondaryMeasurement]
            : (_c = hostOffsets[getOppositePlacement(secondarySide)]) !== null && _c !== void 0 ? _c : 0;
        return targetOffsets;
    }

    function isModifierEnabled(options, modifierName) {
        var _a;
        return !!((_a = options.modifiers[modifierName]) === null || _a === void 0 ? void 0 : _a.enabled);
    }

    var availablePositions = {
        top: ['top', 'top start', 'top end'],
        bottom: ['bottom', 'bottom start', 'bottom end'],
        start: ['start', 'start top', 'start bottom'],
        end: ['end', 'end top', 'end bottom']
    };
    function checkPopoverMargin(placement, checkPosition) {
        if (!utils.getBsVer().isBs5) {
            return false;
        }
        return availablePositions[checkPosition].includes(placement);
    }
    function checkMargins(placement) {
        if (!utils.getBsVer().isBs5) {
            return '';
        }
        if (checkPopoverMargin(placement, 'end')) {
            return 'ms-2';
        }
        if (checkPopoverMargin(placement, 'start')) {
            return 'me-2';
        }
        if (checkPopoverMargin(placement, 'top')) {
            return 'mb-2';
        }
        if (checkPopoverMargin(placement, 'bottom')) {
            return 'mt-2';
        }
        return '';
    }

    function updateContainerClass(data, renderer) {
        var target = data.instance.target;
        var containerClass = target.className;
        var dataPlacement = utils.getBsVer().isBs5 ? exports.PlacementForBs5[data.placement] : data.placement;
        if (data.placementAuto) {
            containerClass = containerClass.replace(/bs-popover-auto/g, "bs-popover-" + dataPlacement);
            containerClass = containerClass.replace(/ms-2|me-2|mb-2|mt-2/g, '');
            containerClass = containerClass.replace(/bs-tooltip-auto/g, "bs-tooltip-" + dataPlacement);
            containerClass = containerClass.replace(/\sauto/g, " " + dataPlacement);
            if (containerClass.indexOf('popover') !== -1) {
                containerClass = containerClass + ' ' + checkMargins(dataPlacement);
            }
            if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
                containerClass += ' popover-auto';
            }
            if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
                containerClass += ' tooltip-auto';
            }
        }
        containerClass = containerClass.replace(/left|right|top|bottom|end|start/g, "" + dataPlacement.split(' ')[0]);
        if (renderer) {
            renderer.setAttribute(target, 'class', containerClass);
            return;
        }
        target.className = containerClass;
    }

    function setStyles(element, styles, renderer) {
        if (!element || !styles) {
            return;
        }
        Object.keys(styles).forEach(function (prop) {
            var unit = '';
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
                isNumeric(styles[prop])) {
                unit = 'px';
            }
            if (renderer) {
                renderer.setStyle(element, prop, "" + String(styles[prop]) + unit);
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            element.style[prop] = String(styles[prop]) + unit;
        });
    }

    function arrow(data) {
        var _g;
        var _a, _b, _c, _d, _e, _f;
        var targetOffsets = data.offsets.target;
        // if arrowElement is a string, suppose it's a CSS selector
        var arrowElement = data.instance.target.querySelector('.arrow');
        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) {
            return data;
        }
        var isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
        var len = isVertical ? 'height' : 'width';
        var sideCapitalized = isVertical ? 'Top' : 'Left';
        var side = sideCapitalized.toLowerCase();
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowElementSize = getOuterSizes(arrowElement)[len];
        var placementVariation = data.placement.split(' ')[1];
        // top/left side
        if (((_a = data.offsets.host[opSide]) !== null && _a !== void 0 ? _a : 0) - arrowElementSize < ((_b = targetOffsets[side]) !== null && _b !== void 0 ? _b : 0)) {
            (targetOffsets)[side] -=
                ((_c = targetOffsets[side]) !== null && _c !== void 0 ? _c : 0) - (((_d = data.offsets.host[opSide]) !== null && _d !== void 0 ? _d : 0) - arrowElementSize);
        }
        // bottom/right side
        if (Number((data).offsets.host[side]) + Number(arrowElementSize) > ((_e = targetOffsets[opSide]) !== null && _e !== void 0 ? _e : 0)) {
            (targetOffsets)[side] +=
                Number((data).offsets.host[side]) + Number(arrowElementSize) - Number((targetOffsets)[opSide]);
        }
        targetOffsets = getClientRect(targetOffsets);
        // Compute the sideValue using the updated target offsets
        // take target margin in account because we don't have this info available
        var css = getStyleComputedProperty(data.instance.target);
        var targetMarginSide = parseFloat(css["margin" + sideCapitalized]) || 0;
        var targetBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]) || 0;
        // compute center of the target
        var center;
        if (!placementVariation) {
            center = Number((data).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
        }
        else {
            var targetBorderRadius = parseFloat(css.borderRadius) || 0;
            var targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
            center = side === placementVariation ?
                Number((data).offsets.host[side]) + targetSideArrowOffset :
                Number((data).offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
        }
        var sideValue = center - ((_f = targetOffsets[side]) !== null && _f !== void 0 ? _f : 0) - targetMarginSide - targetBorderSide;
        // prevent arrowElement from being placed not contiguously to its target
        sideValue = Math.max(Math.min(targetOffsets[len] - (arrowElementSize + 5), sideValue), 0);
        data.offsets.arrow = (_g = {},
            _g[side] = Math.round(sideValue),
            _g[altSide] = '' // make sure to unset any eventual altSide value from the DOM node
        ,
            _g);
        data.instance.arrow = arrowElement;
        return data;
    }

    function flip(data) {
        data.offsets.target = getClientRect(data.offsets.target);
        if (!isModifierEnabled(data.options, 'flip')) {
            data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
            return data;
        }
        var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
        'viewport', false // positionFixed
        );
        var placement = data.placement.split(' ')[0];
        var variation = data.placement.split(' ')[1] || '';
        var offsetsHost = data.offsets.host;
        var target = data.instance.target;
        var host = data.instance.host;
        var adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
        var flipOrder = [placement, adaptivePosition];
        flipOrder.forEach(function (step, index) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            if (placement !== step || flipOrder.length === index + 1) {
                return;
            }
            placement = data.placement.split(' ')[0];
            // using floor because the host offsets may contain decimals we are not going to consider here
            var overlapsRef = (placement === 'left' &&
                Math.floor((_a = data.offsets.target.right) !== null && _a !== void 0 ? _a : 0) > Math.floor((_b = data.offsets.host.left) !== null && _b !== void 0 ? _b : 0)) ||
                (placement === 'right' &&
                    Math.floor((_c = data.offsets.target.left) !== null && _c !== void 0 ? _c : 0) < Math.floor((_d = data.offsets.host.right) !== null && _d !== void 0 ? _d : 0)) ||
                (placement === 'top' &&
                    Math.floor((_e = data.offsets.target.bottom) !== null && _e !== void 0 ? _e : 0) > Math.floor((_f = data.offsets.host.top) !== null && _f !== void 0 ? _f : 0)) ||
                (placement === 'bottom' &&
                    Math.floor((_g = data.offsets.target.top) !== null && _g !== void 0 ? _g : 0) < Math.floor((_h = data.offsets.host.bottom) !== null && _h !== void 0 ? _h : 0));
            var overflowsLeft = Math.floor((_j = data.offsets.target.left) !== null && _j !== void 0 ? _j : 0) < Math.floor((_k = boundaries.left) !== null && _k !== void 0 ? _k : 0);
            var overflowsRight = Math.floor((_l = data.offsets.target.right) !== null && _l !== void 0 ? _l : 0) > Math.floor((_m = boundaries.right) !== null && _m !== void 0 ? _m : 0);
            var overflowsTop = Math.floor((_o = data.offsets.target.top) !== null && _o !== void 0 ? _o : 0) < Math.floor((_p = boundaries.top) !== null && _p !== void 0 ? _p : 0);
            var overflowsBottom = Math.floor((_q = data.offsets.target.bottom) !== null && _q !== void 0 ? _q : 0) > Math.floor((_r = boundaries.bottom) !== null && _r !== void 0 ? _r : 0);
            var overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
                (placement === 'right' && overflowsRight) ||
                (placement === 'top' && overflowsTop) ||
                (placement === 'bottom' && overflowsBottom);
            // flip the variation if required
            var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
            var flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
                (isVertical && variation === 'right' && overflowsRight) ||
                (!isVertical && variation === 'left' && overflowsTop) ||
                (!isVertical && variation === 'right' && overflowsBottom));
            if (overlapsRef || overflowsBoundaries || flippedVariation) {
                if (overlapsRef || overflowsBoundaries) {
                    placement = flipOrder[index + 1];
                }
                if (flippedVariation) {
                    variation = getOppositeVariation(variation);
                }
                data.placement = placement + (variation ? " " + variation : '');
                data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
            }
        });
        return data;
    }

    function initData(targetElement, hostElement, position, options) {
        if (!targetElement || !hostElement) {
            return;
        }
        var hostElPosition = getReferenceOffsets(targetElement, hostElement);
        if (!position.match(/^(auto)*\s*(left|right|top|bottom|start|end)*$/)
            && !position.match(/^(left|right|top|bottom|start|end)*(?: (left|right|top|bottom|start|end))*$/)) {
            position = 'auto';
        }
        var placementAuto = !!position.match(/auto/g);
        // support old placements 'auto left|right|top|bottom'
        var placement = position.match(/auto\s(left|right|top|bottom|start|end)/)
            ? position.split(' ')[1] || 'auto'
            : position;
        // Normalize placements that have identical main placement and variation ("right right" => "right").
        var matches = placement.match(/^(left|right|top|bottom|start|end)* ?(?!\1)(left|right|top|bottom|start|end)?/);
        if (matches) {
            placement = matches[1] + (matches[2] ? " " + matches[2] : '');
        }
        // "left right", "top bottom" etc. placements also considered incorrect.
        if (['left right', 'right left', 'top bottom', 'bottom top'].indexOf(placement) !== -1) {
            placement = 'auto';
        }
        placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
        var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
        return {
            options: options || { modifiers: {} },
            instance: {
                target: targetElement,
                host: hostElement,
                arrow: void 0
            },
            offsets: {
                target: targetOffset,
                host: hostElPosition,
                arrow: void 0
            },
            positionFixed: false,
            placement: placement,
            placementAuto: placementAuto
        };
    }

    function preventOverflow(data) {
        var _a;
        if (!isModifierEnabled(data.options, 'preventOverflow')) {
            return data;
        }
        // NOTE: DOM access here
        // resets the target Offsets's position so that the document size can be calculated excluding
        // the size of the targetOffsets element itself
        var transformProp = 'transform';
        var targetStyles = data.instance.target.style; // assignment to help minification
        var _e = targetStyles, top = _e.top, left = _e.left, _f = transformProp, transform = _e[_f];
        targetStyles.top = '';
        targetStyles.left = '';
        targetStyles[transformProp] = '';
        var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
        ((_a = data.options.modifiers.preventOverflow) === null || _a === void 0 ? void 0 : _a.boundariesElement) || 'scrollParent', false // positionFixed
        );
        // NOTE: DOM access here
        // restores the original style properties after the offsets have been computed
        targetStyles.top = top;
        targetStyles.left = left;
        targetStyles[transformProp] = transform;
        var order = ['left', 'right', 'top', 'bottom'];
        var check = {
            primary: function (placement) {
                var _e;
                var _a, _b, _c, _d;
                var value = data.offsets.target[placement];
                // options.escapeWithReference
                if (((_a = data.offsets.target[placement]) !== null && _a !== void 0 ? _a : 0) < ((_b = boundaries[placement]) !== null && _b !== void 0 ? _b : 0)) {
                    value = Math.max((_c = data.offsets.target[placement]) !== null && _c !== void 0 ? _c : 0, (_d = boundaries[placement]) !== null && _d !== void 0 ? _d : 0);
                }
                return _e = {}, _e[placement] = value, _e;
            },
            secondary: function (placement) {
                var _e;
                var _a, _b, _c, _d;
                var mainSide = placement === 'right' ? 'left' : 'top';
                var value = data.offsets.target[mainSide];
                // escapeWithReference
                if (((_a = data.offsets.target[placement]) !== null && _a !== void 0 ? _a : 0) < ((_b = boundaries[placement]) !== null && _b !== void 0 ? _b : 0)) {
                    value = Math.min((_c = data.offsets.target[mainSide]) !== null && _c !== void 0 ? _c : 0, ((_d = boundaries[placement]) !== null && _d !== void 0 ? _d : 0) -
                        (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
                }
                return _e = {}, _e[mainSide] = value, _e;
            }
        };
        order.forEach(function (placement) {
            var side = ['left', 'top', 'start'].indexOf(placement) !== -1 ? check['primary'] : check['secondary'];
            data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), side(placement));
        });
        return data;
    }

    function shift(data) {
        var _b, _c, _d;
        var _a;
        var placement = data.placement;
        var basePlacement = placement.split(' ')[0];
        var shiftVariation = placement.split(' ')[1];
        if (shiftVariation) {
            var _e = data.offsets, host = _e.host, target = _e.target;
            var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
            var side = isVertical ? 'left' : 'top';
            var measurement = isVertical ? 'width' : 'height';
            var shiftOffsets = {
                start: (_b = {}, _b[side] = host[side], _b),
                end: (_c = {},
                    _c[side] = ((_a = host[side]) !== null && _a !== void 0 ? _a : 0) + host[measurement] - target[measurement],
                    _c)
            };
            data.offsets.target = Object.assign(Object.assign({}, target), (_d = {},
                _d[side] = (side === shiftVariation ? shiftOffsets.start[side] : shiftOffsets.end[side]),
                _d));
        }
        return data;
    }

    var Positioning = /** @class */ (function () {
        function Positioning() {
        }
        Positioning.prototype.position = function (hostElement, targetElement /*, round = true*/) {
            return this.offset(hostElement, targetElement /*, false*/);
        };
        Positioning.prototype.offset = function (hostElement, targetElement /*, round = true*/) {
            return getReferenceOffsets(targetElement, hostElement);
        };
        Positioning.prototype.positionElements = function (hostElement, targetElement, position, appendToBody, options) {
            var chainOfModifiers = [flip, shift, preventOverflow, arrow];
            var _position = MapPlacementInToRL[position];
            var data = initData(targetElement, hostElement, _position, options);
            if (!data) {
                return;
            }
            return chainOfModifiers.reduce(function (modifiedData, modifier) { return modifier(modifiedData); }, data);
        };
        return Positioning;
    }());
    var positionService = new Positioning();
    function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
        var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
        if (!data) {
            return;
        }
        var offsets = getOffsets(data);
        setStyles(targetElement, {
            'will-change': 'transform',
            top: '0px',
            left: '0px',
            transform: "translate3d(" + offsets.left + "px, " + offsets.top + "px, 0px)"
        }, renderer);
        if (data.instance.arrow) {
            setStyles(data.instance.arrow, data.offsets.arrow, renderer);
        }
        updateContainerClass(data, renderer);
    }

    var PositioningService = /** @class */ (function () {
        function PositioningService(ngZone, rendererFactory, platformId) {
            var _this = this;
            this.update$$ = new rxjs.Subject();
            this.positionElements = new Map();
            this.isDisabled = false;
            if (common.isPlatformBrowser(platformId)) {
                ngZone.runOutsideAngular(function () {
                    _this.triggerEvent$ = rxjs.merge(rxjs.fromEvent(window, 'scroll', { passive: true }), rxjs.fromEvent(window, 'resize', { passive: true }), rxjs.of(0, rxjs.animationFrameScheduler), _this.update$$);
                    _this.triggerEvent$.subscribe(function () {
                        if (_this.isDisabled) {
                            return;
                        }
                        _this.positionElements
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            .forEach(function (positionElement) {
                            positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this.options, rendererFactory.createRenderer(null, null));
                        });
                    });
                });
            }
        }
        PositioningService.prototype.position = function (options) {
            this.addPositionElement(options);
        };
        Object.defineProperty(PositioningService.prototype, "event$", {
            get: function () {
                return this.triggerEvent$;
            },
            enumerable: false,
            configurable: true
        });
        PositioningService.prototype.disable = function () {
            this.isDisabled = true;
        };
        PositioningService.prototype.enable = function () {
            this.isDisabled = false;
        };
        PositioningService.prototype.addPositionElement = function (options) {
            this.positionElements.set(_getHtmlElement(options.element), options);
        };
        PositioningService.prototype.calcPosition = function () {
            this.update$$.next();
        };
        PositioningService.prototype.deletePositionElement = function (elRef) {
            this.positionElements.delete(_getHtmlElement(elRef));
        };
        PositioningService.prototype.setOptions = function (options) {
            this.options = options;
        };
        return PositioningService;
    }());
    PositioningService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PositioningService_Factory() { return new PositioningService(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: PositioningService, providedIn: "root" });
    PositioningService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    PositioningService.ctorParameters = function () { return [
        { type: i0.NgZone },
        { type: i0.RendererFactory2 },
        { type: Number, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
    ]; };
    function _getHtmlElement(element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof i0.ElementRef) {
            return element.nativeElement;
        }
        return element !== null && element !== void 0 ? element : null;
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Positioning = Positioning;
    exports.PositioningService = PositioningService;
    exports.checkMargins = checkMargins;
    exports.positionElements = positionElements;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-positioning.umd.js.map
