"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useIntersectionObserver = () => {
    const observerRef = (0, react_1.useRef)();
    const observeNode = (element) => { var _a; return (_a = observerRef.current) === null || _a === void 0 ? void 0 : _a.observe(element); };
    const disconnectObserver = () => { var _a; return (_a = observerRef.current) === null || _a === void 0 ? void 0 : _a.disconnect(); };
    const handleRef = (0, react_1.useCallback)((element) => {
        if (!element) {
            return;
        }
        observeNode(element);
    }, []);
    const createObserverRef = (callback, options) => {
        observerRef.current = new IntersectionObserver(callback, options);
        return handleRef;
    };
    return { createObserverRef, disconnectObserver };
};
exports.default = useIntersectionObserver;
