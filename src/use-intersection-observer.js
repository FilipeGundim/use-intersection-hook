import { useRef, useCallback } from "react";

export const useIntersectionObserver = (callback) => {
  const observerRef = useRef();

  const observeNode = (node) => observerRef.current?.observe(node);

  const disconnectObserver = () => observerRef.current?.disconnect();

  const handleRef = useCallback((node) => {
    if (!node) {
      return;
    }
    observeNode(node);
  }, []);

  const createObserverRef = () => {
    const observer = new IntersectionObserver(callback);
    observerRef.current = observer;

    return handleRef;
  };

  return { createObserverRef, disconnectObserver };
};


