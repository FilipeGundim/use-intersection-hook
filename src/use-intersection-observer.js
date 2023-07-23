import { useRef, useCallback } from "react";

export const useIntersectionObserver = () => {
  const observerRef = useRef();

  const observeNode = (node) => observerRef.current?.observe(node);

  const disconnectObserver = () => observerRef.current?.disconnect();

  const handleRef = useCallback((node) => {
    if (!node) {
      return;
    }
    observeNode(node);
  }, []);

  const createObserverRef = (callback, options) => {
    const observer = new IntersectionObserver(callback, options);
    observerRef.current = observer;

    return handleRef;
  };

  return { createObserverRef, disconnectObserver };
};


