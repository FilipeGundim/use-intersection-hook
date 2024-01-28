import { useRef, useCallback } from "react";
export const useIntersectionObserver = () => {
    const observerRef = useRef(null);
    const observeNode = (e) => observerRef.current.observe(e);
    const disconnect = () => observerRef.current.disconnect();
    const handleRef = useCallback((element) => {
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
