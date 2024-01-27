"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersectionObserver = void 0;
const react_1 = require("react");
const useIntersectionObserver = () => {
    const observerRef = (0, react_1.useRef)(null);
    const observeNode = (e) => observerRef.current.observe(e);
    const disconnect = () => observerRef.current.disconnect();
    const handleRef = (0, react_1.useCallback)((element) => {
        if (!element) {
            throw new Error("❌ The element is invalid");
        }
        observeNode(element);
    }, []);
    const observe = (callback, options) => {
        observerRef.current = new IntersectionObserver(callback, options);
        return handleRef;
    };
    return { observe, disconnect };
};
exports.useIntersectionObserver = useIntersectionObserver;
