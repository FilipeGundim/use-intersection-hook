"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useIntersectionObserver = () => {
    const observerRef = (0, react_1.useRef)();
    const observeNode = (element) => observerRef.current?.observe(element);
    const disconnectObserver = () => observerRef.current?.disconnect();
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
