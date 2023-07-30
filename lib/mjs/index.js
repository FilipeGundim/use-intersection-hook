import { useRef, useCallback } from "react";
export const useIntersectionObserver = () => {
    const observerRef = useRef();
    const observeNode = (element) => { var _a; return (_a = observerRef.current) === null || _a === void 0 ? void 0 : _a.observe(element); };
    const disconnectObserver = () => { var _a; return (_a = observerRef.current) === null || _a === void 0 ? void 0 : _a.disconnect(); };
    const handleRef = useCallback((element) => {
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
